'use client';

import { useState, FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Quick enquiry form on a vehicle detail page — posts to the same
 * /api/enquiries endpoint as the main contact form (see ContactForm.tsx),
 * rather than Netlify Forms. The Next.js App Router doesn't emit static
 * HTML at build time, so data-netlify markup can't be detected by
 * Netlify's build-time form scanner and fails the build. Routing through
 * our own API keeps enquiries in the same Supabase table either way.
 */
export default function VehicleEnquiryForm({ vehicle }: { vehicle: string }) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          enquiry_type: 'car-sales',
          vehicle,
          message: message.trim() || `I'm interested in the ${vehicle}. Please get in touch.`,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Submission failed');
      }

      setState('success');
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="border border-[#EFEFEB] bg-[#F7F7F5] px-4 py-5 text-center">
        <p className="text-sm font-semibold text-[#111110] mb-1">Enquiry sent</p>
        <p className="text-xs text-[#5A5A57]">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        required
        disabled={state === 'submitting'}
        placeholder="Your name"
        className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white disabled:opacity-50"
      />
      <input
        type="tel"
        name="phone"
        disabled={state === 'submitting'}
        placeholder="Phone number"
        className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white disabled:opacity-50"
      />
      <input
        type="email"
        name="email"
        required
        disabled={state === 'submitting'}
        placeholder="Email address"
        className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors bg-white disabled:opacity-50"
      />
      <textarea
        name="message"
        rows={3}
        disabled={state === 'submitting'}
        placeholder="Any questions?"
        className="w-full border border-[#EFEFEB] focus:border-[#111110] px-3 py-2.5 text-sm focus:outline-none transition-colors resize-none bg-white disabled:opacity-50"
      />
      {state === 'error' && (
        <p className="text-xs text-red-600 border border-red-200 bg-red-50 px-3 py-2">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full bg-[#004225] hover:bg-[#005a30] disabled:opacity-60 text-white font-medium py-3 text-sm transition-colors"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  );
}
