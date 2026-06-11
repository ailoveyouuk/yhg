import Link from 'next/link';

const trust = [
  { label: '150+', sub: 'Years Combined Experience' },
  { label: 'MG Approved', sub: 'Body Repairer' },
  { label: 'Insurance Approved', sub: 'All Major Insurers' },
  { label: 'Est.', sub: 'Yardley Hastings' },
];

const services = [
  {
    title: 'Servicing & Mechanical',
    body: 'Manufacturer-specification servicing and repairs for all makes and models. State-of-the-art diagnostics, laser alignment and air conditioning.',
    href: '/services',
  },
  {
    title: 'Bodywork & Accident Repair',
    body: 'From minor cosmetic work to major accident restoration. Approved repairer for MG, working directly with all major insurers.',
    href: '/bodywork',
  },
  {
    title: 'Classic Restoration',
    body: 'We have restored vehicles built as far back as 1918. From a beloved classic to a prestige marque — every restoration handled with the same meticulous care.',
    href: '/bodywork',
  },
];

const whyUs = [
  { title: 'Honest & Straightforward', body: 'We tell you what genuinely needs attention and what can wait. Our reputation is built on transparent advice and fair pricing — nothing more, nothing less.' },
  { title: 'All Makes & Models', body: 'From everyday family cars to prestige and classic vehicles. Our team carries over 150 years of combined experience across the full breadth of the market.' },
  { title: 'Manufacturer Approved', body: 'Our work is recognised by major motor manufacturers. We are an MG-approved body repairer and have long-standing relationships with Subaru and Mitsubishi.' },
  { title: 'Trusted by Fleet & Insurers', body: 'Major insurance companies and large fleet operators choose us for our consistency, quality and efficiency. The same standards apply to every customer.' },
];

export default function Home() {
  return (
    <>
      {/* Hero — dark charcoal, BRG accent rule, editorial layout */}
      <section className="relative bg-[#111110] text-white overflow-hidden">
        {/* Subtle BRG gradient wash */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 70% 50%, #004225 0%, transparent 65%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-48">
          <div className="max-w-3xl">
            {/* BRG rule line above eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#004225]" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#888884]">
                Independent · Family · Northamptonshire
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 text-white">
              The standard<br />
              you expect.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-xl font-light">
              Servicing, repairs, bodywork and classic restoration — delivered with care and precision.
              Trusted by private customers, fleet operators and major insurers across Northamptonshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors">
                Book a Service
              </Link>
              <Link href="/cars"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 text-sm tracking-wide transition-colors">
                View Vehicles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-[#EFEFEB]">
            {trust.map((t, i) => (
              <div key={t.label} className={`text-center ${i > 0 ? 'pl-8' : ''}`}>
                <div className="text-xl font-semibold text-[#004225] tracking-tight">{t.label}</div>
                <div className="text-[11px] text-[#888884] mt-1.5 tracking-[0.1em] uppercase">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-2 border-[#004225] pl-6">
            <span className="eyebrow">What We Do</span>
            <h2 className="text-4xl font-semibold text-[#111110] mt-3 leading-tight tracking-tight">
              Craftsmanship across<br />every discipline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#EFEFEB]">
            {services.map((s, i) => (
              <div key={s.title}
                className={`p-10 group hover:bg-[#F7F7F5] transition-colors ${i < 2 ? 'border-r border-[#EFEFEB]' : ''}`}>
                <div className="text-[#004225] text-3xl font-semibold tabular-nums opacity-25 mb-6 tracking-tight">
                  0{i + 1}
                </div>
                <h3 className="text-[#111110] font-semibold text-lg mb-4 tracking-tight">{s.title}</h3>
                <p className="text-[#888884] leading-relaxed text-sm mb-8">{s.body}</p>
                <Link href={s.href}
                  className="text-[#004225] hover:text-[#111110] text-sm font-medium flex items-center gap-2 transition-colors group/link">
                  Learn more
                  <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles teaser — dark charcoal, BRG accent rule */}
      <section className="bg-[#1F1F1D] py-28 text-white">
        {/* BRG accent top rule */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-8 h-[2px] bg-[#004225] mb-12" />
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            <div className="max-w-lg">
              <span className="eyebrow text-[#004225]/80 mb-3 block">For Sale</span>
              <h2 className="text-4xl font-semibold text-white mt-3 mb-6 leading-tight tracking-tight">
                Quality vehicles,<br />honestly presented
              </h2>
              <p className="text-white/40 leading-relaxed mb-10 font-light text-[15px]">
                We carry a curated selection of quality used cars and vans, all prepared by our own mechanics.
                Our reputation is built on placing the right vehicle with the right customer — not on shifting stock.
                We are also happy to source specific vehicles on request.
              </p>
              <div className="flex gap-3">
                <Link href="/cars"
                  className="bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-6 py-3 text-sm tracking-wide transition-colors">
                  Cars for Sale
                </Link>
                <Link href="/vans"
                  className="border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 text-sm tracking-wide transition-colors">
                  Vans for Sale
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px w-full lg:w-64 shrink-0 bg-white/5">
              {['Vehicle Sourcing', 'MG Approved', 'Subaru Specialist', 'Fleet Enquiries'].map((tag) => (
                <div key={tag}
                  className="bg-[#1F1F1D] px-5 py-6 text-center">
                  <span className="text-white/30 text-xs font-medium tracking-[0.1em] uppercase leading-tight">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#F7F7F5] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-2 border-[#004225] pl-6">
            <span className="eyebrow">Our Reputation</span>
            <h2 className="text-4xl font-semibold text-[#111110] mt-3 leading-tight tracking-tight">
              Why customers return
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E5E2]">
            {whyUs.map((item, i) => (
              <div key={item.title}
                className={`p-10 group hover:bg-[#EAF0EC]/30 transition-colors ${i % 2 === 0 ? 'border-r border-[#E5E5E2]' : ''} ${i < 2 ? 'border-b border-[#E5E5E2]' : ''} bg-white`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-[2px] bg-[#004225]" />
                  <span className="w-2 h-2 rounded-full bg-[#004225] opacity-40" />
                </div>
                <h3 className="font-semibold text-[#111110] mb-3 text-[17px] tracking-tight">{item.title}</h3>
                <p className="text-[#888884] leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111110] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="w-6 h-[2px] bg-[#004225] mb-5" />
            <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">
              Ready to book, or need advice?
            </h2>
            <p className="text-white/40 font-light text-sm">Free estimates always available. We are happy to take a look.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-7 py-3.5 text-sm tracking-wide transition-colors">
              Get in Touch
            </Link>
            <a href="tel:01604696225"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-medium px-7 py-3.5 text-sm tracking-wide transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              01604 696225
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
