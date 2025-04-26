import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
  campaignTitle: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "CrowdChain helped me raise funds for my tech startup in just 30 days. The transparency of blockchain technology gave my backers confidence in the project.",
    name: "Alex Johnson",
    role: "Tech Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=33",
    campaignTitle: "EcoTech Solar Panels",
  },
  {
    id: 2,
    text: "As an artist, I was struggling to find funding for my exhibition. CrowdChain connected me with art enthusiasts worldwide who believed in my vision.",
    name: "Sophia Chen",
    role: "Visual Artist",
    avatar: "https://i.pravatar.cc/150?img=47",
    campaignTitle: "Urban Art Exhibition",
  },
  {
    id: 3,
    text: "The global reach of CrowdChain is incredible. Our community project received support from 15 different countries, which wouldn't have been possible with traditional funding.",
    name: "Marcus Rodriguez",
    role: "Community Organizer",
    avatar: "https://i.pravatar.cc/150?img=12",
    campaignTitle: "Urban Garden Initiative",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Creator Success Stories</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Hear from creators who have successfully funded their projects through our platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="absolute top-8 left-8 text-primary opacity-20">
              <Quote size={64} />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic text-neutral-700 mb-8">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-neutral-600">{testimonials[activeIndex].role}</div>
                  <div className="text-primary text-sm mt-1">Campaign: {testimonials[activeIndex].campaignTitle}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute right-8 bottom-8 flex space-x-2">
              <button 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors"
                onClick={nextTestimonial}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-primary' : 'bg-neutral-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;