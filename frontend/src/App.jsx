import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import ContactModal from "./components/ContactModal";
import GradeAssignmentsPage from "./pages/GradeAssignmentsPage";
import ViewSubmissionsPage from "./pages/ViewSubmissionsPage";
import CreateAssignmentPage from "./pages/CreateAssignmentPage";
import SendAnnouncementPage from "./pages/SendAnnouncementPage";
import TeacherProfile from "./pages/TeacherProfile";

import SubmitAssignment from "./pages/SubmitAssignment";
import ViewGrades from "./pages/ViewGrades";
import CheckDeadlines from "./pages/CheckDeadlines";
import Progress from "./pages/Progress";
import ResourcesImport from "./pages/ResourcesImport";
import ResourcesExport from "./pages/ResourcesExport";
import Profile from "./pages/Profile";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowContactModal(false);
  }, [location]);

  return (
    <>
      <Navbar onContactClick={() => setShowContactModal(true)} />
      <main className="min-h-[calc(100vh-64px-100px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/grade-assignments" element={<GradeAssignmentsPage />} />
          <Route path="/teacher/view-submissions" element={<ViewSubmissionsPage />} />
          <Route path="/teacher/create-assignment" element={<CreateAssignmentPage />} />
          <Route path="/teacher/send-announcement" element={<SendAnnouncementPage />} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />

          {/* Student quick action pages */}
          <Route path="/student/submit-assignment" element={<SubmitAssignment />} />
          <Route path="/student/view-grades" element={<ViewGrades />} />
          <Route path="/student/check-deadlines" element={<CheckDeadlines />} />
          <Route path="/student/progress" element={<Progress />} />
          <Route path="/student/resources/import" element={<ResourcesImport />} />
          <Route path="/student/resources/export" element={<ResourcesExport />} />
          <Route path="/student/profile" element={<Profile />} />
        </Routes>
      </main>
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </>
  );
}

export default App;
