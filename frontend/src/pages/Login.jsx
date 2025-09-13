import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFields, setErrorFields] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";
    if (!password) errors.password = "Password is required.";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    const errors = validate();
    setErrorFields(errors);
    if (Object.keys(errors).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormError("Invalid email or password."); // Simulated error
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-primary-light">
        <img
          src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
          alt="Campus"
          className="object-cover w-full h-full rounded-r-3xl shadow-xl"
          loading="lazy"
        />
      </div>

      {/* Login Card */}
      <div className="flex w-full md:w-1/2 items-center justify-center py-12 px-4 bg-white">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/329/839/non_2x/3d-white-clipboard-task-management-todo-check-list-with-pencil-efficient-work-on-project-plan-progress-level-up-concept-assignment-and-exam-checklist-icon-3d-render-on-purple-background-vector.jpg"
              alt="AssignmentHub Logo"
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-primary-dark text-center">Login</h2>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-primary-medium font-semibold mb-1">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-primary-medium" />
                <input
                  id="email"
                  type="email"
                  className={`pl-10 pr-2 py-3 w-full rounded-lg border ${
                    errorFields.email ? "border-red-500" : "border-primary-light"
                  } focus:outline-none focus:ring-2 focus:ring-primary-medium`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-describedby="email-error"
                  autoComplete="username"
                />
              </div>
              {errorFields.email && (
                <span id="email-error" className="text-sm text-red-600 mt-1 block">
                  {errorFields.email}
                </span>
              )}
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-primary-medium font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-primary-medium" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`pl-10 pr-10 py-3 w-full rounded-lg border ${
                    errorFields.password ? "border-red-500" : "border-primary-light"
                  } focus:outline-none focus:ring-2 focus:ring-primary-medium`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-describedby="password-error"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  className="absolute right-3 top-3 text-primary-medium focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errorFields.password && (
                <span id="password-error" className="text-sm text-red-600 mt-1 block">
                  {errorFields.password}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-primary-medium" />
                <span className="ml-2 text-sm text-primary-dark">Remember Me</span>
              </label>
              <a href="/reset-password" className="text-sm text-primary-medium hover:underline">
                Forgot Password?
              </a>
            </div>

            {formError && (
              <div className="bg-red-100 text-red-700 text-center py-2 px-3 rounded">
                {formError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-bold bg-primary-medium text-white transition hover:bg-primary-dark mt-1 flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                  <path className="opacity-75" d="M4 12a8 8 0 018-8" stroke="white" strokeWidth="4" />
                </svg>
              ) : null}
              Login
            </button>

            <button
              type="button"
              className="w-full py-3 mt-2 rounded-lg font-bold bg-zinc-400 text-white flex items-center justify-center transition hover:bg-primary-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 488 512" fill="currentColor">
                <path d="M488 261.8c0-17.7-1.5-35-4.8-51.7H249v97.8h134.9c-5.8 31-23.7 57.4-50.2 75.1v62.2h81.1c47.4-43.7 74.2-108 74.2-183.4z"/>
                <path d="M249 492c67.1 0 123.5-22.3 164.7-60.8l-81.1-62.1c-22.6 15.1-51.6 24.1-83.6 24.1-64.4 0-119-43.5-138.6-102.2h-82.3v64.4C94.4 452 167.5 492 249 492z"/>
                <path d="M110.4 293.2c-4.8-14.1-7.5-29.1-7.5-44.2s2.7-30 7.5-44.2v-64.3H28.1C10 192.7 0 219 0 245s10 52.3 28.1 76.6l82.3-64.4z"/>
                <path d="M249 97c35.5 0 67.3 12.2 92.2 36.2l69-69C357.1 34.5 306.7 12 249 12 167.5 12 94.4 52 28.1 126.6l82.3 64.3C130 140.3 184.6 97 249 97z"/>
              </svg>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
