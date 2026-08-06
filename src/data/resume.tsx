import { Icons } from "@/components/icons";
import { HomeIcon, TerminalIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Rust } from "@/components/ui/svgs/rust";
import { Flutter } from "@/components/ui/svgs/flutter";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Tailwind } from "@/components/ui/svgs/tailwindcss";
import { Vite } from "@/components/ui/svgs/vite";

export const DATA = {
  name: "Juan Alvarado",
  initials: "JA",
  url: "https://juanalv.netlify.app",
  location: "Colombia",
  locationLink: "https://www.google.com/maps/place/colombia",
  description:
    "I build tools that read your stuff and tell you something you missed.",
  summary:
    "I play competitive chess, and it has shaped how I write software more than any tutorial ever did. A sharp position rewards the same habits a hard bug does: don't play the first move that looks reasonable, calculate the lines, throw out the ones that collapse, then commit to a plan and live with it. Sitting with a problem instead of guessing at it is a skill you can train, and I trained it over a board.\n\nThe rest of the time I build [developer tools in Rust](https://github.com/Juan-Miguel-alvarado/why-cli) — local-first, no network, no configuration — and [TypeScript on the web](/#projects).",
  avatarUrl: "/juan.jpg",
  skills: [
    { name: "Rust", icon: Rust },
    { name: "Typescript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Flutter", icon: Flutter },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Supabase", icon: Supabase },
    { name: "TailwindCSS", icon: Tailwind },
    { name: "Vite", icon: Vite },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/uses", icon: TerminalIcon, label: "Uses" },
  ],
  contact: {
    email: "juancaalvarado@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Juan-Miguel-alvarado",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:juancaalvarado@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [] as ReadonlyArray<{
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }>,
  education: [] as ReadonlyArray<{
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }>,
  projects: [
    {
      title: "why-cli",
      href: "https://github.com/Juan-Miguel-alvarado/why-cli",
      dates: "2026",
      active: true,
      description:
        "git blame that answers *why*, not just *who* — line-level git archaeology with no network and no configuration.",
      technologies: ["Rust", "Git", "CLI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Juan-Miguel-alvarado/why-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/why-cli.gif",
      video: "",
    },
    {
      title: "deepsearch",
      href: "https://github.com/Juan-Miguel-alvarado/deepsearch",
      dates: "2026",
      active: true,
      description:
        "Relevance-ranked (BM25) full-text search over all your files, with an interactive TUI. Written in Rust.",
      technologies: ["Rust", "BM25", "TUI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Juan-Miguel-alvarado/deepsearch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/deepsearch.gif",
      video: "",
    },
  ],
  hackathons: [] as ReadonlyArray<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    links: readonly { title: string; icon: React.ReactNode; href: string }[];
  }>,
} as const;
