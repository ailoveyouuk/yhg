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
  { title: 'Fleet Bodywork', body: 'We are an approved repairer for corporate fleet customers and major insurance companies. Volume work welcome.' },
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
      <section className="bg-[#004225] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-[0.2em]">Bodywork & Restoration</span>
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold mt-3 mb-5">From a Smart car to a Bentley</h1>
            <p className="text-green-100/70 text-lg leading-relaxed">
              We have repaired and restored everything from brand new vehicles to cars over a hundred years old.
              Every job — however large or small — receives our full professional attention.
            </p>
          </div>
        </div>
      </section>

      {/* Approvals bar */}
      <section className="bg-[#C9A84C] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {approvals.map((a) => (
              <div key={a.name} className="text-center">
                <div className="font-bold text-[#1C1C1A] text-lg">{a.name}</div>
                <div className="text-[#1C1C1A] text-xs mt-0.5">{a.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F9F7F4] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-[#1C1C1A] mb-10">What we can do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-1 bg-[#C9A84C] rounded mb-4" />
                <h3 className="text-base font-semibold text-[#1C1C1A] mb-3">{c.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-[#004225] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">Get a free estimate</h2>
          <p className="text-green-100/70 mb-8 max-w-xl mx-auto">
            Bring your vehicle in or send us details and photos. We will assess the damage and provide a clear, honest quote with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#D4B86A] text-[#1C1C1A] font-bold px-8 py-4 rounded text-base transition-colors">
              Request a Quote
            </Link>
            <a href="tel:01604696225" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded text-base transition-colors">
              Call 01604 696225
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
