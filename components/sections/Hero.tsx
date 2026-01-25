export function Hero({
  handle,
  headline,
  description,
}: {
  handle: string;
  headline: string;
  description: string;
}) {
  return (
    <header className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-black dark:text-zinc-300">
        <span className="font-mono">$ {handle}</span>
        <span className="text-zinc-400 dark:text-zinc-600">/</span>
        <span>portfolio</span>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {headline}
      </h1>

      <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </header>
  );
}
