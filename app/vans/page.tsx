import Link from 'next/link';
import type { Metadata } from 'next';
import type { Vehicle } from '@/types';
import vehiclesData from '@/data/vehicles.json';

export const metadata: Metadata = {
  title: 'Vans for Sale',
  description: 'Quality used vans for sale at Yardley Hastings Garage, Northamptonshire. All makes and models, inspected by our own mechanics.',
};

const vehicles = vehiclesData as Vehicle[];
const vans = vehicles.filter((v) => v.type === 'van' && v.status !== 'sold');

export default function VansPage() {
  return (
    <>
      <section className="bg-[#111110] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#004225]" />
                <span className="eyebrow text-[#888884]">For Sale</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Vans for Sale</h1>
              <p className="text-white/50 max-w-xl font-light">
                Quality used vans prepared by our own mechanics. We also work with fleet operators — get in touch for volume enquiries.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/cars"
                className="border border-white/20 hover:border-white/50 text-white/60 hover:text-white px-5 py-2.5 text-sm font-medium transition-colors">
                View Cars
              </Link>
              <Link href="/contact"
                className="border border-white hover:bg-white hover:text-[#111110] text-white font-medium px-5 py-2.5 text-sm transition-colors">
                Fleet Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F5] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#888884] text-sm mb-10 tracking-wide">
            {vans.length} van{vans.length !== 1 ? 's' : ''} currently available
          </p>
          {vans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {vans.map((v) => (
                <div key={v.id} className="bg-white border border-[#EFEFEB] hover:border-[#111110]/20 hover:shadow-sm transition-all overflow-hidden group">
                  <div className="relative bg-[#F7F7F5] h-52 flex items-center justify-center overflow-hidden">
                    {v.images.length > 0 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={v.images[0]} alt={`${v.year} ${v.make} ${v.model}`} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                    ) : (
                      <svg className="w-12 h-12 text-[#EFEFEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    )}
                    <span className="absolute top-3 right-3 bg-white/90 text-[#111110] text-[10px] font-medium px-2.5 py-1 uppercase tracking-wider">Van</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-semibold text-[#111110] tracking-tight">{v.year} {v.make} {v.model}</h3>
                      <span className="text-[#111110] font-semibold shrink-0 text-lg">£{v.price.toLocaleString()}</span>
                    </div>
                    <p className="text-[#888884] text-xs mb-4 tracking-wide">{v.variant}</p>
                    <div className="flex gap-4 text-xs text-[#888884] mb-5">
                      <span>{v.mileage.toLocaleString()} miles</span>
                      <span>{v.fuel}</span>
                      <span>{v.transmission}</span>
                    </div>
                    <Link href={`/vans/${v.id}`}
                      className="block w-full text-center border border-[#111110] hover:bg-[#111110] hover:text-white text-[#111110] font-medium px-4 py-2.5 text-sm transition-colors">
                      View Details & Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-[#EFEFEB] bg-white">
              <p className="text-[#111110] font-medium">No vans listed at the moment</p>
              <p className="text-sm mt-2 text-[#888884]">Call us — we may have vehicles not yet listed, or can source one for you.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white border-t border-[#EFEFEB] py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="w-5 h-[2px] bg-[#004225] mb-5" />
            <h2 className="text-xl font-semibold text-[#111110] tracking-tight">Fleet operators welcome</h2>
            <p className="text-[#888884] text-sm mt-1">We work with businesses of all sizes. Call us to discuss your requirements.</p>
          </div>
          <a href="tel:01604696225"
            className="border border-[#111110] hover:bg-[#111110] hover:text-white text-[#111110] font-medium px-6 py-3 text-sm transition-colors whitespace-nowrap">
            Call 01604 696225
          </a>
        </div>
      </section>
    </>
  );
}
