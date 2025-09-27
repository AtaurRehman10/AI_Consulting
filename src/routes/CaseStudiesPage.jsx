import React, { useState } from "react";
import {
  Cog,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Footer from "../component/Footer";
import  Navigation  from "../component/Navigation";

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
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how Texas SMBs have transformed their operations with our AI
            solutions
          </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join these successful Texas businesses and transform your operations
            with AI. Let's discuss what's possible for your company.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Start Your Transformation
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage