
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-amber-800 font-bold uppercase tracking-widest text-sm mb-4">Our Heritage</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Driven by Passion, Defined by Taste</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              Founded with a simple mission—to elevate the standard of catering—Saffron & Sage has grown into a premier culinary partner for events across the region. We believe that every meal is an opportunity to create a memory.
            </p>
            <p>
              Our team of award-winning chefs brings decades of experience from international kitchens, blending traditional techniques with modern culinary trends. Whether it's a corporate gala or an intimate backyard wedding, we treat every plate as a masterpiece.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-amber-800 mb-2">15+</h3>
                <p className="text-sm font-semibold uppercase text-stone-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-800 mb-2">2,500+</h3>
                <p className="text-sm font-semibold uppercase text-stone-400">Events Hosted</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://picsum.photos/seed/kitchen/800/1000" 
              alt="Our Chef in Action" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-amber-800 p-8 rounded-xl shadow-xl hidden md:block">
            <p className="text-white italic text-lg max-w-xs">
              "We don't just serve food; we serve inspiration through flavor and aesthetics."
            </p>
            <p className="text-amber-300 mt-4 font-bold">— Executive Chef Marcus V.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
