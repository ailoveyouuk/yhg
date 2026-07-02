import Link from 'next/link';
import type { Vehicle } from '@/types';
import vehiclesData from '@/data/vehicles.json';
import FadeIn from '@/components/FadeIn';
import HomepageCarousel from '@/components/HomepageCarousel';
import Testimonials from '@/components/Testimonials';
import { BUSINESS_PHONE, FOUNDED_YEAR } from '@/data/business';

const vehicles = vehiclesData as Vehicle[];

export default function Home() {
  const previewVehicles = vehicles
    .filter((v) => v.type === 'car' && v.status !== 'sold')
    .sort((a, b) => (a.date_added < b.date_added ? 1 : -1))
    .slice(0, 3);

  return (
    <>
      {/* ─── Full-screen accordion carousel ─── */}
      <HomepageCarousel previewVehicles={previewVehicles} />

      {/* ─── Credentials strip ─── */}
      <div className="bg-[#111110] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
            {[
              `Established ${FOUNDED_YEAR}`,
              'MG Approved Body Repairer',
              'Insurance Approved',
              'Independent & Family Run',
            ].map((c) => (
              <span
                key={c}
                className="text-[#888884] text-[11px] tracking-[0.12em] uppercase flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-[#004225]" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Testimonials ─── */}
      <Testimonials />

      {/* ─── CTA strip ─── */}
      <section className="bg-[#111110] border-t border-white/5 py-20 diagonal-lines">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <div className="w-6 h-[2px] bg-[#004225] mb-5" />
              <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">
                Ready to book, or need advice?
              </h2>
              <p className="text-white/70 font-light text-sm">
                Free estimates always available. We are happy to take a look.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-7 py-3.5 text-sm tracking-wide transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href={BUSINESS_PHONE.href}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-medium px-7 py-3.5 text-sm tracking-wide transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {BUSINESS_PHONE.display}
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
