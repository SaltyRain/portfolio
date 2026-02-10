import Image from "next/image";
import type { Links } from "@/types/content";
import { Link } from "@/components/Link";
import { MapPin } from "lucide-react";

export function ProfileCard({
  name,
  role,
  location,
  education,
  avatarSrc = "/avatar.jpg",
  links,
}: {
  name: string;
  role: string;
  location: string;
  education: string;
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
        <div className="text-xs text-zinc-500 dark:text-zinc-500">
          {education}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-500 mt-2">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{location}</span>
        </div>
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

        <span className="text-zinc-300 dark:text-zinc-700">·</span>

        <Link
          href={links.leetcode}
          className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
        >
          LeetCode
        </Link>
      </div>
    </div>
  );
}
