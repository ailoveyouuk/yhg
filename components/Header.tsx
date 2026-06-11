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
    <header className="bg-slate-900 sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm text-slate-300">
          <span>Independent Family Garage · Yardley Hastings, Northamptonshire</span>
          <div className="flex items-center gap-6">
            <a href="mailto:admin@yardleyhastingsgarage.co.uk" className="hover:text-amber-400 transition-colors hidden sm:block">
              admin@yardleyhastingsgarage.co.uk
            </a>
            <a href="tel:01604696225" className="flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              01604 696225
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg tracking-wide">YARDLEY HASTINGS</span>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Garage</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2 rounded text-sm transition-colors"
            >
              Book a Service
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-300 hover:text-white p-2"
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
        <div className="lg:hidden bg-slate-800 border-t border-slate-700 px-4 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-3 rounded text-sm font-medium transition-colors border-b border-slate-700 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-3 rounded text-sm text-center transition-colors"
          >
            Book a Service
          </Link>
        </div>
      )}
    </header>
  );
}
