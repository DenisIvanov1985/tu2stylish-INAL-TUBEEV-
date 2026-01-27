# TU2STYLISH — Interior Design Studio Website

> **Application #1** from the **"Vibe Coding Projects"** series — three applications built with AI assistance

**Live:** [www.tubeev.com](https://www.tubeev.com)

---

## About the Project Series

### Concept

This is an **educational project series** demonstrating the capabilities of modern AI-assisted development (Vibe Coding). Three independent applications, each solving real-world tasks and to be integrated into a unified ecosystem.

```
┌─────────────────────────────────────────────────────────────────┐
│                      Vibe Coding Projects                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐       │
│   │  TU2STYLISH  │   │  TaskFlow    │   │  App #3      │       │
│   │  (Website)   │   │  (To-Do)     │   │  (TBD)       │       │
│   │     ✅       │   │     ✅       │   │  💡 Idea     │       │
│   └──────┬───────┘   └──────┬───────┘   └──────┬───────┘       │
│          │                  │                  │                │
│          └──────────────────┼──────────────────┘                │
│                             │                                   │
│                    ┌────────▼────────┐                         │
│                    │      n8n        │                         │
│                    │  (Automation)   │                         │
│                    └─────────────────┘                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Three Applications

| # | Application | Description | Status |
|---|-------------|-------------|--------|
| 1 | **TU2STYLISH** | Full-featured website for interior design studio (this repo) | ✅ Published |
| 2 | **TaskFlow** | Task management with AI assistant | ✅ Complete |
| 3 | **TBD** | Idea in selection process | 💡 Planning |

#### App #1: TU2STYLISH (this repository)
A commercial project for a real client — interior designer Inal Tubeev. A full-featured business website with project gallery, headless CMS for content management, contact forms with email notifications, and responsive design. **The first project in the series**, which started the Vibe Coding learning journey.

#### App #2: TaskFlow
A full-featured task management application with AI integration. Includes authentication, database, REST API, tests — a complete production-ready stack.

#### App #3: In Development
The third application in the series — idea being selected. Possible directions: analytics, automation, CRM.

### Integration via n8n

[n8n](https://n8n.io/) — an open-source automation platform that will unite all applications:

- **Data synchronization** between applications
- **Automatic triggers** (new inquiry → notification → task in TaskFlow)
- **Notifications** via Telegram, Email, Slack
- **Integrations** with external services (Google Calendar, Notion, etc.)

---

## TU2STYLISH (Application #1)

A professional full-featured website for an interior design studio. The first project in the Vibe Coding series, demonstrating the creation of a commercial product with AI assistance.

### Key Features

- Modern minimalist design
- Headless CMS (Directus) for content management
- Project gallery with category filtering
- Lightbox image viewer
- Contact form with email notifications
- Full mobile responsiveness
- Dark theme
- SEO optimization

---

## Architecture

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│   Next.js App   │ ───► │  Directus CMS   │ ───► │   PostgreSQL    │
│   (Frontend)    │      │  (API + Admin)  │      │   (Database)    │
│                 │      │                 │      │                 │
│   Railway       │      │   Railway       │      │   Railway       │
│                 │      │                 │      │                 │
└────────┬────────┘      └─────────────────┘      └─────────────────┘
         │
         │              ┌─────────────────┐
         └────────────► │     Resend      │
                        │  (Email API)    │
                        └─────────────────┘
```

### How It Works

1. **User** visits the website (www.tubeev.com)
2. **Next.js** renders pages and requests data via API
3. **Directus CMS** delivers projects, images, content
4. **PostgreSQL** stores all data
5. **Resend** sends email when contact form is submitted

---

## Technologies

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.3 | React framework with App Router |
| **React** | 19.0 | UI library |
| **Tailwind CSS** | 3.4 | Styling |
| **Framer Motion** | 12.0 | Animations and transitions |

### Backend & CMS
| Technology | Purpose |
|------------|---------|
| **Directus** | Headless CMS with visual editor |
| **PostgreSQL** | Database (via Directus) |
| **Next.js API Routes** | Proxy for CMS and email |

### Services
| Service | Purpose |
|---------|---------|
| **Railway** | Hosting (Next.js + Directus + PostgreSQL) |
| **Resend** | Email notification delivery |
| **GitHub** | Repository + CI/CD |

### Development Tools
| Tool | Purpose |
|------|---------|
| **Claude Code** | AI assistant (Anthropic) |
| **WebStorm** | IDE |
| **Git** | Version control |

---

## Features

### Pages
- **Home** — Hero section, services, about studio, contacts
- **Projects** — Gallery with category filtering
- **Project** — Detail page with image gallery
- **Privacy Policy** — Privacy information
- **Terms of Service** — Usage terms
- **Accessibility** — Accessibility statement

### Home Page Sections
- **Hero** — Headline and CTA
- **What We Create** — 6 service categories
- **About Founder** — Founder information
- **Worldwide** — Geographic presence (video background)
- **Contact** — Inquiry form

### Project Categories
- Residential
- Commercial
- Hospitality
- Furniture
- Turnkey Projects
- Concepts

---

## AI-Assisted Development (Vibe Coding)

### What is Vibe Coding

**Vibe Coding** — a modern development approach where a programmer works in tandem with an AI assistant. AI helps with:
- Writing code
- Debugging errors
- Architectural decisions
- Refactoring
- Documentation

### Tools
- **Claude Code** (Anthropic) — primary AI assistant
- **Claude Opus 4.5** — model for complex tasks

### Development Process

1. **Initialization** — Creating Next.js project, Tailwind setup
2. **Design** — Component development, responsive layout
3. **Animations** — Adding Framer Motion effects
4. **CMS Integration** — Deploying Directus on Railway
5. **API** — Creating endpoints for projects and contacts
6. **Email** — Resend integration for notifications
7. **Deploy** — Railway setup, DNS, SSL
8. **Testing** — All features verification, Lighthouse audit

### What We Learned

- Next.js App Router and Server Components
- Tailwind CSS for rapid styling
- Framer Motion for animations
- Directus CMS — setup, collections, permissions
- Railway — deploy, environment variables, domains
- DNS — A records, CNAME, domain configuration
- Resend API — transactional email delivery

### Development Statistics

| Metric | Value |
|--------|-------|
| Files created | ~40+ |
| React components | 20+ |
| API endpoints | 2 |
| Pages | 6 |
| Development time | ~2 weeks |

---

## Quick Start

### Requirements
- Node.js 18+
- npm or yarn
- Railway account (for CMS)
- Resend account (for email)

### Local Development

```bash
# Clone repository
git clone https://github.com/DenisIvanov1985/tu2stylish-INAL-TUBEEV-.git
cd tu2stylish-INAL-TUBEEV-

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
# Directus CMS
NEXT_PUBLIC_DIRECTUS_URL=https://your-directus.up.railway.app

# Resend Email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=your@email.com
```

---

## Deployment

### Railway (recommended)

1. Create project on [Railway](https://railway.app)
2. Connect GitHub repository
3. Add environment variables
4. Railway auto-deploys on push to main

### Directus CMS

Directus is already deployed on Railway:
- URL: `https://directus-production-1c3b.up.railway.app`
- Includes PostgreSQL database
- Admin panel for project management

### Domain

Website available at:
- https://www.tubeev.com (primary)
- https://tubeev.com (redirect)

---

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/      # Email sending
│   │   └── projects/     # Project data
│   ├── projects/         # Project pages
│   │   ├── [slug]/      # Dynamic project page
│   │   └── page.jsx     # Projects list
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── accessibility/    # Accessibility
│   ├── layout.jsx        # Root layout
│   ├── page.jsx          # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Navigation.jsx    # Navigation
│   ├── Footer.jsx        # Footer
│   ├── Hero.jsx          # Hero section
│   ├── WhatWeCreate.jsx  # Services
│   ├── AboutFounder.jsx  # About founder
│   ├── Worldwide.jsx     # Geography
│   ├── Contact.jsx       # Contact form
│   └── ...
├── lib/                   # Utilities
│   └── directus.js       # Directus CMS client
└── data/                  # Static data
    └── projects.js       # Fallback data
```

---

## Series Roadmap

### Phase 1: Individual Applications
- [x] TU2STYLISH — Interior design studio website
- [x] TaskFlow — Task management with AI
- [ ] App #3 — Idea in selection

### Phase 2: Integration
- [ ] n8n server setup
- [ ] Webhook on new inquiry → create task in TaskFlow
- [ ] Telegram notifications
- [ ] Analytics and statistics

### Phase 3: Expansion
- [ ] Client admin panel
- [ ] Blog with SEO
- [ ] Multi-language support

---

## Author & Methodology

### Vibe Coding

Project created using **Vibe Coding** — a modern development approach where a programmer works in tandem with an AI assistant:

- **Tool:** Claude Code (Anthropic)
- **Model:** Claude Opus 4.5
- **Approach:** Iterative development through dialogue
- **Advantage:** Rapid prototyping + quality code

### Why This Matters

> "Vibe Coding is not a replacement for programmers, but an enhancement of their capabilities. AI handles the routine, allowing focus on architecture and business logic."

This project is **the first in the series**, which started the exploration of AI-assisted development capabilities. It demonstrates that:

- Commercial products for real clients can be created
- Modern stack is accessible without deep experience in each technology
- Iterative development with AI accelerates the process significantly
- Code quality remains at a high level

---

## Client

**Inal Tubeev** — Interior Designer

- Website: [tubeev.com](https://www.tubeev.com)
- Email: inal@tubeev.com

---

## License

MIT — Free to use for educational and commercial projects.

---

<p align="center">
  <b>Vibe Coding Projects</b><br>
  Built with Claude Code | 2025
</p>
