import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onContactClick }) {
  return (
    <nav className="sticky top-0 w-full px-8 py-4 flex items-center justify-between shadow-md bg-white z-50">
      {/* Brand / Logo */}
      <div className="flex items-center">
        <Link
          to="/"
          className="font-bold text-xl text-primary-300 mr-2 hover:text-primary-400 transition"
        >
          AssignmentHub
        </Link>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/features" className="text-gray-700 hover:text-primary-400 font-medium transition">
          Features
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-primary-400 font-medium transition">
          About
        </Link>
        {/* Contact triggers modal, not navigation */}
        <button
          type="button"
          onClick={onContactClick}
          className="text-gray-700 hover:text-primary-400 font-medium transition bg-transparent border-none cursor-pointer"
        >
          Contact
        </button>
        <Link to="/student-dashboard" className="text-gray-700 hover:text-primary-400 font-medium transition">
          Sdash
        </Link>
        <Link to="/teacher-dashboard" className="text-gray-700 hover:text-primary-400 font-medium transition">
          Tdash
        </Link>
        <Link to="/demo" className="text-gray-700 hover:text-primary-400 font-medium transition">
          Demo
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md text-sm w-32 focus:w-40 transition-all focus:outline-none focus:border-primary-300"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Right buttons */}
      <div className="flex gap-3">
        <Link
          to="/login"
          className="text-primary-500 font-medium px-4 py-1 rounded hover:bg-primary-400 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded bg-primary-300 text-white font-semibold hover:bg-primary-400 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
