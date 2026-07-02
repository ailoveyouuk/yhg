import type { Metadata } from 'next';
import type { Service, BrakeCategory } from '@/types';
import brakesData from '@/data/brakes.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Brakes',
  description: 'Brake pads, discs, fluid, calipers and EPB servicing at Yardley Hastings Garage. Free brake safety checks. All makes and models. Northamptonshire.',
  path: '/brakes',
});

const services = brakesData as Service[];

const CATEGORY_ORDER: BrakeCategory[] = [
  'Inspection & Assessment',
  'Pads & Discs',
  'Brake Fluid',
  'Calipers & Lines',
  'Handbrake & Parking Brake',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const CATEGORY_DESC: Record<BrakeCategory, string> = {
  'Inspection & Assessment':
    'Brake pad wear is measured, not estimated. Disc thickness is checked against the MIN TH specification. We report every finding in writing before any repair is discussed.',
  'Pads & Discs':
    'Discs and pads are always replaced as matched axle pairs. Fitting one side and leaving the other creates a braking force imbalance that is not always immediately apparent but affects safety.',
  'Brake Fluid':
    'Brake fluid absorbs moisture continuously. DOT 4 fluid at 3% water contamination loses more than 40% of its boiling point — well within the range achievable under sustained braking. Two years is the recommended change interval.',
  'Calipers & Lines':
    'A sticking caliper applies constant partial load to one corner. An internally delaminated hose traps hydraulic pressure and prevents the caliper releasing. Neither is always visible without proper inspection.',
  'Handbrake & Parking Brake':
    'EPB systems require diagnostic software to enter service mode before any rear brake work can be carried out safely. Attempting to retract an EPB piston without this step risks seizing or damaging the caliper.',
};

const standards = [
  {
    label: 'Measured, not estimated',
    detail: 'Pad thickness and disc wear measured at every corner. Results recorded in writing before repair is discussed.',
  },
  {
    label: 'Always in axle pairs',
    detail: 'Pads and discs replaced as matched pairs. Single-side replacement creates braking imbalance across the axle.',
  },
  {
    label: 'EPB capable',
    detail: 'Full diagnostic software for all common electronic parking brake systems. The correct tools, used correctly.',
  },
  {
    label: 'Free safety checks',
    detail: 'Brake system inspection at no charge. We measure, report and leave the decision with you.',
  },
];

export default function BrakesPage() {
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
          <source src="/assets/service-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/85 via-[#111110]/50 to-[#111110]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">Brakes</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              Safety-critical.<br />No shortcuts.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Brake pads, discs, fluid, calipers, hoses and electronic parking
              brake servicing — carried out correctly, with the right tools,
              and reported honestly before any repair begins.
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

      {/* ─── Safety banner ─── */}
      <div className="bg-[#EAF0EC] border-b border-[#004225]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-4 flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#004225] shrink-0 mt-1.5" />
          <p className="text-sm text-[#004225] font-medium leading-relaxed">
            Free brake safety checks available at any time during opening hours — no
            appointment needed. We measure pad and disc wear and report all findings in
            writing with no obligation to proceed with any work.
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
                The most important<br />system on the vehicle.
              </h2>
              <div className="space-y-5 text-[#5A5A57] text-sm leading-relaxed mt-7">
                <p>
                  Braking performance degrades gradually and without obvious warning until it
                  does not. Disc wear is cumulative — each pad change that does not include a
                  disc check leaves material closer to the minimum thickness stamped on the
                  disc face. Brake fluid absorbs moisture continuously through the system
                  regardless of how the vehicle is used, lowering the fluid's boiling point
                  year on year until the threshold for vapour lock under hard braking is
                  reached. Neither problem announces itself in advance.
                </p>
                <p>
                  The EPB has introduced a new failure mode into an otherwise well-understood
                  system. Rear pad replacement on an EPB-equipped vehicle requires diagnostic
                  software to retract the motor before the caliper can be worked on, and
                  recalibration after assembly. Without this step, the piston cannot be
                  correctly retracted, the caliper seal is at risk, and the EPB may not
                  re-engage correctly. It is a straightforward job with the right equipment
                  and an expensive one without.
                </p>
                <p>
                  We carry out a free brake safety check on request and as part of any
                  service visit. If we find something, we will explain it clearly and give
                  you a written report. If we do not, we will tell you that too.
                </p>
              </div>
            </div>

            {/* Technical reference panels */}
            <div className="space-y-4">
              {[
                {
                  heading: 'Disc types',
                  body: 'Solid discs are standard on most rear axles. Vented discs — two iron faces with internal cooling channels — are fitted to virtually every front axle sold since the 1990s. Drilled and grooved discs offer marginal improvement on road vehicles; their main effect is to accelerate pad wear and introduce additional stress points.',
                },
                {
                  heading: 'Brake fluid grades',
                  body: 'DOT 4 is the most common specification on modern UK vehicles, with a fresh dry boiling point of approximately 260°C. Moisture contamination at 3% drops this to around 155°C — achievable under sustained hard braking. DOT 4+ and LV variants are required on some BMW, Mercedes and performance applications.',
                },
                {
                  heading: 'Pad compounds',
                  body: 'Semi-metallic pads (30–70% metal content) handle heat well and suit varied driving including towing and heavier loads. Ceramic compounds run quieter, produce less dust and are well-suited to everyday driving. Organic/NAO pads are the softest compound — gentle on discs, lower heat tolerance.',
                },
                {
                  heading: 'MOT brake standards',
                  body: 'The MOT requires a minimum service brake efficiency of 58% for Class 4 vehicles (cars), tested on a rolling road. Parking brake minimum is 16%. Discs worn below MIN TH are a major defect. Severely corroded or perished brake hoses are a fail. Brake imbalance between sides of the same axle exceeding 30% is a major defect.',
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

      {/* ─── What to expect + CTA ─── */}
      <section className="bg-white py-20 border-t border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-8 tracking-tight">
                What to expect
              </h2>
              <div className="space-y-7">
                {[
                  {
                    n: '01',
                    title: 'Inspection first',
                    body: 'We measure pad thickness and check disc condition at all four corners before quoting any work. If you are coming in for a service, we include a brake check as standard.',
                  },
                  {
                    n: '02',
                    title: 'Written findings',
                    body: 'You receive a written report with actual measurements — pad thickness remaining, disc condition, fluid moisture level — before any repair is discussed. Nothing is assumed; everything is measured.',
                  },
                  {
                    n: '03',
                    title: 'Clear recommendation',
                    body: 'We tell you what needs attention now, what can wait, and what is fine. We will not recommend disc replacement if the discs are within specification — and we will explain clearly if they are not.',
                  },
                  {
                    n: '04',
                    title: 'Correct procedure',
                    body: 'EPB systems entered via diagnostic software before disassembly. Pistons retracted with the correct rotational tool. New pads bedded in progressively. Fluid bled fully — not just topped up.',
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
                  Book a brake check
                </h2>
                <p className="text-sm text-[#5A5A57] leading-relaxed mb-7">
                  Free brake inspections available at any time — call ahead or walk in.
                  For brake repairs, same-day and next-day appointments are available in
                  most cases.
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
                    href="/contact?type=brakes"
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
                <h3 className="text-sm font-semibold text-[#111110] mb-2 tracking-tight">When to get a brake check</h3>
                <p className="text-xs text-[#5A5A57] leading-relaxed">
                  Warning signs include a pulsating pedal under braking, pulling to one side,
                  a grinding or high-pitched squeal, or a pedal that sits lower than usual.
                  If you notice any of these, do not wait for a scheduled service — come in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
