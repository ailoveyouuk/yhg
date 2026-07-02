import type { Metadata } from 'next';
import type { Service, BodyworkCategory } from '@/types';
import bodyworkData from '@/data/bodywork.json';
import PageCard from '@/components/PageCard';
import ServiceGrid from '@/components/ServiceGrid';
import { BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Bodywork & Restoration',
  description: 'Accident repair, dents, resprays, classic restoration and structural metalwork at Yardley Hastings Garage. MG approved body repairer. All makes and models, Northamptonshire.',
  path: '/bodywork',
});

const services = bodyworkData as Service[];

const CATEGORY_ORDER: BodyworkCategory[] = [
  'Accident Repair',
  'Dent Removal',
  'Paintwork',
  'Structural Repair',
  'Classic Restoration',
  'Glazing',
  'Insurance & Fleet',
];

const categories = CATEGORY_ORDER.filter((cat) =>
  services.some((s) => s.category === cat && s.active)
);

function toAnchorId(cat: string) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const approvals = [
  { name: 'MG', detail: 'Approved Body Repairer' },
  { name: 'Subaru', detail: 'Regular Work Partner' },
  { name: 'Mitsubishi', detail: 'Regular Work Partner' },
  { name: 'Insurance', detail: 'Major Insurer Approved' },
];

export default function BodyworkPage() {
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
          <source src="/assets/bodywork.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/85 via-[#111110]/50 to-[#111110]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">
                Bodywork &amp; Restoration
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              From a Smart car<br />to a Bentley.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              We have repaired and restored everything from brand new vehicles to cars over
              a hundred years old. Every job — however large or small — receives the same
              professional attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Approvals strip ─── */}
      <section className="bg-white border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#EFEFEB]">
            {approvals.map((a, i) => (
              <div
                key={a.name}
                className={`text-center ${i > 0 ? 'lg:pl-6 pt-6 lg:pt-0' : ''}`}
              >
                <div className="font-semibold text-[#111110] text-[15px] tracking-tight">{a.name}</div>
                <div className="text-[#5A5A57] text-xs mt-1 tracking-wide">{a.detail}</div>
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
            All bodywork is assessed in person and quoted individually. Add the services you
            need to your request — we&apos;ll arrange a no-obligation inspection and provide a clear,
            itemised estimate before any work begins.
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

      {/* ─── Process section ─── */}
      <section className="bg-[#F7F7F5] py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* How it works */}
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-2xl font-semibold text-[#111110] mb-8 tracking-tight">
                How a bodywork repair works
              </h2>
              <div className="space-y-7">
                {[
                  {
                    n: '01',
                    title: 'Bring it in — or send photos',
                    body: 'Drop your vehicle in at any time during opening hours for a free assessment. If you\'re unable to drive it, send us clear photos and we\'ll provide an initial indication before you commit to anything.',
                  },
                  {
                    n: '02',
                    title: 'We assess and estimate',
                    body: 'We inspect the damage thoroughly — including any hidden structural impact — and produce a clear, itemised written estimate. We\'ll explain exactly what needs doing and why.',
                  },
                  {
                    n: '03',
                    title: 'We manage your claim',
                    body: 'If the damage is being claimed on insurance, we liaise with your insurer directly. You don\'t need to manage the back-and-forth — we handle it all.',
                  },
                  {
                    n: '04',
                    title: 'Work completed. Vehicle returned.',
                    body: 'Once authorised, we carry out the repair to our usual standard and return the vehicle cleaned and ready to use. We don\'t rush — we do it right.',
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

            {/* What to bring / CTA */}
            <div className="space-y-5">
              <div className="border border-[#004225]/20 bg-[#EAF0EC]/30 p-8 rounded-sm">
                <div className="w-5 h-[2px] bg-[#004225] mb-6" />
                <h2 className="text-lg font-semibold text-[#111110] mb-3 tracking-tight">
                  What to bring
                </h2>
                <p className="text-sm text-[#5A5A57] leading-relaxed mb-5">
                  For an insurance job, bring your policy number and insurer contact details.
                  For private repairs, just bring the vehicle. We&apos;ll do the rest.
                </p>
                <ul className="space-y-2 mb-7">
                  {[
                    'Insurance policy number (if applicable)',
                    'Insurer contact details or claim reference',
                    'Any photos of the incident you\'ve already taken',
                    'Third-party details if another vehicle was involved',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#5A5A57]">
                      <svg className="w-3 h-3 text-[#6ab88a] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
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
                    Send Photos &amp; Enquire
                  </a>
                </div>
              </div>

              {/* Opening hours compact */}
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
