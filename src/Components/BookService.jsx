const BookService = () => {
  const services = [
    "Winter Coat Fitting for Dogs",
    "Winter Grooming & Paw Treatment",
    "Indoor Warm Bed Setup",
    "Winter Nutrition Consultation",
    "Paw Protection Kit Installation",
    "Winter Exercise Routine Plan",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
   const option = e.target.service.value;
    alert(option + " Service Booked")
    e.target.reset(); 
  };

  return (
    <div className="  bg-transparent py-12 pb-30 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Book a Service
          </h1>
          <p className="text-gray-600 text-lg">
            Schedule your pet's winter care service with our expert team
          </p>
        </div>

        {/* Booking Form */}
        <div data-aos="slide-up" className="card bg-white rounded-2xl shadow-2xl border border-cyan-200">
          <div className="card-body bg-gradient-to-tr hover:bg-gradient-to-br  from-blue-200 via-blue-300 to-cyan-300 delay-150 duration-300 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Your Name *
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Email Address *
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">
                    Select Service *
                  </span>
                </label>
                <select
                  name="service"
                  className="select select-bordered w-full bg-gray-50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                  // onChange={(e) => alert(`You selected: ${e.target.value}`)}
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
