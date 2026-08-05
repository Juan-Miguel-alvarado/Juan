import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { USES } from "@/data/uses";

export const metadata: Metadata = {
  title: "Uses",
  description: "The machine, the desktop and the tools I work in every day.",
  openGraph: {
    title: "Uses",
    description: "The machine, the desktop and the tools I work in every day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses",
    description: "The machine, the desktop and the tools I work in every day.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function UsesPage() {
  return (
    <section id="uses">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Uses</h1>
        <p className="text-sm text-muted-foreground mb-8">{USES.intro}</p>
      </BlurFade>

      <div className="flex flex-col gap-10">
        {USES.groups.map((group, groupIndex) => (
          <BlurFade
            key={group.title}
            delay={BLUR_FADE_DELAY * 2 + groupIndex * 0.05}
          >
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              {group.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3"
                >
                  <span className="font-medium tracking-tight">
                    {item.name}
                  </span>
                  <span className="hidden sm:block flex-1 border-b border-dashed border-border/70" />
                  <span className="text-sm text-muted-foreground">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <Link
          href={USES.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          Read the full setup guide
          <ArrowUpRight
            className="size-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden
          />
        </Link>
      </BlurFade>
    </section>
  );
}
