
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DoctorProfile from './components/DoctorProfile';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Network from './components/Network';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <DoctorProfile />
        <Services />
        <WhyChooseUs />
        <Network />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a
          href="#contact"
          className="bg-sky-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-sky-700 transition-colors"
          aria-label="Book Appointment"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
