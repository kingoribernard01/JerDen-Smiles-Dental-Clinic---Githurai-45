
import React from 'react';

const DoctorProfile: React.FC = () => {
  return (
    <section id="doctor" className="py-24 bg-white relative overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <div className="lg:w-1/2 relative animate-fade-in-up">
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200" 
                alt="Dr. Daniel Kago Kamau - Lead Dentist" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent"></div>
              
              {/* Profile Name Overlay (Mobile Only) */}
              <div className="absolute bottom-6 left-6 lg:hidden">
                <h4 className="text-white font-bold text-2xl font-serif">Dr. Daniel Kago Kamau</h4>
                <p className="text-sky-200 text-sm font-bold uppercase tracking-widest">Lead Dental Surgeon</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 rounded-full -z-0 blur-2xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-50 rounded-[64px] -z-0 rotate-12 opacity-80 border-2 border-sky-100"></div>
            
            {/* Signature Quote Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass p-6 rounded-[32px] border-white/50 shadow-xl backdrop-blur-md w-full max-w-xs text-center">
              <p className="text-sky-800 font-serif italic text-lg leading-snug">
                "Treating the person, not just the tooth."
              </p>
              <div className="mt-2 h-0.5 w-12 bg-sky-400 mx-auto"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 animate-fade-in-up delay-200">
            <div className="inline-block px-4 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-sky-100">
              Meet Our Lead Surgeon
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              The Hands Behind <br />
              <span className="text-sky-600 italic font-normal">Your Perfect Smile</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                <strong>Dr. Daniel Kago Kamau</strong> is more than just a dental surgeon; he is a dedicated community health advocate who believes in the power of a healthy smile to transform lives. 
              </p>
              <p>
                With extensive clinical experience within the <strong>Jerden Smiles Dental Clinic</strong> network, Dr. Daniel brings a specialized focus on painless restorative procedures and cosmetic dentistry to Githurai 45. His calm demeanor and precision have made him a favorite among patients with dental anxiety.
              </p>
              
              <div className="bg-sky-50 p-8 rounded-[32px] border border-sky-100 relative group transition-colors hover:bg-white hover:border-sky-300">
                <h5 className="text-sky-800 font-bold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Philosophy of Care
                </h5>
                <p className="text-sky-900/70 text-base italic leading-relaxed">
                  "I believe dental care should be accessible, educational, and absolutely comfortable. My goal is to empower my neighbors in Githurai with the knowledge and treatments they need to maintain oral health for a lifetime."
                </p>
              </div>
            </div>

            {/* Quick Stats/Trust Items */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-sky-600 border border-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M10 11H8V9h2v2z"/><path d="M10 7H8V5h2v2z"/><path d="M16 11h-2V9h2v2z"/><path d="M16 7h-2V5h2v2z"/><path d="M12 15h.01"/><path d="M10 15H8v-2h2v2z"/><path d="M16 15h-2v-2h2v2z"/><path d="M12 19h.01"/><path d="M10 19H8v-2h2v2z"/><path d="M16 19h-2v-2h2v2z"/><rect width="18" height="20" x="3" y="2" rx="2"/></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">BDS Degree</div>
                  <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">Certified Surgeon</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-sky-600 border border-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">KMPDC Licensed</div>
                  <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">Verified Specialist</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
