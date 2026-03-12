# Welcome to your Lovable project

Marketing website for **Basewood Institute** — Uganda's premier Center for Professional Courses. Showcases programs (ACCA, CPA, CILT, CIM, CIPS, FRM), team, alumni, and enrollment.

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## Quick Start

```sh
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest unit tests |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run E2E tests with Playwright UI |
| `npm run test:e2e:headed` | Run E2E tests with visible browser |

## Testing

**Unit tests (Vitest):**
```sh
npm run test
npm run test:watch   # Watch mode
```

**E2E tests (Playwright):**
```sh
npx playwright install   # First time only
npm run test:e2e
```

See [tests/README.md](tests/README.md) for details.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

Additional: Vitest (unit tests), Playwright (E2E tests), react-router-dom, react-hook-form, zod.

## Documentation

| Doc | Description |
|-----|-------------|
| [docs/SYSTEM_DESIGN.md](docs/SYSTEM_DESIGN.md) | Architecture and system design |
| [docs/ISSUES_AND_IMPROVEMENTS.md](docs/ISSUES_AND_IMPROVEMENTS.md) | Known issues and improvement ideas |
| [docs/TEST_PLAN.md](docs/TEST_PLAN.md) | Testing strategy and coverage |
## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
