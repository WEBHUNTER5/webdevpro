import React from 'react';
import { CheckCircle, Smartphone, TrendingUp, Palette, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-[#1a365d] via-[#2c5282] to-[#4299e1] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                WEBDEVPRO
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-[#bee3f8]">
                Get a stunning website without paying upfront!
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#68d391] mt-1 flex-shrink-0" size={20} />
                <span className="text-lg">Advanced Web-design (also used as a Mobile App)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#68d391] mt-1 flex-shrink-0" size={20} />
                <span className="text-lg">Google Ads & Facebook ads management</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#68d391] mt-1 flex-shrink-0" size={20} />
                <span className="text-lg">Mobile app design/animated video adverts & more!</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-xl font-semibold mb-4">And that's not all...</p>
              <p className="text-lg mb-6">
                High-quality logo designs, posters, and SEO services too!
              </p>
              <p className="text-lg leading-relaxed">
                Small business owners, boost your online presence and gain customer trust with WebDevPro! 
                Get a stunning website for just <span className="font-bold text-[#68d391]">R1200</span>, 
                including free hosting, a free domain name, a free SSL certificate, and professional email accounts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="bg-[#68d391] text-[#1a365d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#48bb78] transition-colors text-center"
              >
                View Packages
              </a>
              <a 
                href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I\'m interested in getting started with WebDevPro. Can you help me choose the right package for my business?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1a365d] transition-colors text-center"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <Smartphone className="mx-auto mb-4 text-[#68d391]" size={40} />
              <h3 className="font-semibold mb-2">Mobile Responsive</h3>
              <p className="text-sm text-[#bee3f8]">Optimized for all devices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <TrendingUp className="mx-auto mb-4 text-[#68d391]" size={40} />
              <h3 className="font-semibold mb-2">SEO Optimized</h3>
              <p className="text-sm text-[#bee3f8]">Rank #1 on Google</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <Palette className="mx-auto mb-4 text-[#68d391]" size={40} />
              <h3 className="font-semibold mb-2">Custom Design</h3>
              <p className="text-sm text-[#bee3f8]">Unique & professional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <Search className="mx-auto mb-4 text-[#68d391]" size={40} />
              <h3 className="font-semibold mb-2">Digital Marketing</h3>
              <p className="text-sm text-[#bee3f8]">Complete online presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;