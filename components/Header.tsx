'use client';

import Link from 'next/link';
import { useState } from 'react';

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Bodywork', href: '/bodywork' },
  { label: 'Cars', href: '/cars' },
  { label: 'Vans', href: '/vans' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[#EFEFEB]">
      {/* Top info bar */}
      <div className="border-b border-[#EFEFEB]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.1em] uppercase text-[#888884]">
            Independent Family Garage · Yardley Hastings, Northamptonshire
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:admin@yardleyhastingsgarage.co.uk"
              className="text-[11px] text-[#888884] hover:text-[#111110] transition-colors hidden sm:block tracking-wide"
            >
              admin@yardleyhastingsgarage.co.uk
            </a>
            <a
              href="tel:01604696225"
              className="flex items-center gap-1.5 text-[11px] font-medium text-[#111110] hover:text-[#004225] transition-colors tracking-wide"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              01604 696225
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-[#111110] font-semibold text-lg tracking-tight group-hover:text-[#004225] transition-colors">
              Yardley Hastings Garage
            </span>
            <span className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-[#888884]">
              Est. Northamptonshire
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#111110]/70 hover:text-[#111110] px-3.5 py-2 text-sm font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-[#004225] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-6 bg-[#004225] hover:bg-[#005a30] text-white font-medium px-5 py-2 text-sm tracking-wide transition-colors"
            >
              Book a Service
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#111110] hover:text-[#004225] p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#EFEFEB] px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-[#111110]/80 hover:text-[#004225] px-0 py-3.5 text-sm font-medium transition-colors border-b border-[#EFEFEB] last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 block bg-[#004225] hover:bg-[#005a30] text-white font-medium px-4 py-3 text-sm text-center transition-colors"
          >
            Book a Service
          </Link>
        </div>
      )}
    </header>
  );
}
