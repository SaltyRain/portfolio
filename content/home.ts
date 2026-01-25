import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  projects: [
    {
      title: "Krona (e-commerce)",
      note: "Next.js, Prisma, Postgres",
      href: "https://www.kronawood.ru/",
    },
    { title: "Smart Search", note: "OpenSearch, hybrid retrieval, Python" },
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
};
