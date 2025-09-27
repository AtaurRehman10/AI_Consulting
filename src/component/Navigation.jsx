import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "about", label: "About", to: "/about" },
    { id: "services", label: "Services", to: "/services" },
    { id: "case-studies", label: "Case Studies", to: "/case-studies" },
    { id: "resources", label: "Resources", to: "/resources" },
    { id: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 cursor-pointer"
          >
            <h1 className="text-xl font-bold text-gray-900">
              Core Implementations
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            
            {/* Desktop CTA Button */}
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-colors w-full text-left rounded-md ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 pb-2">
                <Link 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Consultation
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