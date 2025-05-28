
import { Phone, Mail, MapPin, Clock, Send, User, Building } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours to discuss your appraisal needs.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Main Office",
      content: "(970) 352-1343",
      action: "tel:+19703521343"
    },
    {
      icon: Mail,
      title: "General Inquiries",
      content: "info@mccartylw.com",
      action: "mailto:info@mccartylw.com"
    },
    {
      icon: Building,
      title: "Office Address",
      content: "Greeley, Colorado\nServing the Front Range",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">Contact Us</span>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
            Get Your Professional Appraisal
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your property valuation needs? Contact McCarty Land & Water Valuation, Inc. 
            for professional appraisal services across Colorado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action} 
                          className="text-muted hover:text-accent transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-muted whitespace-pre-line">
                          {info.content}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                    <div className="text-muted space-y-1 text-sm">
                      <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                      <div>Saturday: By Appointment</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-xl p-8 text-white">
              <h3 className="text-xl font-serif font-bold mb-4">Need Rush Service?</h3>
              <p className="text-accent/90 mb-4">
                We understand that some appraisal needs are time-sensitive. Contact us to discuss 
                expedited service options for urgent assignments.
              </p>
              <a 
                href="tel:+19703521343" 
                className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-block"
              >
                Call for Rush Service
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Request an Appraisal</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="(970) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-semibold text-primary mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="agricultural">Agricultural/Ranch</option>
                      <option value="land">Vacant Land</option>
                      <option value="water-rights">Water Rights</option>
                      <option value="conservation">Conservation Easement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your property and appraisal needs. Include property address, intended use of appraisal, and any special considerations..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Submit Request
                  <Send size={20} />
                </button>

                <p className="text-sm text-muted text-center">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
