
import { Download, Bell, FileText, BookOpen, Calendar, Mail } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Property Owner's Guide to Appraisals",
      description: "Comprehensive guide explaining the appraisal process, what to expect, and how to prepare your property.",
      type: "PDF Download"
    },
    {
      icon: BookOpen,
      title: "Water Rights Valuation Primer",
      description: "Essential information about Colorado water rights and their impact on property values.",
      type: "PDF Download"
    },
    {
      icon: Download,
      title: "Conservation Easement Guide",
      description: "Understanding conservation easements and their valuation for tax and estate planning purposes.",
      type: "PDF Download"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Resources</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Educational Resources & Updates
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Stay informed with our comprehensive guides, market reports, and industry insights 
            designed to help you understand property valuation and market trends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-primary">
              Downloadable Guides
            </h3>
            
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                      <resource.icon className="text-secondary" size={24} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif font-bold text-primary group-hover:text-accent transition-colors">
                          {resource.title}
                        </h4>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium">
                        <Download size={16} />
                        <span>Download Free</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary rounded-xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Bell className="text-accent" size={32} />
                  <h3 className="text-2xl font-serif font-bold">
                    Market Updates
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Subscribe to receive quarterly market reports and industry insights 
                  directly to your inbox. Stay informed about Colorado real estate trends, 
                  regulatory changes, and market conditions.
                </p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg text-primary placeholder-slate-400 focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                  <button className="w-full bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold">
                    Subscribe to Updates
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="text-secondary" size={32} />
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Quarterly Reports
                  </h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Our detailed quarterly market analysis provides insights into Colorado's 
                  real estate markets, including agricultural land trends, water rights 
                  activity, and conservation easement developments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Q4 2024 Report</span>
                    <span className="text-accent font-medium">Available Now</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Q1 2025 Report</span>
                    <span className="text-muted">Coming April 2025</span>
                  </div>
                </div>
                <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-semibold">
                  Access Latest Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
