# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio SPA for Leonardo Barony (Data Engineer · Power BI Tech Leader), replacing a static PDF résumé with an interactive web experience. Hosted on Vercel with automatic deploys on `git push main`.

**Owner:** Leonardo Barony — leonardobarony@gmail.com  
**Source of truth:** `prd.md` in the project root.

---

## Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animation | Framer Motion | latest |
| Icons | Lucide React | latest |
| Theme | next-themes | latest |
| Hosting | Vercel | — |

**No database, no CMS, no backend.** All content is static TypeScript in `/data`.

---

## Commands

```bash
npm run dev       # dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint (next/core-web-vitals + next/typescript)
vercel --prod     # manual production deploy via CLI
```

No test suite exists — lint and `npm run build` are the only automated checks.

---

## Architecture

### Server vs Client Components

`app/layout.tsx` and `app/page.tsx` are Server Components. Sections that use Framer Motion animations or browser APIs (IntersectionObserver) declare `"use client"` at the top. Keep server/client split intentional — do not add `"use client"` to a component unless it genuinely needs browser APIs.

### Path Alias

`@/` resolves to the project root (configured in `tsconfig.json`). Use `@/components/...`, `@/data/...`, etc.

### Tailwind Custom Utilities

Design tokens are registered as real Tailwind color and font utilities in `tailwind.config.ts` — **not** raw CSS variable references. Use the class names directly:

| Tailwind class | Purpose |
|---|---|
| `bg-bg-primary` | Main background `#0A0E1A` |
| `bg-bg-card` | Cards and alternating sections |
| `text-accent` / `bg-accent` | CTAs, active badges `#00C4CC` |
| `hover:bg-accent-hover` | Button hover state |
| `text-text-primary` | Headings and body |
| `text-text-muted` | Subtitles and metadata |
| `border-border` | Card borders |
| `font-inter` | Display / body font |
| `font-jetbrains` | Monospace — tech names, skill badges, dates |

Fonts are loaded via `@fontsource` npm packages imported directly in `app/layout.tsx` (not via `next/font`).

### Adding a New Section

Three files must change together:
1. Create `components/sections/NewSection.tsx` with a root element that has `id="new-section"`.
2. Import and render it in `app/page.tsx`.
3. Add `{ label: "...", href: "#new-section" }` to the `links` array in `components/layout/Navbar.tsx`.

---

## Code Conventions

- **Components:** PascalCase filenames and exports
- **Data files:** camelCase filenames, typed exports
- **Styling:** Tailwind classes only — no CSS Modules, no inline `style={}` except for CSS custom properties
- **TypeScript:** `strict: true`, no `any`
- **UI components:** zero business logic — props in, JSX out

---

## Content Update Flow

Editing content never requires touching component code:

1. Edit the relevant file in `/data/*.ts`
2. `git add . && git commit -m "feat: <description>" && git push`
3. Vercel auto-deploys within ~30 seconds

---

## Performance & SEO Targets

- SSG only — no `getServerSideProps`, no API routes
- Images via `next/image`
- Lighthouse ≥ 90 across all categories
- `<title>`: `Leonardo Barony | Data Engineer & Power BI Tech Leader`
- Open Graph metadata configured in `app/layout.tsx`; canonical URL is `https://leonardobarony.dev`

---

## Out of Scope (v1.0)

Do not implement: blog, contact form with backend, authentication, CMS, light mode, analytics, or i18n.

---

## Pending Before Go-Live

- [ ] `og-image.png` in `/public` (1200×630)
- [ ] DP-600 certification entry in `/data/certifications.ts` (once obtained)
- [ ] Custom domain configured in Vercel (`leonardobarony.dev`)
