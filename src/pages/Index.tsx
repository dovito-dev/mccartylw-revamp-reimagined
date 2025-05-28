
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Specialties from '@/components/Specialties';
import Geographic from '@/components/Geographic';
import Team from '@/components/Team';
import ClientList from '@/components/ClientList';
import Standards from '@/components/Standards';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Specialties />
      <Geographic />
      <Team />
      <ClientList />
      <Standards />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
