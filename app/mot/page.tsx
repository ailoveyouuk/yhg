import type { Metadata } from 'next';
import type { Service, MOTCategory } from '@/types';
import motData from '@/data/mot.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'MOT Testing',
  description: 'DVSA-authorised MOT testing for cars and light commercial vehicles at Yardley Hastings Garage. Class 4 and Class 7 tests, same-day remedials, pre-MOT inspections. Northamptonshire.',
  path: '/mot',
});

const services = motData as Service[];

const CATEGORY_ORDER: MOTCategory[] = [
  'The Test',
  'Preparation',
  'Specialist Testing',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const CATEGORY_DESC: Record<MOTCategory, string> = {
  'The Test':
    'Every test carried out by DVSA-authorised testers. Results submitted direct to the national MOT database. We test Class 4 and Class 7 vehicles and can accommodate same-day bookings in most cases.',
  'Preparation':
    'Over one in five vehicles fails its MOT on the first attempt. Most of those failures are preventable. Our pre-test inspection and advisory resolution services exist to make sure yours is not one of them.',
  'Specialist Testing':
    'Electric vehicles, classic cars, fleet operators — we accommodate vehicles and requirements that need specific knowledge or scheduling flexibility. Class 4 and Class 7 covered throughout.',
};

const standards = [
  {
    label: 'DVSA authorised',
    detail: 'Results submitted direct to the national MOT database. Your certificate is issued the same day.',
  },
  {
    label: 'Class 4 & Class 7',
    detail: 'Cars, taxis and light goods vehicles up to 3,000kg. Commercial vans up to 3,500kg DGW.',
  },
  {
    label: 'Same-day remedials',
    detail: 'We carry out most repair work the same day. Retest included at no extra charge when we do.',
  },
  {
    label: 'Honest reporting',
    detail: "Every defect and advisory is explained clearly. We will never recommend work the vehicle does not need.",
  },
];

export default function MOTPage() {
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
          <source src="/assets/wheel-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/85 via-[#111110]/50 to-[#111110]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">MOT Testing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              Your MOT,<br />done properly.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              DVSA-authorised testing for cars and light commercial vehicles. Class 4 and
              Class 7 tests carried out by experienced testers, with same-day remedial
              work and a retest included when we complete the repair.
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
            MOT tests are carried out at a fixed government-capped fee. Add any test to your
            request and we will confirm availability — same-day and next-day appointments
            are available in most cases.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-3 tracking-tight">
                The test station<br />that tells you the truth.
              </h2>
              <div className="space-y-5 text-[#5A5A57] text-sm leading-relaxed mt-7">
                <p>
                  An MOT is a legal requirement, not a sales opportunity. Our testers record
                  what they find — defects that cause a failure, advisories that warrant
                  monitoring — and explain everything in plain terms before any conversation
                  about repair work begins.
                </p>
                <p>
                  Where remedial work is needed, we carry out the majority of repairs the same
                  day and include the retest at no additional charge. Most customers leave with
                  a valid certificate and the peace of mind that everything found has been
                  addressed properly.
                </p>
                <p>
                  If you would rather avoid the risk of a failure altogether, our pre-MOT
                  inspection identifies the issues in advance. More than one in five vehicles
                  fails its first test — almost always on items that could have been caught and
                  fixed beforehand. We offer the pre-check because it is the right thing to do,
                  not because it adds to our workload.
                </p>
              </div>
            </div>

            {/* Stat panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  stat: 'Class 4 & 7',
                  label: 'Cars, taxis and light commercial vehicles up to 3,500kg DGW',
                },
                {
                  stat: '40+ years',
                  label: 'Vehicles manufactured before January 1986 may qualify for historic MOT exemption',
                },
                {
                  stat: '1 in 5',
                  label: 'Vehicles fail their MOT on the first attempt — most failures are preventable',
                },
                {
                  stat: 'Retest free',
                  label: 'When we carry out the repair, the retest is included at no extra charge',
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-white border border-[#EFEFEB] p-6 rounded-sm"
                >
                  <div className="text-2xl font-semibold text-[#004225] mb-2 tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-xs text-[#5A5A57] leading-relaxed">{item.label}</div>
                </div>
              ))}
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
                    title: 'Book your test',
                    body: 'Call or use the enquiry form to arrange your MOT. Same-day and next-day slots are available in most cases. Bring the vehicle clean — a tester can refuse to examine a vehicle that is too dirty to inspect safely.',
                  },
                  {
                    n: '02',
                    title: 'The inspection',
                    body: 'The test typically takes 45 to 60 minutes. You are welcome to wait in our customer area. The tester works through all statutory items methodically — brakes, lights, steering, tyres, emissions, bodywork and more.',
                  },
                  {
                    n: '03',
                    title: 'Your result',
                    body: 'Pass or fail, you receive a written report categorising every finding. Dangerous and major defects cause a failure. Minor defects are noted but do not affect the result. Advisories flag items to watch. Everything is explained before you leave.',
                  },
                  {
                    n: '04',
                    title: 'Remedials if needed',
                    body: 'If your vehicle fails, we will carry out most remedial work the same day wherever possible and re-test it at no additional charge. If you need time to consider or arrange the repair, we will explain exactly what is required.',
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
                  Book your MOT
                </h2>
                <p className="text-sm text-[#5A5A57] leading-relaxed mb-7">
                  Same-day and next-day appointments available in most cases. Call us directly
                  for the fastest booking, or send an enquiry and we will confirm a time.
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
                    href="/contact?type=mot"
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

              {/* MOT check CTA */}
              <div className="bg-white border border-[#EFEFEB] p-7 rounded-sm">
                <div className="w-4 h-[2px] bg-[#004225] mb-4" />
                <h3 className="text-sm font-semibold text-[#111110] mb-2 tracking-tight">Check your MOT status</h3>
                <p className="text-xs text-[#5A5A57] leading-relaxed mb-4">
                  Not sure when your MOT is due? You can check the expiry date and full MOT
                  history for any UK vehicle free of charge on the DVSA website.
                </p>
                <a
                  href="https://www.gov.uk/check-mot-status"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#004225] hover:underline text-xs font-medium"
                >
                  Check MOT status on GOV.UK
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
