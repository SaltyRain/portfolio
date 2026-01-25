export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        {children}
      </div>
    </div>
  );
}
