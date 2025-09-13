import React from "react";
import {
  FaClipboardList,
  FaHourglassHalf,
  FaStar,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaCalendarCheck,
  FaTasks,
  FaClock,
  FaFolder,
  FaChartBar,
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaEdit,
  FaBullhorn,
  FaArrowRight,
  FaChevronRight,
  FaArrowUp,
  FaArrowDown,
  FaCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-8 px-4">
      {/* 1. Header Section with Utility */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary-medium via-primary-light to-primary-dark rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Professor Smith! 👩‍🏫</h1>
            <p className="text-white/90 text-lg mb-4">You have new submissions to review and grades to finalize this week.</p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaClock className="w-4 h-4" />
              <span>Next Review Due: React Project in 2 days</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button
              className="bg-white text-primary-dark px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors duration-200 flex items-center gap-2"
              onClick={() => navigate("/teacher/grade-assignments")}
            >
              Start Reviewing Now
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Row: Quick Actions + Deadlines */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions (Left 50%) */}
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
          <SectionHeader title="Quick Actions" icon={<FaCheckCircle />} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <ActionButton label="Grade Assignments" icon={<FaEdit />} primary onClick={() => navigate("/teacher/grade-assignments")} />
            <ActionButton label="View Submissions" icon={<FaFolder />} onClick={() => navigate("/teacher/view-submissions")} />
            <ActionButton label="Create Assignment" icon={<FaTasks />} onClick={() => navigate("/teacher/create-assignment")} />
            <ActionButton label="Send Announcement" icon={<FaBullhorn />} onClick={() => navigate("/teacher/send-announcement")} />
            <ActionButton label="Profile" icon={<FaUsers />} onClick={() => navigate("/teacher/profile")} />
          </div>
        </section>

        {/* Upcoming Deadlines (Right 50%) */}
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
          <SectionHeader title="Upcoming Deadlines" icon={<FaCalendarAlt />} />
          <div className="space-y-3 mt-4">
            <DeadlineItem 
              label="React Project Reviews" 
              days="2 days" 
              urgency="high" 
              subject="Web Development"
              icon="💻"
            />
            <DeadlineItem 
              label="Essay Feedback" 
              days="5 days" 
              urgency="medium" 
              subject="Computer Science"
              icon="💾"
            />
            <DeadlineItem 
              label="Grade Submissions" 
              days="1 week" 
              urgency="low" 
              subject="Data Structures"
              icon="📊"
            />
          </div>
        </section>
      </div>

      {/* 3. Main Focus Area: Assignments to Review */}
      <div className="max-w-6xl mx-auto mt-8">
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100">
          <SectionHeader title="Assignments to Review" icon={<FaFolder />} />
          <div className="space-y-6 mt-6">
            <AssignmentReviewCard
              title="React.js Fundamentals Project"
              course="Web Development 101"
              due="Dec 15, 2024"
              studentsSubmitted={15}
              totalStudents={17}
              urgency="urgent"
              icon="💻"
            />
            <AssignmentReviewCard
              title="Database Design Essay"
              course="Computer Science 201"
              due="Dec 18, 2024"
              studentsSubmitted={22}
              totalStudents={28}
              urgency="due-soon"
              icon="💾"
            />
            <AssignmentReviewCard
              title="Algorithm Analysis Report"
              course="Data Structures & Algorithms"
              due="Dec 20, 2024"
              studentsSubmitted={18}
              totalStudents={25}
              urgency="ongoing"
              icon="📊"
            />
          </div>
        </section>
      </div>

      {/* 4. Performance Snapshot (Stats Row) */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard label="Classes Managed" value="4" icon={<FaUsers />} />
        <StatCard label="Assignments to Review" value="7" icon={<FaHourglassHalf />} />
        <StatCard label="Avg. Class Grade" value="B+" icon={<FaStar />} trend="up" diff="+2%" />
        <StatCard label="Feedback Given" value="39" icon={<FaCheckCircle />} />
      </div>

      {/* 5. Class Overview with Visual Enhancements */}
      <div className="max-w-6xl mx-auto mt-8">
        <section className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100">
          <SectionHeader title="Class Overview" icon={<FaChartBar />} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <ClassOverviewCard
              title="Web Development 101"
              students={32}
              assignments={7}
              progress={85}
              icon="💻"
              color="blue"
            />
            <ClassOverviewCard
              title="Computer Science 201"
              students={28}
              assignments={6}
              progress={72}
              icon="💾"
              color="primary"
            />
            <ClassOverviewCard
              title="Data Structures & Algorithms"
              students={25}
              assignments={5}
              progress={78}
              icon="📊"
              color="green"
            />
          </div>
        </section>
      </div>

      {/* 6. New Sections Row */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Insights */}
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
          <SectionHeader title="Student Insights" icon={<FaUsers />} />
          <div className="space-y-3 mt-4">
            <InsightItem type="top" name="Sarah Johnson" metric="98% avg" />
            <InsightItem type="top" name="Mike Chen" metric="95% avg" />
            <InsightItem type="alert" name="Alex Rivera" metric="Behind in 2 courses" />
          </div>
        </section>
        {/* Recent Activity */}
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
          <SectionHeader title="Recent Activity" icon={<FaChartLine />} />
          <div className="space-y-3 mt-4">
            <ActivityItem 
              action="New submission"
              detail="React Project - John Doe"
              time="5 min ago"
              type="submission"
            />
            <ActivityItem 
              action="Grade updated"
              detail="Database Essay - Jane Smith"
              time="1 hour ago"
              type="grade"
            />
            <ActivityItem 
              action="Announcement sent"
              detail="Midterm exam schedule"
              time="2 hours ago"
              type="announcement"
            />
          </div>
        </section>
        {/* Quick Analytics */}
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
          <SectionHeader title="This Week" icon={<FaChartBar />} />
          <div className="space-y-4 mt-4">
            <AnalyticsItem day="Monday" pending={12} completed={8} />
            <AnalyticsItem day="Wednesday" pending={8} completed={12} />
            <AnalyticsItem day="Friday" pending={3} completed={15} />
          </div>
        </section>
      </div>
    </div>
  );
}

// Enhanced Components

function StatCard({ label, value, icon, trend, diff }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center border border-gray-100">
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-primary-medium text-2xl">{icon}</div>
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        {trend && (
          <div className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        )}
      </div>
      <div className="font-semibold text-gray-600 text-center">{label}</div>
      {diff && (
        <div className="text-sm text-green-600 mt-2 font-medium bg-green-50 px-2 py-1 rounded-full">
          {diff} vs last month
        </div>
      )}
    </div>
  );
}

function SectionHeader({ title, icon }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-6">
      <div className="text-primary-medium text-xl">{icon}</div>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
}

function ActionButton({ label, icon, primary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-3 font-semibold shadow-sm transition-all duration-200 w-full border flex items-center justify-center gap-2 ${
        primary
          ? 'bg-primary-medium text-white hover:bg-primary-dark hover:shadow-md hover:scale-105 border-primary-medium'
          : 'bg-gray-50 text-gray-700 hover:bg-primary-light/10 hover:text-primary-dark hover:shadow-md border-gray-200 hover:border-primary-light'
      }`}>
      {icon && <span className="text-sm">{icon}</span>}
      {label}
    </button>
  );
}

function DeadlineItem({ label, days, urgency, subject, icon }) {
  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high": return "border-l-red-500 bg-red-50";
      case "medium": return "border-l-yellow-500 bg-yellow-50";
      case "low": return "border-l-green-500 bg-green-50";
      default: return "border-l-gray-500 bg-gray-50";
    }
  };

  return (
    <div className={`border-l-4 ${getUrgencyColor(urgency)} p-3 rounded-r-lg flex items-center justify-between`}>
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <div>
          <div className="font-semibold text-gray-800">{label}</div>
          <div className="text-sm text-gray-600">{subject}</div>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-700">in {days}</div>
    </div>
  );
}

function AssignmentReviewCard({ title, course, due, studentsSubmitted, totalStudents, urgency, icon }) {
  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case "urgent": return "bg-red-100 text-red-800 border-red-200";
      case "due-soon": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "ongoing": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case "urgent": return "Urgent";
      case "due-soon": return "Due Soon";
      case "ongoing": return "Ongoing";
      default: return "Normal";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border border-gray-200 rounded-lg p-6 hover:border-primary-light hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <div className="text-gray-800 font-semibold text-lg">{title}</div>
          <div className="text-gray-600 text-sm font-medium">{course}</div>
          <div className="text-gray-500 text-xs mt-1">Due: {due}</div>
          <div className="text-gray-600 text-sm mt-1">
            {studentsSubmitted}/{totalStudents} students submitted
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4 lg:mt-0">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getUrgencyBadge(urgency)}`}>
          {getUrgencyText(urgency)}
        </span>
        <button className="px-4 py-2 rounded-lg bg-primary-medium text-white font-semibold shadow-sm hover:bg-primary-dark hover:shadow-md hover:scale-105 transition-all duration-200">
          Start Grading
        </button>
      </div>
    </div>
  );
}

function ClassOverviewCard({ title, students, assignments, progress, icon, color }) {
  const getProgressColor = (color, progress) => {
    const baseColor = color === 'primary' ? 'primary-medium' : color === 'blue' ? 'blue-500' : 'green-500';
    return progress > 80 ? `text-${baseColor}` : progress > 60 ? 'text-yellow-600' : 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{students} students • {assignments} assignments</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Course Progress</span>
        <span className={`font-bold text-lg ${getProgressColor(color, progress)}`}>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div 
          className={`h-2 rounded-full ${color === 'primary' ? 'bg-primary-medium' : color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

function InsightItem({ type, name, metric }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
      <div className="flex items-center gap-2">
        <FaCircle className={`w-2 h-2 ${type === 'top' ? 'text-green-500' : 'text-red-500'}`} />
        <span className="text-sm font-medium text-gray-800">{name}</span>
      </div>
      <span className={`text-xs ${type === 'top' ? 'text-green-600' : 'text-red-600'}`}>{metric}</span>
    </div>
  );
}

function ActivityItem({ action, detail, time, type }) {
  const getTypeColor = (type) => {
    switch (type) {
      case 'submission': return 'text-blue-500';
      case 'grade': return 'text-green-500';
      case 'announcement': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="flex items-start gap-3 p-2">
      <FaCircle className={`w-2 h-2 mt-2 ${getTypeColor(type)}`} />
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-800">{action}</div>
        <div className="text-xs text-gray-600">{detail}</div>
        <div className="text-xs text-gray-500 mt-1">{time}</div>
      </div>
    </div>
  );
}

function AnalyticsItem({ day, pending, completed }) {
  return (
    <div className="flex items-center justify-between p-2">
      <span className="text-sm font-medium text-gray-700">{day}</span>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-red-600">{pending} pending</span>
        <span className="text-green-600">{completed} done</span>
      </div>
    </div>
  );
}
