This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Substack blog integration
-------------------------

To enable the Substack-powered blog pages, set the environment variable `NEXT_PUBLIC_SUBSTACK_FEED` to your Substack RSS feed URL. Example:

```
NEXT_PUBLIC_SUBSTACK_FEED=https://your-subdomain.substack.com/feed
```

The app provides:
- `/blog` — lists posts from the Substack feed
- `/blog/[slug]` — reads the post content (falls back to the excerpt if full content isn't available)

Notes:
- The feed is fetched server-side and revalidated every 60s (see `lib/substack.ts`).
- No extra dependencies are required — the feed is parsed with a lightweight XML extraction.

Substack API (optional)
------------------------

If you have access to a Substack server-side API (or your Substack host provides an API with an API key), you can configure the app to prefer the API over RSS, which often returns richer HTML content.

Set these environment variables on your server or in `.env.local` (do NOT commit secrets):

SUBSTACK_API_BASE=https://your-subdomain.substack.com
SUBSTACK_API_KEY=sk_live_xxx

When present, the app will attempt to fetch posts from the API and fall back to the RSS feed if the API call fails.
