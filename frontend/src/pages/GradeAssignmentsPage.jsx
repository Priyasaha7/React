import React, { useState } from "react";
import { FaEdit, FaCheckCircle, FaSpinner, FaChevronDown, FaChevronUp } from "react-icons/fa";

const mockAssignments = [
  {
    id: 1,
    title: "React.js Project",
    subject: "Web Development",
    totalMarks: 20,
    submitted: 17,
    graded: 15,
    dueDate: "2025-09-20",
    questions: [
      { q: "What is React?", type: "short", maxMarks: 5 },
      { q: "Select valid hooks:", type: "mcq", options: ["useState", "useSleep", "useEffect"], answer: [0, 2], maxMarks: 5 },
    ],
    submissions: [
      {
        studentId: 101,
        name: "John Doe",
        answers: {
          0: "React is a JS library for UI",
          1: [0, 2],
        },
        graded: false,
        marks: null,
        comments: "",
        submittedAt: "2025-09-15",
        late: false,
      },
      {
        studentId: 102,
        name: "Jane Smith",
        answers: {
          0: "Library for making apps",
          1: [0],
        },
        graded: true,
        marks: 7,
        comments: "Good work",
        submittedAt: "2025-09-16",
        late: false,
      },
    ],
  },
];

export default function GradeAssignments() {
  const [expandedId, setExpandedId] = useState(null);
  const [currentSubmission, setCurrentSubmission] = useState(null);
  const [gradingData, setGradingData] = useState({ marks: {}, comments: "" });
  const [saving, setSaving] = useState(false);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
    setCurrentSubmission(null);
    setGradingData({ marks: {}, comments: "" });
  };

  const openSubmission = (submission) => {
    setCurrentSubmission(submission);
    const marksMap = {};
    submission.answers &&
      Object.keys(submission.answers).forEach((qId) => {
        marksMap[qId] = submission.marks || 0;
      });
    setGradingData({ marks: marksMap, comments: submission.comments || "" });
  };

  const handleMarkChange = (qId, value) => {
    setGradingData((prev) => ({
      ...prev,
      marks: { ...prev.marks, [qId]: Number(value) },
    }));
  };

  const handleCommentsChange = (e) => {
    setGradingData((prev) => ({ ...prev, comments: e.target.value }));
  };

  const saveGrade = () => {
    setSaving(true);
    setTimeout(() => {
      alert("Grades saved!");
      setSaving(false);
      setCurrentSubmission(null);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-primary-light">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary-light rounded-full text-primary-dark">
            <FaEdit className="text-3xl" />
          </div>
          <h1 className="text-2xl font-bold text-primary-dark">Grade Assignments</h1>
        </div>
        <p className="text-primary-dark/80 mb-6">
          Assignments waiting to be graded. Click an assignment to review submissions.
        </p>

        {mockAssignments.map((assign) => {
          const gradedCount = assign.submissions.filter((s) => s.graded).length;
          const progressPercent = (gradedCount / assign.submitted) * 100;

          return (
            <div
              key={assign.id}
              className="bg-white text-primary-dark border border-primary-medium rounded-lg shadow-md p-5 mb-5 cursor-pointer transition-colors duration-150 group"
              onClick={() => toggleExpand(assign.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold ">{assign.title}</h2>
                  <div>{assign.subject}</div>
                  <div className="mt-1">
                    Due: {assign.dueDate} &middot; Total Marks: {assign.totalMarks}
                  </div>
                  <div className="mt-1">
                    {gradedCount} graded / {assign.submitted} submitted
                  </div>
                  <div className="w-full bg-primary-light rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full bg-primary-medium"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="group-hover:text-white">
                  {expandedId === assign.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedId === assign.id && (
                <div className="mt-4 space-y-4">
                  {assign.submissions.map((sub) => (
                    <div
                      key={sub.studentId}
                      className={`p-3 rounded border group cursor-pointer ${
                        currentSubmission?.studentId === sub.studentId
                          ? "border-primary-medium bg-primary-light/30 text-primary-dark"
                          : "border-primary-medium group-hover:bg-primary-medium group-hover:text-white"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering parent click
                        openSubmission(sub);
                      }}
                    >
                      <div className="flex justify-between">
                        <div>
                          <div className="font-medium group-hover:text-white">{sub.name}</div>
                          <div className="group-hover:text-white">
                            Submitted: {sub.submittedAt}
                            {sub.late && <span className="group-hover:text-white font-semibold"> Late</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 group-hover:text-white">
                          <div className={`font-semibold`}>
                            {sub.graded ? `Graded: ${sub.marks} / ${assign.totalMarks}` : "Pending"}
                          </div>
                          {sub.graded && <FaCheckCircle />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentSubmission && currentSubmission.studentId && expandedId === assign.id && (
                <GradingPanel
                  assign={assign}
                  submission={currentSubmission}
                  gradingData={gradingData}
                  onMarkChange={handleMarkChange}
                  onCommentsChange={handleCommentsChange}
                  onSave={saveGrade}
                  saving={saving}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GradingPanel({ assign, submission, gradingData, onMarkChange, onCommentsChange, onSave, saving }) {
  return (
    <div
      className="mt-6 bg-white border border-primary-medium rounded-lg shadow-md p-4 text-primary-dark"
      onClick={e => e.stopPropagation()} // Prevent closing on form click
    >
      <h3 className="font-bold mb-4">Grading: {submission.name}</h3>
      <div>
        {assign.questions.map((q, idx) => {
          const answer = submission.answers[idx];
          return (
            <div key={idx} className="mb-4">
              <p className="font-semibold">{`Q${idx + 1}: ${q.q} (Max Marks: ${q.maxMarks})`}</p>
              <p className="mb-2">
                <strong>Student's answer: </strong>
                {Array.isArray(answer)
                  ? answer.map((i) => q.options[i]).join(", ")
                  : answer || "(No answer)"}
              </p>
              <div>
                <label className="mr-2 font-semibold">Marks Awarded:</label>
                <input
                  type="number"
                  min={0}
                  max={q.maxMarks}
                  value={gradingData.marks[idx] || 0}
                  onChange={(e) => onMarkChange(idx, e.target.value)}
                  className="w-20 border border-primary-medium rounded px-2 py-1"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Comments</label>
        <textarea
          value={gradingData.comments}
          onChange={onCommentsChange}
          rows={3}
          className="w-full border border-primary-medium rounded px-3 py-2"
          placeholder="Add your feedback here"
        />
      </div>
      <button
        onClick={onSave}
        disabled={saving}
        className="mt-5 flex items-center gap-2 bg-primary-medium text-white px-6 py-3 rounded hover:bg-primary-dark transition"
      >
        {saving && <FaSpinner className="animate-spin" />}
        Save Grades
      </button>
    </div>
  );
}
