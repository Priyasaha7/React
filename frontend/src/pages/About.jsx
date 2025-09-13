import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaServer, FaUsers, FaBell, FaChartBar, FaLock } from "react-icons/fa";

const techStack = [
  { name: "React", icon: <FaReact />, bg: "bg-blue-100", color: "text-primary-dark" },
  { name: "Node.js", icon: <FaNodeJs />, bg: "bg-green-100", color: "text-primary-dark" },
  { name: "MongoDB", icon: <FaDatabase />, bg: "bg-green-50", color: "text-primary-dark" },
  { name: "Tailwind CSS", icon: <FaPaintBrush />, bg: "bg-cyan-100", color: "text-primary-dark" },
  { name: "Express.js", icon: <FaServer />, bg: "bg-gray-100", color: "text-primary-dark" }
];

const sections = [
  {
    heading: "Key Features",
    icon: <FaUsers />,
    items: [
      "Real-time assignment tracking and submissions",
      "Automated grading workflows and analytics",
      "Collaborative tools for students and teachers",
      "Insightful progress reporting"
    ],
    color: "bg-purple-100",
  },
  {
    heading: "Technical Highlights",
    icon: <FaServer />,
    items: [
      "Responsive and accessible design",
      "RESTful API backend architecture",
      "Efficient database utilization",
      "Modern UI/UX patterns leveraging React and Tailwind"
    ],
    color: "bg-pink-100",
  },
  {
    heading: "Learning Outcomes",
    icon: <FaDatabase />,
    items: [
      "Comprehensive full-stack development experience",
      "Project management and collaborative skills",
      "Advanced user experience design knowledge",
      "Software architectural principles"
    ],
    color: "bg-purple-50",
  },
];

function AboutContent() {
  return (
    <section className="min-h-screen w-full px-6 py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#64365b" }}>
            About AssignmentHub
          </h1>
          <p className="text-primary-medium max-w-2xl mx-auto leading-relaxed text-lg">
            This project demonstrates an end-to-end assignment management platform showcasing modern development and user-centric design.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {techStack.map(({ name, icon, bg, color }, idx) => (
            <div key={idx} className="flex flex-col items-center rounded-xl shadow-sm hover:shadow-md transition-shadow py-7 px-4 bg-white text-center w-40">
              <div className={`${bg} rounded-xl p-4 mb-4`}>
                <span className={`text-4xl ${color}`}>{icon}</span>
              </div>
              <span className="font-semibold text-primary-dark">{name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {sections.map(({ heading, icon, items, color }) => (
            <div key={heading} className={`bg-white rounded-xl shadow-md p-7 hover:shadow-lg transition flex flex-col gap-4`}>
              <div className={`flex items-center gap-3 ${color} rounded-xl p-3 w-fit`}>
                <span className="text-2xl text-primary-dark">{icon}</span>
                <h2 className="text-lg font-bold text-primary-dark">{heading}</h2>
              </div>
              <ul className="list-disc list-inside text-primary-medium pl-3 space-y-2 mt-1">
                {items.map((item, i) => (
                  <li key={i} className="text-primary-dark">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutContent />
      <Footer />
    </div>
  );
}
