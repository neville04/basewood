# Basewood Test Plan

This document outlines the testing strategy for the Basewood marketing site. See [SYSTEM_DESIGN.md](./SYSTEM_DESIGN.md) for architecture and [ISSUES_AND_IMPROVEMENTS.md](./ISSUES_AND_IMPROVEMENTS.md) for known issues.

---

## 1. Test Environment

| Tool | Purpose |
|------|---------|
| **Vitest** | Unit and integration tests |
| **@testing-library/react** | Component testing |
| **jsdom** | DOM simulation |
| **@testing-library/jest-dom** | Custom matchers |

**Setup:** `src/test/setup.ts` configures `matchMedia` mock for responsive components.

**Commands:**
- `npm run test` — Run all tests once
- `npm run test:watch` — Watch mode

---

## 2. Unit Tests

### 2.1 Utilities (`src/lib/utils.ts`)

| Test Case | Description |
|-----------|-------------|
| `cn()` merges class names correctly | `cn("foo", "bar")` returns merged string |
| `cn()` handles conditional classes | `cn("a", false && "b", "c")` returns `"a c"` |
| `cn()` merges Tailwind conflicts | `cn("p-4", "p-2")` yields `p-2` (last wins) |

### 2.2 Hooks

#### `useReveal`

| Test Case | Description |
|-----------|-------------|
| Returns `ref` and `visible` | Initial `visible` is `false` |
| Sets `visible` to `true` when element enters viewport | Mock `IntersectionObserver`, trigger intersection |
| Unobserves after first intersection | Observer `unobserve` called once visible |
| Handles threshold parameter | Effective threshold is `Math.min(threshold, 0.05)` |

#### `useCounter` (if used)

| Test Case | Description |
|-----------|-------------|
| Increments correctly | `increment()` increases count |
| Resets to initial value | `reset()` restores initial |

### 2.3 Components

#### Navbar

| Test Case | Description |
|-----------|-------------|
| Renders logo and nav links | Home, About, Programs, Our Team, Contact visible |
| Highlights active route | Link for current path has active styling |
| Mobile menu toggles on hamburger click | `aria-label="Toggle menu"` button opens/closes menu |
| Apply Now / Contact Us links go to correct routes | `/enroll`, `/contact` |
| Enroll Now CTA visible on desktop | Link to `/enroll` present |

#### Footer

| Test Case | Description |
|-----------|-------------|
| Renders program links | CIM, ACCA, CPA, CIPS, CILT, Short Courses |
| Renders company links | About, Our Team, Contact, Enroll |
| Contact info present | Phone numbers, email, website |
| Links are valid | `/about`, `/team`, `/contact`, `/enroll` work; `/programs/cim` etc. route to 404 (known issue) |

#### Hero (Carousel)

| Test Case | Description |
|-----------|-------------|
| Renders 3 slides | All slide labels/captions visible |
| Auto-advances after interval | Mock `setInterval`, verify index changes |
| Wraps from last to first | Index resets correctly at loop boundaries |
| CTA links work | Enroll and Programs links present |

#### Programs

| Test Case | Description |
|-----------|-------------|
| Renders featured programs | ACCA, CPA, CILT cards |
| Accordion expands for more programs | CIM, CIPS, FRM in accordion |
| Links to /programs | "View all programs" and card links |

#### ChatBot

| Test Case | Description |
|-----------|-------------|
| Opens on button click | Toggle shows/hides chat panel |
| Renders quick reply buttons | QUICK_REPLIES visible |
| Sends user message on submit | User message appears in chat |
| Returns bot response for known keywords | e.g. "programs" → program list response |
| Returns fallback for unknown input | Generic "How can I help?" style response |
| Handles empty input | No crash, optional validation |

#### Enroll Form

| Test Case | Description |
|-----------|-------------|
| Renders all fields | Name, Email, Phone, Program, Message |
| Program dropdown has options | All 12 options including "Other" |
| Required validation | Submit without name/email/phone shows browser validation |
| Disables submit while sending | `disabled` when `sending` is true |
| Shows success state after submit | Mock fetch success → "Request Received!" |
| Shows error on fetch failure | Mock fetch reject → error message |
| Submit Another resets form | Clears submitted state |

#### NotFound

| Test Case | Description |
|-----------|-------------|
| Renders 404 message | "Oops! Page not found" |
| Return to Home link works | Links to `/` |

---

## 3. Integration Tests

### 3.1 Routing

| Test Case | Description |
|-----------|-------------|
| `/` renders Index | Hero, Programs, etc. |
| `/about` renders About | Mission, vision, values |
| `/programs` renders ProgramsPage | Program catalog |
| `/team` renders OurTeam | Team, Consultants, Alumni |
| `/contact` renders Contact | Contact info, CTAs |
| `/enroll` renders Enroll | Enrollment form |
| `/invalid` renders NotFound | 404 page |

**Note:** Navbar links to `/team`; Footer links to `/our-team` do not exist — use `/team`.

### 3.2 Enrollment Flow (Mocked)

| Test Case | Description |
|-----------|-------------|
| Valid form submission | Fill form → mock FormSubmit success → success UI |
| FormSubmit failure | Mock 500 → error toast, form remains |
| Network error | Mock fetch reject → error message |
| Form payload structure | Verify `_subject`, `_template`, applicant fields |

### 3.3 ChatBot Flow

| Test Case | Description |
|-----------|-------------|
| Full conversation | User asks "What programs?" → bot responds with list |
| Multiple turns | User asks "How do I enroll?" → bot responds |
| Unknown question | User asks "xyz" → fallback response |

---

## 4. End-to-End (E2E) Tests

*Requires Playwright or Cypress (not currently in project).*

### 4.1 Critical Paths

| Scenario | Steps |
|----------|-------|
| **Homepage load** | Visit `/` → Hero visible → Programs section loads |
| **Navigation** | Click nav links → correct pages load |
| **Enrollment** | Fill form → submit → success (or mock FormSubmit in E2E) |
| **ChatBot** | Open ChatBot → type "programs" → receive response |
| **Mobile menu** | Resize to mobile → hamburger → menu opens → link navigates |

### 4.2 Cross-Browser

| Browser | Priority |
|---------|----------|
| Chrome | High |
| Safari | High (macOS/iOS) |
| Firefox | Medium |
| Edge | Low |

---

## 5. Manual Test Checklist

### 5.1 Smoke (Pre-Deploy)

- [ ] All routes load without error
- [ ] Navbar links work
- [ ] Footer links work (note: `/programs/cim` etc. → 404)
- [ ] Enroll form submits (use FormSubmit test mode)
- [ ] ChatBot opens and responds
- [ ] Hero carousel advances
- [ ] Mobile menu toggles
- [ ] No console errors on key pages

### 5.2 Responsive

| Breakpoint | Checks |
|------------|--------|
| Mobile (375px) | Nav collapses, menu works, forms usable |
| Tablet (768px) | Layout adapts, no horizontal scroll |
| Desktop (1200px) | Full layout, max-width respected |

### 5.3 Accessibility

- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus visible on interactive elements
- [ ] Images have `alt` text
- [ ] Form labels associated with inputs
- [ ] Carousel has pause/control for motion sensitivity (optional)
- [ ] Color contrast (Lighthouse / axe)

### 5.4 External Integrations

- [ ] FormSubmit receives test submission
- [ ] WhatsApp link opens correct number
- [ ] Email links open mail client
- [ ] External images (Unsplash, etc.) load

---

## 6. Test File Structure (Recommended)

```
src/
├── components/
│   ├── Navbar.test.tsx
│   ├── Footer.test.tsx
│   ├── Hero.test.tsx
│   ├── Programs.test.tsx
│   ├── ChatBot.test.tsx
│   └── ui/
│       └── button.test.tsx    # if customizations
├── pages/
│   ├── Enroll.test.tsx
│   ├── Index.test.tsx
│   └── NotFound.test.tsx
├── hooks/
│   └── useReveal.test.ts
├── lib/
│   └── utils.test.ts
└── test/
    ├── setup.ts
    ├── test-utils.tsx         # render with Router, etc.
    └── mocks/
        └── handlers.ts       # MSW handlers for fetch
```

---

## 7. Mocking Guidelines

### 7.1 Fetch (FormSubmit)

```ts
// Mock successful FormSubmit response
global.fetch = vi.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
);
```

### 7.2 IntersectionObserver

```ts
// In setup or test
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
window.IntersectionObserver = vi.fn(() => ({
  observe: mockObserve,
  unobserve: mockUnobserve,
  disconnect: vi.fn(),
}));
```

### 7.3 Router

```ts
import { MemoryRouter } from "react-router-dom";
render(
  <MemoryRouter initialEntries={["/enroll"]}>
    <Enroll />
  </MemoryRouter>
);
```

---

## 8. Coverage Goals

| Category | Target |
|----------|--------|
| Utils (`lib/`) | 100% |
| Hooks | 90%+ |
| Critical components (Navbar, Footer, Enroll, ChatBot) | 80%+ |
| Pages | 70%+ |
| Overall | 70%+ |

---

## 9. CI Integration

Add to CI pipeline:

```bash
npm run lint
npm run test
npm run test:e2e
npm run build
```

Optional: `vitest run --coverage` for coverage reports.

---

## 10. E2E Tests (Playwright)

Playwright E2E tests live in the `tests/` folder. See `tests/README.md` for setup and run commands.

```bash
npm install
npx playwright install
npm run test:e2e
```

## 11. Known Gaps

1. ~~**No E2E framework**~~ — Playwright is set up in `tests/`.
2. **FormSubmit** — Real submissions go to production email; use FormSubmit test mode or mock in tests.
3. **Footer program links** — `/programs/cim`, `/programs/acca` etc. route to NotFound; tests should assert current behavior.
4. **ChatBot `getResponse`** — Internal function; test via user interactions, or extract and unit test separately.
