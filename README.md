# Twenty One Pilots Wiki

An information website about musical duo Twenty One Pilots — albums, songs, and band member biographies with multilingual support (en/ru) and rich animations. Built with Next.js 15, React 18, TypeScript, GSAP and Framer Motion.

**[→ Live Demo](https://top-info.vercel.app/)**

---
## Screenshots

### Hero & Navigation
<img width="1887" alt="Hero banner" src="https://github.com/user-attachments/assets/adb1b303-bd11-4a6a-8a53-15d938e698df" />

### Band Story & Participants
> Band story page is highly interactive on scroll
<img width="1904" alt="Band story" src="https://github.com/user-attachments/assets/f4b6c404-cae2-4a9f-b9a3-d85e2e579574" />
<img width="1904" alt="Participants bio" src="https://github.com/user-attachments/assets/98fd57f9-d4a3-4991-a29e-7fb423c94d02" />

### Global Search
<img width="1892" alt="Global search" src="https://github.com/user-attachments/assets/ede492b2-97fa-44ee-9509-58e75245af81" />

### Album Page
> Each album has a unique cover background, title style, tracklist accordion, links to audio platforms and an interactive photo gallery from band tours.

<img width="1889" alt="Album cover" src="https://github.com/user-attachments/assets/916b2e69-8d7e-4732-932a-ad27342479e4" />
<img width="1894" alt="Album description and links" src="https://github.com/user-attachments/assets/32a29e3d-8077-4d8f-8e06-91ee72c2af9d" />
<img width="1210" alt="Tracklist accordion" src="https://github.com/user-attachments/assets/a07da8c6-9dd5-4b92-b6a0-d745c97cd6da" />
<img width="947" alt="Tour photo gallery" src="https://github.com/user-attachments/assets/28a99125-ec9e-43b7-b8fe-74cb7ea0a8a0" />

<!-- Сюда вставь скриншоты: главная страница, страница альбома, страница участника, поиск -->
<!-- ![Главная страница](./public/screenshots/home.png) -->

---


## Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework, SSG/SSR, routing |
| React / TypeScript | UI-components, types |
| Sanity (Headless CMS) | Content management |
| GROQ | Request to CMS |
| next-intl | Internationalization (ru / en) |
| GSAP + Framer Motion | Animations & transitions |
| TailwindCSS + shadcn/ui | Styles |
| Vercel | Deploy |

---

## Key Technical Solutions

### Internationalization
Multilingual architecture based on `next-intl` with middleware-level routing (`/ru`, `/en`). Locales are easily scalable – just add a translation file and update the configuration.

### Headless CMS + GROQ
All content (albums, songs, member biographies) is managed through Sanity Studio without deployment. Global search across all entities is implemented via GROQ queries to Sanity.

### SSG + SEO
Pages are generated statically during the build (Static Site Generation). SEO optimization: Next.js Metadata API, OpenGraph, sitemap. Lighthouse Performance / SEO — 90+.

### Animations
Scroll-based animations and page transitions are implemented using GSAP (timeline, ScrollTrigger) and Framer Motion (page transitions, layout animations).

---

## Features

- Album catalog with detailed pages
- Song catalog linked to albums
- Band member biographies
- Global search by album, song, member, and factual information
- Responsive layout (mobile-first)
- Language switching (ru / en)
- Content management via Sanity Studio (no deployment required)

---

## Local start

```bash
git clone https://github.com/NikKorneev/top-info.git
cd top-info
npm install
```

Create `.env.local` with variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=...
SANITY_API_TOKEN=...
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To start Sanity Studio:

```bash
npx sanity dev
```
