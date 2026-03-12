# Basewood — Potential Issues & Improvements

This document identifies issues and improvement opportunities for the Basewood marketing site. See [SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md) for architecture context.

---

## 1. Potential Issues

### 1.1 Security & Configuration

| Issue | Severity | Description |
|-------|----------|-------------|
| **Hardcoded contact details** | Medium | FormSubmit email (`elijahmukiibi18@gmail.com`) and WhatsApp number (`256773099672`) are hardcoded in source. Changing them requires code edits and redeploy. |
| **No environment variables** | Medium | No `.env` or config layer. Sensitive or environment-specific values (form endpoint, contact info) live in code. |
| **Form spam risk** | Low | No CAPTCHA, honeypot, or rate limiting. FormSubmit.co may throttle, but bots can still submit. |

### 1.2 Maintainability

| Issue | Severity | Description |
|-------|----------|-------------|
| **Dead / unused code** | Low | `FloatingWhatsApp.tsx` exists but is never imported. ChatBot is used instead. |
| **Unused dependencies** | Low | TanStack React Query is configured but not used (content is static). Adds bundle size. |
| **Duplicate contact info** | Medium | WhatsApp URL and phone number repeated in 6+ files. Changes require updates in many places. |
| **Hardcoded content** | Medium | Programs, team, alumni, certifications are in components. Updates require code changes. |

### 1.3 Routing & Links

| Issue | Severity | Description |
|-------|----------|-------------|
| **Broken footer links** | Low | Footer links like `/programs/cim`, `/programs/acca` point to non-existent routes; they resolve to `/programs` or 404. |
| **No per-program pages** | Low | Users cannot share or bookmark individual program pages. |

### 1.4 User Experience & Reliability

| Issue | Severity | Description |
|-------|----------|-------------|
| **Single point of failure** | Medium | Enrollment depends entirely on FormSubmit.co. If it’s down or rate-limited, enrollments fail. |
| **Limited ChatBot** | Low | Rule-based keyword matching; no real AI. Users may expect more capable assistance. |
| **No error boundaries** | Medium | Uncaught React errors can blank the page with no fallback UI. |
| **Form error recovery** | Low | On submit failure, user sees toast but form data may be lost if they navigate away. |

### 1.5 SEO & Analytics

| Issue | Severity | Description |
|-------|----------|-------------|
| **No analytics** | Medium | No Google Analytics, Plausible, or similar. No visibility into traffic, conversions, or enrollment funnel. |
| **Client-only SPA** | Low | All content is client-rendered. Crawlers may see delayed content; SSR/SSG would help. |
| **Missing email-logo.png** | Low | Enroll form references `/email-logo.png` for FormSubmit template. Verify this asset exists in `public/`. |

### 1.6 Accessibility & Performance

| Issue | Severity | Description |
|-------|----------|-------------|
| **Accessibility audit** | Low | No documented a11y review. Carousel, accordions, and forms should be checked for keyboard nav, ARIA, and screen readers. |
| **External image sources** | Low | Unsplash and other external images can affect load time and availability. |

---

## 2. Improvements

### 2.1 Quick Wins

| Improvement | Effort | Impact |
|-------------|--------|--------|
| **Centralize contact info** | Low | Create `src/config/contact.ts` (or similar) with email, phone, WhatsApp URL. Import everywhere. |
| **Remove or use FloatingWhatsApp** | Low | Delete `FloatingWhatsApp.tsx` if unused, or integrate it where appropriate. |
| **Fix footer links** | Low | Point program links to `/programs` with hash (e.g. `#cim`) or remove until per-program routes exist. |
| **Add error boundary** | Low | Wrap app or key routes in `ErrorBoundary` to show a fallback UI on crashes. |
| **Verify email-logo.png** | Low | Ensure `public/email-logo.png` exists and is correct for FormSubmit emails. |

### 2.2 Short-Term

| Improvement | Effort | Impact |
|-------------|--------|--------|
| **Environment variables** | Low | Add `VITE_FORM_EMAIL`, `VITE_WHATSAPP_NUMBER` (or similar) and use in config. |
| **Form spam protection** | Low | Add honeypot field and/or integrate reCAPTCHA / hCaptcha / Turnstile. |
| **Analytics** | Low | Add Google Analytics, Plausible, or PostHog for traffic and conversion tracking. |
| **Remove unused React Query** | Low | Remove TanStack Query if not planned for use; reduces bundle size. |

### 2.3 Medium-Term

| Improvement | Effort | Impact |
|-------------|--------|--------|
| **Per-program routes** | Medium | Add `/programs/:slug` (e.g. `/programs/acca`, `/programs/cim`) for shareable program pages. |
| **Content layer** | Medium | Move programs, team, alumni, certifications to JSON or a headless CMS (e.g. Strapi, Contentful). |
| **Enrollment backup** | Medium | Add fallback: e.g. mailto link or “Email us” CTA when FormSubmit fails. |
| **Accessibility audit** | Medium | Run Lighthouse / axe and fix critical a11y issues. |

### 2.4 Long-Term

| Improvement | Effort | Impact |
|-------------|--------|--------|
| **Custom backend for enrollment** | High | Replace FormSubmit with own API; store leads in DB, add CRM integration. |
| **SSR or SSG** | High | Use Next.js, Astro, or similar for better SEO and initial load. |
| **AI-powered ChatBot** | Medium | Integrate LLM API for more helpful, context-aware responses. |
| **Admin dashboard** | High | Internal UI to manage programs, team, alumni, and view enrollments. |

---

## 3. Priority Matrix

| Priority | Focus |
|----------|-------|
| **P0** | Centralize contact info, add error boundary, verify email-logo.png |
| **P1** | Environment variables, form spam protection, analytics |
| **P2** | Fix footer links, remove dead code, per-program routes |
| **P3** | Content layer, enrollment backup, accessibility audit |
| **P4** | Custom backend, SSR/SSG, AI ChatBot, admin dashboard |

---

## 4. Summary

The Basewood site is a simple, functional marketing SPA. The main risks are **hardcoded configuration**, **single-point-of-failure enrollment**, and **lack of analytics**. Addressing the quick wins and short-term items will improve maintainability, reliability, and observability without large architectural changes.
