import type { ImageMetadata } from "astro";

// Optional: falls du schon Assets hast, importieren:
import mailindoCover from "../assets/work/mailindo.png";
import fulviroCover from "../assets/work/fulviro.png";
import klassyCover from "../assets/work/klassy.png"

export type WorkStatus = "Live" | "In development" | "Private";

export type WorkItem = {
  slug: string;
  name: string;
  tagline: string;
  status: WorkStatus;
  bullets: string[];
  description: string;
  highlights: { label: string; value: string }[];
  stack: string[];
  role: string[];
  year?: string;
  website?: string;

  // NEW (optional until assets exist)
  coverImage?: ImageMetadata;
  coverGradient: string; // Tailwind gradient classes (without "bg-gradient-to-br")
};

export const work: WorkItem[] = [
  {
    slug: "mailindo",
    name: "Mailindo",
    tagline: "Email automation & workflow operating system for teams.",
    status: "Live",
    bullets: [
      "Multi-tenant architecture, auth & org model",
      "Mailbox onboarding, parsing, extraction & workflow rules",
      "Integrations-first approach (Microsoft / Google)",
    ],
    description:
      "Mailindo is an operations-focused automation layer for shared inboxes — extracting data, classifying intent, and triggering workflows across tools.",
    highlights: [
      { label: "Focus", value: "Inbox workflows" },
      { label: "Strength", value: "Parsing + automation" },
      { label: "Stage", value: "In development" },
    ],
    stack: ["Next.js", "API services", "OAuth", "Queue jobs", "Postgres"],
    role: ["Product architecture", "Engineering", "Integrations"],
    year: "2025–",
    coverImage: mailindoCover,
    coverGradient: "from-cyan-300/35 via-violet-300/25 to-indigo-300/25",
    website: "https://mailindo.ai/en",
  },
  {
    slug: "fulviro",
    name: "Fulviro",
    tagline: "Brand & product work — engineered with precision.",
    status: "In development",
    bullets: [
      "Product design & implementation",
      "Performance and UI discipline",
      "Infrastructure & deployment fundamentals",
    ],
    description:
      "Fulviro is a private brand/product engagement. We focus on building sharp UI systems and reliable engineering foundations.",
    highlights: [
      { label: "Type", value: "Private engagement" },
      { label: "Focus", value: "UI + performance" },
      { label: "Stage", value: "Ongoing" },
    ],
    stack: ["Modern web stack", "Design system", "Deployment"],
    role: ["Product design", "Frontend engineering", "Delivery"],
    year: "2025–",
    coverImage: fulviroCover,
    coverGradient: "from-violet-500/30 via-indigo-300/20 to-cyan-300/20",
    website: "https://fulviro.com",
  },
  {
    slug: "klassy",
    name: "Klassy",
    tagline: "Custom shopify apps & integrations for e-commerce brands.",
    status: "Live",
    bullets: [
      "Shopify Admin app development",
      "Data sync & automation",
      "Payment processing",
    ],
    description: "We built several custom Shopify apps for Klassy, an e-commerce brand specializing in premium fashion accessories. These apps enhanced their store's functionality and streamlined operations.",
    highlights: [
      { label: "Type", value: "Custom Shopify apps" },
      { label: "Focus", value: "E-commerce automation" },
      { label: "Stage", value: "Live" },
    ],
    stack: ["Shopify API", "Node.js", "Shopify Admin App"],
    role: ["Shopify development", "Integration"],
    year: "2024",
    coverImage: klassyCover,
    coverGradient: "from-pink-300/30 via-purple-300/20 to-indigo-300/20",
    website: "https://klassy-store.com",
  }
];

export const getWorkBySlug = (slug: string) => work.find((w) => w.slug === slug);
export const getWorkOgTitle = (name: string) => `${name} — Work · inviqon`;