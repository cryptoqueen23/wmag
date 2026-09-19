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

Then open `http://localhost:4321/admin/` — `local_backend: true` in `public/admin/config.yml` routes commits through the local proxy so you can edit content without a hosted OAuth provider. For production editing, deploy a small OAuth worker (see the comment at the top of `config.yml`) and set `base_url` there; Cloudflare Workers is the free option that matches this project's stack.

## Design system

Global styles and the editorial component vocabulary (`StoryCard`, `StoryRail`, `PullQuote`, `EditorialTriptych`, `PortraitFeature`) live in `src/styles/global.css` and `src/components/`. Reuse these rather than hand-rolling new card grids — the goal is a reusable editorial vocabulary, not a single repeated template.
