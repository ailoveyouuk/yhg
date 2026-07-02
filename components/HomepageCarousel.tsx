'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StocklistPreview, { StocklistPreviewMobile } from '@/components/StocklistPreview';
import LazyBackgroundVideo from '@/components/LazyBackgroundVideo';
import type { Vehicle } from '@/types';

// Width of each inactive sliver in px
const SLIVER = 88;
// Gap between panels in px (matches gap-3 = 12px)
const GAP = 12;

type Cta = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'glass';
};

type SubLink = {
  label: string;
  href: string;
};

type Panel = {
  id: string;
  sliverLabel: string;
  image?: string;
  video?: string;
  eyebrow?: string;
  heading: string;
  body: string;
  ctas: Cta[];
  /** Quick links matching this panel's header nav dropdown (see
   *  components/Header.tsx) — kept in sync with those sub-links so the
   *  homepage panels and the persistent header nav offer the same shortcuts. */
  subLinks?: SubLink[];
};

const panels: Panel[] = [
  {
    // Stocklist panel doubles as the Welcome / landing panel.
    // No eyebrow — uses the location indicator instead.
    id: 'stocklist',
    sliverLabel: 'Stocklist',
    video: '/assets/stocklist.mp4',
    heading: 'The standard\nyou expect.',
    body: 'Independent family garage. Servicing, bodywork, detailing and a curated stocklist — all held to the same exacting standard.',
    ctas: [
      { label: 'View Stocklist', href: '/cars', variant: 'primary' },
      { label: 'Book a Service', href: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'servicing',
    sliverLabel: 'Servicing',
    image: '/assets/workshop-interior.jpg',
    eyebrow: 'Servicing & Mechanical',
    heading: 'Every make.\nDone right.',
    body: 'Manufacturer-spec servicing, diagnostics and repairs for all vehicles. State-of-the-art equipment, honest advice.',
    ctas: [{ label: 'Explore Services', href: '/services', variant: 'glass' }],
    subLinks: [
      { label: 'Service', href: '/services#servicing' },
      { label: 'MOT', href: '/mot' },
      { label: 'Tyres', href: '/tyres' },
      { label: 'Diagnostics', href: '/diagnostics' },
      { label: 'Brakes', href: '/brakes' },
    ],
  },
  {
    id: 'bodywork',
    sliverLabel: 'Bodywork',
    image: '/assets/workshop-classic-aston-1.jpg',
    eyebrow: 'Bodywork & Restoration',
    heading: 'Smart car\nto Bentley.',
    body: 'Accident repair, full resprays and classic restoration. MG approved body repairer. All major insurers accepted.',
    ctas: [{ label: 'Explore Bodywork', href: '/bodywork', variant: 'glass' }],
    subLinks: [
      { label: 'Accident Repair', href: '/bodywork#accident-repair' },
      { label: 'Dent Removal', href: '/bodywork#dent-removal' },
      { label: 'Paintwork', href: '/bodywork#paintwork' },
      { label: 'Classic Restoration', href: '/bodywork#classic-restoration' },
    ],
  },
  {
    id: 'detailing',
    sliverLabel: 'Detailing',
    image: '/assets/detailing-1.jpg',
    eyebrow: 'Detailing',
    heading: 'The finish it\ndeserves.',
    body: 'Machine polishing, paint correction, ceramic coating and full interior work. Correct products, methodical preparation.',
    ctas: [{ label: 'Explore Detailing', href: '/detailing', variant: 'glass' }],
    subLinks: [
      { label: 'Paint Correction', href: '/detailing#paint-correction' },
      { label: 'Paint Protection', href: '/detailing#paint-protection' },
      { label: 'Interior Detailing', href: '/detailing#interior-detailing' },
      { label: 'Detail Packages', href: '/detailing#detail-packages' },
    ],
  },
];

export default function HomepageCarousel({ previewVehicles = [] }: { previewVehicles?: Vehicle[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ─── Mobile/tablet layout: vertical stack of full-width cards ───
           Switches at lg (1024px), matching the header's hamburger-menu
           breakpoint, so tablets get the simpler stacked layout rather
           than the desktop accordion squeezed into too little width. ─── */}
      <div className="lg:hidden flex flex-col gap-4 px-4 pt-3 pb-6">
        {panels.map((panel) => (
          <div
            key={`mobile-${panel.id}`}
            className={`relative overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.18)] ${
              panel.id === 'stocklist' ? 'h-[23rem]' : 'h-72'
            }`}
          >
            {/* Background */}
            {panel.image && (
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
            {panel.video && (
              <LazyBackgroundVideo
                src={panel.video}
                play="visible"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Gradient overlays — darkened +15% for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 px-6 pb-6 max-w-full">
              {/* Eyebrow */}
              {panel.eyebrow ? (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
                  <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">
                    {panel.eyebrow}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-px bg-[#6ab88a]" />
                  <span className="text-white/55 text-[11px] tracking-[0.12em] uppercase font-medium">
                    Yardley Hastings · Northamptonshire
                  </span>
                </div>
              )}

              {/* Heading */}
              <h2 className="font-semibold text-white leading-[1.05] tracking-tight text-3xl mb-2.5 whitespace-pre-line">
                {panel.heading}
              </h2>

              {/* Body */}
              <p className="text-white/70 leading-relaxed font-light text-sm mb-4">
                {panel.body}
              </p>

              {/* Stocklist preview — mobile only, this panel only */}
              {panel.id === 'stocklist' && <StocklistPreviewMobile vehicles={previewVehicles} />}

              {/* Sub-links — mirrors this panel's header nav dropdown */}
              {panel.subLinks && (
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                  {panel.subLinks.map((link) => (
                    <Link
                      key={`mobile-sub-${panel.id}-${link.href}`}
                      href={link.href}
                      className="text-white/60 hover:text-white text-xs tracking-wide underline underline-offset-2 decoration-white/30 hover:decoration-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-2">
                {panel.ctas.map((cta) => (
                  <Link
                    key={`mobile-${panel.id}-${cta.href}`}
                    href={cta.href}
                    className={
                      cta.variant === 'primary'
                        ? 'inline-flex items-center gap-2 justify-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-5 py-2.5 text-sm tracking-wide transition-colors rounded-sm'
                        : cta.variant === 'secondary'
                        ? 'inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white font-medium px-5 py-2.5 text-sm tracking-wide transition-colors rounded-sm'
                        : 'inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 hover:border-white/50 text-white font-medium px-5 py-2.5 text-sm tracking-wide backdrop-blur-sm transition-all rounded-sm'
                    }
                  >
                    {cta.label}
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Desktop layout: horizontal accordion ─── */}
      <div
        className="hidden lg:flex w-full overflow-hidden pt-3 px-4 pb-4 gap-3"
        style={{ height: 'calc(100svh - 108px)' }}
      >
      {panels.map((panel, i) => {
        const isActive = i === active;
        // active width = 100% of content area minus all inactive slivers and their gaps
        const activeW = `calc(100% - ${(panels.length - 1) * (SLIVER + GAP)}px)`;

        return (
          <div
            key={panel.id}
            onClick={() => !isActive && setActive(i)}
            style={{
              width: isActive ? activeW : `${SLIVER}px`,
              flexShrink: 0,
              transition: 'width 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className={`relative overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.18)]${!isActive ? ' cursor-pointer group' : ''}`}
          >
            {/* ─── Background ─── */}

            {/* Image panels */}
            {panel.image && (
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}

            {/* Video panels (stocklist) — only the active panel loads/plays */}
            {panel.video && (
              <LazyBackgroundVideo
                src={panel.video}
                play={isActive}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* ─── Gradient overlays — always rendered, opacity controlled ─── */}
            {/* Active gradients (bottom + left) — darkened +15% for text legibility */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none"
              style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.4s ease' }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent pointer-events-none"
              style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.4s ease' }}
            />
            {/* Sliver overlay */}
            <div
              className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none"
              style={{ opacity: isActive ? 0 : 1, transition: 'opacity 0.4s ease' }}
            />

            {/* ─── Hover accent line ─── */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004225] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ display: isActive ? 'none' : undefined }}
            />

            {/* ─── Sliver label — always rendered, fades out when active ─── */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                opacity: isActive ? 0 : 1,
                transition: isActive ? 'opacity 0.15s ease' : 'opacity 0.2s ease 0.45s',
              }}
            >
              <span
                className="text-white/60 group-hover:text-white/90 text-[10px] tracking-[0.22em] uppercase font-medium whitespace-nowrap transition-colors duration-200"
                style={{ writingMode: 'vertical-lr' }}
              >
                {panel.sliverLabel}
              </span>
            </div>

            {/* ─── Active content — always rendered, fades in AFTER panel expands ─── */}
            <div
              className="absolute bottom-0 left-0 px-10 lg:px-14 pb-14 lg:pb-20 max-w-3xl pointer-events-none"
              style={{
                opacity: isActive ? 1 : 0,
                transition: isActive ? 'opacity 0.25s ease 0.35s' : 'opacity 0.12s ease',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              {/* Eyebrow — pill for section panels, location indicator for the landing/stocklist panel */}
              {panel.eyebrow ? (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
                  <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">
                    {panel.eyebrow}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-px bg-[#6ab88a]" />
                  <span className="text-white/55 text-[11px] tracking-[0.12em] uppercase font-medium">
                    Yardley Hastings · Northamptonshire
                  </span>
                </div>
              )}

              {/* Heading */}
              <h2
                className={`font-semibold text-white leading-[1.0] tracking-tight mb-5 whitespace-pre-line ${
                  panel.id === 'stocklist' && !panel.eyebrow ? 'text-5xl lg:text-[4.5rem]' : 'text-4xl lg:text-5xl'
                }`}
              >
                {panel.heading}
              </h2>

              {/* Body */}
              <p className="text-white/70 leading-relaxed font-light text-sm lg:text-[15px] max-w-md mb-8">
                {panel.body}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                {panel.ctas.map((cta) => (
                  <Link
                    key={`${panel.id}-${cta.href}`}
                    href={cta.href}
                    className={
                      cta.variant === 'primary'
                        ? 'inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-semibold px-7 py-3.5 text-sm tracking-wide transition-colors rounded-sm'
                        : cta.variant === 'secondary'
                        ? 'inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white font-medium px-7 py-3.5 text-sm tracking-wide transition-colors rounded-sm'
                        : 'inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/18 border border-white/25 hover:border-white/50 text-white font-medium px-7 py-3.5 text-sm tracking-wide backdrop-blur-sm transition-all rounded-sm'
                    }
                  >
                    {cta.label}
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Sub-links — mirrors this panel's header nav dropdown */}
              {panel.subLinks && (
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-5 pointer-events-auto">
                  {panel.subLinks.map((link) => (
                    <Link
                      key={`sub-${panel.id}-${link.href}`}
                      href={link.href}
                      className="text-white/55 hover:text-white text-xs tracking-wide underline underline-offset-2 decoration-white/25 hover:decoration-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ─── Stocklist preview — subtle "in stock now" cards, active panel only ─── */}
            {panel.id === 'stocklist' && (
              <div
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: isActive ? 'opacity 0.3s ease 0.4s' : 'opacity 0.12s ease',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <StocklistPreview vehicles={previewVehicles} />
              </div>
            )}

            {/* ─── Panel counter — fades with content ─── */}
            <div
              className="absolute top-6 right-6 text-white/20 text-[10px] tracking-[0.2em] font-light select-none pointer-events-none"
              style={{
                opacity: isActive ? 1 : 0,
                transition: isActive ? 'opacity 0.25s ease 0.35s' : 'opacity 0.12s ease',
              }}
            >
              {String(i + 1).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
