'use client';

import { useServiceBag } from '@/contexts/ServiceBagContext';
import type { Service } from '@/types';

export default function ServiceGrid({ services }: { services: Service[] }) {
  const { toggleItem, hasItem } = useServiceBag();

  function handleAdd(s: Service) {
    toggleItem({ id: s.id, name: s.name, category: s.category });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EFEFEB]">
      {services.map((s) => {
        const added = hasItem(s.id);
        return (
          <div
            key={s.id}
            className="bg-white hover:bg-[#FAFAF8] transition-colors p-8 flex flex-col"
          >
            {/* Name */}
            <h3 className="font-semibold text-[#111110] tracking-tight mb-3 text-[15px]">
              {s.name}
            </h3>

            {/* Description — consistent 3-line clamp */}
            <p className="text-[#5A5A57] text-sm leading-relaxed mb-5 line-clamp-3">
              {s.description}
            </p>

            {/* Includes list */}
            {s.includes.length > 0 && (
              <ul className="space-y-2 mb-6">
                {s.includes.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#5A5A57]">
                    <svg
                      className="w-3 h-3 text-[#6ab88a] shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Add to request button — always at bottom via mt-auto */}
            <button
              onClick={() => handleAdd(s)}
              className={`mt-auto w-full py-2.5 text-sm font-medium transition-all duration-200 rounded-sm flex items-center justify-center gap-2 ${
                added
                  ? 'bg-[#EAF0EC] text-[#004225] border border-[#004225]/20 hover:bg-[#004225] hover:text-white hover:border-[#004225]'
                  : 'bg-[#004225] hover:bg-[#005a30] text-white'
              }`}
            >
              {added ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Added to Request
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add to Request
                </>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
