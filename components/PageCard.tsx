/**
 * PageCard — the outer container for all inner pages.
 *
 * Creates the "floating card on canvas" effect: the off-white page background
 * peeks at all four edges, the card rounds its corners and clips its children,
 * and a subtle shadow provides depth — matching the carousel panel aesthetic.
 *
 * Usage: wrap every inner page's return value in <PageCard>.
 * Do NOT use on the homepage (carousel handles its own panel treatment).
 */
export default function PageCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-3 mt-2 mb-3 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.15)] bg-white">
      {children}
    </div>
  );
}
