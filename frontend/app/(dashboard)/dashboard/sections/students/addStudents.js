"use client";

import React, { useMemo, useState } from "react";
import {
  X,
  Save,
  User,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  Loader2,
} from "lucide-react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

const defaultFormState = {
  fullName: "",
  batchId: "",
  enrollmentDate: new Date().toISOString().slice(0, 10),
  phone: "",
  email: "",
};

export default function AddStudentForm({ onClose, onStudentCreated, batches = [] }) {
  const [formData, setFormData] = useState(defaultFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const batchOptions = useMemo(
    () =>
      (Array.isArray(batches) ? batches : []).map((batch) => ({
        id: batch._id,
        title: batch.title,
      })),
    [batches],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to add student.");
        return;
      }

      onStudentCreated?.(data.student);
      setFormData(defaultFormState);
      onClose();
    } catch {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden max-w-2xl w-full relative"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Add New Student
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Fill in the details to enroll a new student.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <form className="p-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="e.g. John Doe"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Assign Batch
            </label>
            <div className="relative">
              <BookOpen
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <select
                name="batchId"
                value={formData.batchId}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200 appearance-none"
              >
                <option value="">Select Batch</option>
                {batchOptions.map((batch) => (
                  <option key={batch.id} value={batch.id}>
                    {batch.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Enrollment Date
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="date"
                name="enrollmentDate"
                value={formData.enrollmentDate}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Mobile Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="1234567890"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Email Address
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200"
            />
          </div>
        </div>

        {error && <p className="text-sm text-rose-500">{error}</p>}

        <div className="flex gap-3 justify-end pt-6">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-[#5145FA] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-none disabled:opacity-70"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {loading ? "Saving..." : "Save Student"}
          </button>
        </div>
      </form>
    </div>
  );
}
