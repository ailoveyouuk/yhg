'use client';

import Link from 'next/link';
import { useServiceBag } from '@/contexts/ServiceBagContext';

export default function ServiceRequestDrawer() {
  const { items, removeItem, clearBag, isDrawerOpen, setDrawerOpen } = useServiceBag();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] transition-opacity duration-300"
        style={{
          opacity: isDrawerOpen ? 1 : 0,
          pointerEvents: isDrawerOpen ? 'auto' : 'none',
        }}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className="fixed inset-y-0 left-0 z-50 w-[340px] bg-white shadow-2xl flex flex-col"
        style={{
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-label="Service request panel"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-7 py-6 border-b border-[#EFEFEB]">
          <div>
            <div className="w-4 h-[2px] bg-[#004225] mb-2.5" />
            <h2 className="text-base font-semibold text-[#111110] tracking-tight">Service Request</h2>
            {items.length > 0 ? (
              <p className="text-xs text-[#5A5A57] mt-0.5">
                {items.length} service{items.length !== 1 ? 's' : ''} selected
              </p>
            ) : (
              <p className="text-xs text-[#5A5A57] mt-0.5">Nothing selected yet</p>
            )}
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-[#5A5A57] hover:text-[#111110] transition-colors p-1 -mr-1 mt-0.5"
            aria-label="Close panel"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-7 py-12">
              <div className="w-11 h-11 border border-[#EFEFEB] rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#BDBDB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-[#111110] tracking-tight">No services selected</p>
              <p className="text-xs text-[#5A5A57] mt-1.5 leading-relaxed max-w-[200px]">
                Browse our services and add what you need to your request.
              </p>
              <Link
                href="/services"
                onClick={() => setDrawerOpen(false)}
                className="mt-5 text-[#004225] hover:text-[#111110] text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
              >
                View Services →
              </Link>
            </div>
          ) : (
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 px-7 py-4 border-b border-[#EFEFEB] last:border-0"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] shrink-0 mt-1.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#111110] leading-snug">{item.name}</p>
                    <p className="text-xs text-[#5A5A57] mt-0.5">{item.category}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="shrink-0 text-[#BDBDB8] hover:text-red-400 transition-colors p-1 -mr-1"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — only shown when items exist */}
        {items.length > 0 && (
          <div className="border-t border-[#EFEFEB] px-7 py-6 space-y-3">
            <p className="text-xs text-[#5A5A57] leading-relaxed">
              We&apos;ll call to discuss your requirements and provide an accurate quote — no surprises.
            </p>
            <Link
              href="/contact?type=service"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#004225] hover:bg-[#005a30] text-white font-semibold py-3.5 text-sm tracking-wide transition-colors rounded-sm"
            >
              Review &amp; Send Request
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <button
              onClick={clearBag}
              className="w-full text-center text-[#BDBDB8] hover:text-[#5A5A57] text-xs py-1 transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </>
  );
}
