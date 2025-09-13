import React, { useState } from "react";
import Footer from '../components/Footer';

import {
  FaPlay,
  FaUser,
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartBar,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaEye,
  FaDownload,
  FaUpload,
  FaStar,
  FaUsers,
  FaBell,
  FaFileAlt,
} from "react-icons/fa";

export default function Demo() {
  const [activeTab, setActiveTab] = useState("student");
  const [activeFeature, setActiveFeature] = useState("dashboard");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light via-primary-medium to-primary-dark py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience AssignmentHub in Action
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore our interactive demo to see how AssignmentHub streamlines academic workflows for both students and teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-dark px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <FaPlay className="w-5 h-5" />
              Watch 2-Minute Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-dark transition-all duration-200">
              Try Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Experience</h2>
            <p className="text-gray-600">Explore AssignmentHub from different perspectives</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setActiveTab("student")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "student"
                    ? "bg-primary-medium text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FaUser className="w-4 h-4" />
                Student View
              </button>
              <button
                onClick={() => setActiveTab("teacher")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "teacher"
                    ? "bg-primary-medium text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FaChalkboardTeacher className="w-4 h-4" />
                Teacher View
              </button>
            </div>
          </div>

          {/* Demo Content */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {activeTab === "student" ? <StudentDemo /> : <TeacherDemo />}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our powerful features work together to create a seamless academic experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaClipboardList />}
              title="Assignment Management"
              description="Create, distribute, and track assignments with ease"
              demoText="View Demo"
              color="primary"
            />
            <FeatureCard
              icon={<FaChartBar />}
              title="Progress Analytics"
              description="Real-time insights into student performance and engagement"
              demoText="View Demo"
              color="blue"
            />
            <FeatureCard
              icon={<FaCalendarAlt />}
              title="Deadline Tracking"
              description="Never miss a deadline with smart notifications and reminders"
              demoText="View Demo"
              color="green"
            />
            <FeatureCard
              icon={<FaCheckCircle />}
              title="Auto Grading"
              description="Streamline grading with automated scoring and feedback"
              demoText="View Demo"
              color="orange"
            />
            <FeatureCard
              icon={<FaUsers />}
              title="Class Management"
              description="Organize students, track progress, and facilitate collaboration"
              demoText="View Demo"
              color="purple"
            />
            <FeatureCard
              icon={<FaBell />}
              title="Smart Notifications"
              description="Stay updated with relevant alerts and reminders"
              demoText="View Demo"
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Interactive Walkthrough */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Step-by-Step Walkthrough</h2>
            <p className="text-gray-600">Follow a typical workflow from assignment creation to completion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <WalkthroughStep
              step="1"
              title="Create Assignment"
              description="Teacher creates and configures a new assignment with rubrics and deadlines"
              icon={<FaFileAlt />}
            />
            <WalkthroughStep
              step="2"
              title="Students Submit"
              description="Students receive notifications and submit their work through the platform"
              icon={<FaUpload />}
            />
            <WalkthroughStep
              step="3"
              title="Review & Grade"
              description="Teacher reviews submissions, provides feedback, and assigns grades"
              icon={<FaStar />}
            />
            <WalkthroughStep
              step="4"
              title="Track Progress"
              description="Both parties can monitor progress and performance through analytics"
              icon={<FaChartBar />}
            />
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Ready to Get Started?</h2>
          <p className="text-white text-lg mb-8">
            Join thousands of educators and students who are already streamlining their academic workflows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-medium text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2">
              Start Free Trial
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-primary-medium text-primary-dark px-8 py-4 rounded-lg font-bold hover:bg-primary-medium hover:text-white transition-all duration-200">
              Schedule Demo Call
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Student Demo Component
function StudentDemo() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Student Dashboard Experience</h3>
        <p className="text-gray-600">See how students manage assignments, track progress, and submit work</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <DemoFeatureItem
            icon={<FaClipboardList />}
            title="Assignment Overview"
            description="View all assignments with due dates, status, and priority levels"
            status="Active"
          />
          <DemoFeatureItem
            icon={<FaUpload />}
            title="Easy Submissions"
            description="Submit work with drag-and-drop file uploads or text editor"
            status="Demo"
          />
          <DemoFeatureItem
            icon={<FaChartBar />}
            title="Progress Tracking"
            description="Monitor grades, performance trends, and course progress"
            status="Live"
          />
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-800">Upcoming Assignments</h4>
              <span className="text-sm text-gray-500">3 pending</span>
            </div>
            <div className="space-y-3">
              <AssignmentPreview
                title="React.js Project"
                course="Web Development"
                due="2 days"
                status="pending"
              />
              <AssignmentPreview
                title="Database Essay"
                course="Computer Science"
                due="5 days"
                status="pending"
              />
              <AssignmentPreview
                title="Algorithm Analysis"
                course="Data Structures"
                due="1 week"
                status="completed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Teacher Demo Component
function TeacherDemo() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Teacher Dashboard Experience</h3>
        <p className="text-gray-600">Discover how teachers create assignments, grade submissions, and track class performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <DemoFeatureItem
            icon={<FaFileAlt />}
            title="Assignment Creation"
            description="Create detailed assignments with rubrics, deadlines, and distribution settings"
            status="Active"
          />
          <DemoFeatureItem
            icon={<FaCheckCircle />}
            title="Grading Tools"
            description="Grade submissions efficiently with built-in rubrics and feedback tools"
            status="Demo"
          />
          <DemoFeatureItem
            icon={<FaUsers />}
            title="Class Analytics"
            description="Monitor class performance, engagement, and individual student progress"
            status="Live"
          />
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-800">Assignments to Review</h4>
              <span className="text-sm text-gray-500">7 pending</span>
            </div>
            <div className="space-y-3">
              <GradingPreview
                title="React.js Project"
                students="15/17 submitted"
                status="urgent"
              />
              <GradingPreview
                title="Database Essay"
                students="22/28 submitted"
                status="due-soon"
              />
              <GradingPreview
                title="Algorithm Report"
                students="18/25 submitted"
                status="ongoing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function FeatureCard({ icon, title, description, demoText, color }) {
  const getColorClasses = (color) => {
    switch (color) {
      case "primary": return "bg-primary-light text-primary-dark border-primary-light";
      case "blue": return "bg-blue-100 text-blue-800 border-blue-200";
      case "green": return "bg-green-100 text-green-800 border-green-200";
      case "orange": return "bg-orange-100 text-orange-800 border-orange-200";
      case "purple": return "bg-purple-100 text-purple-800 border-purple-200";
      case "red": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className={`inline-flex p-3 rounded-lg ${getColorClasses(color)} mb-4`}>
        <div className="text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-primary-medium font-semibold hover:text-primary-dark transition-colors duration-200 flex items-center gap-2">
        {demoText}
        <FaEye className="w-4 h-4" />
      </button>
    </div>
  );
}

function WalkthroughStep({ step, title, description, icon }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="bg-primary-medium text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
        {step}
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-primary-medium text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DemoFeatureItem({ icon, title, description, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Demo": return "bg-blue-100 text-blue-800";
      case "Live": return "bg-primary-light text-primary-dark";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary-light transition-colors duration-200">
      <div className="text-primary-medium text-xl mt-1">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function AssignmentPreview({ title, course, due, status }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
      <div>
        <div className="font-medium text-gray-800">{title}</div>
        <div className="text-sm text-gray-600">{course}</div>
      </div>
      <div className="text-right">
        <div className={`text-sm font-medium ${status === 'completed' ? 'text-green-600' : 'text-orange-600'}`}>
          {status === 'completed' ? 'Submitted' : `Due in ${due}`}
        </div>
      </div>
    </div>
  );
}

function GradingPreview({ title, students, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "urgent": return "bg-red-100 text-red-800";
      case "due-soon": return "bg-yellow-100 text-yellow-800";
      case "ongoing": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
      <div>
        <div className="font-medium text-gray-800">{title}</div>
        <div className="text-sm text-gray-600">{students}</div>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
        {status === 'urgent' ? 'Urgent' : status === 'due-soon' ? 'Due Soon' : 'Ongoing'}
      </span>
    </div>
  );
}
