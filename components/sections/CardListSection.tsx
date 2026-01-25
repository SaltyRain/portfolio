import { Section } from "@/components/ui/Section";

type Item = {
  title: string;
  note?: string;
  href?: string;
};

export function CardListSection({
  title,
  items,
}: {
  title: string;
  items: readonly Item[];
}) {
  return (
    <Section title={title}>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black"
          >
            <div className="space-y-1">
              <div className="text-sm font-semibold">
                {item.href ? (
                  <a
                    href={item.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </div>

              {item.note ? (
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.note}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
