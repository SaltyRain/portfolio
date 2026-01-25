import type { Links } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { Link } from "@/components/Link";

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
          <Link
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            href={links.email}
          >
            {emailLabel}
          </Link>
        </div>

        <div>
          GitHub:{" "}
          <Link
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            href={links.github}
          >
            {githubLabel}
          </Link>
        </div>

        <div>
          LinkedIn:{" "}
          <Link
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            href={links.linkedin}
          >
            {linkedinLabel}
          </Link>
        </div>
      </div>
    </Section>
  );
}
