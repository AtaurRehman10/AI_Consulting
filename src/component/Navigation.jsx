import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BrainCircuit, Menu, X } from "lucide-react";
import { getCompanyProfile } from "../service/companyProfileService";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [companyName, setCompanyName] = useState("Core Implementations");

  // Load company name from Firebase
  useEffect(() => {
    const loadCompanyName = async () => {
      try {
        const profileData = await getCompanyProfile();
        if (profileData?.companyName) {
          setCompanyName(profileData.companyName);
        }
      } catch (error) {
        console.error("Error loading company name:", error);
      }
    };
    loadCompanyName();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "about", label: "About", to: "/about" },
    { id: "services", label: "Services", to: "/services" },
    { id: "case-studies", label: "Case Studies", to: "/case-studies" },
    { id: "resources", label: "Resources", to: "/resources" },
    { id: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 cursor-pointer flex items-center gap-3 group"
          >
            <div className="relative">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-2 transform group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit
                  className="w-8 h-8 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {companyName}
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                AI Solutions for SMBs
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-blue-50 rounded-lg"></span>
                      )}
                      <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Link
              to="/contact"
              className="ml-4 relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </span>
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-semibold transition-all duration-200 w-full text-left rounded-xl ${
                      isActive
                        ? "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4 rounded-xl text-center font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Consultation
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
