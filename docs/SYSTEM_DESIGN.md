# Basewood System Design

## 1. Overview

**Basewood** is a marketing website for a Ugandan professional training institute. It is a client-only Single Page Application (SPA) that showcases programs, team members, alumni, and certifications while capturing enrollment leads through form submission and WhatsApp.

### 1.1 Purpose

- Present professional certification programs (ACCA, CPA, CILT, CIM, CIPS, FRM, CISCM)
- Showcase team members, consultants, and alumni
- Capture enrollment interest via form and WhatsApp
- Build trust through certifications, testimonials, and employer logos

### 1.2 Key Characteristics

| Attribute | Value |
|-----------|-------|
| **Architecture** | Static SPA, client-only |
| **Backend** | None (third-party form service only) |
| **Database** | None (hardcoded content) |
| **Deployment** | Lovable.dev (CDN-hosted) |

---

## 2. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT (Browser)                                │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                    React SPA (Vite + TypeScript)                    │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐  │  │
│  │  │   Pages     │  │  Components │  │   Hooks     │  │   Lib      │  │  │
│  │  │  (Routes)   │  │  (UI/Logic) │  │  (Reveal,   │  │  (Utils)   │  │  │
│  │  │             │  │             │  │   Toast)    │  │            │  │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘  │  │
│  │                              │                                      │  │
│  │                    ┌─────────┴─────────┐                           │  │
│  │                    │  React Router      │                           │  │
│  │                    │  TanStack Query    │                           │  │
│  │                    │  Tailwind + shadcn │                           │  │
│  │                    └───────────────────┘                           │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTPS
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        EXTERNAL SERVICES                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────────┐   │
│  │  FormSubmit.co  │  │    WhatsApp     │  │  Lovable R2 CDN         │   │
│  │  (Enrollment)   │  │  (wa.me links)  │  │  (OG/Preview images)    │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Technology Stack

| Layer | Technology | Version / Notes |
|-------|------------|-----------------|
| **Build** | Vite | 5.x |
| **Language** | TypeScript | 5.8 |
| **Framework** | React | 18.3 |
| **Routing** | react-router-dom | 6.x |
| **UI Components** | shadcn/ui (Radix) | — |
| **Styling** | Tailwind CSS | 3.4 |
| **State / Data** | TanStack React Query | 5.x |
| **Forms** | react-hook-form + zod + @hookform/resolvers | — |
| **Icons** | lucide-react | — |
| **Testing** | Vitest + @testing-library/react | — |
| **Hosting** | Lovable.dev | R2 CDN for assets |

---

## 4. Application Structure

### 4.1 Directory Layout

```
basewood/
├── public/                 # Static assets
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/             # shadcn primitives (Button, Card, etc.)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Programs.tsx
│   │   ├── Certifications.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Team.tsx
│   │   ├── Consultants.tsx
│   │   ├── AlumniTable.tsx
│   │   ├── ChatBot.tsx
│   │   └── ...
│   ├── pages/              # Route-level pages
│   │   ├── Index.tsx
│   │   ├── About.tsx
│   │   ├── OurTeam.tsx
│   │   ├── ProgramsPage.tsx
│   │   ├── Enroll.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   ├── useReveal.ts    # Scroll reveal (IntersectionObserver)
│   │   ├── use-toast.ts
│   │   ├── use-mobile.tsx
│   │   └── useCounter.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 4.2 Route Map

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Index | Home: Hero, programs, certifications, testimonials |
| `/about` | About | Mission, vision, values, partners |
| `/programs` | ProgramsPage | Program catalog |
| `/our-team` | OurTeam | Team, consultants, alumni table |
| `/enroll` | Enroll | Enrollment form (FormSubmit) |
| `/contact` | Contact | Contact info, CTAs |
| `*` | NotFound | 404 page |

---

## 5. Component Architecture

### 5.1 Layout Components

| Component | Responsibility |
|-----------|----------------|
| **Navbar** | Sticky navigation, logo, links, Apply/Contact CTAs, mobile menu |
| **Footer** | Brand, program links, company links, contact info |

### 5.2 Feature Components

| Component | Responsibility |
|-----------|----------------|
| **Hero** | Full-height carousel (3 slides), stats, CTAs |
| **Programs** | Featured programs (ACCA, CPA, CILT), accordion for CIM/CIPS/FRM |
| **Certifications** | CIM, ACCA, CPA, CIPS, CILT, CISCM badges |
| **TrustStrip** | Alumni employer logos |
| **StatsSection** | Alumni count, C-Suite, certifications, partners |
| **Testimonials** | Alumni quotes with photos |
| **Team** | 8 team members with roles and photos |
| **Consultants** | 10 external consultants |
| **AlumniTable** | CIM alumni (name, position, company) |
| **ChatBot** | In-app assistant (rule-based, no external AI) |
| **FinalCTA** | Email, WhatsApp, phone CTAs |

### 5.3 Data Models (In-Memory)

All content is hardcoded; no database.

| Model | Fields |
|-------|--------|
| **Program** | `id`, `abbr`, `name`, `full`, `subtitle`, `org`, `badge`, `tag`, `img` |
| **TeamMember** | `name`, `role`, `quals`, `badge`, `img`, `featured?`, `bio?` |
| **Consultant** | `name`, `title`, `quals`, `desc`, `img` |
| **Alumni** | `name`, `position`, `company` |
| **ChatMessage** | `role` ("bot" \| "user"), `text` |

---

## 6. Data Flow

### 6.1 Enrollment Flow

```
User fills form (Enroll.tsx)
        │
        ▼
react-hook-form + zod validation
        │
        ▼
POST https://formsubmit.co/ajax/elijahmukiibi18@gmail.com
        │
        ▼
FormSubmit.co → Email to configured address
        │
        ▼
Success/Error toast feedback
```

**Enrollment payload:**

- `_subject`, `_template`, `Basewood` (HTML header)
- Applicant Name, Email Address, Phone Number, Program Interest, Additional Message, Submitted On

### 6.2 ChatBot Flow

```
User types message
        │
        ▼
Rule-based keyword matching (no external API)
        │
        ▼
Return predefined response or fallback
        │
        ▼
Append to chat history (in-memory)
```

---

## 7. External Integrations

| Service | Purpose |
|---------|---------|
| **FormSubmit.co** | Enrollment form → email delivery |
| **WhatsApp** | `wa.me/256773099672` for direct contact |
| **Google Fonts** | Cormorant Garamond, DM Sans, DM Mono |
| **Unsplash** | Testimonial images |
| **Lovable R2 CDN** | OG/Twitter preview images |

---

## 8. Configuration

### 8.1 Vite

- Port: 8080
- Host: `::`
- Path alias: `@` → `./src`
- Plugins: React SWC, lovable-tagger (dev only)

### 8.2 Tailwind

- Dark mode: `class`
- Custom colors: `navy`, `teal`, `cream`, `whatsapp`
- Fonts: Cormorant Garamond (display), DM Sans (body), DM Mono

### 8.3 SEO

- `robots.txt`: Allow all crawlers
- Meta: title, description, OG, Twitter
- OG image: Lovable R2 CDN URL

---

## 9. Deployment

| Aspect | Details |
|--------|---------|
| **Platform** | Lovable.dev |
| **Publish** | Share → Publish |
| **Domain** | Custom domain via Lovable Project Settings |
| **Environment** | No `.env`; FormSubmit email hardcoded |

---

## 10. Notable Implementation Details

1. **Image optimization** – `MutationObserver` sets `loading="lazy"` and `decoding="async"` on non-priority images.
2. **Scroll reveal** – `useReveal` uses `IntersectionObserver` for fade-in on scroll.
3. **ChatBot** – Rule-based keyword matching; no LLM or external API.
4. **React Query** – `QueryClientProvider` is configured but not used for data fetching (content is static).
5. **Footer links** – Some point to `/programs/cim`, etc.; these resolve to `/programs` (no per-program routes).

---

## 11. Future Considerations

- Add per-program routes (e.g. `/programs/acca`, `/programs/cpa`)
- Replace hardcoded content with CMS or API
- Integrate analytics (e.g. Google Analytics)
- Add server-side rendering (SSR) or static generation for SEO
- Replace FormSubmit with custom backend for enrollment storage and processing
