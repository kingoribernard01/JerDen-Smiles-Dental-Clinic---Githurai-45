
import React from 'react';

const locations = [
  {
    name: 'Githu Complex (Main)',
    address: 'Opposite Cooperative Bank',
    phone: '0748 088 797',
    type: 'Primary Clinic',
    highlight: true,
  },
  {
    name: 'Githurai 45 Market Spot',
    address: 'Near Main Market Entrance',
    phone: '0748 088 797',
    type: 'Quick Care',
    highlight: false,
  },
  {
    name: 'Githurai Station Spot',
    address: 'Near the Rail Station',
    phone: '0748 088 797',
    type: 'Consultation Spot',
    highlight: false,
  },
];

const Network: React.FC = () => {
  return (
    <section id="network" className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Githurai Accessibility</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Multiple Spots Across <br />
            <span className="text-sky-600 italic font-normal">Githurai 45</span>
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            JerDen Smiles is committed to making dental care accessible. Find us at several convenient spots within Githurai for quick consultations and treatments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-[40px] border transition-all duration-500 shadow-sm hover:shadow-xl ${
                loc.highlight ? 'bg-sky-50 border-sky-200' : 'bg-gray-50 border-gray-100'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${loc.highlight ? 'bg-sky-600 text-white' : 'bg-white text-sky-600 border'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white border rounded-full">{loc.type}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{loc.name}</h4>
              <p className="text-gray-500 text-sm mb-4">{loc.address}</p>
              <div className="text-sky-600 font-bold">{loc.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
