import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";

export default function ProtectedDashboard() {
  const { user } = useAuth();

  if (!user) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  if (user.role === "teacher") {
    return <TeacherDashboard />;
  } else if (user.role === "student") {
    return <StudentDashboard />;
  }

  // Unknown role, redirect to home or login
  return <Navigate to="/" replace />;
}
