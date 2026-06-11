'use client';

import Link from 'next/link';
import { useState } from 'react';

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Services & Repairs', href: '/services' },
  { label: 'Bodywork & Restoration', href: '/bodywork' },
  { label: 'Cars for Sale', href: '/cars' },
  { label: 'Vans for Sale', href: '/vans' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#004225] sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-[#002d19] border-b border-[#003520]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-green-200/70">
          <span className="tracking-wide">Independent Family Garage · Yardley Hastings, Northamptonshire</span>
          <div className="flex items-center gap-6">
            <a href="mailto:admin@yardleyhastingsgarage.co.uk"
              className="hover:text-[#C9A84C] transition-colors hidden sm:block">
              admin@yardleyhastingsgarage.co.uk
            </a>
            <a href="tel:01604696225"
              className="flex items-center gap-2 text-[#C9A84C] font-medium hover:text-[#D4B86A] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              01604 696225
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-white font-serif text-xl font-semibold tracking-wide group-hover:text-green-100 transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Yardley Hastings Garage
            </span>
            <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.2em] uppercase">
              Est. Northamptonshire
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-green-100/80 hover:text-white hover:bg-[#005a30] px-3 py-2 rounded text-sm font-medium transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-5 bg-[#C9A84C] hover:bg-[#D4B86A] text-[#002d19] font-semibold px-5 py-2.5 rounded text-sm tracking-wide transition-colors"
            >
              Book a Service
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-green-100 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#002d19] border-t border-[#003520] px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-green-100/80 hover:text-white px-3 py-3.5 text-sm font-medium transition-colors border-b border-[#003520] last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-[#C9A84C] hover:bg-[#D4B86A] text-[#002d19] font-semibold px-4 py-3 rounded text-sm text-center transition-colors"
          >
            Book a Service
          </Link>
        </div>
      )}
    </header>
  );
}
