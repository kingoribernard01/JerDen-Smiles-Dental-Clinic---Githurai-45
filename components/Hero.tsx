
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=95&w=2600"
          alt="JerDen Smiles Dental Clinic atmosphere"
          className="w-full h-full object-cover object-center animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 lg:from-white lg:via-white/90 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-sky-900/5 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md border border-sky-100 text-sky-700 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold mb-8 tracking-[0.15em] uppercase animate-fade-in-up shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            <span>Premium Smiles • Githurai 45</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.05] mb-8 animate-fade-in-up delay-100 opacity-0" style={{animationFillMode: 'forwards'}}>
            Confident Smiles for <br />
            <span className="text-sky-600 font-serif italic font-normal tracking-tight">Everyone in Githurai</span>
          </h1>
          
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl animate-fade-in-up delay-200 opacity-0" style={{animationFillMode: 'forwards'}}>
            JerDen Smiles Dental Clinic provides professional, accessible dental care. From Scaling and Whitening to Braces and Root Canals, we focus on your complete oral health at Githu Complex.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-16 animate-fade-in-up delay-300 opacity-0" style={{animationFillMode: 'forwards'}}>
            <a
              href="#contact"
              className="group relative bg-sky-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-sky-700 transition-all shadow-2xl shadow-sky-200 text-center overflow-hidden transform hover:-translate-y-1 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center">
                Book an Appointment
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="px-12 py-5 rounded-full font-bold text-lg text-sky-700 border-2 border-sky-100 hover:border-sky-600 hover:text-sky-800 transition-all text-center bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
                    alt="Patient"
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-700 tracking-tight">
                <span className="text-sky-600 font-bold">1000+</span> Smiles Restored Locally
              </div>
            </div>

            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

            <div className="flex items-center space-x-2 text-gray-500 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <span>Accessible Modern Dentistry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
