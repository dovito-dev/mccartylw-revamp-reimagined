
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+19703521343" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Phone size={14} />
                <span>(970) 352-1343</span>
              </a>
              <a href="mailto:info@mccartylw.com" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Mail size={14} />
                <span>info@mccartylw.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              <MapPin size={14} />
              <span>Serving Colorado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">
              McCarty Land & Water Valuation, Inc.
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-muted hover:text-primary font-medium transition-colors">Home</a>
            <a href="#services" className="text-muted hover:text-primary font-medium transition-colors">Services</a>
            <a href="#specialties" className="text-muted hover:text-primary font-medium transition-colors">Specialties</a>
            <a href="#geographic" className="text-muted hover:text-primary font-medium transition-colors">Coverage</a>
            <a href="#team" className="text-muted hover:text-primary font-medium transition-colors">Team</a>
            <a href="#standards" className="text-muted hover:text-primary font-medium transition-colors">Standards</a>
            <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium">Get Appraisal</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-muted hover:text-primary font-medium transition-colors">Home</a>
              <a href="#services" className="text-muted hover:text-primary font-medium transition-colors">Services</a>
              <a href="#specialties" className="text-muted hover:text-primary font-medium transition-colors">Specialties</a>
              <a href="#geographic" className="text-muted hover:text-primary font-medium transition-colors">Coverage</a>
              <a href="#team" className="text-muted hover:text-primary font-medium transition-colors">Team</a>
              <a href="#standards" className="text-muted hover:text-primary font-medium transition-colors">Standards</a>
              <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium inline-block w-fit">Get Appraisal</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
