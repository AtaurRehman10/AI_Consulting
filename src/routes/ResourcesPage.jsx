import React, { useState } from "react";
import {
  ChevronRight,
  Target,
  Cog,
  BarChart3,
  CheckCircle,
  Download,
  Calendar,
  Lightbulb,
} from "lucide-react";
import Footer from "../component/Footer";
import  Navigation  from "../component/Navigation";

// Resources Page Component
const ResourcesPage = () => {
  const blogPosts = [
    {
      title: "5 Ways AI Saves Time in Your Business",
      excerpt:
        "Discover the most impactful automation opportunities that can immediately reduce manual work and boost productivity.",
      category: "Getting Started",
      readTime: "5 min read",
      date: "March 15, 2024",
    },
    {
      title: "How SMBs Can Compete with Enterprise AI",
      excerpt:
        "Learn how small businesses can leverage enterprise-grade AI tools without the enterprise budget or complexity.",
      category: "Strategy",
      readTime: "8 min read",
      date: "March 10, 2024",
    },
    {
      title: "Getting Started: Your First AI Implementation",
      excerpt:
        "A step-by-step guide to planning and executing your first AI project with maximum impact and minimal risk.",
      category: "Implementation",
      readTime: "12 min read",
      date: "March 5, 2024",
    },
    {
      title: "ROI Calculator: Measuring AI Success",
      excerpt:
        "Framework for calculating and tracking the return on investment from your AI initiatives with real examples.",
      category: "Strategy",
      readTime: "10 min read",
      date: "February 28, 2024",
    },
  ];

  const leadMagnets = [
    {
      title: "SMB AI Readiness Checklist",
      description:
        "Comprehensive checklist to assess your business's readiness for AI implementation and identify priority areas.",
      type: "PDF Guide",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "AI Implementation Timeline Template",
      description:
        "Step-by-step timeline template for planning and managing your AI project from concept to deployment.",
      type: "Excel Template",
      icon: <Calendar className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Cost-Benefit Analysis Worksheet",
      description:
        "Financial planning worksheet to calculate ROI, costs, and benefits for your AI initiatives.",
      type: "Spreadsheet",
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <div className="pt-16">
            <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert guidance, tools, and resources to help you succeed with AI
            implementation
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started
              </h3>
              <p className="text-gray-600">
                Beginner-friendly content to help you understand AI
                opportunities for your business
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementation
              </h3>
              <p className="text-gray-600">
                Technical guides and best practices for successful AI project
                execution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Strategy
              </h3>
              <p className="text-gray-600">
                Business planning resources and strategic frameworks for AI
                adoption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Tools & Templates
            </h2>
            <p className="text-xl text-gray-600">
              Download our expert-crafted resources to accelerate your AI
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {leadMagnets.map((resource, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {resource.icon}
                </div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {resource.type}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Expert articles on AI implementation for small and medium
              businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a
                    href="#"
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on AI Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly insights on AI implementation, case studies, and industry
            trends delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm opacity-75">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResourcesPage