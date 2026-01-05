
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-sky-100">
              About JerDen Smiles
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.2] font-serif">
              Personalized Dental Care, <br />
              <span className="text-sky-600 italic font-normal">Conveniently Located</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
              <p>
                JerDen Smiles KE Dental Clinic is a trusted dental provider located at Githu Complex in Githurai 45. We focus on providing high-quality, accessible oral health services to the local community, ranging from general check-ups to advanced cosmetic procedures.
              </p>
              <p>
                Operating from multiple strategic spots within Githurai, we ensure that modern dentistry is never out of reach. Our clinic specializes in scaling (cleaning), teeth whitening, root canals, and orthodontic braces, delivered with a focus on patient comfort.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Goal</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To eliminate oral health issues in Githurai through affordable, effective, and modern dental solutions.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="w-10 h-10 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Promise</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A painless experience and a brilliant smile, every time you visit any of our Githurai locations.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center text-sky-600 font-bold hover:text-sky-700 transition-colors group text-lg">
                Book Your Scaling Session
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=90&w=1200"
                alt="JerDen Smiles Modern Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full -z-0 blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
