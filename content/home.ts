import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  projects: [
    {
      title: "Krona — E-commerce Platform",
      note: "E-commerce platform for a timber manufacturer.",
      href: "https://www.kronawood.ru/",
      stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Material UI"],
      highlights: [
        "SEO-first architecture",
        "Hierarchical data model & facets",
        "Custom CMS with role-based access",
        "Type-safe forms & validation",
      ],
    },
    {
      title: "Angelina Garipova — Portfolio Website",
      note: "Custom portfolio site for an architect (design + build + maintenance).",
      href: "https://www.angelinagaripova.com/",
      stack: ["Next.js", "TypeScript", "CSS Modules"],
      highlights: [
        "File-based CMS",
        "Dynamic routes",
        "Zod schema validation",
        "Image metadata",
      ],
    },
    {
      title: "Smart Search",
      note: "Hybrid search experiments and indexing pipeline.",
      stack: ["Python", "OpenSearch", "FastAPI"],
      highlights: [
        "Lexical + vector retrieval",
        "Typed client layer",
        "Batch indexing",
      ],
    },
  ],
  contributes: [
    {
      title: "WoWAnalyzer",
      repo: "https://github.com/WoWAnalyzer/WoWAnalyzer",
      note: "Localization / contributions",
    },
    {
      title: "OpenDota",
      repo: "https://github.com/odota/web",
      note: "Localization / contributions",
    },
  ],
  education: [
    {
      title: "MSc Computer Science",
      institution: "University of Passau, Germany",
      href: "https://www.uni-passau.de/en/",
      period: "2021 - 2025",
      note: "Specialization in Data Science and Machine Learning.",
    },
    {
      title: "BSc Computer Science",
      institution: "ITMO University, Russia",
      href: "https://en.itmo.ru/",
      period: "2014 - 2019",
      note: "Core CS foundations with coursework in databases, OOP, UX/UI and computer graphics.",
    },
  ],
  tools: ["VS Code", "Terminal", "Copilot", "ChatGPT", "Discord", "Vercel"],
  experience: [
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "CI / CD",
    "Postgres",
    "Prisma",
    "OpenSearch / Elasticsearch",
    "Docker",
    "RAG / LLMs",
  ],
  languages: ["English (C1)", "German (B1)", "Russian (Native)"],
};
