import Link from 'next/link';
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_PHONE, ESTABLISHED_TAGLINE, GOOGLE_REVIEW_URL, OPENING_HOURS, PAYMENT_METHODS } from '@/data/business';

const LEGAL_LINKS = [
  ['Privacy Policy', '/privacy-policy'],
  ['Cookies Policy', '/cookies'],
  ['Consumer Rights', '/consumer-rights'],
  ['FAQ', '/faq'],
];

const PAYMENT_ICONS: Record<string, React.ReactNode> = {
  Visa: (
    <span className="border border-white/20 rounded-[3px] px-2 py-1 text-white/70 text-[10px] font-bold tracking-wide">VISA</span>
  ),
  Mastercard: (
    <span className="border border-white/20 rounded-[3px] px-2 py-1 flex items-center gap-0.5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B]/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B]/80 -ml-1.5" />
    </span>
  ),
  'Bank Transfer': (
    <span className="border border-white/20 rounded-[3px] px-2 py-1 text-white/70">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4.5 21V9.75M19.5 21V9.75M2.25 9.75L12 3l9.75 6.75M8.25 21v-6a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5v6" />
      </svg>
    </span>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-[#111110] text-white/75">
      {/* BRG accent line at top */}
      <div className="h-[3px] bg-[#004225]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-white font-semibold text-lg tracking-tight block">
                {BUSINESS_NAME}
              </span>
              <span className="text-[9.5px] tracking-[0.18em] uppercase font-medium text-[#888884] mt-0.5 block">
                {ESTABLISHED_TAGLINE}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/65 max-w-xs">
              Independent family garage serving Northamptonshire and the surrounding counties. Specialists in repairs, servicing, bodywork, restoration and vehicle sales.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/YardleyHastingsGarage/" target="_blank" rel="noopener noreferrer"
                className="text-white/55 hover:text-white transition-colors">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/yardleyhastingsgarage.co.uk/" target="_blank" rel="noopener noreferrer"
                className="text-white/55 hover:text-white transition-colors">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-white transition-colors"
                aria-label="Leave us a review on Google"
                title="Leave us a review on Google"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" opacity=".9"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" opacity=".7"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" opacity=".5"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" opacity=".8"/>
                </svg>
              </a>
            </div>
            <div className="mt-7">
              <span className="text-[9.5px] tracking-[0.16em] uppercase font-medium text-[#666663] mb-2.5 block">Payment methods accepted</span>
              <div className="flex items-center gap-2">
                {PAYMENT_METHODS.map((m) => (
                  <span key={m} title={m}>{PAYMENT_ICONS[m]}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-[10px] font-medium uppercase tracking-[0.16em] mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                ['Stocklist', '/cars'],
                ['Servicing', '/services'],
                ['Bodywork & Accident Repair', '/bodywork'],
                ['Detailing', '/detailing'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/65 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[10px] font-medium uppercase tracking-[0.16em] mb-6">Find Us</h3>
            <div className="space-y-4 text-sm text-white/65">
              <p className="flex gap-3">
                <svg className="w-4 h-4 text-[#004225] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {BUSINESS_ADDRESS.line1AndLine2},<br />{BUSINESS_ADDRESS.cityAndPostcode}
              </p>
              <p className="flex gap-3 items-center">
                <svg className="w-4 h-4 text-[#004225] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={BUSINESS_PHONE.href} className="hover:text-white transition-colors">{BUSINESS_PHONE.display}</a>
              </p>
              <p className="flex gap-3 items-center">
                <svg className="w-4 h-4 text-[#004225] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={BUSINESS_EMAIL.href} className="hover:text-white transition-colors break-all">{BUSINESS_EMAIL.display}</a>
              </p>
              <div className="pt-1">
                <table className="text-xs w-full">
                  <tbody>
                    {OPENING_HOURS.map(([day, hrs]) => (
                      <tr key={day}>
                        <td className="py-1 pr-6 text-white/50">{day}</td>
                        <td className={hrs === 'Closed' ? 'text-white/40' : 'text-white/65'}>{hrs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between text-xs text-white/45 gap-3">
          <span>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Website by AI Love You.</span>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {LEGAL_LINKS.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white/80 transition-colors">{label}</Link>
            ))}
          </nav>
          <span>{BUSINESS_ADDRESS.full}</span>
        </div>
      </div>
    </footer>
  );
}
