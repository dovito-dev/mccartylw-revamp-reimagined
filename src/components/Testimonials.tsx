
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Personal Injury Client",
      content: "McCarty Law Firm exceeded my expectations. They fought tirelessly for my case and kept me informed every step of the way. I couldn't have asked for better representation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "The business law expertise at McCarty Law Firm is outstanding. They helped us navigate complex contracts and provided invaluable guidance for our company's growth.",
      rating: 5
    },
    {
      name: "Jennifer Davis",
      role: "Real Estate Client",
      content: "Professional, knowledgeable, and responsive. The team made our home buying process smooth and stress-free. Highly recommend their real estate services.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "Estate Planning Client",
      content: "The attention to detail in our estate planning was remarkable. They ensured our family's future is protected with comprehensive and thoughtful legal strategies.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Client Testimonials</span>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience with McCarty Law Firm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-xl p-8 relative group hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors" size={32} />
              
              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6">
              Join hundreds of satisfied clients who have trusted McCarty Law Firm with their legal needs.
            </p>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
