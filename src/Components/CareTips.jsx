import React from "react";

const CareTips = () => {
  const winterTips = [
    {
      icon: "🧥",
      title: "Warm Clothing",
      tip: "Use pet sweaters and coats for short-haired breeds during walks",
    },
    {
      icon: "🐾",
      title: "Paw Protection",
      tip: "Wipe paws after walks to remove ice, salt, and chemicals",
    },
    {
      icon: "🏠",
      title: "Indoor Comfort",
      tip: "Keep indoor temperatures comfortable and provide warm bedding",
    },
    {
      icon: "💧",
      title: "Hydration",
      tip: "Ensure fresh water is always available, check bowls don't freeze",
    },
    {
      icon: "🍎",
      title: "Nutrition",
      tip: "Adjust food portions based on activity level in colder months",
    },
    {
      icon: "🚶",
      title: "Exercise",
      tip: "Shorter, more frequent walks instead of long outdoor exposure",
    },
  ];

  return (
    <div className=" bg-transparent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Winter Care Tips for Pets
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Essential guidelines to keep your furry friends safe and comfortable
            during winter
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {winterTips.map((item, index) => (
            <div
              data-aos="flip-up"
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-cyan-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareTips;
