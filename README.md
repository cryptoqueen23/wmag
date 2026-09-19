# W Magazine Project

A brand-neutral Astro foundation for a premium women’s publication.

## Development

```bash
npm install
npm run dev
```

## Rename the publication

Edit only `src/config/publication.ts`. The working masthead is intentionally temporary until the final brand name is chosen.

## Content

Stories live in `src/content/stories/` and use Astro Content Collections (schema in `src/content.config.ts`). Departments must match the labels in `publication.nav`, or a story won't appear on its department page.

## Editing with the CMS (Sveltia)

The editorial admin lives at `/admin/`. For local editing without setting up GitHub OAuth:

```bash
npx sveltia-cms-proxy-server &
npm run dev
```

Then open `http://localhost:4321/admin/` — `local_backend: true` in `public/admin/config.yml` routes commits through the local proxy so you can edit content without a hosted OAuth provider.

Production editing at `wmag.pages.dev/admin/` authenticates through the OAuth worker shared with CenTex Press (`cryptoqueen23/CenTexPress`, `workers/cms-auth`) — it's a generic GitHub OAuth proxy, not CenTex-specific, gated only by an allowlist var on that worker. Don't deploy a second one for this project; if a third Sveltia-backed site ever needs auth, add its domain to that worker's `ALLOWED_DOMAINS` instead.

## Publishing pipeline

```
Sveltia (/admin/) → commit to main on GitHub → Cloudflare Pages builds → wmag.pages.dev
```

The Cloudflare Pages project is Git-connected (not a manual/direct-upload deploy) — a push to `main` builds and deploys automatically with no local `wrangler` step. Non-`main` branches and pull requests get their own preview deployments, left at Cloudflare's default so preview behavior doesn't collide with production.

## Design system

Global styles and the editorial component vocabulary (`StoryCard`, `StoryRail`, `PullQuote`, `EditorialTriptych`, `PortraitFeature`) live in `src/styles/global.css` and `src/components/`. Reuse these rather than hand-rolling new card grids — the goal is a reusable editorial vocabulary, not a single repeated template.
