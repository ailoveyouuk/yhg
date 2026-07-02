import type { Metadata } from 'next';
import Link from 'next/link';
import PageCard from '@/components/PageCard';
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_NAME } from '@/data/business';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Yardley Hastings Garage collects, uses and protects your personal data, and your rights under UK GDPR.',
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-[#111110] tracking-tight mt-10 mb-3 first:mt-0">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#5A5A57] text-[15px] leading-relaxed mb-4">{children}</p>;
}

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4 leading-[1.05]">Privacy Policy</h1>
            <p className="text-white/70 max-w-lg font-light text-lg">
              How we collect, use and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-8 lg:px-14">
          <p className="text-[#888884] text-xs uppercase tracking-[0.12em] mb-10">Last updated: 2 July 2026</p>

          <P>
            {BUSINESS_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy.
            This policy explains what personal data we collect when you use this website or contact us,
            why we collect it, how we use it, and the rights you have over it under UK data protection law
            (the UK GDPR and the Data Protection Act 2018).
          </P>

          <H2>Who we are</H2>
          <P>
            {BUSINESS_NAME}, {BUSINESS_ADDRESS.full}. We are the data controller for the personal information
            described in this policy. If you have any questions, you can contact us at{' '}
            <a href={BUSINESS_EMAIL.href} className="text-[#004225] hover:text-[#111110] underline">{BUSINESS_EMAIL.display}</a>.
          </P>

          <H2>What information we collect</H2>
          <P>We collect personal data when you voluntarily provide it to us, for example when you:</P>
          <ul className="list-disc pl-5 space-y-2 text-[#5A5A57] text-[15px] leading-relaxed mb-4">
            <li>Submit an enquiry or booking request through our contact form (name, email address, phone number, vehicle details and the content of your message).</li>
            <li>Call, email or visit us in person to discuss a service, repair or vehicle purchase.</li>
            <li>Select services on this website to add to a request (stored temporarily in your browser — see our <Link href="/cookies" className="text-[#004225] hover:text-[#111110] underline">Cookies Policy</Link>).</li>
          </ul>
          <P>
            We do not use analytics, advertising or tracking cookies on this website, and we do not
            knowingly collect any special category data (such as health or financial information)
            through the website.
          </P>

          <H2>How we use your information</H2>
          <P>We use the personal data you provide to us to:</P>
          <ul className="list-disc pl-5 space-y-2 text-[#5A5A57] text-[15px] leading-relaxed mb-4">
            <li>Respond to your enquiry and provide quotes or advice.</li>
            <li>Arrange and carry out bookings, servicing, repairs and vehicle sales.</li>
            <li>Maintain accurate customer and vehicle records for warranty, service history and legal compliance purposes.</li>
            <li>Contact you about work in progress or vehicles you have expressed interest in.</li>
          </ul>
          <P>
            The legal basis for this processing is either your consent (when you submit an enquiry) or
            our legitimate interest in responding to enquiries and running our business, and, where you
            become a customer, the performance of a contract with you.
          </P>

          <H2>How we store your information</H2>
          <P>
            Enquiries submitted through this website are stored securely in a managed database and are
            accessible only to authorised staff at {BUSINESS_NAME}. We take reasonable technical and
            organisational measures to protect your data against unauthorised access, loss or misuse.
          </P>

          <H2>Sharing your information</H2>
          <P>
            We do not sell or rent your personal data. We may share information with trusted third
            parties who help us operate the business — for example our website hosting and database
            providers — but only to the extent necessary for them to provide that service to us, and
            under appropriate confidentiality obligations. We may also disclose information where we
            are required to by law.
          </P>

          <H2>How long we keep your information</H2>
          <P>
            We keep enquiry and customer data for as long as necessary to deal with your enquiry, provide
            our services, and meet our legal, accounting and warranty obligations, after which it is
            deleted or anonymised.
          </P>

          <H2>Your rights</H2>
          <P>Under UK GDPR, you have the right to:</P>
          <ul className="list-disc pl-5 space-y-2 text-[#5A5A57] text-[15px] leading-relaxed mb-4">
            <li>Ask us for a copy of the personal data we hold about you.</li>
            <li>Ask us to correct inaccurate or incomplete data.</li>
            <li>Ask us to delete your data, where we are not required to keep it.</li>
            <li>Ask us to restrict or object to certain processing.</li>
            <li>Ask for your data to be provided to you in a portable format, where applicable.</li>
          </ul>
          <P>
            To exercise any of these rights, please contact us at{' '}
            <a href={BUSINESS_EMAIL.href} className="text-[#004225] hover:text-[#111110] underline">{BUSINESS_EMAIL.display}</a>.
            If you are unhappy with how we have handled your data, you also have the right to complain to
            the Information Commissioner&apos;s Office (ICO) at{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#004225] hover:text-[#111110] underline">ico.org.uk</a>.
          </P>

          <H2>Children</H2>
          <P>Our website and services are not directed at children, and we do not knowingly collect data from anyone under the age of 16.</P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time to reflect changes to our practices or for legal
            reasons. Any updates will be posted on this page.
          </P>

          <H2>Contact us</H2>
          <P>
            If you have any questions about this policy or how we handle your data, please contact us at{' '}
            <a href={BUSINESS_EMAIL.href} className="text-[#004225] hover:text-[#111110] underline">{BUSINESS_EMAIL.display}</a>{' '}
            or write to us at {BUSINESS_ADDRESS.full}.
          </P>

          <div className="mt-10 pt-6 border-t border-[#EFEFEB] flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/cookies" className="text-[#004225] hover:text-[#111110] font-medium">Cookies Policy</Link>
            <Link href="/consumer-rights" className="text-[#004225] hover:text-[#111110] font-medium">Your Consumer Rights</Link>
            <Link href="/faq" className="text-[#004225] hover:text-[#111110] font-medium">FAQ</Link>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
