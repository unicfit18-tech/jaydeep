
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/catering-hero/1920/1080"
          alt="Elegant Banquet Table"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Crafting Unforgettable <span className="text-amber-400">Culinary Experiences</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light max-w-2xl mx-auto">
          Exceptional catering for weddings, corporate events, and private gatherings with a focus on fresh ingredients and artistic presentation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all transform hover:-translate-y-1"
          >
            Get a Free Quote
          </button>
          <button 
             onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-stone-900 transition-all"
          >
            Explore Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
