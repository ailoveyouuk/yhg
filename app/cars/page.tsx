import Link from 'next/link';
import type { Metadata } from 'next';
import type { Vehicle } from '@/types';
import vehiclesData from '@/data/vehicles.json';

export const metadata: Metadata = {
  title: 'Cars for Sale',
  description: 'Quality used cars for sale at Yardley Hastings Garage, Northamptonshire. Honest, independent family garage. Vehicle sourcing also available.',
};

const vehicles = vehiclesData as Vehicle[];
const cars = vehicles.filter((v) => v.type === 'car' && v.status !== 'sold');

function badge(status: Vehicle['status']) {
  if (status === 'reserved') return <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Reserved</span>;
  return null;
}

function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Image / placeholder */}
      <div className="relative bg-stone-100 h-48 flex items-center justify-center">
        {v.images.length > 0 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={v.images[0]} alt={`${v.year} ${v.make} ${v.model}`} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-14 h-14 text-green-100/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        )}
        {badge(v.status)}
        <span className="absolute top-3 right-3 bg-[#C9A84C] text-[#1C1C1A] text-xs font-bold px-2 py-1 rounded">{v.fuel}</span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-[#1C1C1A] leading-tight">{v.year} {v.make} {v.model}</h3>
          <span className="text-lg font-bold text-[#A8882C] shrink-0">£{v.price.toLocaleString()}</span>
        </div>
        <p className="text-stone-500 text-xs mb-3">{v.variant}</p>

        <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-500 mb-4">
          <span>🔢 {v.mileage.toLocaleString()} miles</span>
          <span>⚙️ {v.transmission}</span>
          <span>🎨 {v.colour}</span>
          <span>👤 {v.previous_owners} owner{v.previous_owners !== 1 ? 's' : ''}</span>
          {v.hpi_clear && <span className="text-[#004225] font-medium">✓ HPI Clear</span>}
          {v.service_history && <span className="text-[#004225] font-medium col-span-2">✓ {v.service_history}</span>}
        </div>

        <Link
          href={`/cars/${v.id}`}
          className="block w-full text-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-4 py-2.5 rounded text-sm transition-colors"
        >
          View Details & Enquire
        </Link>
      </div>
    </div>
  );
}

export default function CarsPage() {
  return (
    <>
      <section className="bg-[#004225] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-wider">For Sale</span>
              <h1 className="text-4xl font-bold mt-2 mb-3">Cars for Sale</h1>
              <p className="text-green-100/70 max-w-xl">
                Quality used cars, all checked and prepared by our own mechanics.
                Can&apos;t find what you&apos;re after? We can source it for you.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/vans" className="border border-white/20 hover:border-amber-400 text-green-100/70 hover:text-[#C9A84C] px-5 py-2.5 rounded text-sm font-medium transition-colors">
                View Vans →
              </Link>
              <Link href="/contact" className="bg-[#C9A84C] hover:bg-[#D4B86A] text-[#1C1C1A] font-bold px-5 py-2.5 rounded text-sm transition-colors">
                Can&apos;t see what you want?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F4] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-stone-500 text-sm mb-8">{cars.length} car{cars.length !== 1 ? 's' : ''} currently available</p>
          {cars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((v) => <VehicleCard key={v.id} v={v} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-stone-400">
              <p className="text-lg font-medium">No cars listed at the moment</p>
              <p className="text-sm mt-2">Call us — we may have vehicles not yet listed, or can source one for you.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#1C1C1A]">Looking for something specific?</h2>
            <p className="text-stone-500 text-sm mt-1">We can source vehicles to your requirements. Call or send us a message.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="bg-[#C9A84C] hover:bg-[#D4B86A] text-[#1C1C1A] font-bold px-5 py-2.5 rounded text-sm transition-colors">Get in Touch</Link>
            <a href="tel:01604696225" className="border border-stone-200 hover:border-white/20 text-stone-700 font-semibold px-5 py-2.5 rounded text-sm transition-colors">01604 696225</a>
          </div>
        </div>
      </section>
    </>
  );
}
