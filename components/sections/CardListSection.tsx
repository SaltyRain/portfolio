import { Section } from "@/components/ui/Section";

type Item = {
  title: string;
  note?: string;
  extranote?: string;
  href?: string;
  highlights?: readonly string[];
  stack?: readonly string[];
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
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="text-sm font-semibold">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
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

                {item.extranote ? (
                  <div className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                    {item.extranote}
                  </div>
                ) : null}
              </div>

              {item.stack?.length ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] leading-none text-zinc-700 dark:border-zinc-800 dark:bg-black dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {item.highlights?.length ? (
                <div className="pt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="text-zinc-500 dark:text-zinc-500">
                    Key points:
                  </span>{" "}
                  {item.highlights.slice(0, 3).join(" · ")}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
