# Portfolio

Personal developer portfolio site, built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

> **Note:** This README is based on the project's confirmed configuration (`package.json`, tooling, folder structure). I didn't have visibility into the actual page content under `app/` and `components/` — replace the placeholder sections below with what your site actually shows (About, Projects, Experience, Contact, etc.), or send me the content and I'll fill it in properly.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [lucide-react](https://lucide.dev)
- **Language:** TypeScript
- **Linting:** ESLint 9 (`eslint-config-next`)
- **Fonts:** [Geist](https://vercel.com/font) via `next/font`

## Project Structure

```
portfolio/
├── app/            # Next.js App Router pages, layouts, and routes
├── components/     # Reusable UI components
├── public/         # Static assets (images, icons, etc.)
├── AGENTS.md        # Notes for AI coding agents (Next 16 breaking changes vs. training data)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

> ⚠️ **Working with AI coding assistants:** this project is on Next.js 16, which has API and file-structure changes that may differ from what a model was trained on. `AGENTS.md` (also referenced by `CLAUDE.md`) flags this explicitly — check `node_modules/next/dist/docs/` for the current APIs before generating code against this repo.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
# or: yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page auto-updates as you edit files under `app/`.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Deployment

Check out the deployed site [Here](https://jdrainford.me).
