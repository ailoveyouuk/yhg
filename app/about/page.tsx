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
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-5">Independent. Family. Trusted.</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Yardley Hastings Garage is an independent, family-owned business serving Northamptonshire and the surrounding counties. We sell, service, repair and restore most motor vehicle makes and models.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We are an independent, family-run garage based in Yardley Hastings, Northamptonshire.
                  Our team of certified mechanics has over 150 years of combined experience across all makes and models — from modern everyday cars to vintage and prestige classics.
                </p>
                <p>
                  Our customers include private individuals, large fleet operators and major insurance companies. Whatever brings you to us, you will always be treated honestly and fairly. We give free estimates and explain all work clearly before we start.
                </p>
                <p>
                  We are proud to be an MG-approved body repairer and to have built long-term relationships with Subaru, Mitsubishi and a number of major insurers. Our work is approved by major motor manufacturers.
                </p>
                <p>
                  We have restored vehicles as old as 1918, and we are just as comfortable working on a brand new model fresh from the showroom. Everything from a Fiat 500 to a Bentley Continental Flying Spur has passed through our workshop.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What we stand for</h2>
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-5 rounded-xl bg-slate-50">
                  <div className="shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Credentials & approvals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="bg-white rounded-xl px-6 py-5 shadow-sm flex items-start gap-4">
                <div className="shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{c.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Come and see us</h2>
            <p className="text-slate-300">Bedford Rd W, Yardley Hastings, Northampton NN7 1HB<br />Mon–Fri 8am–5:30pm · Sat 8:30am–12pm</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded text-sm transition-colors">
              Get in Touch
            </Link>
            <a href="tel:01604696225" className="border border-slate-500 hover:border-white text-white font-semibold px-6 py-3 rounded text-sm transition-colors">
              01604 696225
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
