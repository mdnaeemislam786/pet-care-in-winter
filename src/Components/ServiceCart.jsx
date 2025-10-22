import React, { useState, useEffect } from "react";

const ServiceCart = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/ServiceData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);




  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-700 text-lg font-semibold">
            Loading winter services...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className=" flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="text-center bg-white p-8 rounded-3xl shadow-2xl border border-cyan-200">
          <div className="text-6xl mb-4">❄️</div>
          <h3 className="text-2xl font-bold text-cyan-700 mb-4">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-transparent py-12">

      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">
          Winter Pet Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Keep your furry friends warm, safe, and happy this winter with our
          specialized care services
        </p>
      </div>
      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 grid-cols-1 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {[...new Set(services.map((service) => service.category))].map(
          (category) => (
            <div key={category} id={category} className="mb-20">
              <div className="flex-1 gap-5">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <div
                      key={service.serviceId}
                      className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200 overflow-hidden hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 group"
                    >
                      {/* Service Image*/}
                      <div 
                        className="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 relative overflow-hidden"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                          <span className="text-cyan-700 font-bold">
                            ${service.price}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg flex items-center">
                          <span className="text-yellow-500 mr-1">⭐</span>
                          <span className="text-cyan-700 font-semibold">
                            {service.rating}
                          </span>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                          {service.serviceName}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Provider Info */}
                        <div className="flex items-center justify-between mb-4 p-3 bg-cyan-50 rounded-xl">
                          <div>
                            <p className="font-semibold text-cyan-800">
                              {service.providerName}
                            </p>
                            <p className="text-sm text-cyan-600">
                              {service.providerEmail}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-cyan-700">
                              {service.slotsAvailable} slots left
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceCart;