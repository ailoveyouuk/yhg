'use client';

import { useState } from 'react';
import faqData from '@/data/faqs.json';

export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {faqData.map((group) => (
        <div key={group.category}>
          <div className="w-5 h-[2px] bg-[#004225] mb-5" />
          <h2 className="text-xl font-semibold text-[#111110] tracking-tight mb-5">{group.category}</h2>
          <div className="border border-[#EFEFEB] rounded-sm overflow-hidden">
            {group.items.map((item) => {
              const id = `${group.category}-${item.q}`;
              const isOpen = open === id;
              return (
                <div key={id} className="border-b border-[#EFEFEB] last:border-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : id)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[#F7F7F5] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[#111110] text-sm tracking-tight">{item.q}</span>
                    <svg
                      className={`w-4 h-4 text-[#004225] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 -mt-1">
                      <p className="text-[#5A5A57] text-sm leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
