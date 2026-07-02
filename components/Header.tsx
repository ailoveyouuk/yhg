'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useServiceBag } from '@/contexts/ServiceBagContext';
import { ESTABLISHED_TAGLINE } from '@/data/business';

const centerNav = [
  { label: 'Stocklist', href: '/cars' },
  { label: 'Services', href: '/services' },
  { label: 'Bodywork', href: '/bodywork' },
  { label: 'Detailing', href: '/detailing' },
  { label: 'MOT', href: '/mot' },
  { label: 'Tyres', href: '/tyres' },
  { label: 'Diagnostics', href: '/diagnostics' },
  { label: 'Brakes', href: '/brakes' },
];

const rightNav = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { items, setDrawerOpen } = useServiceBag();
  const bagCount = items.length;

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const pillClass = (href: string) =>
    `text-[11px] tracking-[0.12em] uppercase font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
      isActive(href)
        ? 'bg-[#004225] text-[#F7F7F5]'
        : 'text-[#7A7A76] hover:bg-[#004225] hover:text-[#F7F7F5]'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#F7F7F5]">
      <div className="px-6 lg:px-10 h-16 flex items-center gap-6">

        {/* Left — brand name */}
        <Link href="/" className="shrink-0 leading-tight">
          <span className="text-[#004225] font-bold text-[15px] tracking-tight block">
            Yardley Hastings Garage
          </span>
          <span className="text-[#7A7A76] text-[9.5px] tracking-[0.14em] uppercase font-medium block">
            {ESTABLISHED_TAGLINE} · Northamptonshire
          </span>
        </Link>

        {/* Centre — primary nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
          {centerNav.map((item) => (
            <Link key={item.href} href={item.href} className={pillClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right — About + Contact + Request badge */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {rightNav.map((item) => (
            <Link key={item.href} href={item.href} className={pillClass(item.href)}>
              {item.label}
            </Link>
          ))}

          {/* Service request bag — only shown when items exist */}
          {bagCount > 0 && (
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-2 ml-1 bg-[#EAF0EC] hover:bg-[#004225] text-[#004225] hover:text-white rounded-full pl-3.5 pr-2.5 py-1.5 text-[11px] tracking-[0.12em] uppercase font-medium transition-all duration-200"
            >
              Request
              <span className="bg-[#004225] text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center text-[9px] font-bold px-1 group-hover:bg-white group-hover:text-[#004225]">
                {bagCount}
              </span>
            </button>
          )}
        </div>

        {/* Mobile spacer + hamburger */}
        <div className="flex-1 lg:hidden" />

        {/* Mobile bag badge */}
        {bagCount > 0 && (
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden flex items-center gap-1.5 bg-[#EAF0EC] text-[#004225] rounded-full px-3 py-1.5 text-[10px] tracking-[0.1em] uppercase font-medium"
          >
            <span>{bagCount}</span>
          </button>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#004225] hover:text-[#005a30] p-2 transition-colors"
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

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#F7F7F5] border-t border-[#E8E8E4] px-6 py-3">
          {[...centerNav, ...rightNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-[#7A7A76] hover:text-[#004225] py-3.5 text-base font-medium transition-colors border-b border-[#E8E8E4] last:border-0"
            >
              {item.label}
            </Link>
          ))}
          {bagCount > 0 && (
            <button
              onClick={() => { setOpen(false); setDrawerOpen(true); }}
              className="block w-full text-left text-[#004225] font-semibold py-3.5 text-base transition-colors"
            >
              View Request ({bagCount})
            </button>
          )}
        </div>
      )}
    </header>
  );
}
