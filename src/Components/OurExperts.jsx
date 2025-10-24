import React from "react";

const OurExperts = () => {
  const experts = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Winter Pet Care Specialist",
      experience: "12 years",
      image: "👩‍⚕️",
    },
    {
      name: "Dr. Mike Chen",
      specialty: "Emergency Cold Weather Care",
      experience: "8 years",
      image: "👨‍⚕️",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Pet Nutrition & Wellness",
      experience: "10 years",
      image: "🧑‍⚕️",
    },
  ];

  return (
    <div className=" bg-transparent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Meet Our Expert Vets
          </h2>
          <p className="text-xl text-gray-600">
            Dedicated professionals ensuring your pet's winter wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              data-aos="flip-right"
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{expert.image}</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                {expert.name}
              </h3>
              <p className="text-gray-600 mb-2">{expert.specialty}</p>
              <p className="text-cyan-600 font-semibold">
                {expert.experience} experience
              </p>
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 mt-4 py-1 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Consult Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
