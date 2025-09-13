import React, { useState } from "react";

const items = [
  {
    title: "React.js Fundamentals Project",
    course: "Web Development 101",
    due: "Dec 15, 2024",
    status: "Pending",
    button: "Submit Work",
    points: "100",
    color: "bg-yellow-500",
    type: "student"
  },
  {
    title: "Database Design Essay",
    course: "Computer Science 201",
    due: "Dec 10, 2024",
    status: "Submitted",
    points: "75",
    color: "bg-blue-500",
    type: "student"
  },
  {
    title: "Marketing Strategy Presentation",
    course: "Business Studies",
    due: "Dec 8, 2024",
    status: "Graded",
    grade: "A+",
    points: "90",
    color: "bg-green-500",
    type: "student"
  },
];

const teacherItems = [
  {
    title: "Grade Web Development Projects",
    course: "CS 101 - 25 submissions",
    due: "Dec 16, 2024",
    status: "In Progress",
    button: "Continue Grading",
    points: "8/25 graded",
    color: "bg-orange-500",
    type: "teacher"
  },
  {
    title: "Database Assignment Review",
    course: "CS 201 - 30 submissions", 
    due: "Dec 12, 2024",
    status: "Complete",
    points: "30/30 graded",
    color: "bg-green-500",
    type: "teacher"
  },
  {
    title: "Create Final Exam Questions",
    course: "Business Studies",
    due: "Dec 20, 2024", 
    status: "Draft",
    button: "Edit Questions",
    points: "5/10 questions",
    color: "bg-purple-500",
    type: "teacher"
  },
];

export default function AcademicDashboard() {
  const [activeView, setActiveView] = useState("student");
  const currentItems = activeView === "student" ? items : teacherItems;

  return (
    <section className="w-full px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Your Academic Dashboard</h2>
      <p className="text-center mb-6 text-gray-700">
        Get a preview of how teachers and students manage their assignments
      </p>
      
      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-md">
          <button 
            onClick={() => setActiveView("student")}
            className={`px-6 py-2 rounded-md font-semibold transition ${
              activeView === "student" 
                ? "bg-primary-300 text-white" 
                : "text-gray-600 hover:text-primary-300"
            }`}
          >
            Student View
          </button>
          <button 
            onClick={() => setActiveView("teacher")}
            className={`px-6 py-2 rounded-md font-semibold transition ${
              activeView === "teacher" 
                ? "bg-primary-300 text-white" 
                : "text-gray-600 hover:text-primary-300"
            }`}
          >
            Teacher View
          </button>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center max-w-6xl mx-auto">
        {currentItems.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 min-w-[320px] max-w-[380px] flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <div className="text-sm text-gray-500 mb-3">{item.course}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-3 py-1 rounded-full font-bold text-white ${item.color}`}>
                  {item.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Due: {item.due}</div>
                <div>Points: {item.points}{item.grade && <> ({item.grade})</>}</div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t">
              <button className="text-primary-300 font-semibold hover:underline text-sm">
                View Details
              </button>
              {item.button && (
                <button className="bg-primary-300 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-400 transition text-sm">
                  {item.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Preview */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-center mb-6">Grade Analytics Overview</h3>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">92%</div>
              <div className="text-sm text-gray-600">Average Grade</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Submission Rate</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Active Assignments</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">Due This Week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
