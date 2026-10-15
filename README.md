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

## Plan API

The pricing page loads current plans from the Node backend's public
`GET /api/v1/plans` endpoint. The homepage pricing cards use the same catalog
through the website's `GET /api/plans` route. Requests are uncached, and failed
requests show a retry option instead of placeholder prices.

The default is the production API used by the mobile app. To use another
deployment, copy `.env.example` to `.env.local` and set `BACKEND_API_URL` to the
backend API base, including `/api/v1`. For a local Node_Backend server, use
`http://127.0.0.1:5000/api/v1`. Restart Next.js after changing this setting.

Prices arrive in paise and are converted to rupees for display. Yearly pricing
shows `yearlyAmount / 12` as the monthly equivalent, with the full annual total
underneath. A zero paid amount means that billing
cycle is unavailable. Allowances of `-1` are displayed as unlimited. Features,
languages, limits, active plans, and their order all come from the API.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
