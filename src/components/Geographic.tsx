
import { MapPin, Mountain, Compass } from 'lucide-react';

const Geographic = () => {
  const serviceAreas = [
    "Denver Metro Area",
    "Boulder County",
    "Larimer County",
    "Weld County",
    "Jefferson County",
    "Adams County",
    "Broomfield County",
    "Douglas County",
    "Arapahoe County",
    "Clear Creek County",
    "Gilpin County",
    "Park County"
  ];

  return (
    <section id="geographic" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-accent rounded-full"></div>
                <span className="text-accent font-semibold uppercase tracking-wide text-sm">Service Coverage</span>
              </div>
              <h2 className="text-4xl font-serif font-bold leading-tight">
                Serving Colorado's Front Range & Beyond
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Our extensive geographic coverage spans Colorado's most active real estate markets, 
                from urban Denver metro properties to rural agricultural lands throughout the Front Range.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="text-accent flex-shrink-0" size={16} />
                  <span className="text-white/90">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Compass className="text-accent" size={24} />
                <h3 className="text-xl font-serif font-bold">Statewide Coverage Available</h3>
              </div>
              <p className="text-white/80">
                While we primarily serve the Front Range, we also provide appraisal services 
                throughout Colorado for specialized properties and unique assignments.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-square bg-secondary/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Mountain className="text-accent mx-auto" size={80} />
                  <h3 className="text-2xl font-serif font-bold">Colorado Coverage Map</h3>
                  <p className="text-white/80">
                    Comprehensive service across Colorado's diverse landscapes and markets
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geographic;
