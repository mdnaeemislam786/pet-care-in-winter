import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.config";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError('')
    signInWithEmailAndPassword(auth, email, password)
    .then((result) =>{
      console.log(result);
    })
    .catch((error) =>{
      // console.log(error.message);
      setError(error.message)
    })

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center p-8 relative overflow-hidden">

      <div className="card w-full max-w-md bg-base-100/80 backdrop-blur-md shadow-2xl border border-cyan-500/20 relative z-10 transform hover:scale-105 transition-all duration-500">
        <div className="card-body bg-gradient-to-tr hover:bg-gradient-to-br  from-blue-200 via-blue-300 to-cyan-300 p-8">
          {/* Animated Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
              <span className="text-3xl">🐾</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-cyan-100">Sign in to access your pet's winter care dashboard</p>
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
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
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-100 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-cyan-300 hover:text-cyan-100 transition-all duration-300 hover:scale-110"
                >
                  {passwordShown ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}

            {
              <p className="m-0 text-red-400 font-bold text-center">{error}</p>
            }
            <button
              type="submit"
              className={`btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-sm text-cyan-100 hover:text-cyan-100 transition-colors duration-300 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Divider */}
            <div className="divider text-white">OR CONTINUE WITH</div>

            {/* Google Sign In */}
            <button
              type="button"
              className="btn btn-outline w-full flex items-center justify-center gap-3 bg-slate-800/50 border-cyan-500/30 text-cyan-200 hover:bg-slate-700/50 hover:border-cyan-400 hover:text-cyan-100 transform hover:scale-105 transition-all duration-300"
            >
              <img
                src="https://www.material-tailwind.com/logos/logo-google.png"
                alt="google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-sm text-white">
                New to WarmPaws?{" "}
                <Link
                 to="/auth/signup" className="text-cyan-200 hover:text-cyan-100 font-medium transition-colors duration-300 hover:underline">
                  Create account
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Login;