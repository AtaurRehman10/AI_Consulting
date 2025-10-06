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
import Navigation from "../component/Navigation";
import Action from "../component/Action";

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
      <section className="relative min-h-[92vh] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-50 py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-amber-200 mb-8">
            <svg
              className="w-4 h-4 text-amber-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span className="text-sm font-medium text-gray-800">
              Knowledge Hub
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
            AI Resources &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal mb-8">
            Expert guidance, tools, and resources to help you succeed with AI
            implementation
          </p>

          {/* Resource Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="group px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                📚 Guides
              </span>
            </div>
            <div className="group px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                🛠️ Tools
              </span>
            </div>
            <div className="group px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
                💡 Best Practices
              </span>
            </div>
            <div className="group px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">
                📊 Case Studies
              </span>
            </div>
          </div>
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

      <Action />
      <Footer />
    </div>
  );
};

export default ResourcesPage;
