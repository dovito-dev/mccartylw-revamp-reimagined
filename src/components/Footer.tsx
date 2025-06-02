
import { Phone, Mail, MapPin, FileText, Award, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">McCarty Land & Water Valuation, Inc.</h3>
              <p className="text-white/80 leading-relaxed">
                Colorado's premier real estate appraisal firm, specializing in agricultural properties, 
                water rights, and conservation easements since 1999.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-accent font-medium text-lg">
                "Appraisals for the Modern West"
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-white/80 hover:text-white transition-colors">Real Estate Appraisals</a>
              <a href="#services" className="block text-white/80 hover:text-white transition-colors">Expert Consultations</a>
              <a href="#specialties" className="block text-white/80 hover:text-white transition-colors">Water Rights Valuation</a>
              <a href="#specialties" className="block text-white/80 hover:text-white transition-colors">Conservation Easements</a>
              <a href="#services" className="block text-white/80 hover:text-white transition-colors">NCWCD Reports</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Company</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#team" className="block text-white/80 hover:text-white transition-colors">Our Team</a>
              <a href="#geographic" className="block text-white/80 hover:text-white transition-colors">Service Areas</a>
              <a href="#standards" className="block text-white/80 hover:text-white transition-colors">Quality Standards</a>
              <a href="#resources" className="block text-white/80 hover:text-white transition-colors">Resources</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <a href="tel:+19706350900" className="text-white/80 hover:text-white transition-colors">
                  (970) 635-0900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <a href="mailto:info@mccartylw.com" className="text-white/80 hover:text-white transition-colors">
                  info@mccartylw.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                <div className="text-white/80">
                  310 Mountain Avenue<br />
                  Berthoud, Colorado 80513
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 McCarty Land & Water Valuation, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Licensed Appraisers</span>
              <span>USPAP Compliant</span>
              <span>Professional Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
