import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const SEOBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Web Development Trends in South Africa for 2025",
      excerpt: "Discover the latest web development trends shaping the South African digital landscape, from AI integration to mobile-first design.",
      category: "Web Development",
      date: "2025-01-15",
      readTime: "8 min read",
      slug: "web-development-trends-south-africa-2025"
    },
    {
      id: 2,
      title: "Complete Guide to SEO for South African Businesses",
      excerpt: "Master local SEO strategies to dominate Google search results in Cape Town, Johannesburg, Durban, and across South Africa.",
      category: "SEO Marketing",
      date: "2025-01-12",
      readTime: "12 min read",
      slug: "seo-guide-south-african-businesses"
    },
    {
      id: 3,
      title: "E-commerce Success Stories: South African Online Stores That Thrive",
      excerpt: "Learn from successful South African e-commerce businesses and discover strategies to boost your online store's performance.",
      category: "E-commerce",
      date: "2025-01-10",
      readTime: "10 min read",
      slug: "ecommerce-success-stories-south-africa"
    },
    {
      id: 4,
      title: "Social Media Marketing Strategies for South African SMEs",
      excerpt: "Effective social media marketing tactics tailored for small and medium enterprises in the South African market.",
      category: "Social Media",
      date: "2025-01-08",
      readTime: "9 min read",
      slug: "social-media-marketing-south-african-smes"
    },
    {
      id: 5,
      title: "Mobile-First Web Design: Why It Matters in South Africa",
      excerpt: "With high mobile usage rates in SA, learn why mobile-first design is crucial for your website's success.",
      category: "Web Design",
      date: "2025-01-05",
      readTime: "7 min read",
      slug: "mobile-first-web-design-south-africa"
    },
    {
      id: 6,
      title: "Google My Business Optimization for South African Companies",
      excerpt: "Step-by-step guide to optimize your Google My Business listing and improve local search visibility across SA.",
      category: "Local SEO",
      date: "2025-01-03",
      readTime: "11 min read",
      slug: "google-my-business-optimization-south-africa"
    }
  ];

  const categories = ["All", "Web Development", "SEO Marketing", "E-commerce", "Social Media", "Web Design", "Local SEO"];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Digital Marketing Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest web development, SEO, and digital marketing trends in South Africa
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0 
                  ? 'bg-[#4299e1] text-white' 
                  : 'bg-white text-[#1a365d] hover:bg-[#4299e1] hover:text-white border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#4299e1] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-ZA')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:text-[#4299e1] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User size={16} className="mr-1" />
                    WebDevPro Team
                  </div>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <button className="mt-4 flex items-center text-[#4299e1] font-medium hover:text-[#3182ce] transition-colors group">
                  Read More 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-[#1a365d] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Digital Marketing Tips</h3>
          <p className="text-lg mb-6 opacity-90">
            Get weekly insights on web development, SEO, and digital marketing trends in South Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-[#1a365d] focus:outline-none focus:ring-2 focus:ring-[#4299e1]"
            />
            <button className="bg-[#4299e1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3182ce] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOBlog;