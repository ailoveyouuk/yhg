import Image from 'next/image';
import Link from 'next/link';
import type { Vehicle } from '@/types';

function formatPrice(price: number) {
  return `£${price.toLocaleString('en-GB')}`;
}

/**
 * Subtle "in stock now" preview shown only on the active Stocklist/landing
 * carousel panel — lets visitors see real cars at a glance without leaving
 * the homepage, shortening the path to a listing they like.
 *
 * `vehicles` is fetched server-side from Supabase (see lib/vehicles.ts) and
 * passed down from app/page.tsx, already limited to the 3 most recent.
 */
export default function StocklistPreview({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) return null;

  return (
    <div className="hidden lg:flex flex-col gap-2.5 absolute right-10 xl:right-14 top-1/2 -translate-y-1/2 pointer-events-auto">
      <span className="text-white/45 text-[10px] tracking-[0.18em] uppercase font-medium mb-0.5 pl-0.5">
        In Stock Now
      </span>
      {vehicles.map((v) => (
        <Link
          key={v.id}
          href={`/cars/${v.id}`}
          className="group flex items-center gap-3 w-60 bg-white/8 hover:bg-white/14 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-lg pr-4 overflow-hidden transition-all duration-200"
        >
          <div className="relative w-16 h-14 shrink-0 overflow-hidden">
            <Image
              src={v.images[0]}
              alt={`${v.make} ${v.model}`}
              fill
              sizes="64px"
              className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
          <div className="min-w-0 py-2.5">
            <div className="text-white text-[13px] font-semibold tracking-tight truncate">
              {v.make} {v.model}
            </div>
            <div className="text-white/55 text-[11px] mt-0.5">{formatPrice(v.price)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
 * Compact horizontal variant for the mobile stacked layout — a scrollable
 * row of small vehicle chips rather than the vertical desktop stack.
 */
export function StocklistPreviewMobile({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) return null;

  return (
    <div className="flex gap-2.5 overflow-x-auto mb-4 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {vehicles.map((v) => (
        <Link
          key={v.id}
          href={`/cars/${v.id}`}
          className="group flex items-center gap-2.5 shrink-0 bg-white/10 active:bg-white/16 backdrop-blur-md border border-white/15 rounded-lg pr-3 overflow-hidden"
        >
          <div className="relative w-12 h-11 shrink-0 overflow-hidden">
            <Image
              src={v.images[0]}
              alt={`${v.make} ${v.model}`}
              fill
              sizes="48px"
              className="object-cover opacity-90"
            />
          </div>
          <div className="min-w-0 py-1.5">
            <div className="text-white text-[12px] font-semibold tracking-tight whitespace-nowrap">
              {v.make} {v.model}
            </div>
            <div className="text-white/55 text-[10px]">{formatPrice(v.price)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
