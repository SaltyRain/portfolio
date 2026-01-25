export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-black dark:text-zinc-200">
      {children}
    </span>
  );
}
