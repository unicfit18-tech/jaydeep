
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import MenuPlanner from './components/MenuPlanner.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'planner', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="services" className="py-20 bg-stone-50">
          <Services />
        </section>

        <section id="process" className="py-20 bg-stone-900 text-white">
          <Process />
        </section>

        <section id="why-choose-us" className="py-20 bg-white">
          <WhyChooseUs />
        </section>

        <section id="planner" className="py-20 bg-amber-50">
          <MenuPlanner />
        </section>

        <section id="contact" className="py-20 bg-stone-50">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
