import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModernHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: "❄️",
      title: "Winter Care",
      description: "Specialized cold weather services for your pets",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: "🏠",
      title: "Cozy Homes",
      description: "Warm bedding and indoor comfort solutions",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: "🐾",
      title: "Paw Protection",
      description: "Keep those paws safe from ice and salt",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: "❤️",
      title: "24/7 Care",
      description: "Round-the-clock veterinary support",
      gradient: "from-pink-400 to-red-500",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Pets" },
    { number: "50+", label: "Expert Vets" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Satisfaction" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-transparent relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {["🐕", "🐈", "🐾", "❄️"][i % 4]}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <div data-aos="slide-up" className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-cyan-300">🐾</span>
                  <span className="text-sm">Premium Pet Care Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Winter Care for Your
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent block">
                    Furry Friends
                  </span>
                </h1>

                <p className="text-xl text-cyan-100 max-w-2xl leading-relaxed">
                  Keep your pets warm, safe, and happy this winter with our
                  specialized care services. From cozy bedding to emergency vet
                  care, we've got you covered.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="btn btn-lg bg-gradient-to-r from-cyan-500 to-blue-600 border-none text-white hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Explore Services
                  <span className="ml-2">→</span>
                </Link>
                <button className="btn btn-lg btn-outline border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white hover:border-cyan-400 transform hover:scale-105 transition-all duration-300">
                  Watch Demo
                  <span className="ml-2">🎬</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-cyan-300">
                      {stat.number}
                    </div>
                    <div className="text-cyan-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 ${
                      currentSlide === index
                        ? "scale-105 border-cyan-400/50"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-semibold text-center mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-cyan-100 text-sm text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Floating Pet */}
              <div className="absolute -top-10 -right-10">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-5xl shadow-2xl animate-float">
                    🐕
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm">
                    ❤️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `}
      </style>
    </div>
  );
};

export default ModernHero;
