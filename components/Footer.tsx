
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-bold text-white serif mb-6 block">
              Saffron & Sage
            </span>
            <p className="text-stone-500 leading-relaxed max-w-xs">
              Exceptional catering that blends artistry with culinary mastery for the moments that matter most.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 transition-colors">The Process</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Weddings</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Private Dining</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Holiday Parties</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-all">LI</a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-800 text-sm text-stone-600 flex flex-col md:flex-row justify-between gap-6">
          <p>© 2024 Saffron & Sage Catering. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
