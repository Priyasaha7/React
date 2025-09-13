import React, { useState, useRef } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";

export default function SubmitAssignment() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const maxSizeMB = 10;
  const allowedFormats = [".pdf", ".docx", ".zip"];
  const inputRef = useRef();

  // Helper: format due date nicely (replace with real data)
  const dueDate = new Date("2025-09-12T23:59:00");
  const dueDateString = dueDate.toLocaleString("en-GB", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Example countdown string — ideally live updated via useEffect
  const countdown = "⏳ 5d 3h left";

  // File selection handler
  function onFileChange(e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setError("");
    const ext = selectedFile.name.slice(selectedFile.name.lastIndexOf(".")).toLowerCase();
    if (!allowedFormats.includes(ext)) {
      setError(`File format not supported. Allowed: ${allowedFormats.join(", ")}`);
      return;
    }

    if (selectedFile.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds max ${maxSizeMB}MB.`);
      return;
    }

    setFile(selectedFile);
  }

  // Remove selected file
  function removeFile() {
    setFile(null);
    setError("");
    if (inputRef.current) inputRef.current.value = null;
  }

  // Dummy upload handler
  function uploadFile() {
    if (!file) {
      setError("No file selected.");
      return;
    }
    setError("");
    setUploading(true);
    // simulate upload delay
    setTimeout(() => {
      setUploading(false);
      alert("Upload successful!");
      // Clear file after upload
      setFile(null);
      if (inputRef.current) inputRef.current.value = null;
    }, 2000);
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-primary-light">
      <h1 className="text-3xl font-bold mb-4 text-primary-dark">Submit Assignment</h1>

      {/* Countdown chip */}
      <div className="mb-4 inline-block bg-primary-light text-primary-dark px-3 py-1 rounded-md text-sm font-semibold">
        {countdown}
      </div>

      {/* Assignment Info */}
      <div className="mb-6 text-primary-dark text-sm">
        <strong>Science Project</strong> – Due: {dueDateString} – Max size: {maxSizeMB}MB – Formats: PDF, DOCX, ZIP
      </div>

      {/* Drag & Drop / Upload Area */}
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-primary-medium rounded-lg bg-white hover:bg-primary-light/20 h-40 text-primary-medium transition-colors"
      >
        {!file ? (
          <>
            <FaUpload size={40} className="mb-3" />
            <span>Drag & drop a file or click to browse</span>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={onFileChange}
              ref={inputRef}
              accept={allowedFormats.join(",")}
            />
          </>
        ) : (
          <div className="flex items-center gap-4">
            <span className="font-semibold text-primary-dark">{file.name}</span>
            <button
              type="button"
              onClick={removeFile}
              className="text-red-500 hover:text-red-700 focus:outline-none"
              aria-label="Remove selected file"
            >
              <FaTimes />
            </button>
          </div>
        )}
      </label>

      {/* Error message */}
      {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}

      {/* Upload button & progress */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={uploadFile}
          disabled={uploading || !file}
          className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
            uploading || !file
              ? "bg-primary-medium/50 cursor-not-allowed"
              : "bg-primary-medium hover:bg-primary-dark cursor-pointer"
          }`}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {uploading && (
          <div className="w-full bg-primary-light h-3 rounded-full overflow-hidden">
            <div className="bg-primary-medium h-3 rounded-full animate-pulse" style={{ width: "75%" }} />
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-primary-light/30 p-4 rounded text-sm text-primary-dark">
        Please upload your assignment in one of the allowed formats. Maximum file size is {maxSizeMB}MB.
      </div>
    </div>
  );
}
