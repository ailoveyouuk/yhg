'use client';

import { useServiceBag } from '@/contexts/ServiceBagContext';

export default function FloatingServiceButton() {
  const { items, setDrawerOpen } = useServiceBag();
  const count = items.length;

  return (
    <button
      onClick={() => setDrawerOpen(true)}
      aria-label={count > 0 ? `Open service request — ${count} selected` : 'Open service request'}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 bg-[#004225] hover:bg-[#005a30] text-white px-3 py-5 rounded-r-xl shadow-[4px_0_16px_rgba(0,66,37,0.25)] transition-all duration-200 group"
    >
      {/* Wrench icon */}
      <svg
        className="w-4 h-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>

      {/* Vertical label */}
      <span
        className="text-[9px] tracking-[0.2em] uppercase font-medium text-white/80 group-hover:text-white transition-colors"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Request
      </span>

      {/* Count badge */}
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-white text-[#004225] rounded-full text-[9px] font-bold flex items-center justify-center px-1 shadow-sm">
          {count}
        </span>
      )}
    </button>
  );
}
