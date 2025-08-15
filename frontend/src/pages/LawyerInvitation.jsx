import React, { useState, useEffect } from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const LawyerInvitation = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    barRegistration: "",
    experience: "",
    specialization: "",
    city: "",
    courtPractice: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Lawyer invitation form submitted:", formData);
    // You can add API call here
  };

  const specializations = [
    "Criminal Law",
    "Civil Law",
    "Corporate Law",
    "Family Law",
    "Property Law",
    "Labour Law",
    "Tax Law",
    "Constitutional Law",
    "Consumer Law",
    "Banking Law",
    "Insurance Law",
    "Intellectual Property",
  ];

  const courts = [
    "Supreme Court of India",
    "High Court",
    "District Court",
    "Sessions Court",
    "Magistrate Court",
    "Tribunal",
    "Consumer Court",
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative navbar-spacing-simple pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 rounded-full px-4 py-2 border border-yellow-500/30">
                <div className="flex items-center justify-center w-5 h-5 bg-yellow-500 rounded-full">
                  <i className="fas fa-check text-gray-900 text-xs"></i>
                </div>
                <span className="text-sm font-semibold text-yellow-400">
                  🇮🇳 Join India's Legal Network
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Expand Your
                  <span className="text-yellow-400"> Legal Practice</span>
                  <br />
                  <span className="text-orange-400">Connect with Clients</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Join India's most trusted legal platform. Connect with clients
                  seeking expert legal representation across constitutional,
                  civil, criminal, and corporate matters nationwide.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    5,000+
                  </div>
                  <div className="text-sm text-gray-300">Active Advocates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    25,000+
                  </div>
                  <div className="text-sm text-gray-300">Cases Handled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-gray-300">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    4.8/5
                  </div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Lawyers Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96 border border-yellow-500/30">
                <img
                  src="/lawyer-invitation.jpg"
                  alt="Professional Advocates in Indian Courtroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">
                    Join India's Premier Legal Network
                  </p>
                  <p className="text-sm opacity-90">
                    Connect with clients nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Leading Advocates Choose KanoonWise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Premium Client Base
              </h3>
              <p className="text-gray-600">
                Connect with verified clients seeking quality legal
                representation across India.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Grow Your Practice
              </h3>
              <p className="text-gray-600">
                Expand your reach beyond local boundaries and build a nationwide
                clientele.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trusted Platform
              </h3>
              <p className="text-gray-600">
                Join a platform trusted by legal professionals and backed by
                secure technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Register Your Practice Today
            </h2>
            <p className="text-gray-300">
              Fill out the form below and our team will review your application
              within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Adv. Your Full Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bar Registration Number *
                </label>
                <input
                  type="text"
                  name="barRegistration"
                  value={formData.barRegistration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., MH/1234/2020"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="16-20">16-20 years</option>
                  <option value="20+">20+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Specialization *
                </label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select Specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City of Practice *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Court Practice *
                </label>
                <select
                  name="courtPractice"
                  value={formData.courtPractice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select Primary Court</option>
                  {courts.map((court) => (
                    <option key={court} value={court}>
                      {court}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tell us about your practice, notable cases, or any additional information..."
              ></textarea>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Submit Application
              </button>
              <p className="text-sm text-gray-500 mt-4">
                By submitting, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LawyerInvitation;
