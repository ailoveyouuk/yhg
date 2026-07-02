import Image from 'next/image';
import type { Metadata } from 'next';
import type { Service, DetailingCategory } from '@/types';
import detailingData from '@/data/detailing.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Detailing',
  description: 'Professional vehicle detailing at Yardley Hastings Garage. Paint correction, ceramic coating, PPF, interior deep clean and full detail packages. Northamptonshire.',
  openGraph: {
    title: 'Detailing | Yardley Hastings Garage',
    description: 'Professional vehicle detailing at Yardley Hastings Garage. Paint correction, ceramic coating, PPF, interior deep clean and full detail packages. Northamptonshire.',
  },
  twitter: {
    title: 'Detailing | Yardley Hastings Garage',
    description: 'Professional vehicle detailing at Yardley Hastings Garage. Paint correction, ceramic coating, PPF, interior deep clean and full detail packages. Northamptonshire.',
  },
};

const services = detailingData as Service[];

const CATEGORY_ORDER: DetailingCategory[] = [
  'Exterior Preparation',
  'Paint Correction',
  'Paint Protection',
  'Exterior Finishing',
  'Interior Detailing',
  'Detail Packages',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// Category descriptions — displayed beneath each section heading
const CATEGORY_DESC: Record<DetailingCategory, string> = {
  'Exterior Preparation':
    'Every detail begins here. Preparation is not a preliminary step — it is the most important one. No polish can correct swirls caused by a dirty wash, and no coating bonds to a contaminated surface.',
  'Paint Correction':
    'Swirls, scratches and oxidation are permanent unless professionally corrected. We assess each vehicle honestly and recommend the level of correction the paint actually needs — not the most expensive option.',
  'Paint Protection':
    'Correction without protection is temporary. We offer the full range from carnauba wax through to graphene coatings and PPF, matched to your vehicle, usage and budget.',
  'Exterior Finishing':
    'Glass, wheels, tyres and trim complete the result. Every one of these surfaces is treated with the correct product — not a catch-all spray — before the vehicle is returned.',
  'Interior Detailing':
    'The interior receives the same methodical attention as the exterior. Correct products for each material type — leather, Alcantara, fabric, plastic — and no shortcuts.',
  'Detail Packages':
    'Our bundled packages combine preparation, correction and protection into a single appointment. The starting point for any new ownership or seasonal refresh.',
};

const standards = [
  {
    label: 'Correct products',
    detail: 'No catch-all chemicals. The right compound, pad and product for each surface, condition and outcome.',
  },
  {
    label: 'Methodical preparation',
    detail: 'Two-bucket wash, chemical decontamination and clay before any machine work. Every time.',
  },
  {
    label: 'Honest assessment',
    detail: 'We tell you what your paintwork needs and what it does not. No unnecessary upselling.',
  },
  {
    label: 'All vehicles welcome',
    detail: 'From a daily driver to a concours classic. The same care, regardless of the car.',
  },
];

export default function DetailingPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section
        className="bg-[#111110] text-white relative overflow-hidden flex items-end"
        style={{ minHeight: '60vh' }}
      >
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.65 }}
        >
          <source src="/assets/detailing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/85 via-[#111110]/50 to-[#111110]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">Detailing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              The finish your<br />vehicle deserves.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              From a safe hand wash and machine polish to full paint correction, ceramic
              coating and PPF — professional detailing carried out with the same precision
              we apply to every vehicle in our workshop.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Standards strip ─── */}
      <section className="bg-white border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#EFEFEB]">
            {standards.map((s, i) => (
              <div
                key={s.label}
                className={`py-5 sm:py-0 ${i > 0 ? 'lg:pl-8 pt-5 lg:pt-0' : ''}`}
              >
                <div className="font-semibold text-[#111110] text-sm tracking-tight mb-1.5">
                  {s.label}
                </div>
                <div className="text-[#5A5A57] text-xs leading-relaxed">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote approach banner ─── */}
      <div className="bg-[#EAF0EC] border-b border-[#004225]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-4 flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#004225] shrink-0 mt-1.5" />
          <p className="text-sm text-[#004225] font-medium leading-relaxed">
            All detailing is assessed in person and quoted individually — the right
            treatment depends entirely on your vehicle&apos;s specific condition. Add the services
            you&apos;re interested in and we&apos;ll be in touch to arrange a no-obligation assessment.
          </p>
        </div>
      </div>

      {/* ─── Sticky category anchor nav ─── */}
      <nav className="sticky top-16 z-30 bg-[#F7F7F5]/95 backdrop-blur-sm border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="flex gap-1 overflow-x-auto py-2.5" style={{ scrollbarWidth: 'none' }}>
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
              {/* Section header with description */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-[2px] bg-[#004225] shrink-0" />
                  <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#5A5A57]">
                    {category}
                  </h2>
                </div>
                {CATEGORY_DESC[category] && (
                  <p className="text-xs text-[#5A5A57] leading-relaxed max-w-md lg:text-right">
                    {CATEGORY_DESC[category]}
                  </p>
                )}
              </div>
              <ServiceGrid services={categoryServices} />
            </div>
          </section>
        );
      })}

      {/* ─── Approach section ─── */}
      <section className="bg-[#F7F7F5] py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-3 tracking-tight">
                No shortcuts.<br />No compromise.
              </h2>
              <div className="space-y-5 text-[#5A5A57] text-sm leading-relaxed mt-7">
                <p>
                  Good detailing is methodical. Before any polish touches your paintwork,
                  we decontaminate properly — a thorough wash, iron fallout treatment and
                  clay bar — so we are working on a genuinely clean surface, not grinding
                  contamination into the clearcoat.
                </p>
                <p>
                  Every vehicle is assessed individually before we begin. Paint condition
                  varies significantly between vehicles, and we choose our compounds, pads
                  and correction approach accordingly. A car needing light swirl removal
                  gets a different treatment from one requiring multi-stage correction.
                  We will not oversell a more aggressive process if a gentler one will achieve
                  the right result.
                </p>
                <p>
                  We offer ceramic coatings and PPF for long-term protection, but we are
                  equally happy to carry out a thorough full detail with wax if that is
                  what your vehicle needs. Come and talk to us — we will give you an honest
                  recommendation based on your car, not on what costs the most.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden bg-[#111110] aspect-[4/3] rounded-sm">
              <Image
                src="/assets/detailing-2.jpg"
                alt="Professional vehicle detailing"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="w-5 h-[2px] bg-[#004225] mb-3" />
                <span className="text-white/80 text-xs tracking-[0.12em] uppercase font-medium">
                  Precision craft
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What to expect ─── */}
      <section className="bg-white py-20 border-t border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Process steps */}
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-8 tracking-tight">
                What to expect
              </h2>
              <div className="space-y-7">
                {[
                  {
                    n: '01',
                    title: 'Assessment first',
                    body: "Bring the vehicle in — we won't quote based on a description alone. Paint condition varies enormously and the right treatment can only be determined by seeing the car in person.",
                  },
                  {
                    n: '02',
                    title: 'Honest recommendation',
                    body: "We assess the paintwork under controlled lighting and give you a clear recommendation with no unnecessary upselling. If your car needs an enhancement polish and wax, that's what we'll suggest.",
                  },
                  {
                    n: '03',
                    title: 'Methodical execution',
                    body: 'Work is carried out in our dedicated detailing bay, starting with preparation and working through to the final finishing touches. We take photographs throughout for your reference.',
                  },
                  {
                    n: '04',
                    title: 'Aftercare guidance',
                    body: 'Every vehicle is returned with tailored aftercare guidance — the right wash technique, products and maintenance schedule to preserve the result for as long as possible.',
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <div className="text-[11px] font-semibold text-[#004225] tracking-[0.15em] shrink-0 w-6 mt-0.5">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111110] tracking-tight mb-1.5 text-[15px]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5A5A57] leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA panel + hours */}
            <div className="space-y-5">
              <div className="border border-[#004225]/20 bg-[#EAF0EC]/30 p-8 rounded-sm">
                <div className="w-5 h-[2px] bg-[#004225] mb-6" />
                <h2 className="text-lg font-semibold text-[#111110] mb-3 tracking-tight">
                  Request a detailing assessment
                </h2>
                <p className="text-sm text-[#5A5A57] leading-relaxed mb-7">
                  All quotes are free and without obligation. Bring your vehicle in during
                  opening hours and we will assess its condition, discuss what treatment is
                  appropriate and provide a clear, fixed price before any work begins.
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
                    href="/contact?type=detailing"
                    className="inline-flex items-center justify-center border border-[#EFEFEB] hover:border-[#111110] text-[#5A5A57] hover:text-[#111110] font-medium px-6 py-3 text-sm transition-colors rounded-sm"
                  >
                    Send an Enquiry
                  </a>
                </div>
              </div>

              <div className="bg-white border border-[#EFEFEB] p-7 rounded-sm">
                <div className="w-4 h-[2px] bg-[#004225] mb-4" />
                <h3 className="text-sm font-semibold text-[#111110] mb-4 tracking-tight">Opening hours</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {OPENING_HOURS.map(([day, hrs]) => (
                      <tr key={day} className="border-b border-[#EFEFEB] last:border-0">
                        <td className="py-2 font-medium text-[#111110] pr-8">{day}</td>
                        <td className={`py-2 ${hrs === 'Closed' ? 'text-[#5A5A57]/40' : 'text-[#5A5A57]'}`}>
                          {hrs}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
