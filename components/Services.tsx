
import React from 'react';

const services = [
  {
    title: 'Cleaning (Scaling)',
    description: 'Expert plaque removal and scaling for a fresh, healthy, and clean mouth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12V3c0-1 1-2 2-2h6c1 0 2 1 2 2v9"/><path d="M5 8h14"/><path d="M12 17v4"/></svg>
    ),
    color: 'bg-blue-50 text-blue-600',
    hoverBg: 'group-hover:bg-blue-600',
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced cosmetic whitening procedures to give you a bright, confident JerDen smile.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/></svg>
    ),
    color: 'bg-emerald-50 text-emerald-600',
    hoverBg: 'group-hover:bg-emerald-600',
  },
  {
    title: 'Braces (Orthodontics)',
    description: 'Professional alignment solutions for adults and children using the latest orthodontic techniques.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
    ),
    color: 'bg-purple-50 text-purple-600',
    hoverBg: 'group-hover:bg-purple-600',
  },
  {
    title: 'Fillings & Root Canals',
    description: 'High-quality restorative treatments to save problematic teeth and eliminate pain.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="M12 14v8"/></svg>
    ),
    color: 'bg-amber-50 text-amber-600',
    hoverBg: 'group-hover:bg-amber-600',
  },
  {
    title: 'Teeth Extraction',
    description: 'Safe, painless extraction of damaged or problematic teeth in a sterile environment.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 11c0 2.21-1.79 4-4 4s-4-1.79-4-4"/></svg>
    ),
    color: 'bg-rose-50 text-rose-600',
    hoverBg: 'group-hover:bg-rose-600',
  },
  {
    title: 'General Dentistry',
    description: 'Comprehensive oral health assessments and general dentistry for all ages.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
    ),
    color: 'bg-sky-50 text-sky-600',
    hoverBg: 'group-hover:bg-sky-600',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl animate-fade-in-up">
            <h2 className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">JerDen Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] font-serif">
              Our Modern <span className="text-sky-600 italic font-normal">Oral Care</span> Services
            </h3>
            <p className="text-gray-500 text-lg mt-6 max-w-xl">
              We specialize in scaling, cosmetic procedures, and general dentistry to ensure accessible oral health in Githurai.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up delay-${(index % 3) * 100}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${service.hoverBg} group-hover:text-white group-hover:rotate-6`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-700 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
