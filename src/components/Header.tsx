import React, { useState } from 'react';
import { Facebook, Youtube, Instagram, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdvertisingOpen, setIsAdvertisingOpen] = useState(false);
  const [isGraphicOpen, setIsGraphicOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-[#1a365d] py-2">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#4299e1] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white hover:text-[#4299e1] transition-colors">
              <Youtube size={18} />
            </a>
            <a href="#" className="text-white hover:text-[#4299e1] transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/Hvul2sc.jpeg" 
              alt="WebDevPro Logo" 
              className="h-12 w-auto mr-3"
            />
            <span className="text-2xl font-bold text-[#1a365d]">WEBDEVPRO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors">
              Home
            </a>
            <a href="#blog" className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors">
              Blog
            </a>
            <a 
              href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Web Design services. Can you provide more information?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors"
            >
              Web Designing
            </a>
            <a 
              href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Web Hosting services. Can you provide more information?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors"
            >
              Hosting
            </a>
            
            {/* Advertising Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors"
                onMouseEnter={() => setIsAdvertisingOpen(true)}
                onMouseLeave={() => setIsAdvertisingOpen(false)}
              >
                Advertising <ChevronDown size={16} className="ml-1" />
              </button>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 w-56 transition-all duration-200 ${
                  isAdvertisingOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsAdvertisingOpen(true)}
                onMouseLeave={() => setIsAdvertisingOpen(false)}
              >
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your SEO services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  SEO
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Facebook Advertising services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  Facebook Advertising
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your YouTube Advertising services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  YouTube Advertising
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Instagram Advertising services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  Instagram Advertising
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Google Ads services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  Google Ads
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Audience Engagement services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  Audience Engagement
                </a>
              </div>
            </div>

            {/* Graphic Design Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors"
                onMouseEnter={() => setIsGraphicOpen(true)}
                onMouseLeave={() => setIsGraphicOpen(false)}
              >
                Graphic Design <ChevronDown size={16} className="ml-1" />
              </button>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 w-48 transition-all duration-200 ${
                  isGraphicOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsGraphicOpen(true)}
                onMouseLeave={() => setIsGraphicOpen(false)}
              >
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Logo Design services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  Logo Design
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Poster Design services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#1a365d] hover:bg-[#f7fafc] hover:text-[#4299e1] transition-colors"
                >
                  Poster Design
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#1a365d]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors">Home</a>
              <a href="#blog" className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors">Blog</a>
              <a 
                href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Web Design services. Can you provide more information?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors"
              >
                Web Designing
              </a>
              <a 
                href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Web Hosting services. Can you provide more information?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a365d] hover:text-[#4299e1] font-medium transition-colors"
              >
                Hosting
              </a>
              <div className="border-l-2 border-[#4299e1] pl-4 space-y-2">
                <p className="font-medium text-[#1a365d]">Advertising</p>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your SEO services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  SEO
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Facebook Advertising services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  Facebook Advertising
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your YouTube Advertising services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  YouTube Advertising
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Instagram Advertising services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  Instagram Advertising
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Google Ads services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  Google Ads
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Audience Engagement services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  Audience Engagement
                </a>
              </div>
              <div className="border-l-2 border-[#4299e1] pl-4 space-y-2">
                <p className="font-medium text-[#1a365d]">Graphic Design</p>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Logo Design services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  Logo Design
                </a>
                <a 
                  href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in your Poster Design services. Can you provide more information and pricing?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#1a365d] hover:text-[#4299e1] transition-colors"
                >
                  Poster Design
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;