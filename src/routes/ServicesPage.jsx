import React, { useState } from "react";
import {
  Target,
  Cog,
  BarChart3,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Footer from "../component/Footer";
import  Navigation  from "../component/Navigation";
import Action from "../component/Action";


// Services Page Component
const ServicesPage = () => {
  return (
    <div className="pt-16">
            <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-[92vh] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-50 py-24 overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
  </div>
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none"></div>
  
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Badge */}
    <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-indigo-200 mb-8">
      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
      <span className="text-sm font-medium text-gray-800">Tailored for SMBs</span>
    </div>
    
    {/* Main Heading */}
    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
      Comprehensive{' '}
      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        AI Solutions
      </span>{' '}
      for SMBs
    </h1>
    
    {/* Subheading */}
    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal mb-8">
      From strategy to implementation, we provide end-to-end AI services
      designed specifically for growing businesses
    </p>
    
    {/* Feature Pills */}
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <span className="px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 shadow-md border border-gray-200">
        Strategy
      </span>
      <span className="px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 shadow-md border border-gray-200">
        Implementation
      </span>
      <span className="px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 shadow-md border border-gray-200">
        Support
      </span>
    </div>
  </div>
</section>

      {/* AI Strategy & Roadmaps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI Strategy & Roadmaps
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The Problem
                  </h3>
                  <p className="text-gray-600">
                    Many SMBs don't know where to start with AI. The technology
                    landscape is complex, and it's unclear which solutions will
                    provide real value for your specific business needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Solution
                  </h3>
                  <p className="text-gray-600">
                    We provide comprehensive discovery sessions and adoption
                    planning tailored to your business. Our structured approach
                    identifies high-impact opportunities and creates a clear
                    implementation roadmap.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What You Get
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Detailed strategy document with prioritized AI
                      opportunities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Implementation timeline with clear milestones
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ROI projections and budget planning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Technology recommendations and vendor evaluation
                    </li>
                  </ul>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Strategy Session
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Phase 1: Discovery
                  </h4>
                  <p className="text-sm text-gray-600">
                    Business process analysis and opportunity identification
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Phase 2: Strategy
                  </h4>
                  <p className="text-sm text-gray-600">
                    AI roadmap development and ROI modeling
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Phase 3: Planning
                  </h4>
                  <p className="text-sm text-gray-600">
                    Implementation timeline and resource allocation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Automation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Manual Process
                    </span>
                    <span className="text-xs text-red-600">8 hours</span>
                  </div>
                  <div className="w-full bg-red-100 rounded-full h-2 mt-2">
                    <div className="bg-red-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Automated Process
                    </span>
                    <span className="text-xs text-green-600">30 minutes</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Process Automation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The Problem
                  </h3>
                  <p className="text-gray-600">
                    Manual processes waste time and create errors. Your team
                    spends hours on repetitive tasks that could be automated,
                    reducing productivity and increasing frustration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Solution
                  </h3>
                  <p className="text-gray-600">
                    RPA, workflow optimization, and ERP enhancements that
                    eliminate manual work. We integrate seamlessly with your
                    existing systems to create smooth, automated processes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What You Get
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Automated workflows that save 60-80% of processing time
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Integrated systems that eliminate data silos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Comprehensive training for your team
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Ongoing support and optimization
                    </li>
                  </ul>
                </div>
              </div>
              <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Automate Your Processes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Data & Insights
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The Problem
                  </h3>
                  <p className="text-gray-600">
                    Business data is scattered and hard to interpret. Important
                    insights are buried in spreadsheets, making it difficult to
                    make informed decisions quickly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Solution
                  </h3>
                  <p className="text-gray-600">
                    Custom dashboards, reporting, and predictive models that
                    turn your data into actionable insights. Real-time
                    visibility into your business performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What You Get
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Real-time dashboards accessible from anywhere
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Automated reports delivered to your inbox
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Predictive analytics for better planning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Data integration from multiple sources
                    </li>
                  </ul>
                </div>
              </div>
              <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                See Your Data Clearly
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Business Performance Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Monthly Revenue
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      +23%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Customer Acquisition
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      +15%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Process Efficiency
                    </span>
                    <span className="text-sm font-semibold text-purple-600">
                      +67%
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <span className="text-xs text-gray-500">
                      Next Month Prediction: Revenue +18%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom AI Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Cpu className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Custom Chatbot</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Predictive Models</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Cog className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Workflow Engine</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Smart Recommendations</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom AI Solutions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The Problem
                  </h3>
                  <p className="text-gray-600">
                    Off-the-shelf tools don't fit unique business needs. Your
                    specific processes and requirements need tailored solutions
                    that work exactly the way you do business.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Solution
                  </h3>
                  <p className="text-gray-600">
                    Tailored AI tools for specific use cases. From custom
                    chatbots to predictive systems, we build solutions that fit
                    your business like a glove.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What You Get
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Custom software built for your exact needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      AI models trained on your specific data
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Ongoing support and feature updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Full documentation and training
                    </li>
                  </ul>
                </div>
              </div>
              <button className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Build Custom Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
      <Action />
            <Footer />
    </div>
  );
};

export default ServicesPage