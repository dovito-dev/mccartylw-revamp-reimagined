
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors">
              McCarty Land & Water Valuation, Inc.
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-muted hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-muted hover:text-primary font-medium transition-colors">Services</Link>
            <Link to="/specialties" className="text-muted hover:text-primary font-medium transition-colors">Specialties</Link>
            <Link to="/coverage" className="text-muted hover:text-primary font-medium transition-colors">Coverage</Link>
            <Link to="/team" className="text-muted hover:text-primary font-medium transition-colors">Team</Link>
            <Link to="/standards" className="text-muted hover:text-primary font-medium transition-colors">Standards</Link>
            <Link to="/contact" className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium">Get Appraisal</Link>
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
              <Link to="/" className="text-muted hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="text-muted hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/specialties" className="text-muted hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Specialties</Link>
              <Link to="/coverage" className="text-muted hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Coverage</Link>
              <Link to="/team" className="text-muted hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link to="/standards" className="text-muted hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Standards</Link>
              <Link to="/contact" className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium inline-block w-fit" onClick={() => setIsMenuOpen(false)}>Get Appraisal</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
