import type { Metadata } from 'next';
import type { Service, DiagnosticsCategory } from '@/types';
import diagnosticsData from '@/data/diagnostics.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Diagnostics',
  description: 'Professional vehicle diagnostics at Yardley Hastings Garage. Full system scans, warning light investigation, ADAS calibration, EV and hybrid diagnostics. Northamptonshire.',
  path: '/diagnostics',
});

const services = diagnosticsData as Service[];

const CATEGORY_ORDER: DiagnosticsCategory[] = [
  'Diagnostic Scanning',
  'Warning Lights',
  'ADAS Calibration',
  'Electric & Hybrid',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const CATEGORY_DESC: Record<DiagnosticsCategory, string> = {
  'Diagnostic Scanning':
    'A fault code is a starting point, not a diagnosis. We read and interpret codes across all modules, analyse live sensor data, and identify the root cause before any repair is recommended.',
  'Warning Lights':
    'Each dashboard warning light corresponds to a fault code stored in a specific control module. We identify exactly which component or circuit has triggered the light before any parts are discussed.',
  'ADAS Calibration':
    'From 2016 to 2023, the proportion of windscreen replacements requiring ADAS camera recalibration rose from 1% to 44%. After any windscreen change, camera repositioning or front-end impact, calibration is not optional.',
  'Electric & Hybrid':
    'Generic scan tools cannot access the majority of EV and hybrid control modules. We use professional multi-brand equipment with EV-specific software to read the full fault code set across every high-voltage system.',
};

const standards = [
  {
    label: 'Root cause, not just codes',
    detail: 'A fault code tells you what failed. Live data analysis tells you why. We do not recommend parts without identifying the underlying cause.',
  },
  {
    label: 'Multi-brand equipment',
    detail: 'Professional diagnostic tools covering all common makes — including manufacturer-specific code ranges not accessible to generic OBD readers.',
  },
  {
    label: 'EV and hybrid capable',
    detail: 'Full scanning across BMS, inverter, on-board charger and motor controller. Not just the combustion side.',
  },
  {
    label: 'No repair without agreement',
    detail: 'We provide a written diagnostic report with findings and recommendations before any work proceeds.',
  },
];

export default function DiagnosticsPage() {
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
          <source src="/assets/service-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/85 via-[#111110]/50 to-[#111110]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">Diagnostics</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              Find the fault.<br />Fix the cause.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Professional diagnostics across all vehicle systems — warning lights,
              fault codes, live data analysis, ADAS calibration, and full EV and
              hybrid scanning. We identify the root cause before recommending any repair.
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

      {/* ─── Info banner ─── */}
      <div className="bg-[#EAF0EC] border-b border-[#004225]/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-4 flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#004225] shrink-0 mt-1.5" />
          <p className="text-sm text-[#004225] font-medium leading-relaxed">
            A warning light or fault code is a starting point — not a parts list. We provide
            a written diagnostic report with confirmed findings before any repair work is
            discussed or costed.
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
                The code is a direction.<br />Not the answer.
              </h2>
              <div className="space-y-5 text-[#5A5A57] text-sm leading-relaxed mt-7">
                <p>
                  OBD fault codes follow a standardised structure — the first character
                  identifies the system (P for powertrain, B for body, C for chassis,
                  U for network), and the subsequent digits narrow down the component and
                  the nature of the failure. But a code confirming that a lambda sensor
                  circuit has reported a lean condition does not tell you whether the sensor
                  itself has failed, whether there is an air leak upstream, whether fuel
                  pressure is low, or whether injector wear is the cause. That distinction
                  requires live data analysis — reading actual sensor outputs under running
                  conditions — and it is what separates an accurate diagnosis from an
                  expensive guess.
                </p>
                <p>
                  We use professional multi-brand diagnostic equipment capable of accessing
                  the full code range for all major manufacturers, including the
                  manufacturer-specific codes that generic consumer readers cannot reach.
                  For EV and hybrid vehicles, this extends to BMS cell-level data,
                  high-voltage system fault codes and charging circuit diagnosis — areas
                  that are simply invisible to standard tools.
                </p>
                <p>
                  Nothing is recommended until the fault is confirmed. You receive a written
                  report before any repair conversation begins.
                </p>
              </div>
            </div>

            {/* OBD code reference panels */}
            <div className="space-y-4">
              {[
                {
                  code: 'P — Powertrain',
                  body: 'Engine, fuel system, ignition, transmission and associated emissions components. The largest category. P0xxx codes are standardised across all manufacturers; P1xxx codes are manufacturer-specific and require professional equipment to read correctly.',
                },
                {
                  code: 'B — Body',
                  body: 'Interior systems including airbags, seat belts, climate control, lighting and door mechanisms. Most consumer OBD readers cannot access B-codes — a limitation that is particularly relevant for airbag and SRS faults.',
                },
                {
                  code: 'C — Chassis',
                  body: 'Braking (ABS, ESC), steering and suspension systems. ABS and stability control faults are C-codes. A single failed wheel speed sensor typically generates both ABS and ESC warnings simultaneously.',
                },
                {
                  code: 'U — Network',
                  body: 'Communication failures across the vehicle\'s CAN bus and module network. U-codes indicate that one module cannot communicate with another — often a symptom of a failed module, a wiring fault, or a 12V supply issue affecting system wake-up.',
                },
              ].map((item) => (
                <div key={item.code} className="bg-white border border-[#EFEFEB] p-6 rounded-sm">
                  <div className="flex items-start gap-3">
                    <div className="font-mono text-[#004225] font-bold text-xs shrink-0 mt-0.5 w-24">
                      {item.code}
                    </div>
                    <p className="text-xs text-[#5A5A57] leading-relaxed">{item.body}</p>
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
                    title: 'Describe the symptom',
                    body: 'A warning light, an intermittent fault, a change in performance or fuel economy — tell us what you have observed. Context shapes where we start and what we look for in the data.',
                  },
                  {
                    n: '02',
                    title: 'Full system scan',
                    body: 'We scan all available modules and read every stored code — active, pending and historic. Pending codes are particularly useful: they indicate a fault the system has detected but has not yet confirmed enough times to trigger the warning light.',
                  },
                  {
                    n: '03',
                    title: 'Live data and root cause',
                    body: "Where a code points to a system, we examine live sensor data under real operating conditions to confirm the cause. We'll tell you what we found, what it means, and what options exist — before any parts are sourced.",
                  },
                  {
                    n: '04',
                    title: 'Written report and next steps',
                    body: 'You receive a written summary of all findings. If repair work is required, we quote it separately and clearly. If no repair is needed — a historic code that has already resolved, for instance — we will tell you that too.',
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
                  Book a diagnostic
                </h2>
                <p className="text-sm text-[#5A5A57] leading-relaxed mb-7">
                  Call us or send an enquiry — same-day and next-day appointments are
                  available in most cases. If your warning light has just appeared and you
                  are unsure whether to drive, call us first.
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
                    href="/contact?type=diagnostics"
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
                <h3 className="text-sm font-semibold text-[#111110] mb-2 tracking-tight">Red vs amber lights</h3>
                <p className="text-xs text-[#5A5A57] leading-relaxed">
                  A red warning light indicates an immediate safety concern — stop safely as
                  soon as possible and do not continue driving. An amber or yellow light
                  indicates a fault requiring attention but not immediate danger. If you are
                  unsure which applies, call us before driving further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
