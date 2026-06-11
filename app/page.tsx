import Link from 'next/link';

const trust = [
  { label: '150+', sub: 'Years Combined Experience' },
  { label: 'MG Approved', sub: 'Body Repairer' },
  { label: 'Insurance Approved', sub: 'Major Insurers' },
  { label: 'Since', sub: 'Established Yardley Hastings' },
];

const services = [
  {
    title: 'Servicing & Mechanical',
    body: 'Manufacturer-specification servicing and repairs for all makes and models. State-of-the-art diagnostics, laser alignment and air conditioning.',
    href: '/services',
  },
  {
    title: 'Bodywork & Accident Repair',
    body: 'From minor cosmetic work to major accident restoration. We are an approved repairer for MG and work directly with all major insurers.',
    href: '/bodywork',
  },
  {
    title: 'Classic Restoration',
    body: 'We have restored vehicles built as far back as 1918. From a beloved classic to a prestige marque — every restoration is handled with the same meticulous care.',
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
      {/* Hero */}
      <section className="relative bg-[#004225] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #005a30 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>
              <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">Independent · Family · Northamptonshire</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-semibold leading-tight mb-7 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              The standard<br />
              <span className="italic text-[#C9A84C]">you expect.</span>
            </h1>
            <p className="text-green-100/70 text-lg leading-relaxed mb-12 max-w-xl font-light">
              Servicing, repairs, bodywork and classic restoration delivered with care and precision.
              Trusted by private customers, fleet operators and major insurers across Northamptonshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#D4B86A] text-[#002d19] font-semibold px-8 py-4 rounded text-sm tracking-wide transition-colors">
                Book a Service
              </Link>
              <Link href="/cars"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded text-sm tracking-wide transition-colors">
                View Vehicles for Sale
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#F9F7F4]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Trust bar */}
      <section className="bg-[#F9F7F4] py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trust.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-2xl font-serif font-semibold text-[#004225]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{t.label}</div>
                <div className="text-xs text-stone-400 mt-1.5 tracking-wide uppercase">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="text-4xl font-serif font-semibold text-[#1C1C1A] mt-3 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Craftsmanship across every discipline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className="group">
                <div className="text-[#C9A84C] text-5xl font-serif font-semibold opacity-20 mb-4 leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  0{i + 1}
                </div>
                <div className="w-8 h-px bg-[#C9A84C] mb-5" />
                <h3 className="text-lg font-serif font-semibold text-[#1C1C1A] mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm mb-6">{s.body}</p>
                <Link href={s.href}
                  className="text-[#004225] hover:text-[#C9A84C] text-sm font-medium flex items-center gap-2 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles teaser */}
      <section className="bg-[#004225] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-lg">
              <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-[0.2em]">For Sale</span>
              <h2 className="text-4xl font-serif font-semibold mt-3 mb-5 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Quality vehicles,<br />honestly presented
              </h2>
              <p className="text-green-100/60 leading-relaxed mb-8 font-light">
                We carry a curated selection of quality used cars and vans, all prepared by our own mechanics.
                Our reputation is built on placing the right vehicle with the right customer — not on shifting stock.
                We are also happy to source specific vehicles on request.
              </p>
              <div className="flex gap-4">
                <Link href="/cars"
                  className="bg-[#C9A84C] hover:bg-[#D4B86A] text-[#002d19] font-semibold px-6 py-3 rounded text-sm tracking-wide transition-colors">
                  Cars for Sale
                </Link>
                <Link href="/vans"
                  className="border border-white/20 hover:border-white/50 text-white font-medium px-6 py-3 rounded text-sm tracking-wide transition-colors">
                  Vans for Sale
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full lg:w-72 shrink-0">
              {['Vehicle Sourcing', 'MG Approved', 'Subaru Specialist', 'Fleet Enquiries Welcome'].map((tag) => (
                <div key={tag}
                  className="border border-white/10 rounded px-4 py-4 text-center bg-white/5">
                  <span className="text-green-100/60 text-xs font-medium tracking-wide">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#F9F7F4] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-[0.2em]">Our Reputation</span>
            <h2 className="text-4xl font-serif font-semibold text-[#1C1C1A] mt-3 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Why customers return
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="shrink-0 w-px bg-[#C9A84C] self-stretch" />
                <div>
                  <h3 className="font-serif font-semibold text-[#1C1C1A] mb-2 text-lg"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1A] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ready to book, or need advice?
            </h2>
            <p className="text-stone-400 font-light">Free estimates always available. We are always happy to take a look.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#D4B86A] text-[#002d19] font-semibold px-7 py-3.5 rounded text-sm tracking-wide transition-colors">
              Get in Touch
            </Link>
            <a href="tel:01604696225"
              className="inline-flex items-center justify-center gap-2 border border-stone-600 hover:border-stone-400 text-stone-300 font-medium px-7 py-3.5 rounded text-sm tracking-wide transition-colors">
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
