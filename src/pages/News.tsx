import React from 'react';
import { Calendar, Clock, User, Tag, TrendingUp, FileText, AlertCircle, ExternalLink } from 'lucide-react';
import CTAButton from '../components/UI/CTAButton';

const News: React.FC = () => {
  const featuredNews = {
    title: "Union Budget 2024-25: Major Tax Reforms and Business Impact",
    excerpt: "Comprehensive analysis of the latest budget proposals including changes to income tax slabs, corporate tax rates, and new compliance requirements for businesses.",
    date: "March 15, 2024",
    category: "Tax Policy",
    author: "CA Rajesh Kumar",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    readTime: "8 min read"
  };

  const newsCategories = [
    { name: "All News", count: 45, active: true },
    { name: "Tax Updates", count: 18, active: false },
    { name: "Corporate Law", count: 12, active: false },
    { name: "GST News", count: 8, active: false },
    { name: "Regulatory Changes", count: 7, active: false }
  ];

  const latestNews = [
    {
      title: "GST Council Meeting: New Rate Structure for E-commerce Transactions",
      excerpt: "Latest decisions from the GST Council meeting affecting e-commerce platforms and digital service providers.",
      date: "March 12, 2024",
      category: "GST Update",
      author: "CA Amit Gupta",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Companies Act Amendment: New Compliance Requirements for Startups",
      excerpt: "Recent amendments to the Companies Act introducing simplified compliance procedures for startup companies.",
      date: "March 10, 2024",
      category: "Corporate Law",
      author: "CS Priya Sharma",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "RBI Guidelines: Updated FEMA Compliance for Foreign Investments",
      excerpt: "New Reserve Bank guidelines for foreign exchange compliance and reporting requirements for businesses.",
      date: "March 8, 2024",
      category: "FEMA Update",
      author: "CA Neha Agarwal",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Income Tax Department: New E-filing Portal Features and Updates",
      excerpt: "Enhanced features in the income tax e-filing portal improving user experience and compliance efficiency.",
      date: "March 5, 2024",
      category: "Tax Update",
      author: "CA Rajesh Kumar",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "SEBI Regulations: New Listing Requirements for SME Companies",
      excerpt: "Updated SEBI regulations for small and medium enterprises planning to list on stock exchanges.",
      date: "March 3, 2024",
      category: "Securities Law",
      author: "CA Sunita Mehta",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Insolvency Code Updates: Faster Resolution Process for MSMEs",
      excerpt: "Recent amendments to the Insolvency and Bankruptcy Code focusing on quicker resolution for small businesses.",
      date: "March 1, 2024",
      category: "IBC Update",
      author: "Adv. Vikram Singh",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const importantNotices = [
    {
      title: "Extended Due Date for Annual Return Filing",
      description: "MCA extends due date for filing annual returns for FY 2023-24",
      date: "March 14, 2024",
      type: "Notice",
      urgent: true
    },
    {
      title: "GST Return Filing System Maintenance",
      description: "GST portal will be under maintenance on March 20, 2024",
      date: "March 13, 2024",
      type: "System Update",
      urgent: false
    },
    {
      title: "New ITR Forms Released for AY 2024-25",
      description: "Income Tax Department releases updated ITR forms",
      date: "March 11, 2024",
      type: "Form Update",
      urgent: false
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Stay informed with the latest regulatory changes, tax updates, and important 
              business news that affects your compliance and planning decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-white text-primary-600 text-sm font-medium rounded-full">
                    {featuredNews.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredNews.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredNews.readTime}</span>
                  </div>
                </div>
                <CTAButton to="#" variant="primary">
                  Read Full Article
                </CTAButton>
              </div>
              <div className="lg:p-8">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Notices
            </h2>
            <p className="text-xl text-gray-600">
              Critical updates and notices that require immediate attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importantNotices.map((notice, index) => (
              <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 ${
                notice.urgent ? 'border-red-500' : 'border-primary-500'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    notice.urgent 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    {notice.type}
                  </span>
                  {notice.urgent && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {notice.title}
                </h3>
                <p className="text-gray-600 mb-3">{notice.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {notice.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories and Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Categories */}
            <div className="lg:w-1/4">
              <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {newsCategories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        category.active
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-700 hover:bg-primary-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          category.active ? 'text-primary-200' : 'text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center space-x-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Sort by Date</option>
                    <option>Sort by Category</option>
                    <option>Sort by Author</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestNews.map((article, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
                        >
                          Read More
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss Important Updates
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest regulatory changes, 
              tax updates, and business news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Analysis of Recent Changes?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our team provides detailed analysis and guidance on how regulatory changes 
            affect your business. Get personalized advice from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule Consultation
            </CTAButton>
            <CTAButton 
              to="" 
              variant="outline" 
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
            >
              View Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;