
import { Award, BookOpen, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-accent rounded-full"></div>
                <span className="text-accent font-semibold uppercase tracking-wide text-sm">About Our Firm</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
                Colorado's Premier Land & Water Valuation Experts
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                For over 25 years, McCarty Land & Water Valuation, Inc. has been Colorado's trusted 
                source for comprehensive real estate appraisal services. Our team combines deep local 
                knowledge with cutting-edge valuation methodologies to deliver accurate, defensible 
                appraisals for the most complex properties.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                We understand that every property tells a unique story. Whether it's a ranch with 
                century-old water rights, agricultural land with conservation potential, or commercial 
                property in Colorado's evolving markets, we provide the expertise you need.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-primary">Market Expertise</h3>
                <p className="text-muted text-sm">
                  Deep understanding of Colorado's diverse real estate markets.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Heart className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-primary">Client Focus</h3>
                <p className="text-muted text-sm">
                  Personalized service with clear communication throughout the process.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-primary">Technical Excellence</h3>
                <p className="text-muted text-sm">
                  Advanced methodologies and comprehensive analysis techniques.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Award className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-primary">Proven Results</h3>
                <p className="text-muted text-sm">
                  Thousands of successful appraisals across Colorado.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=700&fit=crop"
              alt="Professional Appraisal Team at Work"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-xl shadow-lg max-w-xs">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-accent/90">
                Years serving Colorado's real estate appraisal needs with integrity and expertise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
