import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Vehicle } from '@/types';
import vehiclesData from '@/data/vehicles.json';
import PageCard from '@/components/PageCard';
import CarGallery from '@/components/CarGallery';
import { BUSINESS_EMAIL, BUSINESS_PHONE } from '@/data/business';

const vehicles = vehiclesData as Vehicle[];

export async function generateStaticParams() {
  return vehicles.filter((v) => v.type === 'car').map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const v = vehicles.find((v) => v.id === id);
  if (!v) return {};
  return {
    title: `${v.year} ${v.make} ${v.model} — £${v.price.toLocaleString()}`,
    description: v.description,
  };
}

const specRows = (v: Vehicle) => [
  ['Make', v.make],
  ['Model', v.model],
  ['Variant', v.variant],
  ['Year', String(v.year)],
  ['Mileage', `${v.mileage.toLocaleString()} miles`],
  ['Colour', v.colour],
  ['Fuel type', v.fuel],
  ['Transmission', v.transmission],
  ['Doors', String(v.doors)],
  ['Engine', v.engine],
  ['Power', `${v.power_bhp} bhp`],
  ['CO₂', `${v.co2_gkm} g/km`],
  ['MOT expiry', v.mot_expiry],
  ['Service history', v.service_history],
  ['Previous owners', String(v.previous_owners)],
  ['HPI clear', v.hpi_clear ? 'Yes' : 'No'],
  ['V5C present', v.v5c_present ? 'Yes' : 'No'],
];

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const v = vehicles.find((v) => v.id === id && v.type === 'car');
  if (!v) notFound();

  return (
    <PageCard>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#EFEFEB] text-[#5A5A57] text-xs px-6 py-3">
        <div className="max-w-7xl mx-auto flex gap-2 items-center tracking-wide">
          <Link href="/cars" className="hover:text-[#111110] transition-colors">Cars for Sale</Link>
          <span className="text-[#EFEFEB]">/</span>
          <span className="text-[#111110]">{v.year} {v.make} {v.model}</span>
        </div>
      </div>

      <div className="bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: gallery + specs */}
            <div className="lg:col-span-2 space-y-5">

              {/* Gallery — standardised 7:5 aspect ratio template, see components/CarGallery.tsx */}
              <CarGallery images={v.images} alt={`${v.year} ${v.make} ${v.model}`} />

              {/* Description */}
              <div className="bg-white border border-[#EFEFEB] p-7">
                <div className="w-5 h-[2px] bg-[#004225] mb-5" />
                <h2 className="text-base font-semibold text-[#111110] mb-4 tracking-tight">About this vehicle</h2>
                <p className="text-[#5A5A57] leading-relaxed text-sm">{v.description}</p>
              </div>

              {/* Features */}
              {v.features.length > 0 && (
                <div className="bg-white border border-[#EFEFEB] p-7">
                  <div className="w-5 h-[2px] bg-[#004225] mb-5" />
                  <h2 className="text-base font-semibold text-[#111110] mb-5 tracking-tight">Key features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#5A5A57]">
                        <svg className="w-3.5 h-3.5 text-[#004225] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Right: price + enquiry */}
            <div>
              <div className="bg-white border border-[#EFEFEB] p-7 sticky top-24">
                <div className="mb-5">
                  <p className="text-xs text-[#5A5A57] uppercase tracking-[0.1em] mb-1">{v.year} {v.make} {v.model}</p>
                  <div className="text-3xl font-semibold text-[#004225] tracking-tight">£{v.price.toLocaleString()}</div>
                  <p className="text-[#5A5A57] text-sm mt-1">{v.variant}</p>
                </div>

                <div className="flex items-center gap-2 bg-[#F7F7F5] border border-[#EFEFEB] px-3.5 py-2.5 mb-5">
                  <svg className="w-4 h-4 text-[#004225] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <p className="text-[#111110] text-xs font-medium leading-snug">Includes 6-month warranty, full service &amp; MOT</p>
                </div>

                {v.status === 'reserved' && (
                  <div className="border border-[#EFEFEB] bg-[#F7F7F5] text-[#5A5A57] text-xs px-4 py-3 mb-5 tracking-wide uppercase">
                    This vehicle is currently reserved
                  </div>
                )}

                <div className="space-y-2.5 mb-6">
                  <a href={BUSINESS_PHONE.href}
                    className="flex items-center justify-center gap-2 w-full bg-[#004225] hover:bg-[#005a30] text-white font-medium py-3 text-sm transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call {BUSINESS_PHONE.display}
                  </a>
                  <a href={`${BUSINESS_EMAIL.href}?subject=Enquiry: ${v.year} ${v.make} ${v.model}&body=Hi, I'm interested in the ${v.year} ${v.make} ${v.model} listed at £${v.price.toLocaleString()}. Please get in touch.`}
                    className="flex items-center justify-center gap-2 w-full border border-[#EFEFEB] hover:border-[#111110] text-[#5A5A57] hover:text-[#111110] font-medium py-3 text-sm transition-colors">
                    Email Enquiry
                  </a>
                </div>

                {/* Full specification — sticky alongside gallery so it's always visible */}
                <div className="border-t border-[#EFEFEB] pt-6 mb-6">
                  <div className="w-4 h-[2px] bg-[#004225] mb-4" />
                  <h3 className="text-sm font-semibold text-[#111110] mb-4 tracking-tight">Full specification</h3>
                  <div className="max-h-80 overflow-y-auto pr-1">
                    <table className="w-full text-sm">
                      <tbody>
                        {specRows(v).map(([label, value]) => (
                          <tr key={label} className="border-b border-[#EFEFEB] last:border-0">
                            <td className="py-2 text-[#5A5A57] pr-4 w-1/2 text-[11px] uppercase tracking-[0.08em]">{label}</td>
                            <td className={`py-2 font-medium text-sm ${label === 'HPI clear' || label === 'V5C present' ? (value === 'Yes' ? 'text-[#004225]' : 'text-[#111110]') : 'text-[#111110]'}`}>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick enquiry form */}
                <div className="border-t border-[#EFEFEB] pt-6">
                  <div className="w-4 h-[2px] bg-[#004225] mb-4" />
                  <h3 className="text-sm font-semibold text-[#111110] mb-4 tracking-tight">Quick enquiry</h3>
                  <form
                    name="vehicle-enquiry"
                    method="POST"
                    data-netlify="true"
                    className="space-y-3"
                  >
                    <input type="hidden" name="form-name" value="vehicle-enquiry" />
                    <input type="hidden" name="vehicle" value={`${v.year} ${v.make} ${v.model} (${v.id})`} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email address"
                      className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white"
                    />
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Any questions?"
                      className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors resize-none bg-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#004225] hover:bg-[#005a30] text-white font-medium py-3 text-sm transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageCard>
  );
}
