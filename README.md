# TechTrove 2.0 Landing (Vite + React)

Landing site for the Cyber Circuit Club ADP TechTrove 2.0 hackathon.

## Requirements

- Node.js 18+
- npm

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Environment Variables

Create `.env.local` with your Supabase values:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

## Build & Deploy

```bash
npm run build
netlify deploy --prod
```

Ensure Netlify environment variables match `.env.local`.

## Tech Stack

- Vite + React + TypeScript
- shadcn/ui + Tailwind CSS
- Supabase (auth & data)
