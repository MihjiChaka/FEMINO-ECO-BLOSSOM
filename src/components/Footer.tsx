import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg text-primary">
              <Leaf size={24} />
            </div>
            <span className="font-serif text-2xl font-bold">Femino Eco Blossom</span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed">
            Guiding businesses towards sustainable growth through innovative and compliant environmental solutions in Zambia and beyond.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/260973917979" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-primary-dark transition-all text-sm font-bold"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white transition-colors">Environmental Impact Assessments</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Environmental Audits</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Waste Management Plans</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Compliance Consulting</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Sustainability Strategy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Lusaka, Zambia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+260 973 917 979</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>fatnessngoma@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Femino Eco Blossom. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
