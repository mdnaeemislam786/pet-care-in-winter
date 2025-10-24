import { useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setError("");
    setSuccess("");
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccess("Password reset email sent! Please check your inbox.");
        
        emailRef.current.value = "";
        navigate("/auth/login")
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center p-8 relative overflow-hidden">
      <div 
        data-aos="slide-up" 
        className="card w-full max-w-md bg-base-100/80 backdrop-blur-md shadow-2xl border border-cyan-500/20 relative z-10 transform hover:scale-105 transition-all duration-500"
      >
        <div className="card-body bg-gradient-to-tr hover:bg-gradient-to-br from-blue-200 via-blue-300 to-cyan-300 p-8">
          {/* Animated Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
              <span className="text-3xl">🔒</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Reset Password
            </h2>
            <p className="text-cyan-100">
              Enter your email to receive a password reset link
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleForgotPassword}>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-100 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Your Email
                </span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="alert alert-error bg-red-500/20 border-red-500/30 text-red-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="alert alert-success bg-green-500/20 border-green-500/30 text-green-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{success}</span>
              </div>
            )}

            {/* Reset Button */}
            <button
              type="submit"
              className={`btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 ${
                isLoading ? "loading" : ""
              }`}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>

            {/* Back to Login */}
            <div className="text-center">
              <span className="text-sm text-white">
                Remember your password?{" "}
                <a 
                  href="/auth/login" 
                  className="text-cyan-200 hover:text-cyan-100 font-medium transition-colors duration-300 hover:underline"
                >
                  Back to Login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;