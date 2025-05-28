
import { FileText, Users, Building, Calculator, Clipboard, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Real Estate Appraisals",
      description: "Comprehensive property valuations for residential, commercial, agricultural, and special-use properties across Colorado.",
      pricing: "Starting at $500"
    },
    {
      icon: Users,
      title: "Expert Consultations",
      description: "Professional consulting services for complex valuation issues, market analysis, and property assessment guidance.",
      pricing: "Hourly rates available"
    },
    {
      icon: Building,
      title: "NCWCD Reports",
      description: "Specialized reporting for Northern Colorado Water Conservancy District assessments and water-related valuations.",
      pricing: "Custom pricing"
    },
    {
      icon: Calculator,
      title: "Market Analysis",
      description: "Detailed market studies and feasibility analysis for development projects and investment decisions.",
      pricing: "Project-based"
    },
    {
      icon: Clipboard,
      title: "Review Appraisals",
      description: "Third-party review and validation of existing appraisal reports for quality assurance and compliance.",
      pricing: "Starting at $300"
    },
    {
      icon: DollarSign,
      title: "Litigation Support",
      description: "Expert witness testimony and litigation support services for legal proceedings involving property valuation.",
      pricing: "Court-approved rates"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Services</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Comprehensive Valuation Services
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            From routine residential appraisals to complex agricultural and water rights valuations, 
            our experienced team delivers accurate, defensible reports for every property type.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-6">
                <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <service.icon className="text-secondary group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-sm font-semibold text-accent">
                    {service.pricing}
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="text-accent font-semibold hover:text-accent/80 transition-colors flex items-center gap-2 group"
                  >
                    Get Quote
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
            className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-flex items-center gap-2"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
