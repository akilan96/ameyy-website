// Comprehensive Contact Form Backend Handler with Strict Validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const NAME_REGEX = /^[\p{L}\p{M}\s.'-]+$/u;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed. Only POST is accepted.' });
  }

  
  const { RESEND_API_KEY, CONTACT_EMAIL, FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !FROM_EMAIL) {
    return response.status(503).json({ error: 'The contact service is currently unconfigured. Please email us directly.' });
  }

  const body = request.body;
  if (!body || typeof body !== 'object') {
    return response.status(400).json({ error: 'Invalid request body. Expected JSON payload.' });
  }

  const rawName = typeof body.name === 'string' ? body.name.trim() : '';
  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const rawInterest = typeof body.interest === 'string' ? body.interest.trim() : '';
  const rawMessage = typeof body.message === 'string' ? body.message.trim() : '';

  // 1. Name validation
  if (!rawName) {
    return response.status(400).json({ error: 'Name is required. Please enter your name.' });
  }
  if (rawName.length < 2) {
    return response.status(400).json({ error: 'Name must be at least 2 characters long.' });
  }
  if (rawName.length > 80) {
    return response.status(400).json({ error: 'Name cannot exceed 80 characters.' });
  }
  if (!NAME_REGEX.test(rawName)) {
    return response.status(400).json({ error: 'Please enter a valid name containing letters and standard punctuation.' });
  }

  // 2. Email validation
  if (!rawEmail) {
    return response.status(400).json({ error: 'Email address is required.' });
  }
  if (rawEmail.length < 5 || rawEmail.length > 150) {
    return response.status(400).json({ error: 'Email address must be between 5 and 150 characters.' });
  }
  if (!EMAIL_REGEX.test(rawEmail)) {
    return response.status(400).json({ error: 'Please provide a valid email address (e.g. yourname@domain.com).' });
  }

  // 3. Interest validation
  if (!rawInterest) {
    return response.status(400).json({ error: 'Please choose a product or service of interest.' });
  }
  if (rawInterest.length < 2 || rawInterest.length > 120) {
    return response.status(400).json({ error: 'Invalid product or service selection.' });
  }

  // 4. Message validation
  if (!rawMessage) {
    return response.status(400).json({ error: 'Message is required. Please tell us about your project or enquiry.' });
  }
  if (rawMessage.length < 10) {
    return response.status(400).json({ error: `Message is too short (${rawMessage.length} characters). Please write at least 10 characters.` });
  }
  if (rawMessage.length > 3000) {
    return response.status(400).json({ error: `Message is too long (${rawMessage.length} characters). Maximum allowed is 3,000 characters.` });
  }

  // Sanitized strings for email dispatch
  const cleanName = rawName.replace(/[\r\n\0]/g, ' ').slice(0, 80);
  const cleanEmail = rawEmail.replace(/[\r\n\0]/g, '').slice(0, 150);
  const cleanInterest = rawInterest.replace(/[\r\n\0]/g, ' ').slice(0, 120);
  const cleanMessage = rawMessage.replace(/\0/g, '').slice(0, 3000);

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: cleanEmail,
        subject: `[Ameyy Web Enquiry] ${cleanName} — ${cleanInterest}`,
        text: `Customer Name: ${cleanName}\nCustomer Email: ${cleanEmail}\nSelected Product/Service: ${cleanInterest}\n\nMessage Details:\n${cleanMessage}\n\n---\nSent via Ameyy Digital Services Official Web Portal`,
      }),
    });

    if (!result.ok) {
      const errText = await result.text();
      console.error('Resend contact email error:', errText);
      return response.status(502).json({ error: 'We could not send your message right now due to a service error. Please try again later.' });
    }

    return response.status(200).json({ ok: true, message: 'Your enquiry has been received successfully. We will get in touch shortly.' });
  } catch (err) {
    console.error('Contact handler unexpected error:', err);
    return response.status(500).json({ error: 'An unexpected internal error occurred. Please try again later.' });
  }
}
