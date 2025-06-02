
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Standards from '@/components/Standards';

const StandardsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-secondary/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary leading-tight">
              Appraisal Standards
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Professional methodology and quality assurance
            </p>
          </div>
        </div>
      </section>
      <Standards />
      <Footer />
    </div>
  );
};

export default StandardsPage;
