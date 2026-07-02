import type { Metadata } from 'next';
import Link from 'next/link';
import PageCard from '@/components/PageCard';
import { BUSINESS_EMAIL } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Cookies Policy',
  description: 'How Yardley Hastings Garage uses cookies and local storage on this website.',
  path: '/cookies',
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-[#111110] tracking-tight mt-10 mb-3 first:mt-0">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#5A5A57] text-[15px] leading-relaxed mb-4">{children}</p>;
}

export default function CookiesPage() {
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section className="bg-[#111110] text-white relative overflow-hidden flex items-end" style={{ minHeight: '34vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#111110] via-[#1F1F1D] to-[#111110]" />
        <div className="absolute inset-0 diagonal-lines opacity-60" />
        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-12 lg:pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
              <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4 leading-[1.05]">Cookies Policy</h1>
            <p className="text-white/70 max-w-lg font-light text-lg">
              This website keeps things simple — here is exactly what is stored on your device.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-8 lg:px-14">
          <p className="text-[#888884] text-xs uppercase tracking-[0.12em] mb-10">Last updated: 2 July 2026</p>

          <P>
            We keep our use of cookies and browser storage to a minimum. This page explains what this
            website does and does not store on your device.
          </P>

          <H2>What we do not use</H2>
          <P>
            This website does not use analytics cookies, advertising or marketing cookies, or any
            third-party tracking scripts. We do not track you across other websites, and no data from
            this site is sold or shared with advertisers.
          </P>

          <H2>What we do use</H2>
          <P>
            When you add a service to your &ldquo;Request&rdquo; on our{' '}
            <Link href="/services" className="text-[#004225] hover:text-[#111110] underline">Services</Link>{' '}
            pages, we use your browser&apos;s local storage — not a cookie — to remember your selections
            while you continue browsing. This information stays on your device, is never sent to us
            automatically, and is only included in a message to us if you choose to submit the enquiry
            form. It is cleared once you submit a request or clear your browser data.
          </P>
          <P>
            Our website hosting provider may also use strictly necessary technical cookies or similar
            technologies required to serve the site securely and reliably (for example, to protect
            against fraud or to balance server load). These are essential to the functioning of the site
            and do not identify you personally.
          </P>

          <H2>Managing storage in your browser</H2>
          <P>
            You can clear local storage and cookies at any time through your browser&apos;s settings.
            Doing so will simply reset any services you had added to your request — it will not affect
            any enquiry you have already submitted to us.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            If the way this website uses cookies or storage changes in future — for example, if we add
            analytics — we will update this page to reflect that.
          </P>

          <H2>Questions</H2>
          <P>
            If you have any questions about this policy, please contact us at{' '}
            <a href={BUSINESS_EMAIL.href} className="text-[#004225] hover:text-[#111110] underline">{BUSINESS_EMAIL.display}</a>.
          </P>

          <div className="mt-10 pt-6 border-t border-[#EFEFEB] flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy-policy" className="text-[#004225] hover:text-[#111110] font-medium">Privacy Policy</Link>
            <Link href="/consumer-rights" className="text-[#004225] hover:text-[#111110] font-medium">Your Consumer Rights</Link>
            <Link href="/faq" className="text-[#004225] hover:text-[#111110] font-medium">FAQ</Link>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
