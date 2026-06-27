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
npm run lint      # ESLint
vercel --prod     # manual production deploy via CLI
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — meta tags, fonts (Inter + JetBrains Mono), providers
│   ├── page.tsx            # Single page — renders all sections in order
│   └── globals.css         # CSS custom properties (design tokens) and global resets
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav with scroll-spy anchor links; hamburger on mobile
│   │   └── Footer.tsx
│   ├── sections/           # One component per page section
│   │   ├── Hero.tsx        # Photo, title, tagline, CTA buttons (LinkedIn, GitHub, CV download)
│   │   ├── About.tsx       # Professional summary with 15+ years / 6+ years callouts
│   │   ├── Skills.tsx      # Grid of skill categories from /data/skills.ts
│   │   ├── Experience.tsx  # Vertical timeline from /data/experience.ts
│   │   ├── Certifications.tsx  # Two plain-text lists (no cards, no external links)
│   │   └── Projects.tsx    # ProjectCard grid from /data/projects.ts
│   └── ui/
│       ├── SkillBadge.tsx
│       ├── CertCard.tsx
│       └── ProjectCard.tsx
├── data/                   # ALL editable content lives here
│   ├── profile.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── certifications.ts
│   └── projects.ts         # Full typed example in prd.md §4.6
└── public/
    ├── avatar.jpg           # Profile photo (already present)
    ├── cv-leonardo-barony.pdf
    └── og-image.png
```

---

## Code Conventions

- **Components:** PascalCase filenames and exports
- **Data files:** camelCase filenames, typed exports
- **Styling:** Tailwind classes only — no CSS Modules, no inline `style={}` except for CSS variables
- **TypeScript:** `strict: true`, no `any`
- **UI components:** zero business logic — they receive typed props and render, nothing else
- **Content updates:** edit a file in `/data`, `git push` — Vercel deploys automatically

---

## Design Tokens

Defined as CSS custom properties in `app/globals.css` and referenced via Tailwind:

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0A0E1A` | Main background |
| `--bg-card` | `#111827` | Cards and alternating sections |
| `--accent` | `#00C4CC` | CTAs, active badges, links |
| `--accent-hover` | `#00A3AA` | Button/link hover state |
| `--text-primary` | `#F9FAFB` | Headings and body text |
| `--text-muted` | `#9CA3AF` | Subtitles and metadata |
| `--border` | `#1F2937` | Card borders |

**Fonts:** `Inter` (display 700 / body 400–500) + `JetBrains Mono` (tech names, skill badges, dates). Load via `next/font`.

---

## SPA Sections (in page order)

1. **Hero** — name, title (`Data Engineer | Python · PySpark · Microsoft Fabric | Power BI Tech Leader`), tagline, LinkedIn / GitHub / CV buttons
2. **About** — 15+ years in tech, 6+ in Data Engineering; FUMEC telecom degree; IGTI post-grad
3. **Skills** — categorized grid (see `prd.md §4.3` for full list)
4. **Experience** — vertical timeline (8 roles from 2004 to present; see `prd.md §4.4`)
5. **Certifications** — two plain text lists: Certifications block + Courses block (no links, no cards)
6. **Projects** — card grid with typed `ProjectType`: `"Relatório" | "App" | "Open Source"`

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
- Open Graph image at `/public/og-image.png`
- Sitemap via `next-sitemap`

---

## Out of Scope (v1.0)

Do not implement: blog, contact form with backend, authentication, CMS, light mode, analytics, or i18n.

---

## Pending Before Go-Live

- [ ] `cv-leonardo-barony.pdf` in `/public`
- [ ] `og-image.png` in `/public`
- [ ] DP-600 certification entry in `/data/certifications.ts` (once obtained)
- [ ] Custom domain configured in Vercel (e.g. `leonardobarony.dev`)
