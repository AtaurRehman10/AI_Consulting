import React, { useState } from "react";
import {
  Target,
  Users,
  Award,
  Shield,
  Lightbulb,
  Heart,
  LinkedinIcon,
} from "lucide-react";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Action from "../component/Action";

// About Us Page Component
const AboutPage = () => {
  return (
    <div className="pt-16">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-[92vh] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-50 flex items-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-blue-200 mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-800">
              Empowering Small Businesses
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
            Why Core Implementations{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Exists
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal mb-8">
            Bridging the gap between enterprise AI capabilities and small
            business accessibility
          </p>

          {/* Optional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Learn More
            </button>
            <button className="px-8 py-3 bg-white/90 backdrop-blur-sm text-gray-800 rounded-lg font-semibold hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Core Implementations was founded on a simple observation: while
              Fortune 500 companies were rapidly adopting AI to transform their
              operations, small and medium businesses were being left behind.
              The tools existed, the technology was proven, but the
              implementation complexity and costs made AI feel out of reach for
              most SMBs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our founder, having witnessed firsthand how AI transformed
              operations at enterprise level, saw an opportunity to democratize
              these powerful tools. The vision was clear: make enterprise-grade
              AI accessible, affordable, and practical for the businesses that
              form the backbone of Texas's economy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to be Texas's leading AI implementation partner
              for SMBs, helping local businesses compete on a global scale while
              maintaining their unique character and values. Every project we
              take on reinforces our belief that the future of business belongs
              to those who embrace intelligent automation—regardless of their
              size.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize AI for small and medium businesses across Texas,
                providing enterprise-level automation and intelligence tools
                that are accessible, affordable, and immediately practical. We
                believe every business deserves the competitive advantage that
                AI provides.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A future where Texas SMBs lead their industries through
                intelligent automation, where local businesses compete globally
                while staying true to their roots, and where AI amplifies human
                creativity rather than replacing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                Clear communication about costs, timelines, and realistic
                outcomes. No technical jargon, no overselling.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Partnership
              </h3>
              <p className="text-gray-600">
                We're not just vendors—we're Texas neighbors invested in the
                success of local businesses and communities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Delivering solutions that exceed expectations while maintaining
                the highest standards of quality and reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Human-Centered
              </h3>
              <p className="text-gray-600">
                AI should enhance human capabilities, not replace them. We
                design solutions that empower your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts dedicated to your AI transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                John Smith
              </h3>
              <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Former enterprise AI consultant with 10+ years experience
                implementing AI solutions for Fortune 500 companies. MBA from UT
                Austin, passionate about bringing enterprise-level AI to Texas
                SMBs.
              </p>
              <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer mx-auto" />
            </div>

            {/* Technical Lead */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AR</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ana Rodriguez
              </h3>
              <p className="text-green-600 font-medium mb-4">Technical Lead</p>
              <p className="text-gray-600 mb-4">
                Full-stack developer and AI specialist with expertise in machine
                learning, automation, and system integration. Computer Science
                degree from Rice University.
              </p>
              <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer mx-auto" />
            </div>

            {/* Strategy Director */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MT</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Michael Thompson
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                Strategy Director
              </p>
              <p className="text-gray-600 mb-4">
                Business strategist specializing in digital transformation for
                SMBs. 8 years experience helping Texas businesses optimize
                operations and adopt new technologies.
              </p>
              <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <Action />
      <Footer />
    </div>
  );
};

export default AboutPage;
