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
              education="MSc Computer Science"
              links={site.links}
            />
            <TagSection title="Tools & Software" items={home.tools} />
            <TagSection title="Experience" items={home.experience} />
            <TagSection title="Languages" items={home.languages} />
          </>
        }
        right={
          <>
            <Hero
              handle="SaltyRain"
              headline="Hey, I’m Timur — a full-stack engineer building modern web products."
              description="I focus on frontend architecture and UX, while actively working across the backend, data and AI-powered features. Experienced with TypeScript, Python, Next.js, Postgres and search-driven systems."
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

            <CardListSection
              title="Education"
              items={home.education.map((e) => ({
                title: e.title,
                note: `${e.institution} · ${e.period}`,
                href: e.href,
                extranote: e.note,
              }))}
            />

            <ContactSection
              links={site.links}
              emailLabel="tbgaripov@gmail.com"
              githubLabel="SaltyRain"
              linkedinLabel="tbgaripov"
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
