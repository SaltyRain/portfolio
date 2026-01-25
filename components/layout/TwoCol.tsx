export function TwoCol({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-[260px_1fr]">
      <aside className="space-y-8">{left}</aside>
      <main className="space-y-12">{right}</main>
    </div>
  );
}
