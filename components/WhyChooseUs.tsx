
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative animate-fade-in-up">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[40px] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="JerDen Modern Equipment" className="w-full h-80 object-cover" />
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="rounded-[40px] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Happy JerDen Patient" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-8 rounded-[40px] shadow-2xl text-center z-10 hidden md:block">
              <div className="text-sky-600 font-black text-3xl mb-1">Affordable</div>
              <div className="text-gray-900 font-bold text-xs uppercase tracking-widest">Professional <br/> Care</div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200">
            <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-100">
              Why JerDen Smiles?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] font-serif">
              Trusted Oral Health <br />
              <span className="text-sky-600 italic font-normal">Experts in Githurai</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center shrink-0 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Modern Scaling & Cleaning</h4>
                  <p className="text-gray-500 text-sm">We use advanced tools for effective scaling (cleaning) that is both thorough and comfortable.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center shrink-0 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Accessible Multi-Spots</h4>
                  <p className="text-gray-500 text-sm">Our multiple locations across Githurai 45 make it easy for you to walk in and get served without long delays.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center shrink-0 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Affordable Cosmetic Smiles</h4>
                  <p className="text-gray-500 text-sm">JerDen Smiles offers competitive pricing for teeth whitening and braces, ensuring cost isn't a barrier to your confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
