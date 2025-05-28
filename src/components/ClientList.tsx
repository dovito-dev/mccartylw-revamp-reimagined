
import { Building, Users, Star, TrendingUp } from 'lucide-react';

const ClientList = () => {
  const clientTypes = [
    {
      icon: Building,
      title: "Financial Institutions",
      description: "Banks, credit unions, and lending institutions requiring reliable valuations for loan portfolios and risk assessment."
    },
    {
      icon: Users,
      title: "Legal Professionals", 
      description: "Attorneys and law firms needing expert appraisal services for litigation, estate planning, and legal proceedings."
    },
    {
      icon: TrendingUp,
      title: "Government Agencies",
      description: "Federal, state, and local agencies requiring appraisals for acquisition, taxation, and regulatory compliance."
    },
    {
      icon: Star,
      title: "Private Individuals",
      description: "Property owners, investors, and families needing appraisals for personal, tax, and investment decisions."
    }
  ];

  const testimonials = [
    {
      quote: "McCarty Land & Water Valuation consistently delivers thorough, well-researched appraisals that stand up to scrutiny. Their expertise in agricultural properties is unmatched.",
      client: "Regional Bank President",
      type: "Financial Institution"
    },
    {
      quote: "The team's knowledge of water rights and conservation easements has been invaluable for our legal cases. Their reports are always comprehensive and defensible.",
      client: "Estate Planning Attorney",
      type: "Legal Professional"
    },
    {
      quote: "Professional, timely, and accurate. We've relied on their expertise for over a decade and they never disappoint.",
      client: "Private Ranch Owner",
      type: "Individual Client"
    }
  ];

  return (
    <section id="clientlist" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Clients</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Trusted by Colorado's Leading Organizations
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            We serve a diverse clientele across Colorado, from individual property owners 
            to major financial institutions and government agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientTypes.map((type, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 p-6 rounded-xl border border-slate-200 hover:border-secondary hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                <type.icon className="text-secondary" size={32} />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary">
                {type.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-serif font-bold text-primary text-center">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-xl p-8 relative"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-accent fill-current" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-muted leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <div className="font-semibold text-primary">{testimonial.client}</div>
                    <div className="text-accent text-sm">{testimonial.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientList;
