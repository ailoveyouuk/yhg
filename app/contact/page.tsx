import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';
import PageCard from '@/components/PageCard';
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, OPENING_HOURS } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact & Book',
  description: 'Book a service, request a quote or get directions to Yardley Hastings Garage. Bedford Rd W, Yardley Hastings, Northampton NN7 1HB.',
  path: '/contact',
});

function ContactFormFallback() {
  return (
    <div className="bg-white border border-[#EFEFEB] p-8 h-[520px] flex items-center justify-center">
      <div className="w-5 h-[2px] bg-[#EFEFEB] animate-pulse" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section className="bg-[#111110] text-white relative overflow-hidden flex items-end" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#111110] via-[#1F1F1D] to-[#111110]" />
        <div className="absolute inset-0 diagonal-lines opacity-60" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-12 lg:pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">Contact &amp; Book</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4 leading-[1.05]">Get in touch</h1>
            <p className="text-white/70 max-w-lg font-light text-lg">
              Book a service, request a quote, enquire about a vehicle, or just ask for advice. We are always happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Form + info ─── */}
      <section className="bg-[#F7F7F5] py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Info panel — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white border border-[#EFEFEB] p-7 rounded-sm">
                <div className="w-5 h-[2px] bg-[#004225] mb-5" />
                <h2 className="text-base font-semibold text-[#111110] mb-6 tracking-tight">Contact details</h2>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-[#004225] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <div className="text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-1">Address</div>
                      <div className="text-sm text-[#5A5A57]">{BUSINESS_ADDRESS.line1AndLine2}<br />{BUSINESS_ADDRESS.cityAndPostcode}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-[#004225] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <div className="text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-1">Phone</div>
                      <a href={BUSINESS_PHONE.href} className="text-sm text-[#004225] hover:text-[#111110] font-semibold transition-colors">{BUSINESS_PHONE.display}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-[#004225] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <div className="text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-1">Email</div>
                      <a href={BUSINESS_EMAIL.href} className="text-sm text-[#004225] hover:text-[#111110] transition-colors break-all">{BUSINESS_EMAIL.display}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#EFEFEB] p-7 rounded-sm">
                <div className="w-5 h-[2px] bg-[#004225] mb-5" />
                <h2 className="text-base font-semibold text-[#111110] mb-5 tracking-tight">Opening hours</h2>
                <table className="w-full text-sm">
                  <tbody>
                    {OPENING_HOURS.map(([day, hrs]) => (
                      <tr key={day} className="border-b border-[#EFEFEB] last:border-0">
                        <td className="py-2.5 font-medium text-[#111110] pr-4">{day}</td>
                        <td className={`py-2.5 ${hrs === 'Closed' ? 'text-[#5A5A57]/40' : 'text-[#5A5A57]'}`}>{hrs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-sm overflow-hidden border border-[#EFEFEB]">
                <iframe
                  src={BUSINESS_ADDRESS.mapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yardley Hastings Garage location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
