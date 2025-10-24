import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-8 relative overflow-hidden">
      {/* Floating Snow Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Moving Pets */}
      <div className="absolute pointer-events-none">
        <div className="text-4xl animate-bounce" style={{ top: '20%', left: '10%', animationDelay: '0.5s' }}>🐕</div>
        <div className="text-4xl animate-bounce" style={{ top: '60%', left: '85%', animationDelay: '4s' }}>🐈</div>
        <div className="text-4xl animate-pulse" style={{ top: '80%', left: '15%', animationDelay: '1.5s' }}>🐇</div>
        <div className="text-4xl animate-bounce" style={{ top: '30%', left: '80%', animationDelay: '1s' }}>🐦</div>
      </div>

      <div className="text-center relative z-10">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-cyan-500 to-blue-900 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for has wandered off into the winter snow. 
            Don't worry, let's get you back to warmth and safety!
          </p>
        </div>

        {/* Animated Pet Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-8xl mb-4 animate-bounce">🐾</div>
            <div className="absolute -top-4 -right-4 text-4xl animate-spin" style={{ animationDuration: '3s' }}>❄️</div>
            <div className="absolute -bottom-4 -left-4 text-4xl animate-spin" style={{ animationDuration: '4s' }}>❄️</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/"
            className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            🏠 Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white hover:border-cyan-400 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
          >
            ↩️ Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-cyan-500/20">
          <h3 className="text-cyan-200 font-semibold mb-2">Need Help?</h3>
          <p className="text-cyan-100 text-sm">
            Contact our support team or explore our services to find what you're looking for.
          </p>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;