import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import PageCard from '@/components/PageCard';
import { BUSINESS_ADDRESS, BUSINESS_PHONE, FOUNDED_YEAR, OPENING_HOURS_COMPACT, OWNER_NAME } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

const ABOUT_DESCRIPTION = `Independent family garage in Yardley Hastings, Northamptonshire, established in ${FOUNDED_YEAR}. MG approved body repairer.`;

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description: ABOUT_DESCRIPTION,
  path: '/about',
});

const values = [
  { title: 'Honest advice', body: 'We tell you what genuinely needs doing and what can wait. We have built our reputation on straight talking and fair pricing.' },
  { title: 'Quality workmanship', body: 'Our mechanics are detail-conscious and experienced. We take pride in every job, whether it is a routine oil change or a full restoration.' },
  { title: 'Getting you back on the road', body: 'We work efficiently and aim to complete most work the same day. We know your time matters.' },
  { title: 'Long-term relationships', body: 'Many of our customers have been coming to us for years. We look after their vehicles like our own.' },
];

const credentials = [
  { label: 'MG Approved Body Repairer', detail: 'Manufacturer-recognised bodywork quality' },
  { label: 'Subaru Specialist', detail: 'Extensive experience with Subaru models' },
  { label: 'Mitsubishi Specialist', detail: 'Extensive experience with Mitsubishi models' },
  { label: 'Insurance Approved', detail: 'Approved repairer for major insurers' },
  { label: 'Fleet Approved', detail: 'Trusted by large fleet operators' },
  { label: `Established ${FOUNDED_YEAR}`, detail: 'Over a century serving Northamptonshire' },
];

export default function AboutPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section className="bg-[#111110] text-white relative overflow-hidden flex items-end" style={{ minHeight: '52vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/garage-exterior-front-2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/90 to-[#111110]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-14 lg:pb-18 w-full">
          <div className="max-w-2xl">
            {/* Frosted glass eyebrow pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">About Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-4 leading-[1.05]">
              Independent.<br />Family. Trusted.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Yardley Hastings Garage is an independent, family-owned business serving Northamptonshire and the surrounding counties.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-3xl font-semibold text-[#111110] mb-8 tracking-tight">Our story</h2>
              <div className="space-y-5 text-[#5A5A57] leading-relaxed text-[15px]">
                <p>
                  We are an independent, family-run garage based in Yardley Hastings, Northamptonshire, established in {FOUNDED_YEAR}
                  and owned and run today by {OWNER_NAME}. Our team of certified mechanics brings deep experience across all makes and models — from modern everyday cars to vintage and prestige classics.
                </p>
                <p>
                  Our customers include private individuals, large fleet operators and major insurance companies. Whatever brings you to us, you will always be treated honestly and fairly. We give free estimates and explain all work clearly before we start.
                </p>
                <p>
                  We are proud to be an MG-approved body repairer and to have built long-term relationships with Subaru, Mitsubishi and a number of major insurers.
                </p>
                <p>
                  We have restored vehicles as old as 1918, and we are just as comfortable working on a brand new model fresh from the showroom. Everything from a Fiat 500 to a Bentley Continental Flying Spur has passed through our workshop.
                </p>
              </div>
            </div>
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-3xl font-semibold text-[#111110] mb-8 tracking-tight">What we stand for</h2>
              <div className="border border-[#EFEFEB] rounded-sm overflow-hidden">
                {values.map((v, i) => (
                  <div key={v.title}
                    className={`p-7 ${i < values.length - 1 ? 'border-b border-[#EFEFEB]' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-[2px] bg-[#004225] shrink-0" />
                      <h3 className="font-semibold text-[#111110] tracking-tight">{v.title}</h3>
                    </div>
                    <p className="text-[#5A5A57] text-sm leading-relaxed pl-7">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Workshop photo strip ─── */}
      <div className="grid grid-cols-3 h-72 lg:h-96 overflow-hidden">
        <div className="relative overflow-hidden">
          <Image
            src="/assets/workshop-classic-aston-1.jpg"
            alt="Classic Aston Martin restoration in the workshop"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/assets/workshop-interior-3.jpg"
            alt="Yardley Hastings Garage workshop"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/assets/workshop-interior-4.jpg"
            alt="Yardley Hastings Garage workshop"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* ─── Credentials ─── */}
      <section className="bg-[#F7F7F5] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="w-5 h-[2px] bg-[#004225] mb-6" />
          <h2 className="text-2xl font-semibold text-[#111110] mb-10 tracking-tight">Credentials &amp; approvals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E2]">
            {credentials.map((c) => (
              <div key={c.label} className="bg-white px-7 py-6 flex items-start gap-4">
                <div className="shrink-0 w-1.5 h-1.5 bg-[#004225] rounded-full mt-2" />
                <div>
                  <div className="font-semibold text-[#111110] text-sm tracking-tight">{c.label}</div>
                  <div className="text-[#5A5A57] text-xs mt-1">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#111110] text-white py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="w-6 h-[2px] bg-[#004225] mb-5" />
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Come and see us</h2>
            <p className="text-white/65 text-sm font-light">{BUSINESS_ADDRESS.full}<br />{OPENING_HOURS_COMPACT}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-6 py-3 text-sm transition-colors rounded-sm"
            >
              Get in Touch
            </Link>
            <a
              href={BUSINESS_PHONE.href}
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-medium px-6 py-3 text-sm transition-colors rounded-sm"
            >
              {BUSINESS_PHONE.display}
            </a>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
