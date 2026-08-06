# Portfolio.

My personal site — [github.com/Juan-Miguel-alvarado](https://github.com/Juan-Miguel-alvarado)

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, [shadcn/ui](https://ui.shadcn.com/)
and [Magic UI](https://magicui.design/).

## Structure

Everything that is *content* lives in two files — there is no CMS and no database:

| File | What it holds |
|------|---------------|
| [`src/data/resume.tsx`](src/data/resume.tsx) | Name, bio, skills, projects, contact and social links |
| [`src/data/uses.ts`](src/data/uses.ts) | The `/uses` page — my Arch + Hyprland setup |

Routes:

- `/` — hero, about, skills, projects, contact
- `/uses` — the desktop and tooling I work in, mirroring my
  [setup guide](https://github.com/Juan-Miguel-alvarado/arch-customization-guide)

The `work`, `education` and `hackathons` arrays in `resume.tsx` are empty, and their sections
hide themselves when empty — fill them in and they reappear.

## Running it

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

```bash
pnpm build     # production build
pnpm start     # serve the build
pnpm lint      # eslint
```

`DATA.url` in `resume.tsx` is the site's canonical origin — it feeds `metadataBase` and every
OpenGraph URL, so it has to point at the real domain before deploying.

## License

MIT — see [LICENSE](LICENSE).
