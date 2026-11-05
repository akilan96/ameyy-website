// Comprehensive Career Application Backend Handler with Strict Validation
const MAX_RESUME_BYTES = 2 * 1024 * 1024; // 2 MB
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const NAME_REGEX = /^[\p{L}\p{M}\s.'-]+$/u;
const FILENAME_REGEX = /^[\w,\-.() ]+\.(pdf|doc|docx)$/i;

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function verifyMagicBytes(buffer, contentType) {
  if (!buffer || buffer.length < 4) return false;
  // PDF starts with %PDF (0x25, 0x50, 0x44, 0x46)
  if (contentType === 'application/pdf') {
    return buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46;
  }
  // Word DOC starts with 0xD0, 0xCF, 0x11, 0xE0 (OLE CFB)
  if (contentType === 'application/msword') {
    return buffer[0] === 0xd0 && buffer[1] === 0xcf && buffer[2] === 0x11 && buffer[3] === 0xe0;
  }
  // Word DOCX starts with PK zip header 0x50, 0x4B, 0x03, 0x04
  if (contentType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    return buffer[0] === 0x50 && buffer[1] === 0x4b && (buffer[2] === 0x03 || buffer[2] === 0x05 || buffer[2] === 0x07);
  }
  return true;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed. Only POST is accepted.' });
  }

  const { RESEND_API_KEY, CAREERS_EMAIL, FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CAREERS_EMAIL || !FROM_EMAIL) {
    return response.status(503).json({ error: 'The career application service is currently unconfigured. Please email us directly.' });
  }

  const body = request.body;
  if (!body || typeof body !== 'object') {
    return response.status(400).json({ error: 'Invalid request body. Expected JSON payload.' });
  }

  const rawName = typeof body.name === 'string' ? body.name.trim() : '';
  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const rawRole = typeof body.role === 'string' ? body.role.trim() : '';
  const rawMessage = typeof body.message === 'string' ? body.message.trim() : '';
  const resume = body.resume;

  // 1. Name validation
  if (!rawName) {
    return response.status(400).json({ error: 'Name is required. Please provide your full name.' });
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

  // 3. Role validation
  if (!rawRole) {
    return response.status(400).json({ error: 'Please select an area of interest or role.' });
  }
  if (rawRole.length < 2 || rawRole.length > 100) {
    return response.status(400).json({ error: 'Invalid role selection.' });
  }

  // 4. Message validation (optional, but bounded if provided)
  if (rawMessage.length > 3000) {
    return response.status(400).json({ error: 'Note exceeds the maximum length of 3,000 characters.' });
  }

  // 5. Resume validation
  if (!resume || typeof resume !== 'object') {
    return response.status(400).json({ error: 'Please attach your resume file (PDF or Word document).' });
  }

  const rawFilename = typeof resume.filename === 'string' ? resume.filename.trim() : '';
  const rawContentType = typeof resume.contentType === 'string' ? resume.contentType.trim().toLowerCase() : '';
  const rawContent = typeof resume.content === 'string' ? resume.content.trim() : '';

  if (!rawFilename || !rawContent || !rawContentType) {
    return response.status(400).json({ error: 'Resume payload is incomplete. Please select a valid document file.' });
  }

  if (!ALLOWED_TYPES.has(rawContentType)) {
    return response.status(400).json({ error: 'Invalid file format. Resume must be a PDF or Microsoft Word document (.pdf, .doc, .docx).' });
  }

  if (!FILENAME_REGEX.test(rawFilename)) {
    return response.status(400).json({ error: 'Invalid file name. The file name must end with .pdf, .doc, or .docx and not contain special symbols.' });
  }

  let buffer;
  try {
    buffer = Buffer.from(rawContent, 'base64');
  } catch {
    return response.status(400).json({ error: 'The resume file content is corrupted or invalid base64 encoding.' });
  }

  if (!buffer || buffer.length < 50) {
    return response.status(400).json({ error: 'The uploaded file appears to be empty or corrupted.' });
  }

  if (buffer.length > MAX_RESUME_BYTES) {
    return response.status(400).json({ error: `The resume file size (${(buffer.length / (1024 * 1024)).toFixed(1)} MB) exceeds the 2 MB limit.` });
  }

  if (!verifyMagicBytes(buffer, rawContentType)) {
    return response.status(400).json({ error: 'File content does not match its claimed document format. Please upload a genuine PDF or Word document.' });
  }

  // Sanitized values
  const cleanName = rawName.replace(/[\r\n\0]/g, ' ').slice(0, 80);
  const cleanEmail = rawEmail.replace(/[\r\n\0]/g, '').slice(0, 150);
  const cleanRole = rawRole.replace(/[\r\n\0]/g, ' ').slice(0, 100);
  const cleanMessage = rawMessage.replace(/\0/g, '').slice(0, 3000) || 'No note included.';
  const cleanFilename = rawFilename.replace(/[^a-zA-Z0-9._\- ]/g, '_').slice(0, 120);

  const attachment = {
    filename: cleanFilename,
    content: buffer.toString('base64'),
    content_type: rawContentType,
  };

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [CAREERS_EMAIL],
        reply_to: cleanEmail,
        subject: `[Career Application] ${cleanName} — ${cleanRole}`,
        text: `Applicant Name: ${cleanName}\nEmail: ${cleanEmail}\nArea of Interest / Role: ${cleanRole}\n\nNote:\n${cleanMessage}\n\nResume attached: ${cleanFilename} (${(buffer.length / 1024).toFixed(1)} KB)\n\n---\nSubmitted via Ameyy Digital Services Careers`,
        attachments: [attachment],
      }),
    });

    if (!result.ok) {
      const errText = await result.text();
      console.error('Resend career application email failed:', errText);
      return response.status(502).json({ error: 'We could not submit your application right now due to a service error. Please try again later.' });
    }

    return response.status(200).json({ ok: true, message: 'Your application has been received successfully. We look forward to reviewing it!' });
  } catch (err) {
    console.error('Apply handler unexpected error:', err);
    return response.status(500).json({ error: 'An unexpected internal error occurred. Please try again later.' });
  }
}
