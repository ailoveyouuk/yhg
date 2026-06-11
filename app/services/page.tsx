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
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Services & Repairs</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-5">Keeping you on the road</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              With over 150 years of combined experience, our team services and repairs all makes and models — from everyday runarounds to prestige and classic vehicles. Free estimates always available.
            </p>
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category && s.active);
        return (
          <section key={category} className="bg-white border-b border-slate-100 py-14">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-amber-500 rounded block" />
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryServices.map((s) => (
                  <div key={s.id} className="rounded-xl border border-slate-100 bg-slate-50 hover:border-amber-200 hover:bg-amber-50/30 transition-colors p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-slate-900">{s.name}</h3>
                      <span className={`shrink-0 text-sm font-bold px-3 py-1 rounded-full ${s.price_type === 'quote' ? 'bg-slate-200 text-slate-600' : 'bg-amber-100 text-amber-700'}`}>
                        {priceLabel(s)}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                    {s.includes.length > 0 && (
                      <ul className="space-y-1 mb-5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                            <svg className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.duration_hours && (
                      <p className="text-xs text-slate-400 mb-4">⏱ Approx. {s.duration_hours < 1 ? '30 mins' : `${s.duration_hours} hr${s.duration_hours > 1 ? 's' : ''}`}</p>
                    )}
                    {s.booking_available ? (
                      <Link href={`/contact?service=${s.id}`} className="block w-full text-center bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2.5 rounded text-sm transition-colors">
                        Book Now
                      </Link>
                    ) : (
                      <Link href="/contact" className="block w-full text-center border border-slate-300 hover:border-slate-500 text-slate-600 font-semibold py-2.5 rounded text-sm transition-colors">
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

      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Opening Hours</h2>
              <table className="text-sm w-full max-w-xs">
                <tbody className="divide-y divide-slate-100">
                  {[['Mon – Fri', '8:00am – 5:30pm'], ['Saturday', '8:30am – 12:00 noon'], ['Sunday', 'Closed']].map(([day, hrs]) => (
                    <tr key={day}>
                      <td className="py-3 font-medium text-slate-700 pr-8">{day}</td>
                      <td className={`py-3 ${hrs === 'Closed' ? 'text-slate-400' : 'text-slate-500'}`}>{hrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-sm text-slate-500">Free estimates always available. Call or drop in — we are always happy to take a look.</p>
            </div>
            <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Not sure what you need?</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Call us or send an enquiry. We will advise you honestly on what needs doing and when — no unnecessary upselling.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded text-sm transition-colors">
                  Send an Enquiry
                </Link>
                <a href="tel:01604696225" className="inline-flex items-center justify-center border border-slate-300 hover:border-slate-500 text-slate-700 font-semibold px-6 py-3 rounded text-sm transition-colors">
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
