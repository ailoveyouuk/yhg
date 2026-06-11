import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Independent family garage in Yardley Hastings, Northamptonshire. MG approved body repairer with over 150 years of combined mechanic experience.',
};

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
  { label: '150+ Years Combined Experience', detail: 'Deep knowledge across all makes and models' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#004225]" />
              <span className="eyebrow text-[#888884]">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Independent. Family. Trusted.</h1>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Yardley Hastings Garage is an independent, family-owned business serving Northamptonshire and the surrounding counties.
              We sell, service, repair and restore most motor vehicle makes and models.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-3xl font-semibold text-[#111110] mb-8 tracking-tight">Our story</h2>
              <div className="space-y-5 text-[#888884] leading-relaxed text-[15px]">
                <p>
                  We are an independent, family-run garage based in Yardley Hastings, Northamptonshire.
                  Our team of certified mechanics has over 150 years of combined experience across all makes and models — from modern everyday cars to vintage and prestige classics.
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
              <div className="border border-[#EFEFEB]">
                {values.map((v, i) => (
                  <div key={v.title}
                    className={`p-7 ${i < values.length - 1 ? 'border-b border-[#EFEFEB]' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-[2px] bg-[#004225] shrink-0" />
                      <h3 className="font-semibold text-[#111110] tracking-tight">{v.title}</h3>
                    </div>
                    <p className="text-[#888884] text-sm leading-relaxed pl-7">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#F7F7F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-5 h-[2px] bg-[#004225] mb-6" />
          <h2 className="text-2xl font-semibold text-[#111110] mb-10 tracking-tight">Credentials & approvals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E2]">
            {credentials.map((c) => (
              <div key={c.label} className="bg-white px-7 py-6 flex items-start gap-4">
                <div className="shrink-0 w-1.5 h-1.5 bg-[#004225] rounded-full mt-2" />
                <div>
                  <div className="font-semibold text-[#111110] text-sm tracking-tight">{c.label}</div>
                  <div className="text-[#888884] text-xs mt-1">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111110] text-white py-18">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="w-6 h-[2px] bg-[#004225] mb-5" />
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Come and see us</h2>
            <p className="text-white/40 text-sm font-light">Bedford Rd W, Yardley Hastings, Northampton NN7 1HB<br />Mon–Fri 8am–5:30pm · Sat 8:30am–12pm</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact"
              className="bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-6 py-3 text-sm transition-colors">
              Get in Touch
            </Link>
            <a href="tel:01604696225"
              className="border border-white/20 hover:border-white/50 text-white font-medium px-6 py-3 text-sm transition-colors">
              01604 696225
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
