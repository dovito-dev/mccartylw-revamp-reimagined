
import { CheckCircle, FileText, TrendingUp, Shield, Award, Target } from 'lucide-react';

const Standards = () => {
  const approaches = [
    {
      icon: TrendingUp,
      title: "Sales Comparison Approach",
      description: "Comprehensive analysis of comparable sales, adjusting for differences in location, size, condition, and market conditions."
    },
    {
      icon: Target,
      title: "Income Approach",
      description: "Evaluation of income-producing potential through capitalization of net operating income and discounted cash flow analysis."
    },
    {
      icon: Award,
      title: "Cost Approach",
      description: "Assessment of replacement cost new less depreciation, particularly valuable for unique or special-purpose properties."
    }
  ];

  const qualityControls = [
    "Multi-level review process for all reports",
    "Compliance with USPAP standards",
    "Continuing education requirements", 
    "Professional liability insurance",
    "Client feedback and satisfaction monitoring",
    "Regular peer review and consultation"
  ];

  return (
    <section id="standards" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Appraisal Standards</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Methodology & Quality Assurance
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Our appraisal methodology follows industry best practices and USPAP standards, 
            ensuring accurate, reliable, and defensible property valuations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">
                Three Approaches to Value
              </h3>
              <p className="text-muted leading-relaxed">
                We employ the three traditional approaches to value, selecting the most 
                appropriate method(s) based on property type, available data, and intended use.
              </p>
            </div>

            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <approach.icon className="text-secondary" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-primary">
                      {approach.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="text-accent" size={32} />
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Quality Control Process
                </h3>
              </div>
              <p className="text-muted leading-relaxed">
                Every appraisal undergoes rigorous quality control measures to ensure 
                accuracy, completeness, and compliance with professional standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 space-y-4">
              {qualityControls.map((control, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span className="text-muted">{control}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <FileText className="text-accent mx-auto" size={48} />
            <h3 className="text-2xl font-serif font-bold">
              USPAP Compliant Reports
            </h3>
            <p className="text-white/80 leading-relaxed">
              All appraisals are prepared in accordance with the Uniform Standards of 
              Professional Appraisal Practice (USPAP) and applicable state regulations, 
              ensuring professional credibility and legal defensibility.
            </p>
            <a 
              href="#contact" 
              className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-block"
            >
              Request Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
