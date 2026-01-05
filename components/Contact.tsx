
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Scaling & Cleaning',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Clinic Info */}
          <div className="lg:col-span-5 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-sky-100/50">
              <span className="w-2 h-2 rounded-full bg-sky-500 mr-2 animate-pulse"></span>
              Direct Access
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] font-serif">
              Ready for a <br />
              <span className="text-sky-600 italic font-normal">Better Smile?</span>
            </h2>
            
            <p className="text-gray-500 text-lg mb-12 max-w-md leading-relaxed">
              We're located in the heart of Githurai 45 at Githu Complex. Walk in or book ahead for premium dental care.
            </p>

            <div className="space-y-6 mb-12">
              {/* Phone Card */}
              <a href="tel:0748088797" className="group flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="ml-5">
                  <span className="block text-[10px] text-sky-600 font-black uppercase tracking-widest mb-0.5">Call Us Now</span>
                  <span className="text-xl font-bold text-gray-900">0748 088 797</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="group flex items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="ml-5">
                  <span className="block text-[10px] text-emerald-600 font-black uppercase tracking-widest mb-0.5">Find Our Clinic</span>
                  <span className="text-lg font-bold text-gray-900 leading-tight">Githu Complex, <br /> Opp. Cooperative Bank</span>
                </div>
              </div>
            </div>

            {/* Hours Summary */}
            <div className="p-8 bg-gray-900 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-colors"></div>
              <h4 className="font-bold mb-6 text-xl text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Operating Hours
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400">Monday — Saturday</span>
                  <span className="text-white font-bold">08:30 AM — 06:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Sunday / Emergencies</span>
                  <span className="text-sky-400 font-bold uppercase tracking-widest text-[10px]">Call for Emergency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-[0_32px_64px_rgba(0,0,0,0.06)] border border-gray-100 relative group overflow-hidden">
              {/* Form Success State */}
              <div className={`absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-12 transition-all duration-700 ${submitted ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-8 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4 className="text-4xl font-bold text-gray-900 mb-4 font-serif italic">Smile Received!</h4>
                <p className="text-gray-500 text-lg max-w-xs mx-auto mb-10 leading-relaxed">
                  We've received your request. One of our specialists will call you shortly to confirm.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all"
                >
                  Send Another
                </button>
              </div>

              {/* The Actual Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2 font-serif">Quick Booking</h4>
                  <p className="text-gray-400 text-sm">Fill in your details for a same-day appointment callback.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Full Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="e.g. John Doe" 
                        required
                        className="w-full pl-6 pr-6 py-4 bg-gray-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all duration-300 text-gray-900 font-medium" 
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="07XX XXX XXX" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all duration-300 text-gray-900 font-medium" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Select Service</label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all duration-300 text-gray-900 font-medium appearance-none cursor-pointer"
                      >
                        <option>Teeth Scaling & Cleaning</option>
                        <option>Braces Consultation</option>
                        <option>Teeth Whitening</option>
                        <option>Fillings & Root Canal</option>
                        <option>Teeth Extraction</option>
                        <option>General Checkup</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all duration-300 text-gray-900 font-medium cursor-pointer" 
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Special Notes (Optional)</label>
                  <textarea 
                    rows={3} 
                    placeholder="Tell us about any specific pain or requirements..."
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all duration-300 text-gray-900 font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full group relative overflow-hidden flex items-center justify-center py-5 rounded-2xl font-bold text-xl shadow-xl transition-all duration-500 transform active:scale-[0.98] ${isSubmitting ? 'bg-sky-400' : 'bg-sky-600 hover:bg-sky-700 shadow-sky-200 hover:shadow-sky-300'}`}
                >
                  <span className={`flex items-center text-white transition-all duration-300 ${isSubmitting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                    Confirm My Booking
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                  
                  {/* Fix: Removed reference to undefined 'isScrolled' variable */}
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>

                <p className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
                  🔒 Your data is secure and confidential
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
