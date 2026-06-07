# Rigpa landing page

A single-page Next.js site built from the supplied reference HTML.

## Editing the site

Most public copy and identity details are centralized in `content/site.ts`.
Change the name, email, company details, profile data, and page copy there.
The optional `profile` field is reserved for the later independent-practice
version and is intentionally not rendered while it is `null`.

Colors, typography, spacing, and responsive behavior live in
`styles/globals.css`. Page composition is in `app/page.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

No analytics, trackers, embeds, or other third-party scripts are included.

## Deployment

The site is deployed as a standard Next.js application on Vercel.
