import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  // Service handlers
  const handleServiceClick = (service) => {
    const servicePath = service.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${servicePath}`);
  };

  const handleConsultExpert = () => {
    navigate("/consult-expert");
  };

  const handleScheduleCall = () => {
    navigate("/schedule-call");
  };

  const services = [
    {
      icon: "fas fa-building",
      title: "Business Setup",
      description:
        "Company registration, LLP formation, and business compliance services",
      features: [
        "Private Limited Company",
        "LLP Registration",
        "Partnership Firm",
      ],
      price: "₹999",
      popular: false,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "fas fa-file-contract",
      title: "Legal Documentation",
      description:
        "Professional drafting of contracts, agreements, and legal documents",
      features: ["Contract Drafting", "Legal Agreements", "Document Review"],
      price: "₹1,499",
      popular: false,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: "fas fa-trademark",
      title: "Intellectual Property",
      description:
        "Trademark registration, copyright protection, and patent filing",
      features: [
        "Trademark Registration",
        "Copyright Protection",
        "Patent Filing",
      ],
      price: "₹2,499",
      popular: true,
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: "fas fa-calculator",
      title: "Tax & Compliance",
      description:
        "GST registration, tax filing, and regulatory compliance services",
      features: [
        "GST Registration",
        "Tax Return Filing",
        "Compliance Management",
      ],
      price: "₹799",
      popular: false,
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: "fas fa-home",
      title: "Property Legal",
      description:
        "Property verification, registration, and dispute resolution",
      features: [
        "Property Verification",
        "Registration Services",
        "Dispute Resolution",
      ],
      price: "₹1,999",
      popular: false,
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: "fas fa-users",
      title: "Family Legal",
      description:
        "Divorce, custody, matrimonial disputes, and family law matters",
      features: [
        "Divorce Proceedings",
        "Child Custody",
        "Matrimonial Disputes",
      ],
      price: "₹2,999",
      popular: false,
      gradient: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
            <i className="fas fa-briefcase text-primary-600"></i>
            <span className="text-primary-600 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From business setup to complex legal matters, we provide expert
            services tailored to meet your specific needs with transparent
            pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${
                service.popular ? "ring-2 ring-primary-500" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className="p-8 pb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full">
                        <i className="fas fa-check text-green-600 text-xs"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    <span className="text-gray-600 ml-1">onwards</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleServiceClick(service)}
                  className={`w-full py-4 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                >
                  Get Started
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Legal Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert legal team can create tailored solutions for your
              unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleConsultExpert} className="btn-primary">
                <i className="fas fa-phone mr-2"></i>
                Consult an Expert
              </button>
              <button onClick={handleScheduleCall} className="btn-secondary">
                <i className="fas fa-calendar mr-2"></i>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
