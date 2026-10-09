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
- Render Sarah's supplied finished photo as a single uncropped image, mirrored once with CSS, to preserve the uploaded portrait and background without generative alterations.
- Serve favicon binaries from public/ and declare them in the root route head; TanStack Start generates the HTML, so no separate index.html is needed.
