import Link from 'next/link';
import type { Vehicle } from '@/types';

export default function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <div className="bg-white border border-[#EFEFEB] hover:border-[#111110]/20 hover:shadow-sm transition-all overflow-hidden group rounded-sm h-full flex flex-col">
      {/* Image / placeholder — fixed height so every card's photo area matches */}
      <div className="relative bg-[#F7F7F5] h-52 shrink-0 flex items-center justify-center overflow-hidden">
        {v.images.length > 0 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={v.images[0]} alt={`${v.year} ${v.make} ${v.model}`} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
        ) : (
          <svg className="w-12 h-12 text-[#EFEFEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        )}
        {v.status === 'reserved' && (
          <span className="absolute top-3 left-3 bg-[#111110] text-white text-[10px] font-medium px-2.5 py-1 uppercase tracking-wider rounded-sm">Reserved</span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 text-[#111110] text-[10px] font-medium px-2.5 py-1 uppercase tracking-wider rounded-sm">{v.fuel}</span>
      </div>

      {/* Content — flex-col so the button always pins to the bottom, regardless
          of how much variable-length text (title, variant, spec rows) sits above it */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-[#111110] leading-tight tracking-tight">{v.year} {v.make} {v.model}</h3>
          <span className="text-[#004225] font-semibold shrink-0 text-lg">£{v.price.toLocaleString()}</span>
        </div>
        <p className="text-[#5A5A57] text-xs mb-4 tracking-wide">{v.variant}</p>

        <div className="grid grid-cols-2 gap-y-1.5 text-xs text-[#5A5A57] mb-5">
          <span>{v.mileage.toLocaleString()} miles</span>
          <span>{v.transmission}</span>
          <span>{v.colour}</span>
          <span>{v.previous_owners} owner{v.previous_owners !== 1 ? 's' : ''}</span>
          {v.service_history && <span className="text-[#004225] font-medium col-span-2">{v.service_history}</span>}
        </div>

        <Link
          href={`/cars/${v.id}`}
          className="block w-full text-center bg-[#004225] hover:bg-[#005a30] text-white font-medium px-4 py-2.5 text-sm transition-colors rounded-sm mt-auto"
        >
          View Details &amp; Enquire
        </Link>
      </div>
    </div>
  );
}
