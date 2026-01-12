
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding Catering',
    description: 'Bespoke menus designed to celebrate your love story. From formal sit-down dinners to whimsical garden buffets.',
    image: 'https://picsum.photos/seed/wedding-cat/600/400'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Impress clients and energize your team with professional, timely, and sophisticated meal solutions for any office scale.',
    image: 'https://picsum.photos/seed/corporate-cat/600/400'
  },
  {
    id: 'private',
    title: 'Private Celebrations',
    description: 'Elevate your birthdays, anniversaries, and home gatherings with intimate culinary experiences and luxury service.',
    image: 'https://picsum.photos/seed/private-cat/600/400'
  },
  {
    id: 'buffet',
    title: 'Live Cooking Stations',
    description: 'Interactive and engaging food stations where our chefs prepare fresh delicacies right before your eyes.',
    image: 'https://picsum.photos/seed/live-station/600/400'
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h4 className="text-amber-800 font-bold uppercase tracking-widest text-sm mb-4">What We Offer</h4>
        <h2 className="text-4xl md:text-5xl font-bold">Curated Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2">
            <div className="aspect-video overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="text-amber-800 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-amber-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Special Dietary Requirements?</h3>
          <p className="text-amber-100/80">We offer comprehensive vegan, gluten-free, and allergen-safe menu options without compromising on taste.</p>
        </div>
        <button className="bg-white text-amber-900 px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-amber-100 transition-colors">
          View Dietary Menus
        </button>
      </div>
    </div>
  );
};

export default Services;
