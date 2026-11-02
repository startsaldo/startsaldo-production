<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Site texts live in src/components/home-copy.ts (de/en); / and /en render the same HomePage with a lang prop — keeps both languages in sync.
- Site images (team photos, logos) are bundled files in src/assets, never Lovable CDN pointers (/__l5e/…) — the site is deployed on Vercel, where those CDN paths return 404. Sarah's finished photo is shown uncropped and mirrored once with CSS.
- Serve favicon binaries from public/ and declare them in the root route head; TanStack Start generates the HTML, so no separate index.html is needed.
- Social share images (og:image, twitter:image) are real files under public/ with a stable path and an absolute startsaldo.ch URL in the leaf route head; bundled src/assets imports get hashed names, so they cannot serve as a share URL.
- Keep the crawler favicon in server-rendered HTML and synchronise the browser fallback with colour-scheme changes after hydration, so it cannot override the theme-specific tab icon.
- Website display mode uses dedicated band colour tokens and a browser-stored preference; it is independent of OS-driven favicons and preserves photo rendering and alternating content sections.
- Keep the joint hero portrait's original asset untouched; apply its edge treatment only in shared CSS so both languages and colour modes stay consistent. Copy sits beside it on desktop and below it on smaller screens, with both faces unobstructed and the right edge aligned to the content column. The statement animation remains below it within the same hero section.
- Booking CTAs link to the internal trust pages /termin (de) and /en/termin (en) — never directly to calendar.proton.me, because the visible Proton URL raises scam concerns; those pages open the Proton booking link in a new tab. /en is a layout route (src/routes/en.tsx) with the home page in en.index.tsx so children like /en/termin can render.
- Never edit or delete the root vercel.json: its rewrite forwards startsaldo.ch/<16-char-code> to the QR-tracking API and must stay intact through future changes; existing routes like /termin must keep working.
- Service/region sub pages share one ServicePage component; their texts, paths and head metadata live in src/components/service-pages.ts (de/en), and site-nav.tsx holds the shared Leistungen menu — add a page by adding data plus two thin route files.
- The header dropdown and hamburger menu render navOrder (service pages only); the region page is deliberately kept out of the menu but stays linked from the footer, so it remains crawlable while the menu reads as services only.
- The site's public origin is https://www.startsaldo.ch (the bare domain 308-redirects to www), so every canonical, og:url, hreflang alternate, sitemap <loc>, robots Sitemap directive and structured-data URL must use that exact host; src/components/service-pages.ts exports SITE as the single source, and public/llms.txt lists only public content routes on the same host.

