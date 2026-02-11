# CV. Pentagon Konstruksindo — Company Profile Website (React + CRA)

This project is a **static company profile website** built with:
- **React (JavaScript)** using **Create React App** (no Vite, no TypeScript)
- **Tailwind CSS** for modern UI
- **React Router** for pages
- **Framer Motion** for subtle animations
- **Netlify Forms** for contact/quote form (no database needed)

## Local Development

```bash
npm install
npm start
```

Open http://localhost:3000

## Build

```bash
npm run build
```

Output will be in `build/`.

## Deploy to Netlify (via GitHub)

1. Push this project to your GitHub repo (e.g. `pentagonkontraktor`).
2. In Netlify:
   - **New site from Git**
   - Choose GitHub and select the repository
   - Build command: `npm run build`
   - Publish directory: `build`
3. This repo includes:
   - `netlify.toml` for build settings + SPA redirects
   - `public/_redirects` for client-side routing

## Netlify Forms

The Contact page uses Netlify Forms. After deployment:
- Go to Netlify Dashboard → your site → **Forms**
- Submissions will appear there automatically

> If you want email notifications: Netlify → Forms → Settings → Notifications

## Content & Assets

- Website content is stored in:
  - `src/data/siteData.js`
  - `src/data/projects.js`
- Project images are in `src/assets/images/projects/`
- The PDF company profile is in `public/assets/company-profile.pdf`

## Quick Customization

Update these first:
- Company name, phones, address, map URL:
  - `src/data/siteData.js`
- Add / remove projects:
  - `src/data/projects.js`

---

Built for fast deployment and future iteration.
