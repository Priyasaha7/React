import React, { useState } from "react";
import { 
  FaFolder, FaCheckCircle, FaClock, FaFilter, FaEye, FaInbox, FaDownload 
} from "react-icons/fa";

const mockSubmissions = [
  { name: "John Doe", assignment: "React Project", status: "Submitted", date: "Sep 3, 2025" },
  { name: "Jane Smith", assignment: "React Project", status: "Pending", date: "-" },
  { name: "Alex Rivera", assignment: "Algorithm Analysis", status: "Submitted", date: "Sep 2, 2025" },
];

export default function ViewSubmissionsPage() {
  const [filter, setFilter] = useState("All");
  const assignments = ["All", ...new Set(mockSubmissions.map(s => s.assignment))];
  const displayed = filter === "All" ? mockSubmissions : mockSubmissions.filter(s => s.assignment === filter);

  const submissionCounts = {
    total: mockSubmissions.length,
    submitted: mockSubmissions.filter(s => s.status === "Submitted").length,
    pending: mockSubmissions.filter(s => s.status !== "Submitted").length,
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-primary-light/10 backdrop-blur rounded-xl shadow-lg p-8 border border-primary-light/40">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-primary-light text-primary-dark">
            <FaFolder className="text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">View Submissions</h1>
            <p className="text-sm text-primary-medium">Track and manage student submissions easily</p>
            <div className="text-xs text-primary-medium mt-1">
              {submissionCounts.total} submissions &middot; {submissionCounts.submitted} submitted, {submissionCounts.pending} pending
            </div>
          </div>
          <div className="ml-auto">
            <button 
              className="flex items-center gap-2 px-3 py-1 rounded bg-primary-light text-primary-dark font-semibold text-xs shadow hover:bg-primary-medium hover:text-white transition"
              title="Download CSV"
            >
              <FaDownload /> Download CSV
            </button>
          </div>
        </div>
        {/* Assignment Filter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2 bg-primary-light/20 p-3 rounded-lg shadow-sm w-fit">
            <FaFilter className="text-primary-medium" />
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="rounded-md border border-primary-light px-3 py-2 text-primary-dark bg-white focus:ring-2 focus:ring-primary-medium outline-none"
            >
              {assignments.map(assign => (
                <option key={assign}>{assign}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submission Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-primary-light rounded-lg shadow-sm">
            <thead>
              <tr className="bg-primary-light/30 text-primary-dark">
                <th className="py-3 px-4 text-left rounded-tl-lg">Student</th>
                <th className="py-3 px-4 text-left">Assignment</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map((s, i) => (
                <tr 
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-primary-light/10"}
                >
                  {/* Student with avatar */}
                  <td className="py-3 px-4 flex items-center gap-2 rounded-l-lg">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-light text-primary-dark font-bold">
                      {s.name.split(" ").map(word => word[0]).join("").toUpperCase()}
                    </div>
                    <span className="font-medium text-primary-medium">{s.name}</span>
                  </td>
                  <td className="py-3 px-4">{s.assignment}</td>
                  {/* Status with icon */}
                  <td className="py-3 px-4 font-semibold flex items-center gap-2">
                    {s.status === "Submitted" ? (
                      <>
                        <FaCheckCircle className="text-green-600" />
                        <span className="text-green-700">{s.status}</span>
                      </>
                    ) : (
                      <>
                        <FaClock className="text-yellow-600" />
                        <span className="text-yellow-600">{s.status}</span>
                      </>
                    )}
                  </td>
                  <td className="py-3 px-4">{s.date}</td>
                  {/* View button */}
                  <td className="py-3 px-4 rounded-r-lg">
                    <button className="text-primary-medium hover:text-primary-dark p-2 rounded-full transition" title="View Submission">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
              {displayed.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-primary-medium">
                    <FaInbox className="mx-auto text-5xl mb-3 text-primary-light" />
                    No submissions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
