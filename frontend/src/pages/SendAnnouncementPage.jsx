import React, { useState } from "react";
import { FaBullhorn, FaTag, FaRegCommentDots, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function SendAnnouncementPage() {
  const [form, setForm] = useState({ title: "", message: "", audience: "all", scheduled: false, scheduleDate: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation constants
  const TITLE_MAX = 80;
  const MESSAGE_MAX = 500;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setSent(false);
    if (type === "checkbox") {
      setForm(prev => ({ ...prev, [name]: checked }));
      if(!checked) setForm(prev => ({ ...prev, scheduleDate: "" }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function validate() {
    let newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required.";
    else if (form.title.length > TITLE_MAX) newErrors.title = `Title max ${TITLE_MAX} chars.`;
    if (!form.message.trim()) newErrors.message = "Message is required.";
    else if (form.message.length > MESSAGE_MAX) newErrors.message = `Message max ${MESSAGE_MAX} chars.`;
    if (form.scheduled && !form.scheduleDate) newErrors.scheduleDate = "Select a date/time to schedule.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSent(false);
      return;
    }

    // TODO: Hook with backend API
    // Example payload:
    // { title: form.title, message: form.message, audience: form.audience, scheduled: form.scheduled, scheduleDate: form.scheduleDate || null, createdAt: new Date() }

    setSent(true);
    setForm({ title: "", message: "", audience: "all", scheduled: false, scheduleDate: "" });
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-primary-light/40">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary-light rounded-full text-primary-dark shadow">
            <FaBullhorn className="text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">Send Announcement</h1>
            <p className="text-sm text-primary-medium">Quickly notify your students</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {/* Audience Selector */}
          <div>
            <label className="block font-semibold text-primary-dark mb-1" htmlFor="audience">Audience</label>
            <select
              id="audience"
              name="audience"
              value={form.audience}
              onChange={handleChange}
              className="w-full rounded border border-primary-light px-3 py-2 text-primary-dark focus:ring-2 focus:ring-primary-medium"
            >
              <option value="all">All Students</option>
              <option value="classA">Class A</option>
              <option value="classB">Class B</option>
            </select>
          </div>

          {/* Title */}
          <div className="relative">
            <label className="block font-semibold text-primary-dark mb-1" htmlFor="title">Title</label>
            <div className="flex items-center">
              <FaTag className="absolute ml-3 text-primary-medium pointer-events-none" />
              <input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                maxLength={TITLE_MAX}
                required
                placeholder="Announcement title"
                className={`w-full pl-10 pr-3 py-2 rounded border ${
                  errors.title ? "border-red-500" : "border-primary-light"
                } text-primary-dark bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-primary-medium`}
              />
            </div>
            <div className="text-xs text-primary-medium mt-1 flex justify-between">
              <span>{errors.title}</span>
              <span>{form.title.length}/{TITLE_MAX}</span>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block font-semibold text-primary-dark mb-1" htmlFor="message">Message</label>
            <div className="flex items-start">
              <FaRegCommentDots className="absolute ml-3 mt-3 text-primary-medium pointer-events-none" />
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={MESSAGE_MAX}
                rows={5}
                required
                placeholder="Type your announcement here..."
                className={`w-full pl-10 pr-3 pt-3 rounded border ${
                  errors.message ? "border-red-500" : "border-primary-light"
                } text-primary-dark bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none`}
              />
            </div>
            <div className="text-xs text-primary-medium mt-1 flex justify-between">
              <span>{errors.message}</span>
              <span>{form.message.length}/{MESSAGE_MAX}</span>
            </div>
          </div>

          {/* Schedule Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="scheduled"
              name="scheduled"
              checked={form.scheduled}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="scheduled" className="text-primary-dark">Send Later</label>
          </div>

          {/* Schedule Date Picker */}
          {form.scheduled && (
            <div>
              <label className="block font-semibold text-primary-dark mb-1" htmlFor="scheduleDate">Schedule Date & Time</label>
              <input
                id="scheduleDate"
                name="scheduleDate"
                type="datetime-local"
                value={form.scheduleDate}
                onChange={handleChange}
                required={form.scheduled}
                className={`w-full rounded border px-3 py-2 border-${errors.scheduleDate ? "red-500" : "primary-light"} text-primary-dark bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-primary-medium`}
              />
              {errors.scheduleDate && (
                <p className="text-xs text-red-500 mt-1">{errors.scheduleDate}</p>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-primary-medium text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              <FaPaperPlane /> Send
            </button>
            <button
              type="button"
              onClick={() => setForm({ title: "", message: "", audience: "all", scheduled: false, scheduleDate: "" })}
              className="flex-1 px-3 py-3 border border-primary-medium rounded-lg text-primary-medium font-semibold hover:bg-primary-light transition"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Confirmation */}
        {sent && (
          <div className="mt-5 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 font-medium">
            <FaCheckCircle /> Announcement sent successfully!
          </div>
        )}
      </div>
    </div>
  );
}
