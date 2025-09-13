import React from "react";
import Footer from '../components/Footer';


import {
  FaWhatsapp,
  FaFileAlt,
  FaClipboardCheck,
  FaUsers,
  FaBell,
  FaChartBar,
  FaLock,
  FaMedal,
} from "react-icons/fa";

const features = [
  {
    title: "Achievement Badges",
    description: "Earn badges for top grades and on-time submissions.",
    icon: <FaMedal className="w-8 h-8" />,
    iconBg: "bg-pink-100 text-primary-medium",
  },
  {
    title: "Document Uploads",
    description: "Attach assignments and files easily using paperclip-style tools.",
    icon: <FaFileAlt className="w-8 h-8" />,
    iconBg: "bg-primary-50 text-primary-medium",
  },
  {
    title: "Smart Grading",
    description: "Quick feedback and automatic scoring to streamline evaluation.",
    icon: <FaClipboardCheck className="w-8 h-8" />,
    highlight: true,
    // Notice: No iconBg; will use special highlight card styling instead
  },
  {
    title: "Group Management",
    description: "Easily organize into student cohorts or project teams.",
    icon: <FaUsers className="w-8 h-8" />,
    iconBg: "bg-blue-100 text-primary-dark",
  },
  {
    title: "Deadline Reminders",
    description: "Instant notifs for due dates—never miss a deadline.",
    icon: <FaBell className="w-8 h-8" />,
    iconBg: "bg-yellow-100 text-primary-dark",
  },
  {
    title: "Visual Analytics",
    description: "Track performance using modern chart dashboards.",
    icon: <FaChartBar className="w-8 h-8" />,
    iconBg: "bg-primary-100 text-primary-medium",
  },
  {
    title: "Integrity Tools",
    description: "Submit securely—plagiarism checker keeps work honest.",
    icon: <FaLock className="w-8 h-8" />,
    iconBg: "bg-green-100 text-primary-dark",
  },
];

export default function Features() {
  return (
    <>
    <section className="bg-white py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-black text-primary-dark mb-2">Our Features</h2>
        <p className="text-primary-medium text-lg max-w-2xl mx-auto">
          Modern tools for smooth college collaboration—real messaging, reminders, analytics, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {features.map(({ title, description, icon, iconBg, highlight }) => (
          highlight ? (
            <div
              key={title}
              className="relative rounded-2xl p-6 lg:col-span-2 flex flex-col items-start justify-center bg-gradient-to-r from-primary-light via-primary-medium to-primary-dark shadow-lg"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-white/20">
                {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-white/90 text-lg">{description}</p>
            </div>
          ) : (
            <div
              key={title}
              className="rounded-2xl p-6 bg-white shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer flex flex-col items-start"
            >
              <div className={`rounded-xl mb-6 p-4 ${iconBg}`}>{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h3>
              <p className="text-primary-medium leading-relaxed">{description}</p>
            </div>
          )
        ))}
      </div>

      {/* Quick Stats */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 text-primary-medium text-center">
        <div>
          <span className="text-3xl font-black block">100+</span>
          <span>Assignments Created</span>
        </div>
        <div>
          <span className="text-3xl font-black block">500+</span>
          <span>Students Registered</span>
        </div>
        <div>
          <span className="text-3xl font-black block">95%</span>
          <span>Deadlines Met</span>
        </div>
      </div>

      <div className="text-center mt-14">
        <button className="bg-primary-dark text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-primary-medium transition">
          Get Started
        </button>
      </div>
    </section>
    <Footer />
    </>
  );
}
