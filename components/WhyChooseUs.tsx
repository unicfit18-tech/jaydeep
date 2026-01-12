
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    event: 'Corporate Gala',
    text: 'Saffron & Sage transformed our annual gala. The presentation was museum-quality and the taste was even better. Our clients are still talking about the hors d’oeuvres!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    event: 'Summer Wedding',
    text: 'The most stress-free experience I could have imagined. They took care of everything from the champagne wall to the late-night snacks. Truly professional.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h4 className="text-amber-800 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">A Standard of Excellence</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-amber-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Fresh, Local Ingredients</h4>
                <p className="text-stone-600">We partner with local organic farms to ensure every ingredient is at its peak of freshness.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-amber-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Punctual & Reliable</h4>
                <p className="text-stone-600">Time is of the essence. We guarantee on-time setup and efficient service for every occasion.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-amber-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Hygiene Certified</h4>
                <p className="text-stone-600">We adhere to the highest international food safety and hygiene standards in our kitchens.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm relative italic text-stone-700">
               <svg className="absolute -top-4 -left-4 w-12 h-12 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V14C8.017 11.7909 6.22614 10 4.017 10H3.017V7H4.017C7.883 7 11.017 10.134 11.017 14V21H3.017Z" />
              </svg>
              <p className="text-lg mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-stone-900 not-italic">{t.name}</p>
                <p className="text-amber-800 text-sm font-semibold uppercase tracking-wider not-italic">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
