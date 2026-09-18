# Alex Nyaga — Portfolio (React)

Framework scaffold only. No page content/styling has been built yet —
this just sets up the folders, routing, and config so we can build the
site page by page next.

## Stack
- React 18 + Vite
- React Router (one route per page)
- Tailwind CSS (theme tokens started in `tailwind.config.js` — dark
  background + green accent, to be refined against the real design)
- Framer Motion + lucide-react included for later (animations / icons)

## Design reference
`design-reference/` holds the 8 page screenshots from the uploaded design:

| File | Page | Route |
|---|---|---|
| 01_home.png | Home | `/` |
| 02_about.png | About Me | `/about` |
| 03_projects.png | Projects (grid + filters) | `/projects` |
| 04_project_detail.png | Single project detail | `/projects/:slug` |
| 05_gis_services.png | GIS Services | `/gis-services` |
| 06_gallery.png | Gallery | `/gallery` |
| 07_achievements.png | Achievements | `/achievements` |
| 08_contact.png | Contact | `/contact` |

The contour/topographic line background used across the design is at
`src/assets/svg/contour-background.svg`.

## Folder structure

```
public/                    static assets served as-is
  assets/svg, images, icons

src/
  assets/                  images/svg imported into components
  components/
    layout/                Navbar, Footer, PageWrapper (shared shell)
    common/                shared small pieces (buttons, badges, cards...)
    home/                  Home-page-only sections
    about/                 About-page-only sections
    projects/              Projects grid + detail sections
    gisServices/           GIS Services page sections
    gallery/                Gallery page sections
    achievements/          Achievements page sections
    contact/               Contact page sections
  pages/                   one file per route, composes that page's
                           section components (currently stubs)
  routes/                  AppRoutes.jsx — central route table
  data/                    static content (projects.js, services.js, etc.)
  hooks/                   custom hooks
  context/                 React context providers (e.g. theme toggle)
  styles/                  global CSS (Tailwind entry)
  utils/                   helpers
```

## Status
- [x] Folder structure
- [x] Vite/Tailwind/Router config
- [x] Route table + empty page stubs
- [x] Layout component stubs (Navbar/Footer/PageWrapper)
- [x] Design tokens finalized (colors/fonts sampled from design)
- [x] Navbar/Footer built
- [x] Home page
- [ ] About page
- [ ] Projects + Project Detail pages
- [ ] GIS Services page
- [ ] Gallery page
- [ ] Achievements page
- [ ] Contact page

## Home page implementation notes
- `src/components/home/Hero.jsx` — eyebrow, headline, copy, CTAs, social
  rail and the globe visual.
- `src/components/home/StatsStrip.jsx` — the 5-metric strip.
- `src/components/home/ScrollCue.jsx` — the "scroll to explore" hint.
- `src/components/common/GlobeArt.jsx` — a placeholder SVG "data globe"
  (gradient sphere + scattered point clusters standing in for city
  lights/geodata) since no real earth image/asset was provided. Swap
  for a real illustration or image whenever one's available.
- `public/resume.pdf` is a placeholder — replace with the real resume.
- Colors/spacing in `tailwind.config.js` were sampled directly from
  `design-reference/01_home.png` (and cross-checked against
  `05_gis_services.png` for the shared card style).

## Next steps
Continue page by page: About, Projects/Project Detail, GIS Services,
Gallery, Achievements, Contact — reusing the Navbar/Footer/PageWrapper
shell and the `common/` components already built for Home.
