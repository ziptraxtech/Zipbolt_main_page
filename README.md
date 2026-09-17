# Zipbolt Main Page

A marketing and product landing website for Zipbolt Innovations, built with Next.js and styled with Tailwind CSS. The project showcases the company’s EV intelligence products, certifications, and sustainability-focused solutions.

## Overview

This site includes:

- a responsive homepage with hero, certification, and portfolio sections
- dedicated pages for About, Services, Contact, Privacy, and Terms
- branded assets and product imagery stored in the `public/` folder
- a lightweight MongoDB-backed API for status checks
- Vercel analytics enabled in the app shell

## Tech stack

- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui and Radix UI primitives
- MongoDB via the official Node.js driver
- Lucide React icons

## Prerequisites

- Node.js 18.17 or newer
- npm or Yarn
- MongoDB connection string for the API routes

## Getting started

1. Clone the repo and move into the project folder:

   ```bash
   git clone <repository-url>
   cd Zipbolt_main_page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   If you prefer Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the project root:

   ```env
   MONGO_URL=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
   DB_NAME=zipbolt
   CORS_ORIGINS=http://localhost:3000
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   Notes:
   - `MONGO_URL` and `DB_NAME` are required for the API routes to work.
   - `CORS_ORIGINS` is used by the API response handler for CORS headers.
   - `NEXT_PUBLIC_BASE_URL` is included for deployment configuration and is not currently used by the app logic.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

## Available scripts

```bash
npm run dev
npm run dev:no-reload
npm run dev:webpack
npm run build
npm run start
```

### Script behavior

- `npm run dev` — runs the app on port 3000
- `npm run dev:no-reload` — runs the app on `0.0.0.0:3000`
- `npm run dev:webpack` — runs the app on `0.0.0.0:3000` with the configured dev setup
- `npm run build` — creates a production build
- `npm run start` — serves the production build

## Project structure

```text
app/
  api/[[...path]]/route.js   # MongoDB-backed route handler
  about/page.jsx             # About page
  contact/page.jsx           # Contact page and email contact flow
  privacy/page.jsx           # Privacy policy page
  services/page.jsx          # Services page
  terms/page.jsx             # Terms page
  layout.js                  # App shell and metadata
  page.js                    # Homepage
components/
  ui/                        # Reusable UI components
hooks/
  use-mobile.jsx             # Responsive utility hook
  use-toast.js               # Toast hook
lib/
  utils.js                   # Utility helpers
public/
  certificates/
  hero/
  logos/
  services/
  solutions/
  vision/
```

## Routes

- `/` — landing page
- `/about` — company background and mission
- `/services` — service overview and solution detail page
- `/contact` — contact details and mailto form
- `/privacy` — privacy and cookie policy
- `/terms` — terms and conditions

## API

The API is implemented in `app/api/[[...path]]/route.js`.

### Endpoints

- `GET /api/root` — returns `{"message":"Hello World"}`
- `GET /api/status` — returns the latest status checks from the `status_checks` collection
- `POST /api/status` — creates a status entry; requires `client_name`
- `OPTIONS *` — handles CORS preflight requests

Example:

```bash
curl -X POST http://localhost:3000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name":"local-development"}'
```

## Deployment

This project is set up for standard Next.js deployment. The app uses a standalone build configuration, so it can be deployed to Vercel, a Docker container, or a Node.js host.

Before deployment, configure the environment variables in your hosting platform:

```env
MONGO_URL=...
DB_NAME=zipbolt
CORS_ORIGINS=https://your-domain.com
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

Do not commit real credentials to source control.

## Notes

- The contact form does not send data to the backend; it opens a pre-filled `mailto:` link.
- The homepage portfolio cards link to external product websites.
- There is no automated test suite configured in the current project setup.

## License

This project currently does not include a license file. Treat the code and branding as proprietary unless explicitly stated otherwise by Zipbolt Innovations.
