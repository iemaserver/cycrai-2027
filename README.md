# CYCRAI 2027

[![Build and Deploy](https://github.com/iemaserver/cycrai-2027/actions/workflows/build_and_deploy.yml/badge.svg)](https://github.com/iemaserver/cycrai-2027/actions/workflows/build_and_deploy.yml)

Official website for the **First International Conference on Cybersecurity, Cryptography and Responsible AI (CYCRAI 2027)**, organized by the Department of Computer Science and Engineering (Cyber Security), Institute of Engineering & Management Kolkata, under the University of Engineering and Management Kolkata, with Technical Co-Sponsorship of the IEEE Kolkata Section and IEEE Computer Society SBC.

The conference takes place **29–30 September 2027**. Accepted and presented papers are submitted for publication in the **IEEE Xplore Digital Library**.

## Technology Stack

| Layer | Technology | Version |
| --- | --- | --- |
| Framework | React (SPA) | ^19.2.0 |
| Build tool | Vite | ^7.2.4 |
| Language | JavaScript (JSX) | — |
| Styling | Tailwind CSS | ^3.4.19 |
| Routing | React Router | ^7.17.0 |
| Animation | Framer Motion, AOS, Lenis (smooth scroll) | ^12.42.2, ^2.3.4, ^1.3.23 |
| Icons | Lucide React, React Icons | ^1.31.0, ^5.6.0 |
| Linting | ESLint 9 (flat config) | ^9.39.1 |
| Hosting | Firebase Hosting (primary), Vercel (configured) | — |
| CI/CD | GitHub Actions | — |

## Project Architecture

Single-page application built with React 19 + Vite. All routes render inside a single `App` shell that mounts the `Navbar` and route components under `BrowserRouter`, wrapped in a Lenis smooth-scroll provider.

```text
┌─────────────────────────────────────────────┐
│ index.html  →  src/main.jsx  →  App.jsx     │
│         BrowserRouter + Lenis scroll        │
├─────────────────────────────────────────────┤
│  Navbar (global)                            │
│  Pages: Home, About, Committee, Speakers,   │
│         Tracks, ImportantDates, CallForPaper,│
│         Guidelines, Registration, Venue,    │
│         Contact                             │
│  Components: Hero, Countdown, Footer, ...   │
└─────────────────────────────────────────────┘
                     │  vite build
                     ▼
                 dist/ (SPA, rewrites to index.html)
                     ▼
        Firebase Hosting  ←  GitHub Actions CI/CD
```

The build outputs a static SPA; both `firebase.json` and `vercel.json` rewrite all routes to `/index.html` for client-side routing.

## Getting Started

### Prerequisites

- Node.js (LTS, 18+ recommended)
- npm

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Lint
npm run lint

# 4. Production build
npm run build

# 5. Preview the production build
npm run preview
```

## Project Structure

```text
.
├── .github/
│   ├── dependabot.yml              # Automated npm dependency updates
│   └── workflows/
│       └── build_and_deploy.yml    # CI/CD: build + Firebase deploy on push to main
├── public/
│   ├── callforpapers.pdf           # Call for papers brochure
│   ├── cfp.pdf
│   └── vite.svg
├── src/
│   ├── Pages/                      # One component per route (12 pages)
│   │   ├── Home.jsx                #   Hero + countdown landing
│   │   ├── About.jsx               #   Conference theme & research areas
│   │   ├── Committee.jsx           #   Organizing committee
│   │   ├── Speakers.jsx            #   Keynote & invited speakers
│   │   ├── Tracks.jsx              #   Four conference tracks + subtopics
│   │   ├── ImportantDates.jsx      #   Timeline of deadlines
│   │   ├── CallForPaper.jsx        #   Submission details & fee table
│   │   ├── Guidelines.jsx          #   Author guidelines
│   │   ├── Registration.jsx        #   Registration fees
│   │   ├── Venue.jsx               #   Conference venue
│   │   └── contact.jsx
│   ├── components/                 # Reusable UI (Navbar, Hero, Footer,
│   │   │                           #   Countdown, CommitteeTabs, Dates,
│   │   │                           #   MemberCard, SpeakersSection, TopBar, LogoStrip)
│   ├── data/
│   │   └── committeeData.js        # Committee member data
│   ├── assets/                     # Images
│   ├── App.jsx                     # Routes + Lenis smooth-scroll setup
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind entry
├── firebase.json                   # Firebase Hosting config (SPA rewrites)
├── .firebaserc                     # Firebase project: cycrai-2027
├── vercel.json                     # Vercel SPA rewrites
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js                # ESLint 9 flat config
```

## Key Features

- **Hero landing** with countdown to the conference and animated CYCRAI 2027 branding
- **Conference tracks** — four themes: Foundation of Cyber Security, Foundation of Cryptography, Foundation of Responsible AI, and Emerging Technologies, each with detailed subtopics
- **Important dates** timeline — paper submission, acceptance, registration, camera-ready, and conference dates
- **Call for papers** — IEEE template guidance, submission process via Microsoft CMT, fee tables (IEEE member / non-IEEE, INR / USD)
- **Committees & speakers** — tabbed committee listing and keynote speaker section
- **Registration & guidelines** — author guidelines and registration information
- **Venue & contact** pages with conference secretariat details
- **Smooth scrolling** via Lenis and scroll animations via Framer Motion / AOS
- **Dark, grid-textured conference theme** with Cinzel / Playfair Display typography

## Development Workflow

- Development happens on the `main` branch.
- **CI/CD:** every push to `main` triggers the [Build and Deploy workflow](.github/workflows/build_and_deploy.yml):
  1. Checkout, `npm ci`, `npm run build`
  2. Upload `dist/` as an artifact
  3. Deploy to Firebase Hosting (live channel) via `FirebaseExtended/action-hosting-deploy`, using the `FIREBASE_SERVICE_ACCOUNT` and `FIREBASE_PROJECT_ID` repository secrets
- **Dependency updates:** [Dependabot](.github/dependabot.yml) opens version-update pull requests for npm packages.
- **Commits:** conventional commit style (e.g. `feat:`, `fix:`, `docs:`).

## Coding Standards

- **JavaScript/JSX** with ESLint 9 flat config (`eslint.config.js`) enforcing `react-hooks` and `react-refresh` rules; run `npm run lint`.
- **Tailwind CSS** utility-first styling; dark navy/cyan theme colors defined inline (e.g. `bg-[#020817]`, `text-cyan-300`).
- **Component conventions:** PascalCase filenames for most components (some legacy lowercase names like `contact.jsx` exist), one component per file, `export default`.
- **UI patterns:** motion-based scroll reveals, grid background overlays, and consistent section structure across pages.

## Testing

No automated test framework is configured. Quality gates are:

- `npm run lint` — ESLint static analysis
- `npm run build` — production build (also run by CI before every deploy)

## Contributing

1. Fork the repository and create a feature branch off `main`.
2. Follow the existing component patterns (see `src/components/` and `src/Pages/` for exemplars).
3. Ensure `npm run lint` and `npm run build` pass locally.
4. Push to your fork and open a pull request; CI runs the build and deploy pipeline on merge to `main`.

Use conventional commit messages (e.g. `feat(committee): add advisory board members`).

## License

No license file is present in this repository. Please contact the conference organizers before reusing any code or content.