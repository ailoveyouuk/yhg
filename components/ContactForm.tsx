'use client';

import { useState, FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      enquiry_type: (form.elements.namedItem('enquiry-type') as HTMLSelectElement).value,
      vehicle: (form.elements.namedItem('vehicle') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
      <div className="bg-white border border-[#EFEFEB] p-8">
        <div className="w-5 h-[2px] bg-[#004225] mb-6" />
        <div className="py-8 text-center space-y-3">
          <div className="w-10 h-10 border border-[#004225] flex items-center justify-center mx-auto mb-4">
            <svg className="w-5 h-5 text-[#004225]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#111110] tracking-tight">Enquiry received</h3>
          <p className="text-sm text-[#5A5A57] max-w-xs mx-auto">
            Thank you for getting in touch. We aim to respond within one business day.
          </p>
          <button
            onClick={() => setState('idle')}
            className="mt-4 text-xs text-[#004225] font-semibold uppercase tracking-[0.1em] hover:text-[#111110] transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EFEFEB] p-8">
      <div className="w-5 h-[2px] bg-[#004225] mb-6" />
      <h2 className="text-xl font-semibold text-[#111110] mb-7 tracking-tight">Send us a message</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-2">
              Name <span className="text-[#004225]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={state === 'submitting'}
              className="w-full border border-[#EFEFEB] px-4 py-3 text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors bg-white disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              disabled={state === 'submitting'}
              className="w-full border border-[#EFEFEB] px-4 py-3 text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors bg-white disabled:opacity-50"
              placeholder="01234 567890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-2">
            Email <span className="text-[#004225]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={state === 'submitting'}
            className="w-full border border-[#EFEFEB] px-4 py-3 text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors bg-white disabled:opacity-50"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="enquiry-type" className="block text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-2">
            Type of enquiry
          </label>
          <select
            id="enquiry-type"
            name="enquiry-type"
            disabled={state === 'submitting'}
            className="w-full border border-[#EFEFEB] px-4 py-3 text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors bg-white appearance-none disabled:opacity-50"
          >
            <option value="">Please select…</option>
            <option value="service">Book a Service / MOT</option>
            <option value="bodywork">Bodywork / Accident Repair Quote</option>
            <option value="restoration">Classic Restoration Enquiry</option>
            <option value="car-sales">Car Sales Enquiry</option>
            <option value="van-sales">Van Sales Enquiry</option>
            <option value="fleet">Fleet Enquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="vehicle" className="block text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-2">
            Vehicle (make, model, year)
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            disabled={state === 'submitting'}
            className="w-full border border-[#EFEFEB] px-4 py-3 text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors bg-white disabled:opacity-50"
            placeholder="e.g. Ford Focus 2019"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-[#111110] uppercase tracking-[0.1em] mb-2">
            Message <span className="text-[#004225]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            disabled={state === 'submitting'}
            className="w-full border border-[#EFEFEB] px-4 py-3 text-sm text-[#111110] focus:outline-none focus:border-[#111110] transition-colors resize-none bg-white disabled:opacity-50"
            placeholder="Tell us what you need…"
          />
        </div>

        {state === 'error' && (
          <p className="text-xs text-red-600 border border-red-200 bg-red-50 px-4 py-3">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full bg-[#004225] hover:bg-[#005a30] disabled:opacity-60 text-white font-semibold py-3.5 text-sm tracking-wide transition-colors"
        >
          {state === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </button>
        <p className="text-xs text-[#5A5A57] text-center">We aim to respond within one business day.</p>
      </form>
    </div>
  );
}
