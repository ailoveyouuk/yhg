import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bodywork & Restoration',
  description: 'Accident repairs, bodywork, resprays and classic vehicle restoration at Yardley Hastings Garage. MG approved body repairer. All makes and models, Northamptonshire.',
};

const capabilities = [
  { title: 'Accident Repair', body: 'From minor scrapes to major collision damage. We handle all insurance claims and work directly with most insurers.' },
  { title: 'Dents & Dings', body: 'Smart repairs for small dents and scratches. Many minor repairs can be completed the same day.' },
  { title: 'Full Resprays', body: 'Colour-matched resprays using modern mixing systems. We match any colour, any age of vehicle.' },
  { title: 'Classic Restoration', body: 'We have restored vehicles built as far back as 1918. Full or partial restorations undertaken with care and expertise.' },
  { title: 'Structural Repair', body: 'Section repairs, sill replacements and structural metalwork. Full chassis repairs available.' },
  { title: 'Fleet Bodywork', body: 'Approved repairer for corporate fleet customers and major insurance companies. Volume work welcome.' },
];

const approvals = [
  { name: 'MG', detail: 'Approved Body Repairer' },
  { name: 'Subaru', detail: 'Regular Work Partner' },
  { name: 'Mitsubishi', detail: 'Regular Work Partner' },
  { name: 'Insurance', detail: 'Major Insurer Approved' },
];

export default function BodyworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/90 to-[#111110]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#004225]" />
              <span className="eyebrow text-[#888884]">Bodywork & Restoration</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">From a Smart car to a Bentley</h1>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              We have repaired and restored everything from brand new vehicles to cars over a hundred years old.
              Every job — however large or small — receives our full professional attention.
            </p>
          </div>
        </div>
      </section>

      {/* Approvals bar */}
      <section className="bg-white border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#EFEFEB]">
            {approvals.map((a, i) => (
              <div key={a.name} className={`text-center ${i > 0 ? 'pl-8' : ''}`}>
                <div className="font-semibold text-[#111110] text-base tracking-tight">{a.name}</div>
                <div className="text-[#888884] text-xs mt-1 tracking-wide">{a.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 border-l-2 border-[#004225] pl-6">
            <span className="eyebrow">What we can do</span>
            <h2 className="text-3xl font-semibold text-[#111110] mt-3 tracking-tight">
              Every aspect of bodywork
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E2]">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white p-8 hover:bg-[#F7F7F5] transition-colors">
                <div className="w-5 h-[2px] bg-[#004225] mb-5" />
                <h3 className="text-[#111110] font-semibold mb-3 tracking-tight">{c.title}</h3>
                <p className="text-[#888884] text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-[#111110] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-6 h-[2px] bg-[#004225] mx-auto mb-8" />
          <h2 className="text-3xl font-semibold mb-4 tracking-tight">Get a free estimate</h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto text-[15px] font-light">
            Bring your vehicle in or send us details and photos. We will assess the damage and provide a clear, honest quote with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-8 py-4 text-sm transition-colors">
              Request a Quote
            </Link>
            <a href="tel:01604696225"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 text-sm transition-colors">
              Call 01604 696225
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
