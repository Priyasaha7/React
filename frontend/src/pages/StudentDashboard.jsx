import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaHourglassHalf,
  FaStar,
  FaChartLine,
  FaCheckCircle,
  FaCalendarCheck,
  FaTasks,
  FaClock,
  FaFolder,
  FaChartBar,
  FaCalendarAlt,
  FaUsers,
  FaBullhorn,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
  FaCircle,
  FaSearch,
  FaBell,
  FaBook,
  FaMedal,
  FaUserCircle,
  FaDownload,
  FaUpload,
} from "react-icons/fa";

export default function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const allAssignments = [
    {
      title: "React.js Fundamentals Project",
      course: "Web Development 101",
      due: "Dec 15, 2024",
      points: 100,
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Database Design Essay",
      course: "Computer Science 201",
      due: "Dec 18, 2024",
      points: 75,
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Algorithm Analysis Report",
      course: "Data Structures & Algorithms",
      due: "Dec 20, 2024",
      points: 85,
      status: "Overdue",
      statusColor: "bg-red-100 text-red-800",
    },
  ];

  const filteredAssignments = useMemo(() => {
    if (!searchTerm.trim()) return allAssignments;
    return allAssignments.filter(
      (a) =>
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-white min-h-screen py-8 px-4">
      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary-medium via-primary-light to-primary-dark rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-2">
              Welcome back, John! <span role="img" aria-label="wave">👋</span>
            </h1>
            <p className="text-white/90 text-lg mb-4">
              Stay on top of your submissions and deadlines this week.
            </p>
            <div className="flex items-center gap-2 text-white/90 text-base font-medium">
              <FaClock className="w-5 h-5" />
              <span>Next Due: React Project in 2 days</span>
            </div>
          </div>
          <Link
            to="/student-dashboard"
            className="bg-white text-primary-dark px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors duration-200 flex items-center gap-2 text-lg shadow-md"
          >
            Work on Assignments <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Header with Profile and Search */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
        <div className="flex items-center gap-3">
          <FaUserCircle className="w-12 h-12 text-primary-medium" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">John</h2>
            <p className="text-gray-600">Semester 3 • ID: 12345678</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search assignments or courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-primary-medium"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <FaBell className="w-6 h-6 text-gray-600 cursor-pointer" title="Notifications" />
        </div>
      </div>

      {/* Quick Actions + Upcoming Deadlines */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-4">
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 border border-gray-100">
          <SectionHeader title="Quick Actions" icon={<FaCheckCircle />} />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Link to="/student/submit-assignment"><ActionButton label="Submit Assignment" icon={<FaClipboardList />} primary /></Link>
            <Link to="/student/view-grades"><ActionButton label="View Grades" icon={<FaStar />} /></Link>
            <Link to="/student/check-deadlines"><ActionButton label="Check Deadlines" icon={<FaCalendarAlt />} /></Link>
            <Link to="/student/progress"><ActionButton label="View Progress" icon={<FaChartLine />} /></Link>
            <Link to="/student/resources/import"><ActionButton label="Import" icon={<FaUpload />} /></Link>
            <Link to="/student/resources/export"><ActionButton label="Export" icon={<FaDownload />} /></Link>
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 border border-gray-100">
          <SectionHeader title="Upcoming Deadlines" icon={<FaCalendarAlt />} />
          <div className="space-y-3 mt-4">
            <DeadlineItem label="React Project" days="2 days" urgency="high" subject="Web Dev" icon="💻" />
            <DeadlineItem label="Database Essay" days="5 days" urgency="medium" subject="CS" icon="💾" />
            <DeadlineItem label="Algorithm Report" days="1 week" urgency="low" subject="Data Structures" icon="📊" />
          </div>
        </section>
      </div>

      {/* Upcoming Assignments */}
      <div className="max-w-6xl mx-auto mb-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <SectionHeader title="Upcoming Assignments" icon={<FaFolder />} />
        <div className="space-y-5">
          {filteredAssignments.length === 0 ? (
            <p className="text-center text-gray-500">No assignments found.</p>
          ) : (
            filteredAssignments.map(({ title, course, due, points, status, statusColor }, idx) => (
              <AssignmentItem
                key={idx}
                icon={<FaClipboardList className="text-primary-medium w-6 h-6" />}
                title={title}
                course={course}
                due={due}
                points={points}
                status={status}
                statusColor={statusColor}
              />
            ))
          )}
        </div>
      </div>

      {/* KPI Stats */}
      <div className="max-w-6xl mx-auto mt-2 grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatCard label="Total Assignments" value="24" icon={<FaTasks />} />
        <StatCard label="Pending Submissions" value="3" icon={<FaHourglassHalf />} />
        <StatCard label="Average Grade" value="A-" icon={<FaStar />} trend="up" diff="+8%" />
        <StatCard label="Course Progress" value="78%" icon={<FaChartLine />} trend="up" diff="+15%" />
      </div>

      {/* Insights / Activity / This Week */}
      <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <SectionHeader title="Insights" icon={<FaChartBar />} />
          <div className="space-y-3 mt-4">
            <InsightItem type="top" name="Highest Grade: React Project" metric="98%" />
            <InsightItem type="top" name="Consistent on time" metric="90%" />
            <InsightItem type="alert" name="1 Assignment Overdue" metric="Act Now!" />
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <SectionHeader title="Recent Activity" icon={<FaChartLine />} />
          <div className="space-y-3 mt-4">
            <ActivityItem action="Submitted" detail="React Project" time="10 min ago" type="submission" />
            <ActivityItem action="Grade posted" detail="Database Essay" time="1 hour ago" type="grade" />
            <ActivityItem action="Feedback received" detail="Algorithm Report" time="2 hours ago" type="feedback" />
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <SectionHeader title="This Week" icon={<FaCalendarAlt />} />
          <div className="space-y-4 mt-4">
            <AnalyticsItem day="Monday" pending={3} completed={2} />
            <AnalyticsItem day="Wednesday" pending={2} completed={4} />
            <AnalyticsItem day="Friday" pending={1} completed={5} />
          </div>
        </section>
      </div>

      {/* Personalized Study Planner */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
        <SectionHeader title="Personalized Study Planner" icon={<FaCalendarCheck />} />
        <p className="text-gray-600 mb-4">Auto-generated weekly timetable and tasks to stay on track</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
            <div key={day} className="bg-gray-50 p-3 rounded-lg shadow-inner">
              <h4 className="font-semibold text-gray-800 mb-2">{day}</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Web Dev Lecture</li>
                <li>CS Lab</li>
                <li className="font-bold text-red-600">React Project Due</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance, Announcements, Achievements */}
      <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <SectionHeader title="Attendance Tracking" icon={<FaClock />} />
          <div className="space-y-4">
            <AttendanceItem course="Web Development" attendance={92} threshold={75} nextClass="Sep 10, 10:00AM" />
            <AttendanceItem course="Computer Science" attendance={68} threshold={75} nextClass="Sep 11, 1:00PM" warning />
            <AttendanceItem course="Data Structures" attendance={85} threshold={75} nextClass="Sep 12, 9:00AM" />
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <SectionHeader title="Announcements & Notifications" icon={<FaBullhorn />} />
          <div className="space-y-3 mt-4 text-gray-700">
            <AnnouncementItem text="New grade posted for React Project." time="1h ago" />
            <AnnouncementItem text="Midterm exam schedule updated." time="Yesterday" />
            <AnnouncementItem text="University circular on library hours extended." time="2 days ago" />
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <SectionHeader title="Achievements & Badges" icon={<FaMedal />} />
          <div className="space-y-4 flex flex-wrap gap-4 justify-center mt-4">
            <Badge label="5 Assignments On Time" color="bg-green-100 text-green-800" />
            <Badge label="7-Day Submission Streak" color="bg-primary-light text-primary-dark" />
            <Badge label="Top 10% in Class" color="bg-yellow-100 text-yellow-800" />
          </div>
        </section>
      </div>

      {/* Peer Collaboration */}
      <div className="max-w-6xl mx-auto mb-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <SectionHeader title="Peer Collaboration" icon={<FaUsers />} />
        <p className="text-gray-600 mb-4">See classmates, group statuses, and message options</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PeerCard name="Anna Smith" status="Working on React Project" />
          <PeerCard name="Mike Lee" status="Reviewing Database Essay" />
          <PeerCard name="Sara Chang" status="Completed Algorithm Report" />
        </div>
      </div>

      {/* Learning Resources */}
      <div className="max-w-6xl mx-auto mb-12 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <SectionHeader title="Learning Resources" icon={<FaBook />} />
        <ul className="list-disc list-inside text-primary-dark space-y-2 mt-4">
          <li>
            <a href="#" className="underline hover:text-primary-medium">React.js Lecture Notes</a>
          </li>
          <li>
            <a href="#" className="underline hover:text-primary-medium">Database Design Reading</a>
          </li>
          <li>
            <a href="#" className="underline hover:text-primary-medium">Algorithm Practice Quizzes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Helper Components (unchanged)
function SectionHeader({ title, icon }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-6">
      <div className="text-primary-medium text-xl">{icon}</div>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
}

function ActionButton({ label, icon, primary }) {
  return (
    <button
      className={`rounded-lg px-4 py-3 font-semibold shadow-sm transition-all duration-200 w-full border flex items-center justify-center gap-2 ${
        primary
          ? "bg-primary-medium text-white hover:bg-primary-dark hover:shadow-md hover:scale-105 border-primary-medium"
          : "bg-gray-50 text-gray-700 hover:bg-primary-light/10 hover:text-primary-dark hover:shadow-md border-gray-200 hover:border-primary-light"
      }`}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {label}
    </button>
  );
}

function DeadlineItem({ label, days, urgency, subject, icon }) {
  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
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

function AssignmentItem({ icon, title, course, due, points, status, statusColor }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between border border-gray-200 rounded-lg p-4 mb-2">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-primary-light/10 p-2 border border-primary-light/30">
          {icon}
        </div>
        <div>
          <div className="text-gray-800 font-semibold text-lg">{title}</div>
          <div className="text-gray-600 text-sm font-medium">{course}</div>
          <div className="text-gray-500 text-xs mt-1">
            Due: {due} • Points: {points}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-200">
          View Details
        </button>
        <button className="px-4 py-2 rounded-lg bg-primary-medium text-white font-semibold shadow-sm hover:bg-primary-dark hover:shadow-md hover:scale-105 transition-all duration-200">
          Submit Work
        </button>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusColor}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, trend, diff }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center border border-gray-100">
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-primary-medium text-2xl">{icon}</div>
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        {trend && (
          <div className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
            {trend === "up" ? <FaArrowUp /> : <FaArrowDown />}
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

function InsightItem({ type, name, metric }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
      <div className="flex items-center gap-2">
        <FaCircle className={`w-2 h-2 ${type === "top" ? "text-green-500" : "text-red-500"}`} />
        <span className="text-sm font-medium text-gray-800">{name}</span>
      </div>
      <span className={`text-xs ${type === "top" ? "text-green-600" : "text-red-600"}`}>{metric}</span>
    </div>
  );
}

function ActivityItem({ action, detail, time, type }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "submission":
        return "text-blue-500";
      case "grade":
        return "text-green-500";
      case "feedback":
        return "text-purple-500";
      default:
        return "text-gray-500";
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

function AttendanceItem({ course, attendance, threshold, nextClass, warning }) {
  return (
    <div className="p-3 rounded-lg border border-gray-200">
      <div className="flex justify-between mb-1 font-semibold text-gray-800">{course}</div>
      <div className="h-4 rounded-full bg-gray-200 overflow-hidden relative mb-2">
        <div
          className={`h-4 rounded-full ${attendance < threshold ? "bg-red-600" : "bg-primary-medium"}`}
          style={{ width: `${attendance}%` }}
          title={`${attendance}% Attendance`}
        />
      </div>
      <div className="text-sm text-gray-600 mb-1">
        Attendance: {attendance}% {warning && <span className="text-red-600 font-bold ml-2">(Low!)</span>}
      </div>
      <div className="text-sm font-medium text-primary-medium">Next Class: {nextClass}</div>
    </div>
  );
}

function AnnouncementItem({ text, time }) {
  return (
    <div className="border-b border-gray-200 pb-2 last:border-none">
      <p className="text-gray-700">{text}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}

function Badge({ label, color }) {
  return <span className={`${color} px-3 py-1 rounded-full text-sm font-semibold`}>{label}</span>;
}

function PeerCard({ name, status }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="font-bold text-gray-800 mb-1">{name}</div>
      <div className="text-sm text-gray-600">{status}</div>
      <button className="mt-3 px-4 py-2 bg-primary-medium text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
        Message
      </button>
    </div>
  );
}
