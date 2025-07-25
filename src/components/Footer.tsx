import React from 'react';
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/Hvul2sc.jpeg" 
                alt="WebDevPro Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold">WEBDEVPRO</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional web development and digital marketing solutions for small businesses. 
              Get stunning websites without paying upfront.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#4299e1] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4299e1] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#4299e1] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#web-design" className="text-gray-300 hover:text-[#4299e1] transition-colors">Web Design</a></li>
              <li><a href="#hosting" className="text-gray-300 hover:text-[#4299e1] transition-colors">Web Hosting</a></li>
              <li><a href="#seo" className="text-gray-300 hover:text-[#4299e1] transition-colors">SEO Marketing</a></li>
              <li><a href="#social-media" className="text-gray-300 hover:text-[#4299e1] transition-colors">Social Media Marketing</a></li>
              <li><a href="#graphic-design" className="text-gray-300 hover:text-[#4299e1] transition-colors">Graphic Design</a></li>
              <li><a href="#advertising" className="text-gray-300 hover:text-[#4299e1] transition-colors">Digital Advertising</a></li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Packages</h3>
            <ul className="space-y-3">
              <li><a href="#pricing" className="text-gray-300 hover:text-[#4299e1] transition-colors">Silver Package - R1200</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-[#4299e1] transition-colors">Gold Package - R2000</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-[#4299e1] transition-colors">Premium Package - R3000</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#4299e1] transition-colors">Custom Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#4299e1]" />
                <span className="text-gray-300">+27812159792</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#4299e1]" />
                <span className="text-gray-300">info@webdevpro.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-[#4299e1]" />
                <span className="text-gray-300">South Africa</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#2c5282] rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Need help? Contact us on WhatsApp:</p>
              <a 
                href={`https://wa.me/27812159792`}
                className="text-[#25d366] hover:text-[#128c7e] font-semibold transition-colors"
              >
                +27812159792
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                Website designed by{' '}
                <a 
                  href="https://www.webdevpro.co.za" 
                  className="text-[#4299e1] hover:text-[#68d391] font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.webdevpro.co.za
                </a>
                {' '}|{' '}
                <a 
                  href="tel:+27812159792" 
                  className="text-[#4299e1] hover:text-[#68d391] font-semibold transition-colors"
                >
                  Call/App +27812159792
                </a>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © {new Date().getFullYear()} WEBDEVPRO. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Professional web development • Digital marketing • No upfront payments • 
              Free hosting • SSL certificates • Business emails
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;