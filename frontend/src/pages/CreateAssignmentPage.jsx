import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FaTasks,
  FaTag,
  FaRegCalendarAlt,
  FaClipboardList,
  FaCheckCircle,
  FaPlusCircle,
  FaTrash,
  FaPaperclip,
  FaEye,
  FaSave,
} from "react-icons/fa";

export default function CreateAssignmentPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    totalMarks: "",
    allowLate: false,
    selectedClass: "classA",
    attachments: [],
    questions: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(false);

  const TITLE_MAX = 80;
  const DESC_MAX = 2000;

  // Handle field changes
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setSubmitted(false);
    setErrors(prev => ({ ...prev, [name]: "" }));
    if (type === "checkbox") {
      setForm(prev => ({ ...prev, [name]: checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }

  // Description (rich text) change
  function handleDescriptionChange(value) {
    setForm(prev => ({ ...prev, description: value }));
    setSubmitted(false);
    setErrors(prev => ({ ...prev, description: "" }));
  }

  // File uploads handler
  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setForm(prev => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  }

  function removeAttachment(index) {
    setForm(prev => {
      const newAttachments = [...prev.attachments];
      newAttachments.splice(index, 1);
      return { ...prev, attachments: newAttachments };
    });
  }

  // Questions management
  function addQuestion() {
    setForm(prev => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          id: Date.now(),
          type: "mcq",
          text: "",
          options: ["", ""],
          correct: [],
          marks: 1,
        },
      ],
    }));
  }

  function updateQuestion(id, field, value) {
    setForm(prev => ({
      ...prev,
      questions: prev.questions.map(q =>
        q.id === id ? { ...q, [field]: value } : q
      ),
    }));
  }

  function updateOption(id, index, value) {
    setForm(prev => ({
      ...prev,
      questions: prev.questions.map(q => {
        if (q.id !== id) return q;
        const options = [...q.options];
        options[index] = value;
        return { ...q, options };
      }),
    }));
  }

  function toggleCorrect(id, optionIndex) {
    setForm(prev => ({
      ...prev,
      questions: prev.questions.map(q => {
        if (q.id !== id) return q;
        let correct = [...q.correct];
        if (correct.includes(optionIndex)) {
          correct = correct.filter(i => i !== optionIndex);
        } else {
          correct.push(optionIndex);
        }
        return { ...q, correct };
      }),
    }));
  }

  function addOption(id) {
    setForm(prev => ({
      ...prev,
      questions: prev.questions.map(q => {
        if (q.id !== id) return q;
        if (q.options.length < 5) {
          return { ...q, options: [...q.options, ""] };
        }
        return q;
      }),
    }));
  }

  function removeOption(id, index) {
    setForm(prev => ({
      ...prev,
      questions: prev.questions.map(q => {
        if (q.id !== id) return q;
        const options = q.options.filter((_, i) => i !== index);
        // Remove from correct if needed
        const correct = q.correct.filter(i => i !== index).map(i => (i > index ? i - 1 : i));
        return { ...q, options, correct };
      }),
    }));
  }

  function removeQuestion(id) {
    setForm(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== id),
    }));
  }

  // Validation
  function validate() {
    let err = {};
    if (!form.title.trim()) err.title = "Title is required.";
    else if (form.title.length > TITLE_MAX) err.title = `Max ${TITLE_MAX} characters.`;
    if (!form.description || form.description.replace(/<(.|\n)*?>/g, '').trim() === "") {
      err.description = "Description is required.";
    } else if (form.description.length > DESC_MAX) err.description = `Max ${DESC_MAX} characters.`;
    if (!form.dueDate) err.dueDate = "Due date is required.";
    else if (new Date(form.dueDate) < new Date()) err.dueDate = "Due date must be in the future.";
    if (!form.totalMarks) err.totalMarks = "Total marks required.";
    else if (Number(form.totalMarks) <= 0) err.totalMarks = "Marks must be positive.";

    form.questions.forEach((q, i) => {
      if (!q.text.trim()) err[`qtext${q.id}`] = "Question text required.";
      if (q.type === "mcq") {
        if (q.options.length < 2) err[`qopt${q.id}`] = "At least 2 options required.";
        q.options.forEach((opt, oi) => {
          if (!opt.trim()) err[`qoptempty${q.id}_${oi}`] = "Option cannot be empty.";
        });
        if (q.correct.length === 0) err[`qcorrect${q.id}`] = "At least one correct answer required.";
      }
    });

    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setErrors({});
    // TODO: integrate with backend that accepts structured data below

    // Example payload structure:
    /*
    {
      title: form.title,
      description: form.description,
      dueDate: form.dueDate,
      totalMarks: form.totalMarks,
      allowLate: form.allowLate,
      classId: form.selectedClass,
      attachments: form.attachments, // upload separately & get URLs
      questions: form.questions
    }
    */

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        title: "",
        description: "",
        dueDate: "",
        totalMarks: "",
        allowLate: false,
        selectedClass: "classA",
        attachments: [],
        questions: [],
      });
    }, 1500);
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-primary-light/40">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary-light rounded-full text-primary-dark shadow">
            <FaTasks className="text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">Create Assignment</h1>
            <p className="text-sm text-primary-medium">Fill out details below to create a new task</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Class Selector */}
          <div className="mb-5">
            <label className="block font-semibold text-primary-dark mb-1" htmlFor="selectedClass">Class</label>
            <select
              id="selectedClass"
              name="selectedClass"
              value={form.selectedClass}
              onChange={handleChange}
              className="w-full rounded border border-primary-light px-3 py-2 text-primary-dark focus:ring-2 focus:ring-primary-medium"
            >
              <option value="classA">Class A</option>
              <option value="classB">Class B</option>
              <option value="classC">Class C</option>
            </select>
          </div>

          {/* Title */}
          <div className="relative mb-5">
            <label className="block font-semibold text-primary-dark mb-1" htmlFor="title">Title</label>
            <div className="flex items-center relative">
              <FaTag className="absolute ml-3 text-primary-medium pointer-events-none" />
              <input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                maxLength={TITLE_MAX}
                required
                placeholder="Assignment title"
                className={`w-full pl-10 pr-3 py-2 rounded border ${
                  errors.title ? "border-red-500" : "border-primary-light"
                } text-primary-dark bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-primary-medium`}
              />
            </div>
            <div className="text-xs text-primary-medium mt-1 flex justify-between">
              <span>{errors.title}</span>
              <span>{form.title.length}/{TITLE_MAX}</span>
            </div>
          </div>

          {/* Description (Rich Text Editor) */}
          <div className="mb-5">
            <label className="block font-semibold text-primary-dark mb-1">Description</label>
            <ReactQuill
              theme="snow"
              value={form.description}
              onChange={handleDescriptionChange}
              placeholder="Describe this assignment"
              className={`bg-primary-light/10 rounded ${errors.description ? "border-red-500" : "border-primary-light"} border`}
            />
            <div className="text-xs text-primary-medium mt-1 flex justify-end">
              {form.description.replace(/<(.|\n)*?>/g, '').length} / {DESC_MAX}
            </div>
            {errors.description && <p className="text-red-600 text-xs mt-1">{errors.description}</p>}
          </div>

          {/* Due Date and Marks */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1 relative">
              <label className="block font-semibold text-primary-dark mb-1" htmlFor="dueDate">Due Date</label>
              <div className="flex items-center relative">
                <FaRegCalendarAlt className="absolute ml-3 text-primary-medium pointer-events-none" />
                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={form.dueDate}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-3 py-2 rounded border ${
                    errors.dueDate ? "border-red-500" : "border-primary-light"
                  } text-primary-dark bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-primary-medium`}
                />
              </div>
              {errors.dueDate && <p className="text-red-600 text-xs mt-1">{errors.dueDate}</p>}
            </div>

            <div className="flex-1 relative">
              <label className="block font-semibold text-primary-dark mb-1" htmlFor="totalMarks">Total Marks</label>
              <div className="flex items-center relative">
                <FaClipboardList className="absolute ml-3 text-primary-medium pointer-events-none" />
                <input
                  id="totalMarks"
                  name="totalMarks"
                  type="number"
                  value={form.totalMarks}
                  onChange={handleChange}
                  placeholder="e.g. 100"
                  required
                  min={1}
                  className={`w-full pl-10 pr-3 py-2 rounded border ${
                    errors.totalMarks ? "border-red-500" : "border-primary-light"
                  } text-primary-dark bg-primary-light/10 focus:outline-none focus:ring-2 focus:ring-primary-medium`}
                />
              </div>
              {errors.totalMarks && <p className="text-red-600 text-xs mt-1">{errors.totalMarks}</p>}
            </div>
          </div>

          {/* Allow Late Submissions */}
          <div className="flex items-center gap-2 mb-5">
            <input
              id="allowLate"
              name="allowLate"
              type="checkbox"
              checked={form.allowLate}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="allowLate" className="text-primary-dark select-none">Allow Late Submissions</label>
          </div>

          {/* Attachments */}
          <div className="mb-5">
            <label className="block font-semibold text-primary-dark mb-1">Upload Question Files</label>
            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.png,.jpg"
              onChange={handleFileChange}
              className="w-full"
            />
            {form.attachments.length > 0 && (
              <ul className="mt-3 space-y-1">
                {form.attachments.map((file, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-primary-light/20 rounded px-3 py-1 text-primary-dark"
                  >
                    {file.name}
                    <button
                      type="button"
                      onClick={() => removeAttachment(idx)}
                      className="text-red-600 font-bold ml-4"
                      title="Remove file"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Question Builder Section */}
          <div className="mb-5">
            <h2 className="text-primary-dark font-semibold mb-3 flex items-center gap-2">
              Questions
              <button
                type="button"
                onClick={addQuestion}
                className="text-primary-medium hover:text-primary-dark transition"
                title="Add Question"
              >
                <FaPlusCircle size={22} />
              </button>
            </h2>

            {form.questions.length === 0 && (
              <p className="text-primary-medium italic mb-4">No questions added yet.</p>
            )}

            {form.questions.map((q, i) => (
              <QuestionEditor
                key={q.id}
                question={q}
                index={i}
                updateQuestion={updateQuestion}
                updateOption={updateOption}
                toggleCorrect={toggleCorrect}
                addOption={addOption}
                removeOption={removeOption}
                removeQuestion={removeQuestion}
                errors={errors}
              />
            ))}
          </div>

          {/* Preview Toggle */}
          <div className="mb-5 flex items-center gap-3">
            <input
              type="checkbox"
              id="preview"
              checked={preview}
              onChange={() => setPreview(!preview)}
              className="cursor-pointer"
            />
            <label htmlFor="preview" className="text-primary-dark select-none font-semibold">
              Preview Assignment
            </label>
          </div>

          {/* Preview Mode */}
          {preview && (
            <AssignmentPreview form={form} />
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-medium text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              {loading && (
                <svg
                  className="animate-spin w-5 h-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              )}
              <FaSave /> Create Assignment
            </button>
            <button
              type="button"
              onClick={() => {
                setForm({
                  title: "",
                  description: "",
                  dueDate: "",
                  totalMarks: "",
                  allowLate: false,
                  selectedClass: "classA",
                  attachments: [],
                  questions: [],
                });
                setErrors({});
                setSubmitted(false);
                setPreview(false);
              }}
              className="flex-1 px-3 py-3 border border-primary-medium rounded-lg text-primary-medium font-semibold hover:bg-primary-light transition"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Success */}
        {submitted && (
          <div className="mt-6 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 font-medium">
            <FaCheckCircle /> Assignment created successfully!
          </div>
        )}
      </div>
    </div>
  );
}

// Component for editing one question
function QuestionEditor({
  question,
  index,
  updateQuestion,
  updateOption,
  toggleCorrect,
  addOption,
  removeOption,
  removeQuestion,
  errors,
}) {
  const { id, text, options, correct, marks, type = "mcq" } = question;

  return (
    <div className="mb-5 border border-primary-light rounded-lg p-4 bg-primary-light/10 relative">
      <button
        type="button"
        onClick={() => removeQuestion(id)}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition"
        title="Remove Question"
      >
        <FaTrash />
      </button>
      <label className="font-semibold text-primary-dark block mb-2">
        Question {index + 1}
      </label>
      {/* Question Text */}
      <input
        type="text"
        value={text}
        onChange={e => updateQuestion(id, "text", e.target.value)}
        placeholder="Enter question text"
        className={`w-full rounded border px-3 py-2 mb-3 ${
          errors[`qtext${id}`] ? "border-red-500" : "border-primary-light"
        } focus:outline-none focus:ring-2 focus:ring-primary-medium`}
      />
      {errors[`qtext${id}`] && (
        <p className="text-red-600 text-xs mb-2">{errors[`qtext${id}`]}</p>
      )}

      {/* Answer Options (for MCQ only) */}
      {type === "mcq" && (
        <>
          {options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={correct.includes(i)}
                onChange={() => toggleCorrect(id, i)}
                className="cursor-pointer"
              />
              <input
                type="text"
                value={opt}
                onChange={e => updateOption(id, i, e.target.value)}
                placeholder={`Option ${String.fromCharCode(65 + i)}`}
                className={`flex-grow rounded border px-3 py-2 ${
                  errors[`qoptempty${id}_${i}`] ? "border-red-500" : "border-primary-light"
                } focus:outline-none focus:ring-2 focus:ring-primary-medium`}
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(id, i)}
                  className="text-red-600 hover:text-red-800 transition"
                  title="Remove option"
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}
          {errors[`qopt${id}`] && (
            <p className="text-red-600 text-xs mb-2">{errors[`qopt${id}`]}</p>
          )}
          {errors[`qcorrect${id}`] && (
            <p className="text-red-600 text-xs mb-2">{errors[`qcorrect${id}`]}</p>
          )}
          {options.length < 5 && (
            <button
              type="button"
              onClick={() => addOption(id)}
              className="text-primary-medium hover:text-primary-dark flex items-center gap-1 mb-3"
              title="Add option"
            >
              <FaPlusCircle /> Add Option
            </button>
          )}
        </>
      )}
      {/* Marks */}
      <label className="block font-semibold text-primary-dark mb-1 mt-3">Marks for this question</label>
      <input
        type="number"
        min={1}
        value={marks}
        onChange={e => updateQuestion(id, "marks", e.target.value)}
        className="w-24 rounded border border-primary-light px-3 py-1 text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-medium"
      />
    </div>
  );
}

// Preview component
function AssignmentPreview({ form }) {
  return (
    <div className="border border-primary-light rounded-lg p-6 bg-primary-light/10 mb-6">
      <h2 className="text-primary-dark text-xl font-bold mb-4">Assignment Preview</h2>
      <h3 className="text-primary-dark font-semibold mb-1">{form.title || "(No title)"}</h3>
      <div
        className="prose max-w-none mb-4"
        dangerouslySetInnerHTML={{ __html: form.description || "<p><em>No description</em></p>" }}
      />
      <p className="text-primary-dark font-semibold">Due Date: {form.dueDate || "-"}</p>
      <p className="text-primary-dark font-semibold">Total Marks: {form.totalMarks || "-"}</p>
      <p className="text-primary-dark font-semibold">Allow Late Submissions: {form.allowLate ? "Yes" : "No"}</p>
      <p className="text-primary-dark font-semibold mb-4">Class: {form.selectedClass}</p>

      {form.attachments.length > 0 && (
        <>
          <h4 className="font-semibold text-primary-dark mb-1">Attachments:</h4>
          <ul className="list-disc list-inside mb-4">
            {form.attachments.map((file, idx) => (
              <li key={idx} className="text-primary-medium">{file.name}</li>
            ))}
          </ul>
        </>
      )}

      {form.questions.length === 0 ? (
        <p className="italic text-primary-medium">No questions added yet.</p>
      ) : (
        <div>
          <h4 className="font-semibold text-primary-dark mb-2">Questions:</h4>
          {form.questions.map((q, i) => (
            <div key={q.id} className="mb-4">
              <p className="font-bold text-primary-dark">{i + 1}. {q.text || "(No question text)"}</p>
              {q.type === "mcq" ? (
                <ul className="list-disc list-inside text-primary-medium">
                  {q.options.map((opt, oi) => (
                    <li key={oi} className={q.correct.includes(oi) ? "font-semibold text-primary-dark" : ""}>
                      {opt || "(No option text)"}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-primary-medium italic">Short answer</p>
              )}
              <p className="text-xs text-primary-medium mt-1">Marks: {q.marks || 0}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
