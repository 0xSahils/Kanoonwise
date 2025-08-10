import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/landing/Header.jsx";
import Footer from "../components/landing/Footer.jsx";

const LawyerSearch = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    city: searchParams.get("city") || "",
    specialization: searchParams.get("specialization") || "",
    experience: searchParams.get("experience") || "",
    sortBy: "rating",
  });
  const [searchInput, setSearchInput] = useState(
    searchParams.get("city") || ""
  );

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters((prev) => ({ ...prev, city: searchInput }));
    }, 500); // 500ms delay

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  useEffect(() => {
    const fetchLawyers = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();

        if (filters.city) params.append("city", filters.city);
        if (filters.specialization)
          params.append("specialization", filters.specialization);
        if (filters.experience)
          params.append("min_experience", filters.experience);

        // Add pagination
        params.append("page", "1");
        params.append("limit", "20");

        const apiUrl = `${
          import.meta.env.VITE_API_URL
        }/public/lawyers/search?${params.toString()}`;

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();

          // Transform backend data to frontend format
          const transformedLawyers = data.lawyers.map((lawyer) => ({
            id: lawyer.id,
            name:
              lawyer.full_name ||
              "Adv. " + (lawyer.User?.email?.split("@")[0] || "Unknown"),
            specialization: lawyer.specialization || [],
            experience: lawyer.years_experience || 0,
            city: lawyer.city || "Not specified",
            rating: parseFloat(lawyer.average_rating) || 0,
            reviews: parseInt(lawyer.review_count) || 0,
            image: `https://images.unsplash.com/photo-${
              Math.random() > 0.5
                ? "1507003211169-0a1dd7228f2d"
                : "1494790108755-2616b612b786"
            }?w=150&h=150&fit=crop&crop=face`,
            languages: lawyer.languages || ["English"],
            courtPractice: lawyer.court_practice || ["District Court"],
            consultationFee: lawyer.fee_structure?.consultation || 2000,
            verified: true,
            description:
              lawyer.bio ||
              `Experienced lawyer with ${
                lawyer.years_experience || 0
              } years of practice.`,
          }));

          // Sort lawyers based on sortBy filter
          if (filters.sortBy === "rating") {
            transformedLawyers.sort((a, b) => b.rating - a.rating);
          } else if (filters.sortBy === "experience") {
            transformedLawyers.sort((a, b) => b.experience - a.experience);
          } else if (filters.sortBy === "fee") {
            transformedLawyers.sort(
              (a, b) => a.consultationFee - b.consultationFee
            );
          }

          setLawyers(transformedLawyers);
        } else {
          console.error("API failed:", response.status);
          setLawyers([]);
        }
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        setLawyers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, [filters]);

  const handleFilterChange = (key, value) => {
    if (key === "city") {
      setSearchInput(value);
    } else {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleBookConsultation = (lawyer) => {
    // Redirect to login page for booking
    navigate("/login", {
      state: {
        redirectTo: `/book-consultation/${lawyer.id}`,
        lawyerName: lawyer.name,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-custom py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="pt-20">
        {" "}
        {/* Add top padding to prevent header overlap */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Search Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Find Lawyers {filters.city && `in ${filters.city}`}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {lawyers.length} lawyers found
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => handleFilterChange("city", e.target.value)}
                  placeholder="Enter city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialization
                </label>
                <select
                  value={filters.specialization}
                  onChange={(e) =>
                    handleFilterChange("specialization", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                >
                  <option value="">All Specializations</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Property Law">Property Law</option>
                  <option value="Civil Law">Civil Law</option>
                  <option value="IT Law">IT Law</option>
                  <option value="Tax Law">Tax Law</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Constitutional Law">Constitutional Law</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience
                </label>
                <select
                  value={filters.experience}
                  onChange={(e) =>
                    handleFilterChange("experience", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                >
                  <option value="">Any Experience</option>
                  <option value="5">5+ Years</option>
                  <option value="10">10+ Years</option>
                  <option value="15">15+ Years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                >
                  <option value="rating">Rating</option>
                  <option value="experience">Experience</option>
                  <option value="fee">Fee (Low to High)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          {lawyers.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-base sm:text-lg">
                No lawyers found matching your criteria.
              </div>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Try adjusting your search filters.
              </p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Lawyer Image */}
                    <div className="flex-shrink-0 self-center sm:self-start">
                      <img
                        src={lawyer.image}
                        alt={lawyer.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                      />
                    </div>

                    {/* Lawyer Info */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div className="mb-3 sm:mb-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                            {lawyer.name}
                            {lawyer.verified && (
                              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <i className="fas fa-check-circle mr-1"></i>
                                Verified
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star text-sm ${
                                    i < Math.floor(lawyer.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                ></i>
                              ))}
                              <span className="ml-2 text-sm text-gray-600">
                                {lawyer.rating.toFixed(1)} ({lawyer.reviews}{" "}
                                reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center sm:text-right">
                          <div className="text-xl sm:text-2xl font-bold text-primary-600">
                            ₹{lawyer.consultationFee.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            Consultation Fee
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            Specialization
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {lawyer.specialization.map((spec, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            Experience
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {lawyer.experience} years
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            Location
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {lawyer.city}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            Languages
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {lawyer.languages.join(", ")}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {lawyer.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => handleBookConsultation(lawyer)}
                          className="flex-1 bg-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base"
                        >
                          Book Consultation
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LawyerSearch;
