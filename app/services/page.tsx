import Image from 'next/image';
import type { Metadata } from 'next';
import type { Service, ServiceCategory } from '@/types';
import servicesData from '@/data/services.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, FOUNDED_YEAR, OPENING_HOURS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Servicing & Repairs',
  description: 'Full manufacturer-specification car and van servicing, MOT, diagnostics, laser alignment and mechanical repairs for all makes and models in Northamptonshire.',
  openGraph: {
    title: 'Servicing & Repairs | Yardley Hastings Garage',
    description: 'Full manufacturer-specification car and van servicing, MOT, diagnostics, laser alignment and mechanical repairs for all makes and models in Northamptonshire.',
  },
  twitter: {
    title: 'Servicing & Repairs | Yardley Hastings Garage',
    description: 'Full manufacturer-specification car and van servicing, MOT, diagnostics, laser alignment and mechanical repairs for all makes and models in Northamptonshire.',
  },
};

const services = servicesData as Service[];

// Canonical category order for page display
const CATEGORY_ORDER: ServiceCategory[] = [
  'Servicing',
  'MOT',
  'Brakes',
  'Tyres & Alignment',
  'Engine & Drivetrain',
  'Steering & Suspension',
  'Electrical & Diagnostics',
  'Climate & Cooling',
  'Exhaust & Emissions',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export default function ServicesPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section
        className="bg-[#111110] text-white relative overflow-hidden flex items-end"
        style={{ minHeight: '60vh' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/workshop-interior-2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.55 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/90 via-[#111110]/60 to-[#111110]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">
                Servicing &amp; Repairs
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              Keeping you<br />on the road.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Established in {FOUNDED_YEAR}. Every make, every model —
              manufacturer-spec work, honest advice, and no unnecessary upselling.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Quote approach banner ─── */}
      <div className="bg-[#EAF0EC] border-b border-[#004225]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-4 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#004225] shrink-0" />
          <p className="text-sm text-[#004225] font-medium">
            All work is priced on enquiry. Add the services you need below and we&apos;ll
            call to discuss your requirements and provide an accurate, no-obligation quote.
          </p>
        </div>
      </div>

      {/* ─── Sticky category anchor nav ─── */}
      <nav className="sticky top-16 z-30 bg-[#F7F7F5]/95 backdrop-blur-sm border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div
            className="flex gap-1 overflow-x-auto py-2.5"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${toAnchorId(cat)}`}
                className="shrink-0 whitespace-nowrap text-[11px] tracking-[0.12em] uppercase font-medium px-3.5 py-1.5 rounded-full text-[#7A7A76] hover:bg-[#004225] hover:text-white transition-all duration-200"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Category sections ─── */}
      {categories.map((category) => {
        const categoryServices = services.filter(
          (s) => s.category === category && s.active
        );
        return (
          <section
            key={category}
            id={toAnchorId(category)}
            className="bg-white border-b border-[#EFEFEB] py-16 scroll-mt-28"
          >
            <div className="max-w-7xl mx-auto px-8 lg:px-14">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-5 h-[2px] bg-[#004225]" />
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#5A5A57]">
                  {category}
                </h2>
              </div>
              <ServiceGrid services={categoryServices} />
            </div>
          </section>
        );
      })}

      {/* ─── Hours & CTA ─── */}
      <section className="bg-[#F7F7F5] py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Opening hours */}
            <div className="flex-1">
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-xl font-semibold text-[#111110] mb-6 tracking-tight">
                Opening Hours
              </h2>
              <table className="text-sm w-full max-w-xs">
                <tbody>
                  {OPENING_HOURS.map(([day, hrs]) => (
                    <tr key={day} className="border-b border-[#EFEFEB] last:border-0">
                      <td className="py-3 font-medium text-[#111110] pr-10">{day}</td>
                      <td className={`py-3 ${hrs === 'Closed' ? 'text-[#5A5A57]/50' : 'text-[#5A5A57]'}`}>
                        {hrs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-sm text-[#5A5A57] leading-relaxed">
                Free estimates always available. Call or drop in — we&apos;re always happy to take a look.
              </p>
            </div>

            {/* How it works */}
            <div className="flex-1 border border-[#004225]/20 bg-[#EAF0EC]/30 p-8 rounded-sm">
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-xl font-semibold text-[#111110] mb-3 tracking-tight">
                How we quote
              </h2>
              <p className="text-[#5A5A57] text-sm leading-relaxed mb-6">
                We don&apos;t believe in fixed online prices — every vehicle is different.
                Add the services you need to your request, send it through, and we&apos;ll call
                to discuss what&apos;s required and give you an accurate, honest quote before any
                work begins.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={BUSINESS_PHONE.href}
                  className="inline-flex items-center justify-center gap-2 bg-[#004225] hover:bg-[#005a30] text-white font-medium px-6 py-3 text-sm transition-colors rounded-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {BUSINESS_PHONE.display}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#EFEFEB] hover:border-[#111110] text-[#5A5A57] hover:text-[#111110] font-medium px-6 py-3 text-sm transition-colors rounded-sm"
                >
                  Send an Enquiry
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageCard>
  );
}
