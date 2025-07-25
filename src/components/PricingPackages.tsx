import React from 'react';
import { CheckCircle, Star, Crown, Award } from 'lucide-react';

const PricingPackages = () => {
  const packages = [
    {
      name: 'Silver Package',
      price: 'R1200',
      icon: Award,
      color: 'from-gray-400 to-gray-600',
      features: [
        'Free 12 months domain hosting & registration',
        'Hosting renewal after 12 months: R350',
        '10 business emails',
        'Free Logo & Poster design',
        'Google business listing',
        'Online Store/e-commerce (30 products)',
        'Professional Facebook creation and setup'
      ]
    },
    {
      name: 'Gold Package',
      price: 'R2000',
      icon: Star,
      color: 'from-yellow-400 to-yellow-600',
      features: [
        'Free 12 months domain hosting & registration',
        'Hosting renewal after 12 months: R350',
        '30 business emails',
        'Free Logo & Poster design',
        'Google business listing',
        'Professional Facebook creation and setup'
      ]
    },
    {
      name: 'Premium Package',
      price: 'R3000',
      icon: Crown,
      color: 'from-purple-400 to-purple-600',
      popular: true,
      features: [
        'Free 12 months domain hosting & registration',
        'Hosting renewal after 12 months: R450',
        '60 business emails',
        'Free 3D Logo & Poster design',
        'Animated video advert',
        'Google business listing',
        'Professional Facebook creation and 30 days free advertising campaign',
        'Full E-commerce suite: Product management, checkout process, shopping cart',
        'SEO Marketing',
        'Payment Integration',
        'Inventory management',
        'Analytics & Reporting',
        'Graphic designing',
        'Social media marketing integration',
        'Audience engagement',
        'Rank #1 on Google search',
        'WhatsApp & Facebook integration'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional web development packages designed to grow your business online. 
            All packages include premium features and ongoing support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${pkg.popular ? 'border-[#4299e1] scale-105' : 'border-gray-200'} overflow-hidden hover:shadow-2xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#4299e1] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${pkg.color} p-8 text-white text-center`}>
                  <IconComponent size={48} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold">{pkg.price}</div>
                  <p className="text-sm opacity-90 mt-2">One-time payment</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-[#68d391] mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full mt-8 px-6 py-4 rounded-lg font-semibold text-lg transition-colors ${
                    pkg.popular 
                      ? 'bg-[#4299e1] text-white hover:bg-[#3182ce]' 
                      : 'bg-[#1a365d] text-white hover:bg-[#2c5282]'
                  }`}
                  onClick={() => {
                    const message = `Hi! I'm interested in the ${pkg.name} (${pkg.price}). Can you provide more details and help me get started?`;
                    window.open(`https://wa.me/27812159792?text=${encodeURIComponent(message)}`, '_blank');
                  }}>
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which package is right for you? We're here to help!
          </p>
          <a 
            href={`https://wa.me/27812159792?text=${encodeURIComponent('Hi! I need help choosing the right package for my business. Can you provide a custom quote and consultation?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#68d391] text-[#1a365d] px-8 py-3 rounded-lg font-semibold hover:bg-[#48bb78] transition-colors"
          >
            Contact Us for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;