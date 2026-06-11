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
      {/* Page header */}
      <section className="bg-[#111110] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#004225]" />
              <span className="eyebrow text-[#888884]">Services & Repairs</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Keeping you on the road</h1>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              With over 150 years of combined experience, our team services and repairs all makes and models.
              Free estimates always available.
            </p>
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category && s.active);
        return (
          <section key={category} className="bg-white border-b border-[#EFEFEB] py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-5 h-[2px] bg-[#004225]" />
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#888884]">{category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EFEFEB]">
                {categoryServices.map((s) => (
                  <div key={s.id} className="bg-white hover:bg-[#F7F7F5] transition-colors p-8 group">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-semibold text-[#111110] tracking-tight">{s.name}</h3>
                      <span className={`shrink-0 text-xs font-semibold px-3 py-1.5 ${
                        s.price_type === 'quote'
                          ? 'bg-[#F7F7F5] text-[#888884]'
                          : 'bg-[#EAF0EC] text-[#004225]'
                      }`}>
                        {priceLabel(s)}
                      </span>
                    </div>
                    <p className="text-[#888884] text-sm leading-relaxed mb-5">{s.description}</p>
                    {s.includes.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-[#888884]">
                            <svg className="w-3 h-3 text-[#004225] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.duration_hours && (
                      <p className="text-xs text-[#888884]/60 mb-5">
                        Approx. {s.duration_hours < 1 ? '30 mins' : `${s.duration_hours} hr${s.duration_hours > 1 ? 's' : ''}`}
                      </p>
                    )}
                    {s.booking_available ? (
                      <Link href={`/contact?service=${s.id}`}
                        className="block w-full text-center bg-[#004225] hover:bg-[#005a30] text-white font-medium py-2.5 text-sm transition-colors">
                        Book Now
                      </Link>
                    ) : (
                      <Link href="/contact"
                        className="block w-full text-center border border-[#EFEFEB] hover:border-[#004225] hover:text-[#004225] text-[#888884] font-medium py-2.5 text-sm transition-colors">
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

      {/* Hours & CTA */}
      <section className="bg-[#F7F7F5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-xl font-semibold text-[#111110] mb-6 tracking-tight">Opening Hours</h2>
              <table className="text-sm w-full max-w-xs">
                <tbody>
                  {[['Mon – Fri', '8:00am – 5:30pm'], ['Saturday', '8:30am – 12:00 noon'], ['Sunday', 'Closed']].map(([day, hrs]) => (
                    <tr key={day} className="border-b border-[#EFEFEB] last:border-0">
                      <td className="py-3 font-medium text-[#111110] pr-10">{day}</td>
                      <td className={`py-3 ${hrs === 'Closed' ? 'text-[#888884]/50' : 'text-[#888884]'}`}>{hrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-sm text-[#888884]">Free estimates always available. Call or drop in — we are always happy to take a look.</p>
            </div>
            <div className="flex-1 border border-[#004225]/20 bg-[#EAF0EC]/30 p-8">
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-xl font-semibold text-[#111110] mb-3 tracking-tight">Not sure what you need?</h2>
              <p className="text-[#888884] text-sm leading-relaxed mb-7">
                Call us or send an enquiry. We will advise you honestly on what needs doing and when — no unnecessary upselling.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact"
                  className="inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-medium px-6 py-3 text-sm transition-colors">
                  Send an Enquiry
                </Link>
                <a href="tel:01604696225"
                  className="inline-flex items-center justify-center border border-[#EFEFEB] hover:border-[#111110] text-[#888884] hover:text-[#111110] font-medium px-6 py-3 text-sm transition-colors">
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
