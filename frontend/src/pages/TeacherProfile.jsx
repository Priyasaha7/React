import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaUsers,
  FaCheckCircle,
  FaCog,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserGraduate
} from "react-icons/fa";

export default function TeacherProfile() {
  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 border border-primary-light">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="p-4 rounded-full bg-primary-light text-primary-dark shadow">
            <FaUserCircle className="text-6xl" />
          </div>
          <h1 className="text-3xl font-bold text-primary-dark mt-2">Professor Smith</h1>
          <span className="text-primary-medium text-lg">Web Development Teacher</span>
          <span className="text-gray-500 text-sm">Department of Computer Science</span>
          <div className="flex gap-2 text-primary-medium text-xs items-center mt-1">
            <FaCalendarAlt className="inline" /> Priya: September 2023
          </div>
        </div>

        {/* Quick Stat Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <StatCard
            icon={<FaChalkboardTeacher />}
            label="Courses Taught"
            value="5"
          />
          <StatCard
            icon={<FaUserGraduate />}
            label="Students Mentored"
            value="120"
          />
        </div>

        {/* Info Cards */}
        <div className="space-y-4 mb-6">
          <InfoRow icon={<FaEnvelope />} label="Email" value="smith@example.com" />
          <InfoRow icon={<FaPhone />} label="Phone" value="+91 9876543210" />
          <InfoRow icon={<FaMapMarkerAlt />} label="Location" value="Pune, India" />
          <InfoRow icon={<FaUsers />} label="Classes Managed" value="4" />
          <InfoRow icon={<FaCheckCircle />} label="Assignments Reviewed" value="39" />
        </div>

        {/* Bio */}
        <div className="bg-primary-light/20 p-4 rounded-lg mb-6">
          <p className="text-primary-dark text-sm">
            <span className="font-bold">Bio:</span> Passionate educator with 10+ years of experience in empowering students with modern web skills. Loves mentoring, hackathons, and collaborative growth.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-primary-medium text-white font-semibold rounded-lg hover:bg-primary-dark flex items-center gap-2 shadow-sm transition">
            <FaUserCircle /> Edit Profile
          </button>
          <button className="px-4 py-2 border border-primary-light text-primary-dark rounded-lg hover:bg-primary-light/40 flex items-center gap-2 transition">
            <FaEnvelope /> Message
          </button>
          <button className="px-4 py-2 border border-primary-light text-primary-dark rounded-lg hover:bg-primary-light/40 flex items-center gap-2 transition">
            <FaCog /> Settings
          </button>
        </div>

        {/* Profile Completion Bar */}
        <div className="mt-8">
          <div className="flex justify-between mb-1">
            <span className="text-primary-medium font-medium">Profile Completion</span>
            <span className="text-primary-medium font-semibold">80%</span>
          </div>
          <div className="w-full bg-primary-light rounded-full h-3">
            <div className="bg-primary-medium h-3 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-primary-light/30 p-4 rounded-lg shadow-sm">
      <div className="p-2 rounded-full bg-primary-light text-primary-medium text-xl">{icon}</div>
      <div>
        <div className="text-lg font-bold text-primary-dark">{value}</div>
        <div className="text-xs text-primary-medium">{label}</div>
      </div>
    </div>
  );
}

// Info Row Component
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-primary-light/10 p-3 rounded-lg">
      <span className="p-2 bg-primary-light text-primary-medium rounded-full">{icon}</span>
      <span>
        <span className="font-medium text-primary-dark">{label}:</span>{" "}
        <span className="text-primary-medium">{value}</span>
      </span>
    </div>
  );
}
