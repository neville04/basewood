# E2E Tests (Playwright)

End-to-end tests for the Basewood marketing site.

## Setup

```bash
npm install
npx playwright install
```

## How to Run Playwright Tests

| Command | Description |
|---------|-------------|
| `npm run test:e2e` | Run all tests (Chromium, Firefox, WebKit) |
| `npm run test:e2e:ui` | Run with Playwright UI (pick tests, step-through) |
| `npm run test:e2e:headed` | Run with visible browser window |
| `npx playwright test tests/navigation.spec.ts` | Run a single test file |
| `npx playwright test -g "navbar links"` | Run tests matching a name pattern |
| `npx playwright test --project=chromium` | Run only in Chromium |
| `npx playwright test --debug` | Debug mode (pause + Inspector) |
| `npx playwright show-report` | Open last HTML report |

## Test Files

| File | Coverage |
|------|----------|
| `navigation.spec.ts` | Nav links, Apply/Contact, 404 |
| `homepage.spec.ts` | Hero, Programs section, carousel |
| `enroll.spec.ts` | Form fields, validation, submit flow |
| `chatbot.spec.ts` | Open chat, send message, quick replies |
| `mobile.spec.ts` | Mobile menu, responsive layout |

## Config

- **Base URL:** `http://localhost:8080`
- **Web server:** Started automatically via `npm run dev`
- **Browsers:** Chromium, Firefox, WebKit (install with `npx playwright install`)
