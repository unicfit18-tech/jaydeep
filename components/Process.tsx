
import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We listen to your vision, understand your budget, and discuss theme preferences to create a solid foundation.'
  },
  {
    number: '02',
    title: 'Custom Menu Design',
    description: 'Our chefs curate a selection of dishes tailored specifically to your taste and event profile.'
  },
  {
    number: '03',
    title: 'The Tasting',
    description: 'Experience your menu firsthand. We refine the flavors and presentation until they are absolutely perfect.'
  },
  {
    number: '04',
    title: 'Seamless Execution',
    description: 'From setup to cleanup, our professional staff handles every detail, leaving you free to enjoy your guests.'
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h4 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4">How It Works</h4>
        <h2 className="text-4xl md:text-5xl font-bold">The Journey to Perfection</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step) => (
          <div key={step.number} className="relative group">
            <div className="text-6xl font-black text-white/10 absolute -top-10 -left-4 group-hover:text-amber-400/20 transition-colors">
              {step.number}
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-amber-400">{step.title}</h3>
              <p className="text-stone-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
