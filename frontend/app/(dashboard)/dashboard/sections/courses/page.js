import React from 'react';
import { Calendar, Clock, Users, Plus, MoreVertical, BookOpen } from 'lucide-react';

const batches = [
  {
    id: 1,
    title: 'Advanced Calculus',
    room: 'Room 402',
    schedule: 'Mon, Wed, Fri',
    time: '10:00 AM - 11:30 AM',
    students: 12,
    maxStudents: 15,
    color: 'bg-indigo-500',
  },
  {
    id: 2,
    title: 'Physics I',
    room: 'Lab 02',
    schedule: 'Tue, Thu',
    time: '03:30 PM - 05:00 PM',
    students: 45,
    maxStudents: 50,
    color: 'bg-orange-500',
  },
  {
    id: 3,
    title: 'Literature 101',
    room: 'Online',
    schedule: 'Saturdays',
    time: '09:00 AM - 12:00 PM',
    students: 8,
    maxStudents: 20,
    color: 'bg-emerald-500',
  },
];

export default function CoursesSection() {
  return (
    <div className="p-8 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Active Batches</h1>
          <p className="text-slate-500 dark:text-slate-400">You have {batches.length} active courses this semester.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#5145FA] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100/20">
          <Plus size={20} />
          Create New Batch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div key={batch.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
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
                  {batch.students} / {batch.maxStudents} Students Enrolled
                </span>
              </div>
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className={`${batch.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${(batch.students / batch.maxStudents) * 100}%` }} />
            </div>

            <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Batch Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
