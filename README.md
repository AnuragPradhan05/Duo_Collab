# Binary

> A collaborative duo portfolio — two developers, one split-screen interface.

**Binary** is a single-page portfolio landing experience built by two developers and designed around the idea of duality: a vertical split where each half belongs to one of us, joined by a shared identity. The name reflects the concept — *two states, one system*.

🔗 **Live:** _coming soon_

---

## Overview

The interface is a full-height split screen. The left side belongs to **Anurag Pradhan** (orange), the right to **Arman Ahemad Khan** (green), with a shared navbar, a "bridge" section, and a custom color-aware cursor tying the two halves together. Each side links out to the respective developer's full portfolio.

The design language is intentionally minimal and typographic: large display type, generous whitespace, and a restrained two-color brand system (orange `#ff5c00` / green `#006c47`) that carries through the wordmark, hero, and interactive states.

## Features

- **Split-screen hero** — two independent halves with an expand-on-hover interaction.
- **Light / dark mode** — a single toggle that swaps the entire theme via CSS variables.
- **Smooth momentum scrolling** — powered by Lenis.
- **Entrance animations** — staggered reveals using Framer Motion.
- **Custom cursor** — a color-aware cursor that adapts to which half of the screen it's on.
- **Fully responsive** — tuned breakpoints from desktop down to small mobile.
- **Accessible by default** — semantic markup, keyboard-reachable links, and reduced-clutter focus states.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19 |
| Build tool | Vite |
| Animation | Framer Motion |
| Smooth scroll | Lenis (`@studio-freight/lenis`) |
| Icons | lucide-react + inline brand SVGs |
| Styling | Modular CSS with custom properties (CSS variables) |
| Tooling | ESLint |

## Project Structure

```
src/
├── main.jsx              # App entry — mounts React, loads global styles
├── App.jsx               # Composition root — sets up smooth scroll, renders sections
├── assets/               # Static images and SVGs
├── styles/
│   ├── variable.css      # Design tokens (colors) + dark-mode overrides
│   ├── global.css        # Reset, fonts, base styles
│   └── responsive.css    # All media queries
└── components/
    ├── navbar/           # Brand wordmark + theme toggle
    ├── Hero/             # The split-screen hero (left + right)
    ├── Bridge/           # Shared "joining" section
    ├── Footer/           # Footer
    └── Cursor/           # Custom color-aware cursor
```

Each component lives in its own folder alongside its scoped stylesheet.

## Getting Started

### Prerequisites

- **Node.js** 18 or newer
- **npm** (ships with Node)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Duo_Collab

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at **http://localhost:5173** by default.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Deployment

The project builds to a static bundle and deploys cleanly to any static host. **Vercel** is recommended:

1. Push your branch to GitHub.
2. Import the repository on Vercel.
3. Vercel auto-detects Vite — no extra configuration needed.
4. Every push to the main branch triggers an automatic deploy.

## Contributing

This is a two-person project, so we keep a lightweight branch-based workflow to avoid stepping on each other's work:

- `main` stays **always deployable**.
- Each person works on a **feature branch**, e.g. `arman/hero-rework` or `anurag/bridge-redesign`.
- Always `git pull origin main` before starting new work.
- Commits follow **[Conventional Commits](https://www.conventionalcommits.org)** — `feat:`, `fix:`, `style:`, `refactor:`.
- Open a **Pull Request** and get a quick review before merging into `main`.
- Coordinate before editing shared files (navbar, footer, global styles).

## The Duo

| | |
|---|---|
| **Anurag Pradhan** | [Portfolio](https://anuragsite-five.vercel.app/) |
| **Arman Ahemad Khan** | [Portfolio](https://arman-portfolio.online) · [GitHub](https://github.com/arman080325) · [LinkedIn](https://linkedin.com/in/arman-ahemad-khan) |

## License

Released under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<p align="center">Built with React + Vite.</p>