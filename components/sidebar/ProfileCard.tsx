import Image from "next/image";
import type { Links } from "@/types/content";
import { Link } from "@/components/Link";

export function ProfileCard({
  name,
  role,
  avatarSrc = "/avatar.jpg",
  links,
}: {
  name: string;
  role: string;
  avatarSrc?: string;
  links: Links;
}) {
  return (
    <div className="space-y-4">
      <div className="relative h-50 w-50 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          src={avatarSrc}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-1">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{role}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href={links.github}
          className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
        >
          GitHub
        </Link>

        <span className="text-zinc-300 dark:text-zinc-700">·</span>

        <Link
          href={links.email}
          className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
        >
          Email
        </Link>

        <span className="text-zinc-300 dark:text-zinc-700">·</span>

        <Link
          href={links.linkedin}
          className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
