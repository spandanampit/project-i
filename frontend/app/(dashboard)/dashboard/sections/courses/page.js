"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, Users, Plus, MoreVertical, BookOpen } from 'lucide-react';
import CreateBatchModal from "./addCourse";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const CARD_COLORS = ['bg-indigo-500', 'bg-orange-500', 'bg-emerald-500', 'bg-cyan-500', 'bg-rose-500'];

function formatTime(timeString) {
  if (!timeString || typeof timeString !== 'string') {
    return '--:--';
  }

  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function CoursesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/courses`, {
          credentials: 'include',
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || 'Failed to load courses.');
          return;
        }

        setCourses(Array.isArray(data.courses) ? data.courses : []);
      } catch {
        setError('Unable to connect to server.');
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  useEffect(() => {
    if (!successMessage) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [successMessage]);

  const courseCards = useMemo(
    () =>
      courses.map((course, index) => ({
        ...course,
        color: CARD_COLORS[index % CARD_COLORS.length],
        schedule: Array.isArray(course.scheduleDays) ? course.scheduleDays.join(', ') : 'No schedule',
        time: `${formatTime(course.startTime)} - ${formatTime(course.endTime)}`,
      })),
    [courses]
  );

  return (
    <div className="p-8 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Active Batches</h1>
          <p className="text-slate-500 dark:text-slate-400">You have {courses.length} active courses this semester.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#5145FA] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100/20"
        >
          <Plus size={20} />
          Create New Batch
        </button>
      </div>

      {loading && <p className="text-slate-500 dark:text-slate-400">Loading courses...</p>}
      {!loading && error && <p className="text-rose-500">{error}</p>}
      {!loading && !error && successMessage && (
        <p className="mb-4 text-emerald-600 dark:text-emerald-400">{successMessage}</p>
      )}
      {!loading && !error && courseCards.length === 0 && (
        <p className="text-slate-500 dark:text-slate-400">No courses yet. Create your first batch.</p>
      )}

      {!loading && !error && courseCards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCards.map((batch) => (
            <div
              key={batch._id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-1.5 h-full ${batch.color}`} />

              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                  <BookOpen className="text-slate-600 dark:text-slate-300" size={24} />
                </div>
                <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                  <MoreVertical size={20} />
                </button>
              </div>

              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">{batch.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{batch.room}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <Calendar size={16} className="text-slate-400 dark:text-slate-500" />
                  <span>{batch.schedule}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <Clock size={16} className="text-slate-400 dark:text-slate-500" />
                  <span>{batch.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <Users size={16} className="text-slate-400 dark:text-slate-500" />
                  <span>
                    {batch.students || 0} / {batch.maxStudents} Students Enrolled
                  </span>
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-sm">
                  <span className="font-medium">Salary:</span> {batch.salary} | <span className="font-medium">Fees:</span> {batch.feesType}
                </div>
              </div>

              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className={`${batch.color} h-full rounded-full transition-all duration-1000`}
                  style={{ width: `${Math.min(100, ((batch.students || 0) / batch.maxStudents) * 100)}%` }}
                />
              </div>

              <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View Batch Details
              </button>
            </div>
          ))}
        </div>
      )}

      <CreateBatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCourseCreated={(course) => {
          setCourses((prev) => [course, ...prev]);
          setSuccessMessage('Course added successfully.');
        }}
      />
    </div>
  );
}
