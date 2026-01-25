import { Link } from "@/components/Link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16 sm:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-black dark:text-zinc-300">
            <span className="font-mono">$</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>404</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Page not found
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            This page doesn&apos;t exist (or it moved). If you think this is a
            bug, feel free to reach out.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:hover:bg-zinc-950"
            >
              Go home
            </Link>

            <Link
              href={site.links.email}
              className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
            >
              Email me
            </Link>
          </div>

          <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-500">
            Error code: 404
          </div>
        </div>
      </div>
    </div>
  );
}
