import type { Metadata } from 'next';
import Link from 'next/link';
import PageCard from '@/components/PageCard';
import FaqAccordion from '@/components/FaqAccordion';
import { BUSINESS_PHONE } from '@/data/business';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about booking, servicing, MOTs, buying a vehicle and our policies at Yardley Hastings Garage.',
};

export default function FaqPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section className="bg-[#111110] text-white relative overflow-hidden flex items-end" style={{ minHeight: '34vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#111110] via-[#1F1F1D] to-[#111110]" />
        <div className="absolute inset-0 diagonal-lines opacity-60" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-12 lg:pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">FAQ</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4 leading-[1.05]">Frequently Asked Questions</h1>
            <p className="text-white/70 max-w-lg font-light text-lg">
              Answers to the questions we're asked most often. Can't find what you need? Just get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-8 lg:px-14">
          <FaqAccordion />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#111110] text-white py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="w-6 h-[2px] bg-[#004225] mb-5" />
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Still have a question?</h2>
            <p className="text-white/65 text-sm font-light">We're happy to help — just get in touch.</p>
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
