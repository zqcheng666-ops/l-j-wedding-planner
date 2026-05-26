# L&J Wedding Planner

High-end one-page wedding planning website for Germany and Europe, built with Next.js App Router, TypeScript and Tailwind CSS.

## Features

- One-page landing page with separate `Impressum` and `Datenschutz` pages
- German, Chinese and English language switching
- Default language: German
- Responsive layout for mobile, tablet and desktop
- Centralized i18n copy in `src/i18n/dictionaries.ts`
- Contact form with `/api/contact`
- Resend email delivery using server-side environment variables
- Honeypot anti-spam field and GDPR consent checkbox
- Replaceable placeholder images in `public/images`

## Install

```bash
npm install
```

## Environment

Create `.env.local` from `.env.example`:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

`CONTACT_TO_EMAIL` is the inbox that receives inquiries.

`CONTACT_FROM_EMAIL` must be a sender address that is allowed in your Resend account. For production, use a verified domain sender such as:

```bash
CONTACT_FROM_EMAIL="L&J Wedding Planner <hello@your-domain.com>"
```

## Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Language routes:

- German: `/`
- Chinese: `/zh`
- English: `/en`

Legal routes:

- German: `/impressum`, `/datenschutz`
- Chinese: `/zh/impressum`, `/zh/datenschutz`
- English: `/en/impressum`, `/en/datenschutz`

## Build

```bash
npm run build
npm run start
```

## Edit Copy

All public-facing website copy is in:

```text
src/i18n/dictionaries.ts
```

Update German, Chinese and English entries there to keep the site maintainable.

## Replace Images

Placeholder images are stored in:

```text
public/images
```

Keep the same filenames to replace them without changing code:

- `hero-wedding.jpg`
- `castle-ceremony.jpg`
- `manor-dinner.jpg`
- `bridal-details.jpg`
- `lakeside-vows.jpg`
- `table-design.jpg`
- `visual-story.jpg`

## Deploy to Netlify

The project includes `netlify.toml` with the required Next.js build settings:

```toml
[build]
command = "npm run build"
publish = ".next"
```

Recommended Netlify flow:

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site** > **Import an existing project**.
3. Connect the GitHub repository.
4. Confirm the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add production environment variables in Netlify:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
6. Deploy the site.
7. Add your custom domain in Netlify under **Domain management**.

Before going live:

- Add the three environment variables in the hosting dashboard
- Verify the sender domain in Resend
- Replace legal-page placeholders with final business details
- Review `Impressum` and `Datenschutz` with a qualified legal professional
