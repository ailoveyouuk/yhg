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
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">For Sale</span>
              <h1 className="text-4xl font-bold mt-2 mb-3">Vans for Sale</h1>
              <p className="text-slate-300 max-w-xl">
                Quality used vans prepared by our own mechanics. We also work with fleet operators — get in touch for volume enquiries.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/cars" className="border border-slate-500 hover:border-amber-400 text-slate-300 hover:text-amber-400 px-5 py-2.5 rounded text-sm font-medium transition-colors">
                View Cars →
              </Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-5 py-2.5 rounded text-sm transition-colors">
                Fleet Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-500 text-sm mb-8">{vans.length} van{vans.length !== 1 ? 's' : ''} currently available</p>
          {vans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vans.map((v) => (
                <div key={v.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative bg-slate-100 h-48 flex items-center justify-center">
                    {v.images.length > 0 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={v.images[0]} alt={`${v.year} ${v.make} ${v.model}`} className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-14 h-14 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    )}
                    <span className="absolute top-3 right-3 bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded">Van</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{v.year} {v.make} {v.model}</h3>
                      <span className="text-lg font-bold text-amber-600 shrink-0">£{v.price.toLocaleString()}</span>
                    </div>
                    <p className="text-slate-500 text-xs mb-3">{v.variant}</p>
                    <div className="flex gap-4 text-xs text-slate-500 mb-4">
                      <span>{v.mileage.toLocaleString()} miles</span>
                      <span>{v.fuel}</span>
                      <span>{v.transmission}</span>
                    </div>
                    <Link href={`/vans/${v.id}`} className="block w-full text-center bg-slate-900 hover:bg-slate-700 text-white font-semibold px-4 py-2.5 rounded text-sm transition-colors">
                      View Details & Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p className="text-lg font-medium">No vans listed at the moment</p>
              <p className="text-sm mt-2">Call us — we may have vehicles not yet listed, or can source one for you.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Fleet operators welcome</h2>
            <p className="text-slate-500 text-sm mt-1">We work with businesses of all sizes. Call us to discuss your requirements.</p>
          </div>
          <a href="tel:01604696225" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded text-sm transition-colors whitespace-nowrap">
            Call 01604 696225
          </a>
        </div>
      </section>
    </>
  );
}
