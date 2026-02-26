"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  UserPlus,
  GraduationCap,
  List,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import AddStudentForm from "./addStudents";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

function formatDate(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString();
}

export default function StudentSection() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successPopup, setSuccessPopup] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        const [studentsResponse, coursesResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/students`, { credentials: "include" }),
          fetch(`${API_BASE_URL}/api/courses`, { credentials: "include" }),
        ]);

        const studentsData = await studentsResponse.json();
        const coursesData = await coursesResponse.json();

        if (!studentsResponse.ok) {
          setError(studentsData.message || "Failed to load students.");
          return;
        }

        if (!coursesResponse.ok) {
          setError(coursesData.message || "Failed to load batches.");
          return;
        }

        setStudents(Array.isArray(studentsData.students) ? studentsData.students : []);
        setBatches(Array.isArray(coursesData.courses) ? coursesData.courses : []);
      } catch {
        setError("Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!successPopup) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setSuccessPopup("");
    }, 2800);

    return () => clearTimeout(timeoutId);
  }, [successPopup]);

  const stats = useMemo(() => {
    const total = students.length;
    const uniqueBatches = new Set(
      students
        .map((student) => student.batch?.title)
        .filter(Boolean),
    ).size;

    return {
      total,
      activeBatches: uniqueBatches,
      recentlyAdded: Math.min(total, 5),
    };
  }, [students]);

  return (
    <div className="p-8 min-h-screen bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 animate-in fade-in slide-in-from-top-4 duration-700 ease-out">
        <div>
          <div className="flex items-center gap-3 mb-1 group">
            <div className="bg-indigo-100 dark:bg-indigo-500/20 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="text-[#5145FA]" size={28} />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Students
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium ml-1">
            Manage enrollment and tracking details.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="group flex items-center gap-2 bg-[#5145FA] hover:bg-[#4338ca] text-white px-6 py-3 rounded-2xl font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-indigo-300 hover:-translate-y-1 active:scale-95"
        >
          <UserPlus
            size={20}
            className="group-hover:rotate-12 transition-transform"
          />
          Add Student
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 overflow-hidden">
        {[
          { label: "Total Students", val: String(stats.total), color: "text-slate-900" },
          { label: "Active Batches", val: String(stats.activeBatches), color: "text-emerald-600" },
          { label: "Recently Added", val: String(stats.recentlyAdded), color: "text-amber-500" },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-slate-900 p-6 rounded-[24px] border border-slate-200/60 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">
              {stat.label}
            </p>
            <h3
              className={`text-3xl font-black ${stat.color} dark:text-white transition-all`}
            >
              {stat.val}
            </h3>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/60 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100 dark:border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/40 rounded-2xl text-sm outline-none transition-all"
            />
          </div>

          <div className="flex gap-2">
            <button className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <List size={18} className="text-indigo-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-all">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading && <p className="px-8 py-6 text-slate-500 dark:text-slate-400">Loading students...</p>}
          {!loading && error && <p className="px-8 py-6 text-rose-500">{error}</p>}
          {!loading && !error && students.length === 0 && (
            <p className="px-8 py-6 text-slate-500 dark:text-slate-400">No students yet. Add your first student.</p>
          )}

          {!loading && !error && students.length > 0 && (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/30 text-[11px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                  <th className="px-8 py-5">Profile</th>
                  <th className="px-6 py-5">Batch</th>
                  <th className="px-6 py-5">Phone</th>
                  <th className="px-6 py-5">Enrolled On</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.map((student, index) => {
                  const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    student.fullName || "Student",
                  )}&background=EEF2FF&color=312E81`;

                  return (
                    <tr
                      key={student._id}
                      className="group hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5 transition-all duration-300 animate-in fade-in slide-in-from-right-4 fill-mode-both"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <img
                            src={imageUrl}
                            alt={student.fullName}
                            className="w-11 h-11 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500"
                          />
                          <div>
                            <div className="font-bold text-slate-900 dark:text-slate-100">
                              {student.fullName}
                            </div>
                            <div className="text-xs text-slate-400">
                              {student.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                          {student.batch?.title || "-"}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-semibold text-slate-800 dark:text-slate-200">
                        {student.phone}
                      </td>
                      <td className="px-6 py-5 font-medium text-slate-700 dark:text-slate-300">
                        {formatDate(student.enrollmentDate)}
                      </td>
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-700 ring-emerald-200 ring-2">
                          {student.status === "inactive" ? "Inactive" : "Active"}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700 rounded-lg shadow-sm">
                          <MoreHorizontal size={20} className="text-slate-400" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 ease-out">
            <AddStudentForm
              batches={batches}
              onClose={() => setIsAddModalOpen(false)}
              onStudentCreated={(student) => {
                setStudents((prev) => [student, ...prev]);
                setSuccessPopup(`${student.fullName} was added successfully.`);
              }}
            />
          </div>
        </div>
      )}

      {successPopup && (
        <div className="fixed top-6 right-6 z-[70] animate-in slide-in-from-top-6 fade-in duration-500">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-2xl shadow-emerald-100 p-4 min-w-[320px]">
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-emerald-200/40 blur-2xl" />
            <div className="relative flex items-start gap-3">
              <div className="mt-0.5 p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-800 flex items-center gap-1">
                  Student Added <Sparkles size={14} />
                </p>
                <p className="text-sm text-slate-600 mt-0.5">{successPopup}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
