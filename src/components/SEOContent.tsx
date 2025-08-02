import React from 'react';
import { Search, TrendingUp, MapPin, Users, Award, Clock } from 'lucide-react';

const SEOContent = () => {
  const seoServices = [
    {
      icon: Search,
      title: "Local SEO South Africa",
      description: "Dominate local search results in Cape Town, Johannesburg, Durban, Pretoria, and all major SA cities",
      features: ["Google My Business optimization", "Local directory listings", "Location-based keywords", "Review management"]
    },
    {
      icon: TrendingUp,
      title: "Technical SEO Audit",
      description: "Comprehensive website analysis and optimization for better search engine crawling and indexing",
      features: ["Site speed optimization", "Mobile responsiveness", "Schema markup", "XML sitemaps"]
    },
    {
      icon: MapPin,
      title: "Multi-Location SEO",
      description: "Target multiple South African cities and regions with location-specific SEO strategies",
      features: ["City-specific landing pages", "Regional keyword targeting", "Local link building", "Geographic optimization"]
    },
    {
      icon: Users,
      title: "Content Marketing",
      description: "SEO-optimized content creation targeting South African audiences and search behavior",
      features: ["Blog post creation", "Keyword research", "Content optimization", "Local content strategy"]
    }
  ];

  const locations = [
    "Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth",
    "Bloemfontein", "East London", "Pietermaritzburg", "Polokwane", "Kimberley",
    "Nelspruit", "George", "Rustenburg", "Potchefstroom", "Witbank"
  ];

  const keywordTargets = [
    { keyword: "web development South Africa", volume: "2,400/month", difficulty: "Medium" },
    { keyword: "website design Cape Town", volume: "1,900/month", difficulty: "Medium" },
    { keyword: "SEO services Johannesburg", volume: "1,600/month", difficulty: "High" },
    { keyword: "digital marketing Durban", volume: "1,200/month", difficulty: "Medium" },
    { keyword: "e-commerce development SA", volume: "800/month", difficulty: "Low" },
    { keyword: "WordPress developer South Africa", volume: "1,100/month", difficulty: "Medium" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* SEO Services Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            SEO Services Across South Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Dominate Google search results with our comprehensive SEO strategies tailored for the South African market. 
            We help businesses rank #1 for competitive keywords across all major SA cities.
          </p>
        </div>

        {/* SEO Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {seoServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[#4299e1] p-3 rounded-lg mr-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a365d]">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#68d391] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Target Locations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a365d] mb-4">
              We Serve All Major South African Cities
            </h3>
            <p className="text-lg text-gray-600">
              Local SEO expertise across South Africa's major metropolitan areas and cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-white border-2 border-[#4299e1] rounded-lg p-4 text-center hover:bg-[#4299e1] hover:text-white transition-colors group">
                <MapPin className="mx-auto mb-2 group-hover:text-white text-[#4299e1]" size={24} />
                <span className="font-medium">{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Research Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a365d] mb-4">
              Target Keywords & Search Volume
            </h3>
            <p className="text-lg text-gray-600">
              High-value keywords we target for maximum search visibility in South Africa
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a365d] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Target Keyword</th>
                    <th className="px-6 py-4 text-left font-semibold">Search Volume</th>
                    <th className="px-6 py-4 text-left font-semibold">Difficulty</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {keywordTargets.map((keyword, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-[#1a365d]">{keyword.keyword}</td>
                      <td className="px-6 py-4 text-gray-600">{keyword.volume}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          keyword.difficulty === 'Low' ? 'bg-green-100 text-green-800' :
                          keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {keyword.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#4299e1] text-white rounded-full text-sm font-medium">
                          Targeting
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SEO Stats */}
        <div className="bg-gradient-to-r from-[#1a365d] to-[#4299e1] rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our SEO Results Speak for Themselves</h3>
            <p className="text-xl opacity-90">Proven track record of improving search rankings for South African businesses</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-[#68d391]" size={48} />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">First Page Rankings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-[#68d391]" size={48} />
              </div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="opacity-90">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-[#68d391]" size={48} />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Businesses Helped</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-[#68d391]" size={48} />
              </div>
              <div className="text-4xl font-bold mb-2">90 Days</div>
              <div className="opacity-90">Average Ranking Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;