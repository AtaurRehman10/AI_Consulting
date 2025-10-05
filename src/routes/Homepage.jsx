import React, { useState } from "react";
import {
  ChevronRight,
  Target,
  Cog,
  BarChart3,
  Cpu,
  Star,
  Users,
  TrendingUp,
  MapPin,
  BrainCircuit
} from "lucide-react";
import Footer from "../component/Footer";
import  Navigation  from "../component/Navigation";

// Homepage Component
const Homepage = () => {
  
  return (
    <div className="pt-16">
            <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Streamline Your Business with AI
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We help Texas SMBs unlock AI automation for efficiency and
                  growth. Transform your operations with intelligent solutions
                  designed for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                  Book a Free Consultation
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">
                      AI Systems Active
                    </span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">
                        Process Efficiency
                      </span>
                      <span className="text-white text-sm">+73%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">Cost Reduction</span>
                      <span className="text-white text-sm">+45%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-blue-300 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for small and medium
              businesses ready to embrace the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Strategy & Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Discovery sessions and comprehensive roadmapping to identify the
                best AI opportunities for your business. We create actionable
                implementation plans with clear ROI projections.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Cog className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Process Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Workflow optimization and RPA implementation to eliminate manual
                tasks. We integrate with your existing systems to create
                seamless, automated processes.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data & Insights
              </h3>
              <p className="text-gray-600 mb-4">
                Custom dashboards and analytics that turn your data into
                actionable insights. Real-time reporting and predictive models
                to drive smarter decisions.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <Cpu className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Custom AI Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Tailored AI tools built specifically for your unique business
                needs. From chatbots to predictive systems, we create solutions
                that fit perfectly.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Fit Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built for Texas Small & Medium Businesses
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand the unique challenges facing Texas SMBs. Our
                solutions are designed specifically for businesses like
                yours—companies that need enterprise-level AI capabilities
                without the enterprise complexity or cost.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From Houston manufacturing to Dallas professional services,
                we've helped dozens of Texas businesses transform their
                operations with practical, results-driven AI implementations.
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">
                  Proudly serving businesses across Texas
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Perfect For:</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Manufacturing & Distribution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Professional Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Healthcare & Medical</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Construction & Contracting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Retail & E-commerce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See why Texas SMBs choose Core Implementations for their AI
              transformation
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">73%</div>
              <div className="text-gray-600">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "Core Implementations transformed our invoice processing from a
                3-day manual nightmare to a 2-hour automated process. The ROI
                was clear within the first month."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Maria Johnson
                  </div>
                  <div className="text-gray-600">
                    Operations Manager, Austin Manufacturing
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "Finally, a tech company that speaks our language. They
                understood our business needs and delivered exactly what we
                needed—no overselling, just results."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">RC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert Chen</div>
                  <div className="text-gray-600">
                    CEO, Dallas Professional Services
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos Placeholder */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-8">
              Certified Partners & Technologies
            </p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="bg-gray-200 rounded-lg px-6 py-3">
                <span className="text-gray-500 font-medium">Microsoft AI</span>
              </div>
              <div className="bg-gray-200 rounded-lg px-6 py-3">
                <span className="text-gray-500 font-medium">Google Cloud</span>
              </div>
              <div className="bg-gray-200 rounded-lg px-6 py-3">
                <span className="text-gray-500 font-medium">AWS Partner</span>
              </div>
              <div className="bg-gray-200 rounded-lg px-6 py-3">
                <span className="text-gray-500 font-medium">Salesforce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join dozens of Texas SMBs that have already streamlined their
            operations with AI. Book your free consultation today and discover
            what's possible for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Book Free Consultation
            </button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Free 30-minute consultation • No commitment required • Local Texas
            expertise
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage