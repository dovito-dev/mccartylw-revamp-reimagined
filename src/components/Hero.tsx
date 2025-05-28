
import { ArrowRight, TrendingUp, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-secondary/10 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                Appraisals for the
                <span className="text-accent block">Modern West</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                McCarty Land & Water Valuation, Inc. provides comprehensive real estate appraisal services 
                across Colorado. We specialize in agricultural properties, conservation easements, water rights, 
                and complex valuation assignments with unmatched expertise and precision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                Get an Appraisal
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+19703521343" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-center"
              >
                Call (970) 352-1343
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-secondary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="text-secondary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted">Appraisals Completed</div>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="text-secondary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted">Professional</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=600&fit=crop"
                alt="Colorado Landscape - Agricultural Land"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
