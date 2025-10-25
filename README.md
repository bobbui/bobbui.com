# bobbui.com

✨ My personal website & blog | Writing about tech mainly AI | 🚀 Where I share ideas, projects, and learnings

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Deployment platform
- **[Giscus](https://giscus.app/)** - GitHub Discussions powered comments
- **[Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)** - Bot protection

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view your site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is automatically deployed to Cloudflare Pages via GitHub Actions when changes are pushed to the `main` branch.

### Required Secrets

Configure the following secrets in your GitHub repository settings:

- `CLOUDFLARE_API_TOKEN` - API token with Cloudflare Pages permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### Setup Giscus Comments

1. Enable GitHub Discussions in your repository
2. Install the Giscus app: https://github.com/apps/giscus
3. Visit https://giscus.app/ to generate your configuration
4. Update the Giscus component in `src/components/Giscus.astro` with your:
   - Repository name
   - Repository ID
   - Category
   - Category ID

### Setup Cloudflare Turnstile

1. Get your Turnstile site key from [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Update the `siteKey` prop in `src/components/Turnstile.astro`

## Project Structure

```
/
├── public/
│   ├── static/        # Static assets (images, etc.)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Giscus.astro      # Comments component
│   │   └── Turnstile.astro   # Bot protection component
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD workflow
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Features

- ⚡ Fast static site generation with Astro
- ☁️ Automatic deployment to Cloudflare Pages
- 💬 GitHub Discussions powered comments via Giscus
- 🔒 Bot protection with Cloudflare Turnstile
- 🖼️ Images served from `/public/static/` directory
- 🎨 Dark mode support
- 📱 Responsive design

## License

ISC

