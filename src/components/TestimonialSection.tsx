import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Product Manager at TechNova',
    quote: 'An absolute pleasure to work with. Delivered every project with precision and creativity.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO at DevSolutions',
    quote: 'Professional, timely, and highly skilled. I would recommend without hesitation.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Sofia García',
    role: 'Founder of CreativeByte',
    quote: 'Their attention to detail and commitment to quality is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-[#0F1112] py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">What People Say</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A1C1E] rounded-2xl p-6 shadow-md transition-transform transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
