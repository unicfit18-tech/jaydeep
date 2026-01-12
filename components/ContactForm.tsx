
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-16 rounded-3xl shadow-xl border border-green-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
          <p className="text-stone-600 mb-8 text-lg">Thank you for considering Saffron & Sage. Our event specialist will reach out within 24 hours to discuss your masterpiece.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-amber-800 font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h4 className="text-amber-800 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s Plan Your Event</h2>
          <p className="text-stone-600 mb-12 text-lg leading-relaxed">
            Ready to taste the extraordinary? Fill out the form or reach out directly via our contact details. We’re excited to bring your vision to life.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-amber-800 border border-stone-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-stone-400 uppercase">Call Us</p>
                <p className="text-xl font-bold">+1 (555) 012-3456</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-amber-800 border border-stone-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-stone-400 uppercase">Email Us</p>
                <p className="text-xl font-bold">hello@saffronandsage.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-amber-800 border border-stone-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-stone-400 uppercase">Our Studio</p>
                <p className="text-xl font-bold">123 Culinary Way, Gastronomy Heights</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Event Date</label>
                <input required type="date" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Guest Count</label>
                <input required type="number" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Message & Details</label>
              <textarea required className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all h-32" />
            </div>
            <button type="submit" className="w-full bg-amber-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-900 transition-all shadow-lg transform active:scale-95">
              Request Your Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
