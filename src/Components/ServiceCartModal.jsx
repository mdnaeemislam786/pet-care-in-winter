import { useEffect, useRef, useState } from "react";
import BookService from "./BookService";
import { Navigate } from "react-router";

const ServiceCartModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/ServiceDataM.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
      })
      .catch(() => {});
  }, []);

  const bookingRef = useRef(null);
  const handleBookNow = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsModalOpen(false);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent text-center mb-12">
          Winter Pet Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              data-aos="slide-up"
              key={service.serviceId}
              className="card bg-white shadow-xl border border-cyan-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(service)}
            >
              <figure className="h-48">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-cyan-700 text-lg">
                  {service.serviceName}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold text-cyan-600">
                    ${service.price}
                  </span>
                  <div className="badge badge-cyan">⭐ {service.rating}</div>
                </div>
                <div className="badge badge-outline badge-sm mt-2">
                  {service.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={bookingRef} id="booking-section">
        <BookService />
      </div>
      {isModalOpen && selectedService && (
        <>
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={selectedService.image}
                    alt={selectedService.serviceName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedService.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full shadow-lg">
                    <span className="text-cyan-700 font-bold text-lg">
                      ${selectedService.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-cyan-800 mb-2">
                      {selectedService.serviceName}
                    </h2>
                    <div className="flex items-center justify-center gap-4 text-gray-600">
                      <span>⭐ {selectedService.rating}</span>
                      <span>•</span>
                      <span className="text-green-600 font-semibold">
                        {selectedService.slotsAvailable} slots available
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded-2xl p-4">
                    <h3 className="text-lg font-semibold text-cyan-800 mb-2">
                      Service Provider
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {selectedService.providerName}
                        </p>
                        <p className="text-cyan-600">
                          {selectedService.providerEmail}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {selectedService.providerName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={closeModal}
                      className="btn btn-outline btn-gray flex-1"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleBookNow}
                      className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white flex-1"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCartModal;
