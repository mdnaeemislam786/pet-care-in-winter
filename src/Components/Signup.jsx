// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
// import { auth } from "../Firebase/Firebase.config";
import { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const SignUp = () => {
  
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordShown((cur) => !cur);
  
  const provider = new GoogleAuthProvider();
  const { createUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const Name = firstName + " " + lastName;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // password validation
    if ((password === confirmPassword) === false) {
      return setError("Your password is not seme");
    }
    if (password.length < 6 || password.length > 16) {
      return setError("Password must be between 6 and 16 characters.");
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;
    if (!regex.test(password)) {
      return setError(
        "Password must include at least 1 uppercase and 1 lowercase letter and 1 number."
      );
    }

    // Name validation
    if(Name.length < 3 || Name.length > 16){
      return setError("Name must be between 3 and 16 characters.")
    }

    // console.log(firstName, lastName, email, password, confirmPassword);

    setError("");
    // createUserWithEmailAndPassword(auth, email, password)
    createUser(email, password, Name, photo)
      .then(() => {
        navigate(location.state || "/");
        alert(" Your account creates successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
    // Simulate signup process
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        // console.log(result);
        navigate(location.state || "/");
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-8">
      <div className="card w-full max-w-2xl bg-base-100/90 backdrop-blur-md shadow-2xl border border-cyan-500/20">
        <div className="card-body bg-gradient-to-tr hover:bg-gradient-to-br  from-blue-200 via-blue-300 to-cyan-300 delay-150 duration-300 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🐾</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Join WarmPaws
            </h2>
            <p className="text-gray-100">
              Create your account for premium pet care services
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cyan-100 font-medium">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cyan-100 font-medium">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-100 font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-100 font-medium">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>
            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cyan-100 font-medium">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-cyan-300 hover:text-cyan-100 transition-colors"
                  >
                    {passwordShown ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-cyan-100 font-medium">
                    Confirm Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={confirmPasswordShown ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Password"
                    className="input input-bordered w-full bg-slate-800/50 border-cyan-500/30 text-white placeholder-cyan-200/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-3 text-cyan-300 hover:text-cyan-100 transition-colors"
                  >
                    {confirmPasswordShown ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  className="checkbox checkbox-primary bg-slate-800/50 border-cyan-500/30"
                  required
                />
                <span className="label-text flex flex-wrap text-cyan-100">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-cyan-300 hover:text-cyan-100 underline"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-cyan-300 hover:text-cyan-100 underline"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {<p className="text-red-400 font-bold text-center mb-1">{error}</p>}
            <button
              type="submit"
              className={`btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 ${
                isLoading ? "loading" : ""
              }`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Divider */}
            <div className="divider text-white">OR SIGN UP WITH</div>

            {/* Google Sign Up */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex items-center justify-center gap-3 bg-slate-800/50 border-cyan-500/30 text-cyan-200 hover:bg-slate-700/50 hover:border-cyan-400 hover:text-cyan-100"
            >
              <img
                src="https://www.material-tailwind.com/logos/logo-google.png"
                alt="google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>

            {/* Login Link */}
            <div className="text-center">
              <span className="text-sm text-cyan-100">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-cyan-500 hover:text-blue-300 font-medium transition-colors duration-300 hover:underline"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
