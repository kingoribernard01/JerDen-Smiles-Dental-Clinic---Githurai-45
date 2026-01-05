
import React from 'react';

const testimonials = [
  {
    name: 'Sarah W.',
    role: 'Local Resident',
    content: 'The most gentle dental experience I have ever had! Dr. Daniel was very professional and explained everything clearly.',
    rating: 5,
  },
  {
    name: 'Joseph M.',
    role: 'Parent',
    content: 'My kids actually look forward to their dental visits now. The pediatric team is amazing and very patient.',
    rating: 5,
  },
  {
    name: 'Amos K.',
    role: 'Business Owner',
    content: 'Had an emergency toothache and they fit me in within an hour. Excellent service and very affordable too.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Patient Reviews</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.content}"</p>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
              <div className="absolute -top-4 -right-4 text-sky-200 opacity-20">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
