import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

export default function Progress() {
  const overallProgress = 65;
  const completedAssignments = 12;
  const totalAssignments = 20;

  const assignmentScores = [
    { name: "Week 1", score: 75 },
    { name: "Week 2", score: 80 },
    { name: "Week 3", score: 78 },
    { name: "Week 4", score: 85 },
    { name: "Week 5", score: 90 },
  ];
  const performanceTrend = [
    { name: "Week 1", value: 75 },
    { name: "Week 2", value: 80 },
    { name: "Week 3", value: 78 },
    { name: "Week 4", value: 85 },
    { name: "Week 5", value: 90 },
  ];
  const milestones = [
    "Completed Module 1",
    "Finished 3/5 Projects",
    "Passed Midterm Exam",
  ];
  const badges = [
    { label: "⭐ Fast Learner" },
    { label: "🏆 Consistent" },
    { label: "⏱️ On-Time Submitter" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-primary-light/40 via-white to-primary-light/60 py-12">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-primary-light/50">
        <h1 className="text-3xl font-extrabold mb-4 text-primary-dark text-center">Progress</h1>
        <p className="mb-8 text-primary-dark/80 text-center text-lg">
          See your course progress and analytics here.
        </p>

        {/* Top Section: Radial progress */}
        <div className="w-full flex flex-col items-center mb-10">
          <div className="w-48 h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="73%"
                outerRadius="100%"
                barSize={14}
                data={[{ name: "progress", value: overallProgress }]}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={15}
                  background={{ fill: "#EDE9FE" }}
                  clockWise
                  dataKey="value"
                  cornerRadius={8}
                  fill="#7C3AED"
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none">
              <span className="text-5xl font-black text-primary-dark">{overallProgress}%</span>
              <span className="text-base font-semibold text-primary-dark/80 mt-1">
                {completedAssignments}/{totalAssignments} Assignments Completed
              </span>
            </div>
          </div>
        </div>

        {/* Middle Section: Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Bar Chart: Assignment Scores */}
          <section className="bg-white rounded-lg shadow border border-primary-light/20 p-4">
            <h2 className="text-lg font-semibold mb-3 text-primary-dark">
              Assignment Scores Over Time
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={assignmentScores}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DDD6FE" />
                <XAxis dataKey="name" stroke="#7C3AED" />
                <YAxis stroke="#7C3AED" />
                <Tooltip />
                <Bar dataKey="score" fill="#A78BFA" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          {/* Line Chart: Performance Trend */}
          <section className="bg-white rounded-lg shadow border border-primary-light/20 p-4">
            <h2 className="text-lg font-semibold mb-3 text-primary-dark">
              Performance Trend
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DDD6FE" />
                <XAxis dataKey="name" stroke="#7C3AED" />
                <YAxis stroke="#7C3AED" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#7C3AED"
                  strokeWidth={3}
                  dot={{ r: 6, strokeWidth: 2, fill: "#C4B5FD" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </div>

        {/* Bottom Section: Milestones and Badges */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-primary-dark">Milestones</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {milestones.map((m, idx) => (
              <span
                key={idx}
                className="bg-primary-light/50 text-primary-dark border border-primary-medium rounded-full px-4 py-2 font-medium shadow-inner"
              >
                {m}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-2 text-primary-dark">Badges</h2>
          <div className="flex flex-wrap gap-3">
            {badges.map(({ label }, idx) => (
              <span
                key={idx}
                className="bg-primary-light/70 text-primary-dark border border-primary-light rounded-full px-4 py-2 font-semibold shadow"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
