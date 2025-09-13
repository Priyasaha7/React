import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 pt-12 pb-24 bg-gradient-to-r from-primary-light via-primary-medium to-primary-dark rounded-2xl shadow-lg mt-6">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow">
          Streamline Your{" "}
          <span className="text-primary-dark">Academic</span> Workflow
        </h1>
        <p className="text-lg mt-4 mb-8 text-white/80">
          The complete assignment management platform for teachers and students. Create, submit, grade, and track assignments all in one place.
        </p>
        <div className="flex gap-3 mb-3">
          <button className="bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary-light hover:text-primary-dark transition">
            Get Started Free
          </button>
          <button className="border border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-primary-light/40 transition">
            View Demo
          </button>
        </div>
        <span className="block text-xs text-white/90 mt-2">
          Designed for students and teachers to simplify assignment workflows.<br />
          <span className="text-white/70">Part of academic project at VIT University.</span>
        </span>
      </div>
      <div className="mt-8 md:mt-0 md:ml-12 relative">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
          alt="Students collaborating"
          className="rounded-xl shadow-lg w-[400px] h-[220px] object-cover"
        />
        <div className="absolute left-6 bottom-6 bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
          <span className="text-sm text-gray-700">Assignment Submitted</span>
          <span className="ml-2 text-xs text-gray-400">2 minutes ago</span>
        </div>
      </div>
    </section>
  );
}
