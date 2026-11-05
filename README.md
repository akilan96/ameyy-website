# Ameyy Digital Services

React + Vite company website, ready to deploy to Vercel. The site includes Home, Products, About, Career, and Contact sections. Career applications and contact enquiries are sent using Vercel serverless functions and Resend.

## Run locally

```bash
npm install
npm run dev
```

The Vite dev server serves the site, but it does not execute the `/api` functions. To try the forms locally, install the Vercel CLI and use `vercel dev` after setting the environment variables below.

## Email setup

1. Create a Resend account and verify the domain you want to send from.
2. Copy `.env.example` to `.env` and set the values below.
3. Add the same values in **Vercel → Project → Settings → Environment Variables** before deployment.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key used by both forms |
| `FROM_EMAIL` | Sender address on a domain verified in Resend |
| `CAREERS_EMAIL` | Inbox that receives applications with resume attachments |
| `CONTACT_EMAIL` | Inbox that receives website enquiries |

The resume form accepts PDF and Word documents up to 2 MB. The API checks the file type and size before emailing it as an attachment. The contact form sends a notification to `CONTACT_EMAIL`.

## Deploy

Import this repository in Vercel. Vercel detects Vite and builds with `npm run build`, publishing `dist`. Add the email environment variables before deploying so the forms can send messages.
