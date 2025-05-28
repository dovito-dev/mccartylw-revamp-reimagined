
import { Leaf, Droplets, FileText, Home, Building2, TrendingUp } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: Leaf,
      title: "Conservation Easements",
      description: "Expert valuation of conservation easements and their impact on property values, including before-and-after analysis for tax and legal purposes."
    },
    {
      icon: Droplets,
      title: "Water Rights Valuation",
      description: "Comprehensive assessment of water rights, including senior appropriative rights, augmentation plans, and ditch company shares across Colorado."
    },
    {
      icon: FileText,
      title: "Narrative Reports",
      description: "Detailed narrative appraisal reports that provide comprehensive market analysis, methodology explanation, and defensible value conclusions."
    },
    {
      icon: Home,
      title: "Ranch & Agricultural Properties",
      description: "Specialized expertise in valuing working ranches, agricultural operations, and rural properties with complex income streams and improvements."
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      description: "Professional valuation of commercial properties, industrial facilities, and special-use properties throughout Colorado's diverse markets."
    },
    {
      icon: TrendingUp,
      title: "Highest & Best Use Analysis",
      description: "Comprehensive analysis of property potential, including development feasibility studies and alternative use evaluations."
    }
  ];

  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Our Specialties</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Specialized Valuation Expertise
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            We focus on Colorado's unique property types and challenging valuation assignments 
            that require specialized knowledge and advanced analytical techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl border border-slate-200 hover:border-secondary hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <specialty.icon className="text-secondary" size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-primary">
                    {specialty.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="text-accent font-semibold hover:text-accent/80 transition-colors flex items-center gap-2 group"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
