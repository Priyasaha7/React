import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaTimes } from "react-icons/fa";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) errors.email = "Email is required.";
    else if (!emailRegex.test(form.email)) errors.email = "Please enter a valid email address.";
    if (!form.message.trim()) errors.message = "Message is required.";
    else if (form.message.length > 500) errors.message = "Message cannot exceed 500 characters.";
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: null });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="bg-white rounded-xl p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close contact form"
        >
          <FaTimes size={20} />
        </button>

        <h1 id="contact-modal-title" className="text-2xl text-primary-dark font-bold mb-6">Contact Us</h1>

        {submitted && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-4 p-4 bg-green-100 text-green-800 rounded transition-opacity duration-500"
          >
            Thank you! Your message has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <label className="block mb-4 relative">
            <span className="text-primary-medium font-semibold">Name</span>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`pl-10 block w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${
                  fieldErrors.name
                    ? "border-red-600 focus:ring-red-600"
                    : "border-primary-light focus:ring-primary-medium"
                }`}
                aria-invalid={!!fieldErrors.name}
                aria-describedby="nameError"
              />
            </div>
            {fieldErrors.name && (
              <p id="nameError" className="text-red-600 mt-1 text-sm">
                {fieldErrors.name}
              </p>
            )}
          </label>

          {/* Email */}
          <label className="block mb-4 relative">
            <span className="text-primary-medium font-semibold">Email</span>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`pl-10 block w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${
                  fieldErrors.email
                    ? "border-red-600 focus:ring-red-600"
                    : "border-primary-light focus:ring-primary-medium"
                }`}
                aria-invalid={!!fieldErrors.email}
                aria-describedby="emailError emailHelp"
              />
            </div>
            <p id="emailHelp" className="text-xs text-gray-500 mt-1">
              We&apos;ll never share your email.
            </p>
            {fieldErrors.email && (
              <p id="emailError" className="text-red-600 mt-1 text-sm">
                {fieldErrors.email}
              </p>
            )}
          </label>

          {/* Message */}
          <label className="block mb-6 relative">
            <span className="text-primary-medium font-semibold">Message</span>
            <div className="relative mt-1">
              <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                maxLength="500"
                className={`pl-10 block w-full rounded border px-3 py-2 resize-none focus:outline-none focus:ring-2 ${
                  fieldErrors.message
                    ? "border-red-600 focus:ring-red-600"
                    : "border-primary-light focus:ring-primary-medium"
                }`}
                aria-invalid={!!fieldErrors.message}
                aria-describedby="messageError messageHelp"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Max 500 characters</span>
              <span>{form.message.length}/500</span>
            </div>
            {fieldErrors.message && (
              <p id="messageError" className="text-red-600 mt-1 text-sm">
                {fieldErrors.message}
              </p>
            )}
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded font-bold transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary-medium text-white hover:bg-primary-dark"
            }`}
            aria-busy={loading}
            aria-live="polite"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
