import { PageShell } from "@/components/layout/PageShell";
import { TwoCol } from "@/components/layout/TwoCol";

import { ProfileCard } from "@/components/sidebar/ProfileCard";
import { TagSection } from "@/components/sidebar/TagSection";

import { Hero } from "@/components/sections/Hero";
import { CardListSection } from "@/components/sections/CardListSection";
import { ContactSection } from "@/components/sections/ContactSection";

import { site } from "@/content/site";
import { home } from "@/content/home";

export default function Home() {
  return (
    <PageShell>
      <TwoCol
        left={
          <>
            <ProfileCard
              name={site.name}
              role="Full-stack Engineer"
              links={site.links}
            />
            <TagSection title="Tools & Software" items={home.tools} />
            <TagSection title="Experience" items={home.experience} />
          </>
        }
        right={
          <>
            <Hero
              handle="SaltyRain"
              headline="Hey, I'm Timur — a full-stack engineer building web products and applied search systems."
              description="I work mostly with TypeScript, Next.js, Postgres. I like clean UX, fast pages, and pragmatic systems that ship."
            />

            <CardListSection title="Projects" items={home.projects} />

            <CardListSection
              title="Contributes to"
              items={home.contributes.map((c) => ({
                title: c.title,
                note: c.note,
                href: c.repo,
              }))}
            />

            <ContactSection
              links={site.links}
              emailLabel="tbgaripov@gmail.com"
              githubLabel="SaltyRain"
            />

            <footer className="pt-6 text-xs text-zinc-500 dark:text-zinc-500">
              © {new Date().getFullYear()} {site.name}
            </footer>
          </>
        }
      />
    </PageShell>
  );
}
