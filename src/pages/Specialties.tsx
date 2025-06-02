
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Specialties from '@/components/Specialties';

const SpecialtiesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-secondary/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary leading-tight">
              Our Specialties
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Specialized expertise in complex Colorado property valuations
            </p>
          </div>
        </div>
      </section>
      <Specialties />
      <Footer />
    </div>
  );
};

export default SpecialtiesPage;
