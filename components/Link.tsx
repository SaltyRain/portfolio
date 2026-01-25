import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Link({ href, children, className }: Props) {
  const isExternalHttp = /^https?:\/\//.test(href);
  const isSpecialScheme = /^(mailto:|tel:)/.test(href);

  if (isExternalHttp) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (isSpecialScheme) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
