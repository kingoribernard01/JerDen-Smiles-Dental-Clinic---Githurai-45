
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-800">
                JerDen Smiles <span className="text-sky-600 font-medium">KE Clinic</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              JerDen Smiles KE Dental Clinic is your neighborhood provider for professional Scaling, Whitening, Braces, and General Dentistry in Githurai 45.
            </p>
            <div className="text-sky-600 font-bold text-lg mb-2">0748 088 797</div>
            <p className="text-gray-400 text-sm">Githu Complex, Opp. Cooperative Bank, Nairobi</p>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Services</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>Teeth Scaling & Cleaning</li>
              <li>Teeth Whitening</li>
              <li>Orthodontic Braces</li>
              <li>Root Canals & Fillings</li>
              <li>Teeth Extraction</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">JerDen Spots</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>Githu Complex (HQ)</li>
              <li>Githurai 45 Market</li>
              <li>Githurai Station</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} JerDen Smiles KE. All rights reserved.</p>
            <p className="mt-1">
              Designed by <a href="https://novus-studios.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-bold hover:text-emerald-600 transition-colors">Novus Studios</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
