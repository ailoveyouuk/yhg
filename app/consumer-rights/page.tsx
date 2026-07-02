import type { Metadata } from 'next';
import Link from 'next/link';
import PageCard from '@/components/PageCard';
import { BUSINESS_EMAIL, BUSINESS_PHONE } from '@/data/business';

export const metadata: Metadata = {
  title: 'Your Consumer Rights',
  description: 'A plain-English summary of your statutory rights as a UK consumer when buying a vehicle or having work carried out at Yardley Hastings Garage.',
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-[#111110] tracking-tight mt-10 mb-3 first:mt-0">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#5A5A57] text-[15px] leading-relaxed mb-4">{children}</p>;
}

export default function ConsumerRightsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4 leading-[1.05]">Your Consumer Rights</h1>
            <p className="text-white/70 max-w-lg font-light text-lg">
              A plain-English summary of the statutory protections that apply when you buy a vehicle or
              have work carried out with us.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-8 lg:px-14">
          <div className="bg-[#F7F7F5] border border-[#EFEFEB] px-6 py-5 mb-10">
            <p className="text-[#5A5A57] text-sm leading-relaxed">
              This page is general information for UK consumers, not legal advice. Every situation is
              different — if you have a specific concern about a vehicle or a piece of work, please{' '}
              <Link href="/contact" className="text-[#004225] underline">contact us</Link> directly and we
              will do our best to resolve it. For independent guidance you can also contact{' '}
              <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#004225] underline">Citizens Advice</a>.
            </p>
          </div>

          <H2>Buying a vehicle from us — the Consumer Rights Act 2015</H2>
          <P>
            When you buy a used vehicle from a trader like us, the Consumer Rights Act 2015 gives you
            statutory protection. In summary, goods you buy must be:
          </P>
          <ul className="list-disc pl-5 space-y-2 text-[#5A5A57] text-[15px] leading-relaxed mb-4">
            <li><span className="font-medium text-[#111110]">Of satisfactory quality</span> — taking into account the vehicle&apos;s age, mileage and price.</li>
            <li><span className="font-medium text-[#111110]">Fit for purpose</span> — reasonably suitable for use as a vehicle, and for any particular purpose you told us about.</li>
            <li><span className="font-medium text-[#111110]">As described</span> — matching the description given to you at the point of sale.</li>
          </ul>
          <P>
            If a vehicle does not meet these standards, you generally have the following rights:
          </P>
          <ul className="list-disc pl-5 space-y-2 text-[#5A5A57] text-[15px] leading-relaxed mb-4">
            <li><span className="font-medium text-[#111110]">Short-term right to reject</span> — normally within the first 30 days, you may be entitled to reject the vehicle and receive a full refund.</li>
            <li><span className="font-medium text-[#111110]">Right to a repair or replacement</span> — after 30 days, we should generally be given the opportunity to repair or replace a fault, free of charge, within a reasonable time and without significant inconvenience.</li>
            <li><span className="font-medium text-[#111110]">Price reduction or final right to reject</span> — if a repair or replacement is not possible, or does not resolve the issue, you may be entitled to a price reduction or to reject the vehicle for a refund (which may be reduced to reflect usage).</li>
          </ul>
          <P>
            Every used vehicle we sell comes with a minimum six-month warranty, service and MOT as
            standard — see the individual listing on our{' '}
            <Link href="/cars" className="text-[#004225] underline">Stocklist</Link> for details. This is
            in addition to, and does not replace, your statutory rights.
          </P>

          <H2>Servicing, repairs and bodywork — the Consumer Rights Act 2015</H2>
          <P>
            When we carry out a service, repair, MOT or bodywork on your vehicle, the law requires that
            the work is carried out:
          </P>
          <ul className="list-disc pl-5 space-y-2 text-[#5A5A57] text-[15px] leading-relaxed mb-4">
            <li>With reasonable care and skill.</li>
            <li>Within a reasonable time, where no specific time has been agreed.</li>
            <li>For a reasonable price, where no price has been agreed in advance — which is why we always aim to give you a clear estimate or quote before starting work.</li>
          </ul>
          <P>
            If you are not satisfied that work has been carried out to a reasonable standard, please let
            us know as soon as possible so we can put it right.
          </P>

          <H2>MOT tests</H2>
          <P>
            MOT testing is regulated by the Driver and Vehicle Standards Agency (DVSA). If you disagree
            with the result of an MOT test carried out at our garage, you have the right to an appeal
            through the DVSA&apos;s official process. Details are available at{' '}
            <a href="https://www.gov.uk/appeal-mot-test" target="_blank" rel="noopener noreferrer" className="text-[#004225] underline">gov.uk/appeal-mot-test</a>.
          </P>

          <H2>Cancelling an order</H2>
          <P>
            Because vehicle sales and bookings with us are typically arranged in person, over the phone,
            or after a visit to view a vehicle, the distance-selling cancellation rules that apply to
            some online purchases may not apply in the same way. If you have concerns about an order or
            deposit, please talk to us directly — we would always rather resolve things fairly than rely
            on a technicality.
          </P>

          <H2>Complaints</H2>
          <P>
            If something has gone wrong, please contact us on{' '}
            <a href={BUSINESS_PHONE.href} className="text-[#004225] underline">{BUSINESS_PHONE.display}</a>{' '}
            or{' '}
            <a href={BUSINESS_EMAIL.href} className="text-[#004225] underline">{BUSINESS_EMAIL.display}</a>{' '}
            in the first instance. We take every concern seriously and will work with you to find a fair
            resolution.
          </P>

          <div className="mt-10 pt-6 border-t border-[#EFEFEB] flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy-policy" className="text-[#004225] hover:text-[#111110] font-medium">Privacy Policy</Link>
            <Link href="/cookies" className="text-[#004225] hover:text-[#111110] font-medium">Cookies Policy</Link>
            <Link href="/faq" className="text-[#004225] hover:text-[#111110] font-medium">FAQ</Link>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
