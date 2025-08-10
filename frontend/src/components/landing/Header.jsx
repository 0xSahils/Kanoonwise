import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleDropdownClick = (item) => {
    // Navigate to specific service/lawyer category pages
    const path = `/${item.name.toLowerCase().replace(/\s+/g, "-")}`;
    navigate(path);
  };

  const navItems = [
    {
      name: "Find Lawyers",
      icon: "fas fa-search",
      dropdown: [
        { name: "Criminal Lawyers", icon: "fas fa-gavel" },
        { name: "Family Lawyers", icon: "fas fa-home" },
        { name: "Corporate Lawyers", icon: "fas fa-building" },
        { name: "Property Lawyers", icon: "fas fa-key" },
      ],
    },
    {
      name: "Legal Services",
      icon: "fas fa-briefcase",
      dropdown: [
        { name: "Company Registration", icon: "fas fa-certificate" },
        { name: "Legal Documentation", icon: "fas fa-file-contract" },
        { name: "Trademark Registration", icon: "fas fa-trademark" },
        { name: "GST Services", icon: "fas fa-calculator" },
      ],
    },
    {
      name: "Resources",
      icon: "fas fa-book",
      dropdown: [
        { name: "Legal Articles", icon: "fas fa-newspaper" },
        { name: "Legal Calculators", icon: "fas fa-calculator" },
        { name: "Document Templates", icon: "fas fa-file-alt" },
        { name: "Legal FAQs", icon: "fas fa-question-circle" },
      ],
    },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Kanoonwise Logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
              <span className="text-2xl font-bold text-gray-900">
                Kanoonwise
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() =>
                    handleNavigation(
                      `/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform duration-200"></i>
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <button
                        key={dropIndex}
                        onClick={() => handleDropdownClick(dropdownItem)}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 w-full text-left"
                      >
                        <i
                          className={`${dropdownItem.icon} text-primary-500 w-4`}
                        ></i>
                        <span>{dropdownItem.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => handleNavigation("/about")}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation("/login")}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Login
            </button>
            <button
              onClick={() => handleNavigation("/login")}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div
                className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4 bg-white rounded-lg shadow-lg mt-2 border border-gray-100">
            {navItems.map((item, index) => (
              <div key={index} className="px-4">
                <div className="flex items-center space-x-2 text-gray-700 font-medium py-2">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
                <div className="ml-6 space-y-2">
                  {item.dropdown.map((dropdownItem, dropIndex) => (
                    <button
                      key={dropIndex}
                      onClick={() => handleDropdownClick(dropdownItem)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 py-1 transition-colors duration-200 w-full text-left"
                    >
                      <i className={`${dropdownItem.icon} text-xs`}></i>
                      <span className="text-sm">{dropdownItem.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="px-4 pt-4 border-t border-gray-100">
              <div className="space-y-3">
                <button
                  onClick={() => handleNavigation("/about")}
                  className="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                >
                  Contact
                </button>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="w-full btn-primary"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
