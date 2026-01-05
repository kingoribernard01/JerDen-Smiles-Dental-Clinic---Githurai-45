
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=95&w=2600"
          alt="JerDen Smiles Dental Clinic atmosphere"
          className="w-full h-full object-cover object-center animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 lg:from-white lg:via-white/90 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-sky-900/5 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-6 tracking-widest uppercase animate-fade-in-up shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span>Premium Smiles • Githurai 45</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 animate-fade-in-up delay-100 opacity-0" style={{animationFillMode: 'forwards'}}>
            Confident Smiles for <br />
            <span className="text-sky-600 font-serif italic font-normal tracking-tight">Everyone in Githurai</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl animate-fade-in-up delay-200 opacity-0" style={{animationFillMode: 'forwards'}}>
            JerDen Smiles Dental Clinic provides professional, accessible dental care. From Scaling and Whitening to Braces and Root Canals, we focus on your complete oral health at Githu Complex.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 animate-fade-in-up delay-300 opacity-0" style={{animationFillMode: 'forwards'}}>
            <a
              href="#contact"
              className="group relative bg-sky-600 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-sky-700 transition-all shadow-xl shadow-sky-100 text-center overflow-hidden transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center">
                Book Appointment
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-bold text-base text-sky-700 border-2 border-sky-100 hover:border-sky-600 hover:text-sky-800 transition-all text-center bg-white/40 backdrop-blur-sm shadow-sm"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center gap-4 animate-fade-in-up delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" 
                    alt="Patient"
                  />
                ))}
              </div>
              <div className="text-xs font-semibold text-gray-700">
                <span className="text-sky-600 font-bold">1000+</span> Smiles Restored
              </div>
            </div>

            <div className="h-6 w-px bg-gray-200"></div>

            <div className="flex items-center space-x-1.5 text-gray-500 text-xs font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <span>Modern Dentistry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
