import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Car, 
  Building, 
  Heart, 
  Gamepad2, 
  GraduationCap, 
  Shield, 
  Hammer, 
  Sparkles,
  TrendingUp,
  Search,
  BarChart3,
  Palette,
  Eye,
  Layout,
  Share2,
  Users,
  Calendar,
  Target
} from 'lucide-react';

const Services = () => {
  const webDesignFeatures = [
    'Layout & Navigation',
    'Typography & Color Scheme',
    'Responsive Design',
    'UX/UI Optimization',
    'Graphics & Images',
    'Website Redesign'
  ];

  const websiteTypes = [
    { name: 'E-commerce/Online Store', icon: ShoppingCart, description: 'Complete online shopping solutions' },
    { name: 'Taxi Booking', icon: Car, description: 'Ride-hailing and booking platforms' },
    { name: 'Hotel Booking', icon: Building, description: 'Hospitality and reservation systems' },
    { name: 'Hospital/NGO-charity', icon: Heart, description: 'Healthcare and charity websites' },
    { name: 'Online betting/Movie streaming', icon: Gamepad2, description: 'Entertainment platforms' },
    { name: 'Online School tutorial', icon: GraduationCap, description: 'Educational platforms' },
    { name: 'Government', icon: Shield, description: 'Official government portals' },
    { name: 'Construction services', icon: Hammer, description: 'Construction company websites' },
    { name: 'Beauty salon', icon: Sparkles, description: 'Beauty and wellness services' },
    { name: 'Charity Organizations', icon: Heart, description: 'Non-profit and charity sites' },
    { name: 'International money transfer', icon: TrendingUp, description: 'Financial service platforms' },
    { name: 'Online daily news', icon: Globe, description: 'News and media websites' },
    { name: 'Legal Services', icon: Shield, description: 'Law firm and legal websites' }
  ];

  const seoServices = [
    { name: 'Rank #1 on Google', icon: TrendingUp },
    { name: 'Keywords Report', icon: Search },
    { name: 'On-Page SEO', icon: Layout },
    { name: 'Off-Page SEO', icon: Globe },
    { name: 'Technical SEO', icon: BarChart3 },
    { name: 'Content Marketing', icon: Eye },
    { name: 'Analytics & Marketing', icon: BarChart3 }
  ];

  const graphicServices = [
    { name: '3D Logo Designs', icon: Palette },
    { name: 'Branding', icon: Target },
    { name: 'Color Theory', icon: Eye },
    { name: 'Print Design', icon: Layout },
    { name: 'Visual Hierarchy', icon: BarChart3 },
    { name: 'Layout & Composition', icon: Layout }
  ];

  const socialMediaServices = [
    { name: 'Social Media Advertising', icon: Target },
    { name: 'Social Listening', icon: Users },
    { name: 'Content Creation', icon: Palette },
    { name: 'Platform Selection', icon: Share2 },
    { name: 'Content Scheduling', icon: Calendar },
    { name: 'Community Building', icon: Users },
    { name: 'Influencer Marketing', icon: TrendingUp },
    { name: 'Audience Engagement', icon: Heart },
    { name: 'Campaigns', icon: Target },
    { name: 'Analytics & Reporting', icon: BarChart3 }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Web Design Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
              Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web design that converts visitors into customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDesignFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  const message = `Hi! I'm interested in your ${feature} services. Can you provide more information and pricing?`;
                  window.open(`https://wa.me/27812159792?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                <Globe className="text-[#4299e1] mb-4" size={32} />
                <h3 className="text-lg font-semibold text-[#1a365d] mb-2">{feature}</h3>
                <p className="text-gray-600">Professional implementation for optimal user experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Website Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
              Specialized Website Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom solutions for every industry and business type
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {websiteTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#4299e1] hover:shadow-lg transition-all group cursor-pointer"
                  onClick={() => {
                    const message = `Hi! I'm interested in developing a ${type.name} website. Can you provide more information and pricing?`;
                    window.open(`https://wa.me/27812159792?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <IconComponent className="text-[#4299e1] mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-lg font-semibold text-[#1a365d] mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEO Marketing */}
        <div className="mb-20 bg-gradient-to-br from-[#1a365d] to-[#4299e1] rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              SEO Marketing
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Dominate search results and drive organic traffic to your website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                  onClick={() => {
                    const message = `Hi! I'm interested in your ${service.name} service. Can you provide more information and pricing?`;
                    window.open(`https://wa.me/27812159792?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <IconComponent className="text-[#68d391] mb-4" size={32} />
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Graphic Design */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
              Graphic Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual identity that makes your brand unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#fed7d7] to-[#feb2b2] p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    const message = `Hi! I'm interested in your ${service.name} services. Can you provide more information and pricing?`;
                    window.open(`https://wa.me/27812159792?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <IconComponent className="text-[#e53e3e] mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-[#1a365d] mb-2">{service.name}</h3>
                  <p className="text-gray-600">Professional design that represents your brand</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="bg-gradient-to-br from-[#68d391] to-[#48bb78] rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Social Media Marketing
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Build your community and engage with customers across all platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {socialMediaServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                  onClick={() => {
                    const message = `Hi! I'm interested in your ${service.name} service. Can you provide more information and pricing?`;
                    window.open(`https://wa.me/27812159792?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <IconComponent className="text-white mb-4" size={32} />
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;