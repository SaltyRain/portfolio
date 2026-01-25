import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";

export function TagSection({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <Section title={title}>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </Section>
  );
}
