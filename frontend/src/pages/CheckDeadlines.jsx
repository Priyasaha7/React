import React, { useState, useEffect, useMemo } from "react";
import { FaBell, FaCheckCircle, FaClock, FaExclamationTriangle } from "react-icons/fa";

export default function CheckDeadlines() {
  // Sample deadlines data; normally fetched from backend API
  const deadlines = [
    { id: 1, title: "Math Assignment", due: "2025-09-10T23:59:00Z", submitted: false },
    { id: 2, title: "Science Project", due: "2025-09-07T22:30:00Z", submitted: true },
    { id: 3, title: "History Essay", due: "2025-09-08T15:30:00Z", submitted: false },
  ];

  // State for search & filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [now, setNow] = useState(new Date());

  // Update current time every minute for countdown updates
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-GB", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const timeLeft = (due) => {
    const diff = new Date(due) - now;
    if (diff <= 0) return "0m left";
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    return `${d > 0 ? d + "d " : ""}${h > 0 ? h + "h " : ""}${m}m left`;
  };

  const filteredDeadlines = useMemo(() => {
    return deadlines
      .filter((d) => {
        const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase());
        const isOverdue = new Date(d.due) < now && !d.submitted;
        const isPending = !d.submitted && new Date(d.due) >= now;
        const isSubmitted = d.submitted;

        if (filter === "submitted" && !isSubmitted) return false;
        if (filter === "pending" && !isPending) return false;
        if (filter === "overdue" && !isOverdue) return false;
        return matchesSearch;
      })
      .sort((a, b) => new Date(a.due) - new Date(b.due));
  }, [deadlines, filter, searchTerm, now]);

  const completedCount = deadlines.filter((d) => d.submitted).length;
  const totalCount = deadlines.length;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Check Deadlines</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search assignments..."
              aria-label="Search assignments"
              className="pr-8 pl-10 py-2 w-48 md:w-64 bg-white border border-primary-medium rounded-full shadow focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaClock className="absolute left-3 top-2.5 text-primary-medium pointer-events-none" />
          </div>
          <div className="flex gap-2">
            {["all", "pending", "submitted", "overdue"].map((val) => (
              <button
                key={val}
                onClick={() => setFilter(val)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                  filter === val
                    ? "bg-primary-medium text-white"
                    : "bg-primary-light text-primary-dark hover:bg-primary-medium/80"
                }`}
              >
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </button>
            ))}
          </div>
          <button title="Notifications" className="relative text-primary-medium hover:text-primary-dark">
            <FaBell size={20} />
            {deadlines.some((d) => new Date(d.due) - now < 86400000 && !d.submitted) && (
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
            )}
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-primary-light h-3 rounded-full mb-1 overflow-hidden">
          <div
            className="bg-primary-medium h-3 rounded-full transition-all"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
        <div className="text-xs text-primary-dark font-semibold">
          {Math.round((completedCount / totalCount) * 100)}% completed
        </div>
      </div>

      {/* Deadlines list */}
      <div className="grid gap-4">
        {filteredDeadlines.length === 0 ? (
          <p className="text-center text-gray-500">No deadlines found.</p>
        ) : (
          filteredDeadlines.map((d) => {
            const dueDate = new Date(d.due);
            const overdue = dueDate < now && !d.submitted;
            const dueSoon = dueDate - now < 86400000 && dueDate > now && !d.submitted;

            // Always use white bg and primary border, no status-specific colors for the card
            const cardClasses = "bg-white border border-primary-medium text-primary-dark p-5 rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg hover:bg-primary-light/70 transition";

            let statusBadge = (
              <span className="border border-primary-medium text-primary-dark px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <FaClock className="inline" /> Pending
              </span>
            );

            if (d.submitted) {
              statusBadge = (
                <span className="bg-primary-medium text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <FaCheckCircle className="inline" /> Submitted
                </span>
              );
            } else if (overdue) {
              statusBadge = (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <FaExclamationTriangle className="inline" /> Overdue
                </span>
              );
            } else if (dueSoon) {
              statusBadge = (
                <span className="border border-primary-medium text-yellow-900 px-3 py-1 rounded-full text-xs flex items-center gap-1 animate-pulse">
                  <FaClock className="inline" /> Pending
                </span>
              );
            }

            return (
              <article key={d.id} className={cardClasses}>
                <div>
                  <h2 className="text-lg font-bold">{d.title}</h2>
                  <time className="text-xs font-medium opacity-80 block" dateTime={d.due}>
                    Due: {formatDate(d.due)}
                  </time>
                  {!d.submitted && !overdue && (
                    <span className="bg-primary-light text-primary-dark px-2 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1 mt-2">
                      ⏳ {timeLeft(d.due)}
                    </span>
                  )}
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col items-end gap-2">
                  {statusBadge}
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
