import type { Metadata } from 'next';
import type { Service, TyreCategory } from '@/types';
import tyresData from '@/data/tyres.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Tyres',
  description: 'Tyre supply, fitting, balancing and 4-wheel alignment at Yardley Hastings Garage. Car and commercial van tyres, run-flats, EV tyres, TPMS and free safety checks. Northamptonshire.',
  path: '/tyres',
});

const services = tyresData as Service[];

const CATEGORY_ORDER: TyreCategory[] = [
  'Supply & Fitting',
  'Alignment & Balancing',
  'Pressure & Sensors',
  'Specialist Tyres',
  'Tyre Safety',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const CATEGORY_DESC: Record<TyreCategory, string> = {
  'Supply & Fitting':
    'Budget, mid-range and premium tyres for cars, SUVs and light commercial vehicles. We advise on the correct specification for your vehicle and always fit in axle pairs — load index and speed rating matched to manufacturer requirements throughout.',
  'Alignment & Balancing':
    'Correct geometry is the single biggest factor in even tyre wear and consistent handling. Balancing eliminates vibration. Full 4-wheel alignment corrects every angle that affects how your tyres meet the road.',
  'Pressure & Sensors':
    'TPMS sensors have been mandatory on new vehicles since 2012 and form part of the MOT test. A warning light that persists after pressures are corrected almost always points to a failed sensor — we carry replacements for all common makes.',
  'Specialist Tyres':
    'Run-flats, EV-specific fitments and all-season tyres each carry distinct requirements that standard replacements do not always meet. We stock and advise on the correct specialist tyre for your vehicle.',
  'Tyre Safety':
    'The legal minimum is 1.6mm of tread across the central three-quarters of the tyre — but performance degrades measurably before that threshold is reached. Free checks, no obligation, no hidden agenda.',
};

const standards = [
  {
    label: 'Correct specification',
    detail: 'Load index, speed rating and construction type matched to your vehicle — not just the size.',
  },
  {
    label: 'Fitted in pairs',
    detail: 'We never fit a single tyre where it would create mismatched wear or handling on the same axle.',
  },
  {
    label: '4-wheel alignment',
    detail: 'Full laser alignment to manufacturer specification — with a printed before and after report.',
  },
  {
    label: 'Free safety checks',
    detail: 'Tread depth, condition and pressure checked free of charge. No obligation to proceed with any work.',
  },
];

export default function TyresPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section
        className="bg-[#111110] text-white relative overflow-hidden flex items-end"
        style={{ minHeight: '60vh' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.65 }}
        >
          <source src="/assets/wheel-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/85 via-[#111110]/50 to-[#111110]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">Tyres</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              The right tyre.<br />Fitted correctly.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Supply, fitting, balancing and alignment for cars and light commercial
              vehicles. The correct specification for your vehicle every time — with
              free tyre safety checks and honest advice on when replacement is and
              is not necessary.
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

      {/* ─── Legal info banner ─── */}
      <div className="bg-[#EAF0EC] border-b border-[#004225]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-4 flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#004225] shrink-0 mt-1.5" />
          <p className="text-sm text-[#004225] font-medium leading-relaxed">
            Driving on tyres below the 1.6mm legal minimum carries a fine of up to £2,500 and
            three penalty points per tyre. If all four tyres are illegal, the combined penalty
            points exceed the maximum permitted — you risk losing your licence entirely.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-3 tracking-tight">
                The right tyre matters<br />more than the price.
              </h2>
              <div className="space-y-5 text-[#5A5A57] text-sm leading-relaxed mt-7">
                <p>
                  Every tyre on the market is a compromise between wet grip, rolling resistance,
                  wear rate, noise and cost. A premium tyre earns its price through a shorter
                  wet braking distance, a longer service life and lower fuel consumption — the
                  economics are more straightforward than they appear. We will explain the
                  trade-offs clearly and recommend the option that makes sense for your vehicle
                  and the way you use it.
                </p>
                <p>
                  We do not fit part-worn tyres. A TyreSafe survey found that 94% of part-worn
                  tyres on sale in the UK were being sold illegally, and over 63% were deemed
                  unsafe to return to the road. The apparent saving rarely exists once the
                  reduced service life is accounted for — and the safety risk is not one we are
                  willing to pass on to a customer.
                </p>
                <p>
                  Alignment matters as much as the tyre itself. A correctly specified tyre
                  fitted to a misaligned axle will wear out prematurely and compromise handling
                  regardless of its quality. We recommend checking alignment whenever tyres are
                  replaced, and always after any suspension or steering component work.
                </p>
              </div>
            </div>

            {/* Law & fact panels */}
            <div className="space-y-4">
              {[
                {
                  heading: 'The legal minimum',
                  body: '1.6mm of tread across the central three-quarters of the tyre width, around the full circumference. Performance degrades measurably below 3mm — particularly in wet conditions. TyreSafe recommends replacement at 2mm or below.',
                },
                {
                  heading: 'Tyre markings explained',
                  body: 'A tyre marked 225/45 R17 91W tells you: 225mm section width, 45% aspect ratio sidewall height, radial construction, 17-inch rim diameter, 91 load index (615kg per tyre) and W speed rating (270km/h maximum). All must match or exceed the vehicle manufacturer\'s specification.',
                },
                {
                  heading: 'TPMS: mandatory since 2012',
                  body: 'All new passenger vehicles sold in the UK have been required to carry TPMS since November 2012. A malfunctioning system causes an MOT failure. Sensors have a typical battery life of 7–10 years and must be replaced — not repaired — when they fail.',
                },
                {
                  heading: 'Part-worn tyres',
                  body: 'We do not supply or fit part-worn tyres. 94% of those sold in the UK fail to meet the legal requirements for sale, and over 63% have been found to be unsafe to return to road use.',
                },
              ].map((item) => (
                <div key={item.heading} className="bg-white border border-[#EFEFEB] p-6 rounded-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#004225] shrink-0 mt-2" />
                    <div>
                      <h3 className="font-semibold text-[#111110] text-sm mb-2 tracking-tight">
                        {item.heading}
                      </h3>
                      <p className="text-xs text-[#5A5A57] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA & hours ─── */}
      <section className="bg-white py-20 border-t border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Process */}
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-8 tracking-tight">
                What to expect
              </h2>
              <div className="space-y-7">
                {[
                  {
                    n: '01',
                    title: 'Tell us the vehicle',
                    body: "Give us your registration and we will identify the correct tyre specification — size, load index and speed rating — for your exact model and trim. If you're replacing like-for-like, we'll confirm the current fitment is correct before proceeding.",
                  },
                  {
                    n: '02',
                    title: 'We source the right tyre',
                    body: "We advise on budget, mid-range and premium options and explain the performance trade-offs between them. We won't recommend a more expensive tyre if a mid-range option will serve you equally well.",
                  },
                  {
                    n: '03',
                    title: 'Fitting, balancing and checks',
                    body: 'Tyres are fitted with a new valve as standard, dynamically balanced and torqued to specification. We check alignment and flag any issues before you leave — not every visit requires a correction, but you should always know the current state.',
                  },
                  {
                    n: '04',
                    title: 'TPMS and pressures',
                    body: 'Pressures are set to manufacturer specification before the vehicle is returned. If your vehicle has TPMS, we relearn the sensors after any wheel change as a matter of course — not as an add-on.',
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
                  Get a tyre quote
                </h2>
                <p className="text-sm text-[#5A5A57] leading-relaxed mb-7">
                  Call us with your registration and we will confirm the correct specification
                  and source a price across budget and premium options. Same-day and next-day
                  fitting available in most cases.
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
                    href="/contact?type=tyres"
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

              <div className="bg-white border border-[#EFEFEB] p-7 rounded-sm">
                <div className="w-4 h-[2px] bg-[#004225] mb-4" />
                <h3 className="text-sm font-semibold text-[#111110] mb-2 tracking-tight">Free tyre safety check</h3>
                <p className="text-xs text-[#5A5A57] leading-relaxed">
                  Bring your vehicle in during opening hours. We will check tread depth, condition
                  and pressures on all four tyres at no charge, with no obligation to proceed with
                  any work. Walk-ins welcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
