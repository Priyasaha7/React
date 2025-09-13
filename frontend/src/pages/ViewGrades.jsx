import React from "react";
import { FaClipboardList } from "react-icons/fa";

export default function ViewGrades() {
  // Hardcoded sample grades data
  const grades = [
    {
      id: 1,
      assignment: "React.js Fundamentals Project",
      course: "Web Development 101",
      grade: "A",
      status: "Passed",
    },
    {
      id: 2,
      assignment: "Database Design Essay",
      course: "Computer Science 201",
      grade: "B+",
      status: "Passed",
    },
    {
      id: 3,
      assignment: "Algorithm Analysis Report",
      course: "Data Structures & Algorithms",
      grade: "C",
      status: "Failed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-xl shadow-lg border border-primary-light">
        <h1 className="text-3xl font-bold mb-6 text-primary-dark text-center">View Grades</h1>

        {grades.length === 0 ? (
          <div className="text-center text-gray-500 max-w-md mx-auto">
            <FaClipboardList size={48} className="mx-auto mb-4 text-primary-medium" />
            <p>Your graded assignments will appear here once available.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-primary-light text-primary-dark">
                <th className="p-3 border border-gray-300">Assignment</th>
                <th className="p-3 border border-gray-300">Course</th>
                <th className="p-3 border border-gray-300">Grade</th>
                <th className="p-3 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(({ id, assignment, course, grade, status }) => (
                <tr key={id} className="hover:bg-primary-light/50 transition">
                  <td className="p-3 border border-gray-300 font-semibold">{assignment}</td>
                  <td className="p-3 border border-gray-300">{course}</td>
                  <td className="p-3 border border-gray-300 font-bold">{grade}</td>
                  <td className="p-3 border border-gray-300">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        status === "Passed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
