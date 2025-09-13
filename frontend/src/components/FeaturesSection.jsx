import React from "react";

const features = [
  {
    title: "Assignment Creation",
    desc: "Create and customize assignments with rich descriptions, deadlines, and grading rubrics. Perfect for any subject or skill level.",
    icon: "📝",
  },
  {
    title: "Easy Submissions",
    desc: "Students can submit assignments with file uploads or text entries. Real-time status tracking and deadline reminders included.",
    icon: "📤",
  },
  {
    title: "Smart Grading",
    desc: "Streamlined grading workflow with feedback tools, grade analytics, and automated notifications for students.",
    icon: "✅",
  },
  {
    title: "Class Management",
    desc: "Organize students by classes or groups. Bulk assignment distribution and progress tracking made simple.",
    icon: "👥",
  },
  {
    title: "Deadline Tracking",
    desc: "Never miss a deadline with intelligent calendar integration and automatic reminders for upcoming assignments.",
    icon: "⏰",
  },
  {
    title: "Progress Analytics",
    desc: "Detailed insights into student performance, submission patterns, and class-wide statistics to improve outcomes.",
    icon: "📊",
  },
  {
    title: "Notifications",
    desc: "Stay updated with real-time alerts for new grades, upcoming deadlines, and important announcements.",
    icon: "🔔",
  },
  {
    title: "Collaboration",
    desc: "Enable group assignments where students can work together, share files, and submit collaborative projects.",
    icon: "🤝",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything You Need for Academic Success</h2>
      <p className="text-center mb-12 text-gray-700 max-w-2xl mx-auto">
        Powerful features designed to make assignment management effortless for both teachers and students.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 shadow transition-transform cursor-pointer
              bg-white text-gray-900 border border-gray-200
              hover:bg-primary-medium hover:text-white hover:border-primary-medium
              hover:shadow-lg hover:scale-105
            `}
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="font-semibold text-lg mb-2">{f.title}</div>
            <div className="text-sm leading-relaxed">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
