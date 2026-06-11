import Link from 'next/link';

const trustItems = [
  { label: '150+', sub: 'Years Combined Experience' },
  { label: 'MG', sub: 'Approved Body Repairer' },
  { label: 'Insurance', sub: 'Approved Repairer' },
  { label: 'Family', sub: 'Independent Business' },
];

const services = [
  {
    title: 'Servicing & MOT',
    description:
      'Full manufacturer-specification servicing and MOT for all makes and models. Laser 4-wheel alignment, air conditioning, and state-of-the-art electronic diagnostics.',
    href: '/services',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Bodywork & Accident Repair',
    description:
      'From minor dents and resprays to full accident restoration. We work with private customers, fleet operators and major insurance companies. All makes and models.',
    href: '/bodywork',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Classic Restoration',
    description:
      'We have restored vehicles built as far back as 1918. From a Smart car to a Bentley Continental Flying Spur — every restoration receives our full professional attention.',
    href: '/bodywork',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const whyUs = [
  { title: 'Honest & Transparent', body: 'We tell you what needs doing and what can wait. No unnecessary upselling — just straightforward advice you can trust.' },
  { title: 'All Makes & Models', body: 'From everyday runarounds to prestige and classic vehicles. Over 150 years of combined mechanic experience across our team.' },
  { title: 'Manufacturer Approved', body: 'Our work has the approval of major motor manufacturers. We are an MG-approved body repairer and regularly work on Subaru and Mitsubishi vehicles.' },
  { title: 'Insurance Approved', body: 'We work directly with major insurance companies and large fleet operators, as well as individual private customers.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span className="text-amber-300 text-sm font-medium">Independent Family Business · Est. in Yardley Hastings</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your local garage.<br />
              <span className="text-amber-400">Done properly.</span>
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Servicing, repairs, bodywork and classic restoration for all makes and models.
              Trusted by private customers, fleet operators and major insurance companies across Northamptonshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded text-base transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Book a Service
              </Link>
              <Link
                href="/cars"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-white text-white font-bold px-8 py-4 rounded text-base transition-colors"
              >
                View Cars for Sale
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative diagonal */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Trust bar */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-slate-900">{item.label}</div>
                <div className="text-sm text-slate-500 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What we do</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From a routine service to a full classic restoration, our certified mechanics handle it all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-amber-500 mb-5 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm">{s.description}</p>
                <Link href={s.href} className="text-amber-500 hover:text-amber-600 font-semibold text-sm flex items-center gap-1 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cars for Sale teaser */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Cars & Vans for Sale</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-5">Quality vehicles on our forecourt</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                We always have a range of high-quality used cars and vans available. We are known for our honesty and integrity — we want every customer to leave in the right vehicle for them.
                Can&apos;t find what you&apos;re after? We&apos;re happy to source it for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cars" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded text-sm transition-colors">
                  Browse Cars
                </Link>
                <Link href="/vans" className="inline-flex items-center justify-center gap-2 border border-slate-500 hover:border-white text-white font-semibold px-6 py-3 rounded text-sm transition-colors">
                  Browse Vans
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-80">
              {['Sourcing available', 'MG Approved', 'Subaru Specialist', 'Fleet Operator'].map((tag) => (
                <div key={tag} className="bg-slate-800 rounded-lg px-5 py-4 text-center border border-slate-700">
                  <span className="text-slate-300 text-sm font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why customers choose us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to book or need advice?</h2>
          <p className="text-slate-800 mb-8 text-lg">Get in touch — we offer free estimates and are always happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded text-base transition-colors">
              Send an Enquiry
            </Link>
            <a href="tel:01604696225" className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900/10 font-bold px-8 py-4 rounded text-base transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call 01604 696225
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
