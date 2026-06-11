import Link from 'next/link';
import type { Metadata } from 'next';
import type { Service } from '@/types';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Servicing & Repairs',
  description: 'Full manufacturer-specification car and van servicing, MOT, diagnostics, laser alignment and mechanical repairs for all makes and models in Northamptonshire.',
};

const services = servicesData as Service[];
const categories = [...new Set(services.filter((s) => s.active).map((s) => s.category))];

function priceLabel(s: Service) {
  if (s.price_type === 'quote') return 'Free quote';
  if (s.price === null) return 'POA';
  return `${s.price_type === 'from' ? 'From ' : ''}£${s.price.toFixed(2)}`;
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#004225] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-[0.2em]">Services & Repairs</span>
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold mt-3 mb-5">Keeping you on the road</h1>
            <p className="text-green-100/70 text-lg leading-relaxed">
              With over 150 years of combined experience, our team services and repairs all makes and models — from everyday runarounds to prestige and classic vehicles. Free estimates always available.
            </p>
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category && s.active);
        return (
          <section key={category} className="bg-white border-b border-stone-100 py-14">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-serif font-semibold text-[#1C1C1A] mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-[#C9A84C] rounded block" />
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryServices.map((s) => (
                  <div key={s.id} className="rounded-xl border border-stone-100 bg-[#F9F7F4] hover:border-[#C9A84C]/30 hover:bg-[#F7F1E4]/30 transition-colors p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-[#1C1C1A]">{s.name}</h3>
                      <span className={`shrink-0 text-sm font-bold px-3 py-1 rounded-full ${s.price_type === 'quote' ? 'bg-stone-100 text-stone-600' : 'bg-[#F7F1E4] text-[#A8882C]'}`}>
                        {priceLabel(s)}
                      </span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.description}</p>
                    {s.includes.length > 0 && (
                      <ul className="space-y-1 mb-5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-stone-500">
                            <svg className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.duration_hours && (
                      <p className="text-xs text-stone-400 mb-4">⏱ Approx. {s.duration_hours < 1 ? '30 mins' : `${s.duration_hours} hr${s.duration_hours > 1 ? 's' : ''}`}</p>
                    )}
                    {s.booking_available ? (
                      <Link href={`/contact?service=${s.id}`} className="block w-full text-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold py-2.5 rounded text-sm transition-colors">
                        Book Now
                      </Link>
                    ) : (
                      <Link href="/contact" className="block w-full text-center border border-stone-200 hover:border-white/20 text-stone-600 font-semibold py-2.5 rounded text-sm transition-colors">
                        Get a Quote
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-[#F9F7F4] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-semibold text-[#1C1C1A] mb-5">Opening Hours</h2>
              <table className="text-sm w-full max-w-xs">
                <tbody className="divide-y divide-stone-100">
                  {[['Mon – Fri', '8:00am – 5:30pm'], ['Saturday', '8:30am – 12:00 noon'], ['Sunday', 'Closed']].map(([day, hrs]) => (
                    <tr key={day}>
                      <td className="py-3 font-medium text-stone-700 pr-8">{day}</td>
                      <td className={`py-3 ${hrs === 'Closed' ? 'text-stone-400' : 'text-stone-500'}`}>{hrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-sm text-stone-500">Free estimates always available. Call or drop in — we are always happy to take a look.</p>
            </div>
            <div className="flex-1 bg-[#F7F1E4] border border-[#C9A84C]/30 rounded-xl p-7">
              <h2 className="text-xl font-serif font-semibold text-[#1C1C1A] mb-2">Not sure what you need?</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-5">
                Call us or send an enquiry. We will advise you honestly on what needs doing and when — no unnecessary upselling.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#D4B86A] text-[#1C1C1A] font-bold px-6 py-3 rounded text-sm transition-colors">
                  Send an Enquiry
                </Link>
                <a href="tel:01604696225" className="inline-flex items-center justify-center border border-stone-200 hover:border-white/20 text-stone-700 font-semibold px-6 py-3 rounded text-sm transition-colors">
                  Call 01604 696225
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
