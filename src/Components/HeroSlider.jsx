import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSlider = () => {
  const winterPetCareTips = [
    {
      id: 1,
      title: "Winter Coat Care",
      description: "Keep your pet's coat well-groomed during winter. Regular brushing helps maintain natural oils that provide insulation against the cold.",
      image: "❄️",
      icon: "🪮",
      bgGradient: "from-blue-400 via-cyan-500 to-blue-600",
      tips: ["Brush regularly", "Don't shave completely", "Check for dry skin", "Use moisturizing shampoo"],
      duration: "Daily"
    },
    {
      id: 2,
      title: "Indoor Warmth",
      description: "Create a cozy warm space indoors away from drafts. Pets need extra warmth during cold months to maintain body temperature.",
      image: "🏠",
      icon: "🔥",
      bgGradient: "from-purple-400 via-blue-500 to-cyan-600",
      tips: ["Warm bedding", "Avoid cold floors", "Comfortable temperature", "Heated pet beds"],
      duration: "Always"
    },
    {
      id: 3,
      title: "Paw Protection",
      description: "Protect paws from ice, snow, and harmful salts. Winter chemicals can cause burns and irritation to sensitive paw pads.",
      image: "🐾",
      icon: "👢",
      bgGradient: "from-cyan-400 via-blue-500 to-indigo-600",
      tips: ["Wipe paws after walks", "Use pet-safe ice melt", "Check for cracks", "Consider booties"],
      duration: "After every walk"
    },
    {
      id: 4,
      title: "Hydration Matters",
      description: "Pets can get dehydrated in winter too. Ensure fresh water is always available and check outdoor water bowls don't freeze.",
      image: "💧",
      icon: "💦",
      bgGradient: "from-blue-500 via-cyan-600 to-blue-700",
      tips: ["Fresh water always", "Check bowl temperature", "Monitor intake", "Wet food addition"],
      duration: "Constant"
    },
    {
      id: 5,
      title: "Exercise & Play",
      description: "Maintain regular exercise but be mindful of temperature. Shorter, more frequent walks are better in extreme cold conditions.",
      image: "🎾",
      icon: "⚡",
      bgGradient: "from-indigo-400 via-purple-500 to-blue-600",
      tips: ["Shorter walks", "Indoor play", "Watch for shivering", "Avoid early/late walks"],
      duration: "2-3 times daily"
    },
    {
      id: 6,
      title: "Nutrition Needs",
      description: "Adjust food portions based on activity level. Indoor pets may need less food while active pets might need more calories for warmth.",
      image: "🍲",
      icon: "🥘",
      bgGradient: "from-cyan-500 via-blue-600 to-purple-600",
      tips: ["Monitor weight", "Adjust portions", "Warm meals", "High-quality food"],
      duration: "Regular checkups"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-6">
          Winter Pet Care
        </h2>
        <p className="text-black text-lg font-semibold">
            Keep your pets safe and warm this winter season!
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'progressbar',
          }}
          loop={true}
          className="winter-pet-care-swiper"
        >
          {winterPetCareTips.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-gradient-to-br from-slate-50  to-blue-50 rounded-4xl shadow-blue-400 border-orange-400 border overflow-hidden">
                <div className="flex  flex-col lg:flex-row h-full min-h-[500px]">

                  <div className={`w-full lg:w-2/5 bg-gradient-to-br ${slide.bgGradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative rounded-4xl z-10  h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="text-9xl mb-6 filter drop-shadow-2xl animate-float">
                        {slide.image}
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        {slide.title}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 text-white/90">
                        <span className="text-2xl">{slide.icon}</span>
                        <span className="text-lg font-semibold">{slide.duration}</span>
                      </div>
                    </div>
                    
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-4 bg-white/30 rounded-full animate-pulse"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-2xl font-semibold lg:text-3xl text-gray-700 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* Tips */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-cyan-700 flex items-center">
                        <span className="mr-3">💡</span>
                        Recommendations:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {slide.tips.map((tip, tipIndex) => (
                          <div
                            key={tipIndex}
                            className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-cyan-100 hover:shadow-md transition-all duration-300 hover:translate-x-2"
                          >
                            <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                              <span className="text-cyan-600 text-sm font-bold">
                                {tipIndex + 1}
                              </span>
                            </div>
                            <span className="text-gray-700 font-medium">
                              {tip}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation battons */}
        <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 backdrop-blur-sm  flex items-center justify-center  hover:scale-110 transition-all duration-300 group">
        </div>
        
        <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14  backdrop-blur-sm  flex items-center justify-center hover:scale-110 transition-all duration-300 group">
        </div>

      </div>
    </div>
  );
};

export default HeroSlider;