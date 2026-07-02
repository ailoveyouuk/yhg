import Link from 'next/link';
import type { Metadata } from 'next';
import PageCard from '@/components/PageCard';
import { BUSINESS_PHONE } from '@/data/business';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageCard>
      <div className="bg-[#F7F7F5] px-6 py-24 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-[#004225] text-sm font-semibold uppercase tracking-[0.14em] mb-3">404</p>
          <h1 className="text-3xl font-semibold text-[#111110] tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-[#5A5A57] leading-relaxed mb-8">
            The page you're looking for doesn't exist, may have moved, or the link might be out of date.
            Try the stocklist or services pages below, or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-[#004225] hover:bg-[#005a30] text-white font-medium px-6 py-3 text-sm transition-colors rounded-sm"
            >
              Back to Homepage
            </Link>
            <Link
              href="/cars"
              className="border border-[#EFEFEB] hover:border-[#111110] text-[#111110] font-medium px-6 py-3 text-sm transition-colors rounded-sm"
            >
              View Stocklist
            </Link>
            <a
              href={BUSINESS_PHONE.href}
              className="border border-[#EFEFEB] hover:border-[#111110] text-[#111110] font-medium px-6 py-3 text-sm transition-colors rounded-sm"
            >
              Call {BUSINESS_PHONE.display}
            </a>
          </div>
        </div>
      </div>
    </PageCard>
  );
}
