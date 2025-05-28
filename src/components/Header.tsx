
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+17574221801" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                <Phone size={14} />
                <span>(757) 422-1801</span>
              </a>
              <a href="mailto:info@mccartylw.com" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                <Mail size={14} />
                <span>info@mccartylw.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              <MapPin size={14} />
              <span>Norfolk, Virginia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">
              McCarty Law Firm
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Practice Areas</a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Practice Areas</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block w-fit">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
