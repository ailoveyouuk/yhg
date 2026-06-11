import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Book',
  description: 'Book a service, request a quote or get directions to Yardley Hastings Garage. Bedford Rd W, Yardley Hastings, Northampton NN7 1HB.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#004225] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-[#C9A84C] text-xs font-medium uppercase tracking-[0.2em]">Contact & Book</span>
          <h1 className="text-4xl font-serif font-semibold mt-3 mb-3">Get in touch</h1>
          <p className="text-green-100/70 max-w-lg">
            Book a service, request a bodywork quote, enquire about a vehicle, or just ask for advice. We are always happy to help.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F7F4] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form — takes up 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-serif font-semibold text-[#1C1C1A] mb-6">Send us a message</h2>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">Name <span className="text-[#C9A84C]">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                        placeholder="01234 567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">Email <span className="text-[#C9A84C]">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-type" className="block text-sm font-medium text-stone-700 mb-1.5">Type of enquiry</label>
                    <select
                      id="enquiry-type"
                      name="enquiry-type"
                      className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent bg-white"
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
                    <label htmlFor="vehicle" className="block text-sm font-medium text-stone-700 mb-1.5">Vehicle (make, model, year)</label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                      placeholder="e.g. Ford Focus 2019"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">Message <span className="text-[#C9A84C]">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent resize-none"
                      placeholder="Tell us what you need…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C9A84C] hover:bg-[#D4B86A] text-[#1C1C1A] font-bold py-3 rounded-lg text-sm transition-colors"
                  >
                    Send Enquiry
                  </button>
                  <p className="text-xs text-stone-400 text-center">We aim to respond within one business day.</p>
                </form>
              </div>
            </div>

            {/* Info panel — takes up 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact details */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-serif font-semibold text-[#1C1C1A] mb-5">Contact details</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-stone-700">Address</div>
                      <div className="text-sm text-stone-500 mt-0.5">Bedford Rd W, Yardley Hastings<br />Northampton NN7 1HB</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-stone-700">Phone</div>
                      <a href="tel:01604696225" className="text-sm text-[#A8882C] hover:text-[#A8882C] font-semibold mt-0.5 block">01604 696225</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-stone-700">Email</div>
                      <a href="mailto:admin@yardleyhastingsgarage.co.uk" className="text-sm text-[#A8882C] hover:text-[#A8882C] mt-0.5 block break-all">admin@yardleyhastingsgarage.co.uk</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-serif font-semibold text-[#1C1C1A] mb-4">Opening hours</h2>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-stone-100">
                    {[['Mon – Fri', '8:00am – 5:30pm'], ['Saturday', '8:30am – 12:00 noon'], ['Sunday', 'Closed']].map(([day, hrs]) => (
                      <tr key={day}>
                        <td className="py-2.5 font-medium text-stone-700 pr-4">{day}</td>
                        <td className={`py-2.5 ${hrs === 'Closed' ? 'text-stone-400' : 'text-stone-600'}`}>{hrs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Map placeholder */}
              <div className="bg-stone-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-stone-500">
                  <svg className="w-8 h-8 mx-auto mb-2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-sm font-medium">Google Map</p>
                  <p className="text-xs text-stone-400">Embed to be added</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
