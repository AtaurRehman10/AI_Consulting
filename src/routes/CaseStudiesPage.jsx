import React, { useState } from "react";
import { Cog, BarChart3, Users, TrendingUp, CheckCircle } from "lucide-react";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Action from "../component/Action";

// Case Studies Page Component
const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Invoice Processing Automation",
      client: "Local Manufacturing Company",
      challenge:
        "Manual invoice processing taking 3 days, high error rates, and frustrated accounting team spending 20+ hours weekly on data entry.",
      solution:
        "Implemented OCR technology with intelligent data extraction, automated approval workflows, and integration with existing ERP system.",
      results: [
        "70% reduction in processing time (3 days to 8 hours)",
        "95% accuracy improvement in data extraction",
        "20 hours weekly time savings for accounting team",
        "ROI achieved within 6 weeks",
      ],
      industry: "Manufacturing",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Customer Data Integration",
      client: "Multi-Location Retail Business",
      challenge:
        "Customer data scattered across 5 different systems, no unified view of customer journey, missed sales opportunities.",
      solution:
        "Built centralized customer dashboard with real-time data sync, predictive analytics for customer behavior, and automated marketing triggers.",
      results: [
        "Single unified customer view across all locations",
        "25% increase in customer retention",
        "40% improvement in personalized marketing effectiveness",
        "15% boost in average order value",
      ],
      industry: "Retail",
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Predictive Maintenance System",
      client: "Regional Manufacturing Facility",
      challenge:
        "Unexpected equipment failures causing costly downtime, reactive maintenance approach, difficulty planning maintenance schedules.",
      solution:
        "IoT sensors integrated with machine learning models to predict equipment failures, automated maintenance scheduling, and real-time monitoring dashboard.",
      results: [
        "60% reduction in unplanned downtime",
        "30% decrease in maintenance costs",
        "Predictive accuracy of 85% for equipment failures",
        "Improved production planning and scheduling",
      ],
      industry: "Manufacturing",
      icon: <Cog className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Sales Process Optimization",
      client: "Professional Services Firm",
      challenge:
        "Inconsistent lead follow-up, manual proposal generation taking days, lost opportunities due to slow response times.",
      solution:
        "Automated lead scoring and routing, AI-powered proposal generation, and CRM integration with intelligent follow-up sequences.",
      results: [
        "45% increase in lead conversion rates",
        "80% faster proposal generation",
        "35% improvement in sales team productivity",
        "25% growth in monthly recurring revenue",
      ],
      industry: "Professional Services",
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
    },
  ];

  return (
    <div className="pt-16">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-[92vh] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-50 py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-green-200 mb-8">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800">
                Proven Success Stories
              </span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Real Results
            </span>{" "}
            for Real Businesses
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal mb-8">
            See how Texas SMBs have transformed their operations with our AI
            solutions
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Texas SMBs
              </div>
            </div>
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                85%
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Efficiency Gain
              </div>
            </div>
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                $2M+
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Cost Savings
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {study.icon}
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">{study.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Challenge
                      </h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Solution
                      </h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Results Achieved
                    </h3>
                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-sm text-gray-500 mb-1">
                        Project Timeline
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        Implemented in 8-12 weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Action />
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
