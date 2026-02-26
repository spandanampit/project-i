"use client";

import React, { useState } from "react";
import { X, Clock, Users, MapPin, Type, Check } from "lucide-react";
import { motion } from "framer-motion";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

const DAYS = [
  { label: "Mon", full: "Monday" },
  { label: "Tue", full: "Tuesday" },
  { label: "Wed", full: "Wednesday" },
  { label: "Thu", full: "Thursday" },
  { label: "Fri", full: "Friday" },
  { label: "Sat", full: "Saturday" },
  { label: "Sun", full: "Sunday" },
];

export default function CreateBatchModal({ isOpen, onClose, onCourseCreated }) {
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [maxStudents, setMaxStudents] = useState("");
  const [salary, setSalary] = useState("");
  const [feesType, setFeesType] = useState("monthly");
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title,
          room,
          maxStudents: Number(maxStudents),
          salary: Number(salary),
          feesType,
          scheduleDays: selectedDays,
          startTime,
          endTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to create course.");
        return;
      }

      onCourseCreated?.(data.course);
      setTitle("");
      setRoom("");
      setMaxStudents("");
      setSalary("");
      setFeesType("monthly");
      setSelectedDays([]);
      setStartTime("");
      setEndTime("");
      onClose();
    } catch {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Create New Batch
            </h2>
            <p className="text-sm text-slate-500">
              Set up a new course schedule and capacity.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form className="p-8 space-y-5" onSubmit={handleSubmit}>
          {/* Batch Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Batch Title
            </label>
            <div className="relative">
              <Type
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="e.g. Advanced Calculus"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Room/Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Room / Location
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Room 402 or Online"
                  value={room}
                  onChange={(event) => setRoom(event.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Max Students */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Max Students
              </label>
              <div className="relative">
                <Users
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="number"
                  placeholder="30"
                  value={maxStudents}
                  onChange={(event) => setMaxStudents(event.target.value)}
                  min="1"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Salary
              </label>
              <input
                type="number"
                placeholder="2500"
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
                min="0"
                required
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Fees Type
              </label>
              <select
                value={feesType}
                onChange={(event) => setFeesType(event.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Weekly Schedule
            </label>

            <div className="flex justify-between gap-2">
              {DAYS.map((day) => {
                const isSelected = selectedDays.includes(day.label);
                return (
                  <motion.button
                    key={day.label}
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleDay(day.label)}
                    className={`flex-1 py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                      isSelected
                        ? "bg-indigo-600 border-indigo-600 text-white"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase">
                      {day.label}
                    </span>

                    {isSelected && <Check size={14} strokeWidth={3} />}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Start Time
              </label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                End Time
              </label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-sm text-rose-500">{error}</p>}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-xl bg-[#5145FA] hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-200/50 transition-all"
            >
              {loading ? "Creating..." : "Create Batch"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
