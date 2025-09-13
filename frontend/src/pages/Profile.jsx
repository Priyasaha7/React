import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-4">
        <FaUserCircle className="text-4xl text-blue-600" />
        My Profile
      </h1>
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Student ID:</strong> 123456789</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Degree:</strong> Bachelor of Science in Computer Science</p>
        <p><strong>Semester:</strong> 3</p>
        {/* Add edit button, profile pic upload etc. as future improvements */}
      </div>
    </div>
  );
}
