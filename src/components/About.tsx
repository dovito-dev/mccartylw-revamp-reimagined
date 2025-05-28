
import { Award, BookOpen, Gavel, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">About Our Firm</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Committed to Excellence in Legal Representation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                McCarty Law Firm has been serving the Hampton Roads community for over two decades. 
                Our commitment to providing personalized, high-quality legal services has earned us 
                the trust of countless clients throughout Virginia.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that every client deserves dedicated representation and clear communication 
                throughout their legal journey. Our approach combines extensive legal knowledge with 
                genuine care for our clients' well-being and success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Gavel className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Experienced Advocacy</h3>
                <p className="text-slate-600 text-sm">
                  Decades of courtroom experience and successful case outcomes.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Personal Touch</h3>
                <p className="text-slate-600 text-sm">
                  Every client receives personalized attention and dedicated service.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Legal Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive knowledge across multiple areas of law.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Award className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Proven Results</h3>
                <p className="text-slate-600 text-sm">
                  Track record of successful outcomes for our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=700&fit=crop"
              alt="Law Office Interior"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-xl shadow-lg max-w-xs">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-100">
                Years of dedicated legal service to the Hampton Roads community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
