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
} from "lucide-react";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Action from "../component/Action";

// Homepage Component
const Homepage = () => {
  return (
    <div className="pt-16">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-[100vh] bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 overflow-hidden py-8">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Streamline <br /> Your Business with{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    AI
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
                  We help Texas SMBs unlock AI automation for efficiency and
                  growth. Transform your operations with intelligent solutions
                  designed for your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center">
                  Book a Free Consultation
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button className="bg-white/90 backdrop-blur-sm border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl text-lg font-bold hover:border-indigo-600 hover:text-indigo-600 hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">
                    Free Consultation
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">
                    No Long-Term Contracts
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">
                    Texas-Based Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Dashboard */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
                style={{ animationDelay: "0.7s" }}
              ></div>

              <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <span className="text-white font-bold text-lg">
                        AI Systems Active
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-sm font-semibold">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Metric Cards */}
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-lg hover:bg-white/25 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-white font-semibold">
                            Process Efficiency
                          </span>
                        </div>
                        <span className="text-green-300 text-xl font-bold">
                          +73%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-400 to-green-300 h-3 rounded-full w-3/4 shadow-lg"></div>
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-lg hover:bg-white/25 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-300 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-white font-semibold">
                            Cost Reduction
                          </span>
                        </div>
                        <span className="text-blue-200 text-xl font-bold">
                          +45%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div className="bg-gradient-to-r from-blue-300 to-blue-200 h-3 rounded-full w-1/2 shadow-lg"></div>
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-lg hover:bg-white/25 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-purple-300 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                          </div>
                          <span className="text-white font-semibold">
                            Time Saved
                          </span>
                        </div>
                        <span className="text-purple-200 text-xl font-bold">
                          +62%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div className="bg-gradient-to-r from-purple-300 to-purple-200 h-3 rounded-full w-2/3 shadow-lg"></div>
                      </div>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Core{" "}
              </span>{" "}
              Services
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
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-blue-100 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-700">
                Proven Track Record
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl text-center mx-auto">
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
              <div className="text-gray-600">Complete Projects</div>
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
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-blue-100 text-6xl font-serif opacity-50">
                "
              </div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                  "Core Implementations transformed our invoice processing from
                  a 3-day manual nightmare to a 2-hour automated process. The
                  ROI was clear within the first month."
                </blockquote>
                <div className="flex items-center">
                  <div className="relative">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-bold text-xl">MJ</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      Maria Johnson
                    </div>
                    <div className="text-gray-600 font-medium">
                      Operations Manager
                    </div>
                    <div className="text-gray-500 text-sm">
                      Austin Manufacturing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-green-100 text-6xl font-serif opacity-50">
                "
              </div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                  "Finally, a tech company that speaks our language. They
                  understood our business needs and delivered exactly what we
                  needed—no overselling, just results."
                </blockquote>
                <div className="flex items-center">
                  <div className="relative">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg ">
                      <span className="text-white font-bold text-xl">RC</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      Robert Chen
                    </div>
                    <div className="text-gray-600 font-medium">CEO</div>
                    <div className="text-gray-500 text-sm">
                      Dallas Professional Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Action />
      <Footer />
    </div>
  );
};

export default Homepage;
