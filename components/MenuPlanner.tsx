
import React, { useState } from 'react';
import { generateMenuRecommendation } from '../services/geminiService.ts';
import { MenuRecommendation } from '../types.ts';

const MenuPlanner: React.FC = () => {
  const [eventType, setEventType] = useState('Wedding');
  const [guests, setGuests] = useState(50);
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<MenuRecommendation | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await generateMenuRecommendation(eventType, guests, preferences);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h4 className="text-amber-800 font-bold uppercase tracking-widest text-sm mb-4">Innovation</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Smart AI Menu Planner</h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Need inspiration? Use our AI-powered tool to generate a custom sample menu based on your event details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Event Type</label>
              <select 
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
              >
                <option>Wedding</option>
                <option>Corporate Gala</option>
                <option>Birthday Party</option>
                <option>Cocktail Evening</option>
                <option>Brunch</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Number of Guests</label>
              <input 
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Special Requests / Themes</label>
              <textarea 
                placeholder="e.g. Garden theme, high-protein, seafood focus, or French influence..."
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all h-32"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-amber-800 text-white py-4 rounded-xl font-bold hover:bg-amber-900 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Curating Flavors...
                </>
              ) : 'Generate Sample Menu'}
            </button>
          </form>
        </div>

        <div className="bg-amber-900 text-white p-8 rounded-2xl shadow-xl min-h-[400px] flex flex-col">
          {!recommendation ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-60">
              <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-lg">Your curated menu will appear here.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b border-amber-800/50 pb-4 text-amber-400">Custom {eventType} Menu</h3>
              
              <div>
                <h4 className="text-amber-200 font-bold text-xs uppercase tracking-widest mb-2">Appetizers</h4>
                <ul className="space-y-1">
                  {recommendation.appetizers.map((item, idx) => <li key={idx} className="text-sm">• {item}</li>)}
                </ul>
              </div>

              <div>
                <h4 className="text-amber-200 font-bold text-xs uppercase tracking-widest mb-2">Main Courses</h4>
                <ul className="space-y-1">
                  {recommendation.mainCourses.map((item, idx) => <li key={idx} className="text-sm">• {item}</li>)}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-amber-200 font-bold text-xs uppercase tracking-widest mb-2">Desserts</h4>
                  <ul className="space-y-1">
                    {recommendation.desserts.map((item, idx) => <li key={idx} className="text-sm">• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-amber-200 font-bold text-xs uppercase tracking-widest mb-2">Beverages</h4>
                  <ul className="space-y-1">
                    {recommendation.beverages.map((item, idx) => <li key={idx} className="text-sm">• {item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-500 transition-all text-sm"
                >
                  Book This Menu Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPlanner;
