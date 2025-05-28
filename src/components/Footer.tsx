
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">McCarty Law Firm</h3>
              <p className="text-slate-300 leading-relaxed">
                Providing experienced legal representation to individuals and businesses 
                throughout Virginia for over two decades.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors">About Us</a>
              <a href="#services" className="block text-slate-300 hover:text-white transition-colors">Practice Areas</a>
              <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <div className="space-y-3">
              <div className="text-slate-300">Personal Injury</div>
              <div className="text-slate-300">Business Law</div>
              <div className="text-slate-300">Real Estate</div>
              <div className="text-slate-300">Employment Law</div>
              <div className="text-slate-300">Estate Planning</div>
              <div className="text-slate-300">Family Law</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <a href="tel:+17574221801" className="text-slate-300 hover:text-white transition-colors">
                  (757) 422-1801
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <a href="mailto:info@mccartylw.com" className="text-slate-300 hover:text-white transition-colors">
                  info@mccartylw.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div className="text-slate-300">
                  Norfolk, Virginia<br />
                  Serving Hampton Roads
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 McCarty Law Firm. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
