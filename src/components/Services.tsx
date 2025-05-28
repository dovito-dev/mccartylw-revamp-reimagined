
import { Building, Car, Home, UserCheck, FileText, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Personal Injury",
      description: "Comprehensive representation for auto accidents, slip and fall cases, and other personal injury matters with a focus on maximizing your compensation."
    },
    {
      icon: Building,
      title: "Business Law",
      description: "Expert guidance for business formation, contracts, disputes, and ongoing legal counsel to help your business thrive and stay compliant."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Full-service real estate legal support including purchases, sales, closings, title issues, and property disputes for residential and commercial properties."
    },
    {
      icon: UserCheck,
      title: "Employment Law",
      description: "Protecting employee rights and helping employers navigate complex employment regulations, discrimination claims, and workplace issues."
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Comprehensive estate planning services including wills, trusts, probate administration, and legacy planning to protect your family's future."
    },
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate representation in divorce, child custody, support matters, and other family legal issues during difficult times."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Practice Areas</span>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Comprehensive Legal Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced legal team provides expert representation across multiple practice areas, 
            ensuring you receive the specialized attention your case deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2 group"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
