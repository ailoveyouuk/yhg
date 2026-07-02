'use client';

/**
 * CarGallery — standardised stocklist image gallery.
 *
 * Every image (main + thumbnails) is locked to a 7:5 landscape aspect ratio
 * (a "5x7" print, shown landscape) via CSS `aspect-ratio` + `object-cover`,
 * so listings always present a clean, uniform grid regardless of the source
 * photos' original dimensions. This is the standard template for all future
 * vehicle listings — reuse this component rather than inlining gallery markup.
 */

import { useState } from 'react';

const ASPECT = '7 / 5';

export default function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="bg-white border border-[#EFEFEB] overflow-hidden">
        <div
          className="w-full flex items-center justify-center bg-[#F7F7F5]"
          style={{ aspectRatio: ASPECT }}
        >
          <div className="text-center text-[#5A5A57]">
            <svg className="w-12 h-12 mx-auto mb-3 opacity-25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p className="text-sm">Photos coming soon</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EFEFEB] overflow-hidden">
      {/* Main image */}
      <div className="relative w-full bg-[#F7F7F5]" style={{ aspectRatio: ASPECT }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-[#111110]/70 text-white text-[11px] font-medium px-2.5 py-1 tracking-wide rounded-sm">
            {active + 1} / {images.length}
          </span>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-px bg-[#EFEFEB] border-t border-[#EFEFEB]">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className="relative bg-white"
              style={{ aspectRatio: ASPECT }}
              aria-label={`View photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
                  i === active ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                }`}
              />
              {i === active && (
                <span className="absolute inset-0 ring-2 ring-inset ring-[#004225]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
