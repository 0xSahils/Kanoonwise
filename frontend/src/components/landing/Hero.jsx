import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Search handler
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCity) params.append("city", selectedCity);
    if (searchQuery) params.append("specialization", searchQuery);
    navigate(`/search-lawyers?${params.toString()}`);
  };

  // Popular tag handler
  const handleTagClick = (tag) => {
    navigate(`/search-lawyers?specialization=${encodeURIComponent(tag)}`);
  };

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Surat",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
  ];

  const popularSearches = [
    "Criminal Lawyer",
    "Divorce Lawyer",
    "Property Lawyer",
    "Corporate Lawyer",
    "Family Lawyer",
    "Civil Lawyer",
  ];

  const stats = [
    { number: "15,000+", label: "Verified Lawyers" },
    { number: "50,000+", label: "Cases Resolved" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const floatingCards = [
    {
      icon: "fas fa-user-tie",
      title: "Expert Lawyers",
      subtitle: "Available 24/7",
      position: "top-20 left-10",
      delay: "0s",
    },
    {
      icon: "fas fa-shield-check",
      title: "Secure & Confidential",
      subtitle: "100% Privacy",
      position: "top-32 right-16",
      delay: "0.5s",
    },
    {
      icon: "fas fa-clock",
      title: "Quick Response",
      subtitle: "Within 30 mins",
      position: "bottom-32 left-16",
      delay: "1s",
    },
  ];

  return (
    <section className="relative bg-white pt-20 lg:pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2">
              <div className="flex items-center justify-center w-5 h-5 bg-primary-600 rounded-full">
                <i className="fas fa-check text-white text-xs"></i>
              </div>
              <span className="text-sm font-semibold text-primary-700">
                India's Largest Lawyer Search Platform
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Find the Right <span className="text-primary-600">Lawyer</span>
                <br />
                for Your Legal Needs
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Get instant access to verified lawyers, legal services, and
                expert consultation. From company registration to complex
                litigation - we've got you covered.
              </p>
            </div>

            {/* Search Section */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* City Selector */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-map-marker-alt text-primary-500"></i>
                    </div>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select City</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Input */}
                  <div className="relative md:col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-search text-primary-500"></i>
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for lawyers, legal services..."
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full mt-4 btn-primary text-lg py-4 rounded-xl"
                >
                  <i className="fas fa-search mr-2"></i>
                  Find Legal Help
                </button>
              </div>

              {/* Popular Searches */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-gray-600 font-medium">Popular:</span>
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagClick(search)}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 text-sm font-medium"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Lawyer Images */}
          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="relative h-full">
              {/* Main lawyer image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
                    alt="Professional Lawyer"
                    className="w-64 h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-sm"></i>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating lawyer cards */}
              <div className="absolute top-16 left-8 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                    alt="Lawyer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Adv. Priya Sharma
                    </div>
                    <div className="text-gray-600 text-xs">
                      Corporate Law Expert
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-8 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Lawyer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Adv. Suresh Patel
                    </div>
                    <div className="text-gray-600 text-xs">
                      Property Law Specialist
                    </div>
                  </div>
                </div>
              </div>

              {/* Success indicators */}
              <div className="absolute top-32 right-16 bg-green-100 rounded-full p-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
              </div>

              <div className="absolute bottom-32 left-16 bg-blue-100 rounded-full p-3">
                <i className="fas fa-gavel text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
