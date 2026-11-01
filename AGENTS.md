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
- The joint hero portrait is shown as a clean rounded panel with a hairline border and no mask, gradient or faded edge in either colour mode; the copy sits beside it on desktop and below it on smaller screens, and the panel's right edge stays flush with the content column while both faces stay unobstructed. The statement animation sits below the portrait within the same hero section.
- Booking CTAs link to the internal trust pages /termin (de) and /en/termin (en) — never directly to calendar.proton.me, because the visible Proton URL raises scam concerns; those pages open the Proton booking link in a new tab. /en is a layout route (src/routes/en.tsx) with the home page in en.index.tsx so children like /en/termin can render.
- Never edit or delete the root vercel.json: its rewrite forwards startsaldo.ch/<16-char-code> to the QR-tracking API and must stay intact through future changes; existing routes like /termin must keep working.
- Service/region sub pages share one ServicePage component; their texts, paths and head metadata live in src/components/service-pages.ts (de/en), and site-nav.tsx holds the shared Leistungen menu — add a page by adding data plus two thin route files.
- The header dropdown and hamburger menu render navOrder (service pages only); the region page is deliberately kept out of the menu but stays linked from the footer, so it remains crawlable while the menu reads as services only.
