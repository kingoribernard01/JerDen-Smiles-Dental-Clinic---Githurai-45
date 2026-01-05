
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=95&w=2600"
          alt="JerDen Smiles Dental Clinic"
          className="w-full h-full object-cover object-center animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-sky-100 text-sky-700 px-5 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase animate-fade-in-up shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Jerden Smiles • Githurai 45</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100 opacity-0" style={{animationFillMode: 'forwards'}}>
            Confident Smiles <br />
            <span className="text-sky-600 font-serif italic font-normal">Made Simple</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg animate-fade-in-up delay-200 opacity-0" style={{animationFillMode: 'forwards'}}>
            Professional, accessible dental care at Githu Complex. We focus on your comfort and complete oral health.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up delay-300 opacity-0" style={{animationFillMode: 'forwards'}}>
            <a
              href="#contact"
              className="bg-sky-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 text-center"
            >
              Book Appointment
            </a>
            
            <a
              href="#services"
              className="px-10 py-4 rounded-full font-bold text-lg text-gray-700 border-2 border-gray-100 hover:border-sky-600 hover:text-sky-600 transition-all text-center bg-white/50 backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
