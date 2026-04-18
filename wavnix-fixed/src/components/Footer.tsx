import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div data-aos="fade-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h3 className="text-white font-bold text-lg">Wavnix</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Premium digital solutions for domain registration, web hosting, development, AI automation, and business growth.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <FaLinkedin className="text-white" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <FaTelegram className="text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Domain Registration</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Web Hosting</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">AI Automation</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:hello@wavnix.com" className="hover:text-cyan-400 transition-colors">hello@wavnix.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-cyan-400" />
                <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span>Global Digital Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Wavnix. All rights reserved.</p>
            <div className="md:text-right space-x-4">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
