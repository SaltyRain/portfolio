import type { Links } from "@/types/content";
import { Section } from "@/components/ui/Section";

export function ContactSection({
  emailLabel,
  githubLabel,
  linkedinLabel,
  links,
}: {
  emailLabel: string;
  githubLabel: string;
  linkedinLabel: string;
  links: Links;
}) {
  return (
    <Section title="Contact">
      <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        <div>
          Email:{" "}
          <a
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            href={links.email}
          >
            {emailLabel}
          </a>
        </div>

        <div>
          GitHub:{" "}
          <a
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            href={links.github}
          >
            {githubLabel}
          </a>
        </div>

        <div>
          LinkedIn:{" "}
          <a
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            href={links.linkedin}
          >
            {linkedinLabel}
          </a>
        </div>
      </div>
    </Section>
  );
}
