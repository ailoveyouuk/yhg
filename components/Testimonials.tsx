import FadeIn from '@/components/FadeIn';
import testimonials from '@/data/testimonials.json';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEW_URL } from '@/data/business';

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 ${filled ? 'text-[#B8913A]' : 'text-[#E5E5E2]'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F5] dot-grid py-20 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="w-5 h-[2px] bg-[#004225] mb-6" />
              <h2 className="text-3xl font-semibold text-[#111110] tracking-tight mb-3">
                What our customers say
              </h2>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled={i <= Math.round(GOOGLE_RATING)} />
                  ))}
                </div>
                <span className="text-[#111110] font-semibold text-sm">{GOOGLE_RATING.toFixed(1)}</span>
                <span className="text-[#5A5A57] text-sm">
                  based on {GOOGLE_REVIEW_COUNT} Google reviews
                </span>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 shrink-0 border border-[#111110]/15 hover:border-[#004225] hover:text-[#004225] text-[#111110] font-medium px-6 py-3 text-sm tracking-wide transition-colors bg-white rounded-sm"
            >
              Leave us a review
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E2]">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 60}>
              <div className="bg-white h-full px-6 py-7 flex flex-col">
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="text-[#5A5A57] text-[13.5px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-[#EFEFEB]">
                  <div className="font-semibold text-[#111110] text-sm tracking-tight">{t.name}</div>
                  <div className="text-[#888884] text-xs mt-0.5">{t.meta} · {t.when}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-[#888884] text-xs mt-8">
          Genuine reviews from our Google Business Profile. Also rated 5 out of 5 on Facebook, Yell and the Good Garage Guide.
        </p>
      </div>
    </section>
  );
}
