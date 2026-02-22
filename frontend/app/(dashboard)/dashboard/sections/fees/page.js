'use client';
import React, { useState } from 'react';
import { Search, Download, MoreVertical, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const batches = ['All Batches', 'Physics I', 'Advanced Calculus', 'Literature 101'];

const students = [
  {
    id: 1,
    name: 'Leo Chen',
    batch: 'Physics I',
    history: [
      { month: 'Nov', status: 'paid', amount: '$450' },
      { month: 'Dec', status: 'paid', amount: '$450' },
      { month: 'Jan', status: 'paid', amount: '$450' },
    ],
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    batch: 'Advanced Calculus',
    history: [
      { month: 'Nov', status: 'paid', amount: '$600' },
      { month: 'Dec', status: 'pending', amount: '$600' },
      { month: 'Jan', status: 'unpaid', amount: '$600' },
    ],
  },
  {
    id: 3,
    name: 'Mrs. Gable',
    batch: 'Literature 101',
    history: [
      { month: 'Nov', status: 'paid', amount: '$300' },
      { month: 'Dec', status: 'paid', amount: '$300' },
      { month: 'Jan', status: 'pending', amount: '$300' },
    ],
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    paid: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30',
    pending: 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30',
    unpaid: 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30',
  };

  const icons = {
    paid: <CheckCircle2 size={14} />,
    pending: <Clock size={14} />,
    unpaid: <AlertCircle size={14} />,
  };

  return (
    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${styles[status]}`}>
      {icons[status]}
      {status}
    </div>
  );
};

export default function FeesSection() {
  const [activeBatch, setActiveBatch] = useState('All Batches');

  return (
    <div className="p-8 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Fee Management</h1>
          <p className="text-slate-500 dark:text-slate-400">Track monthly subscriptions and payment history.</p>
        </div>
        <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {batches.map((batch) => (
          <button
            key={batch}
            onClick={() => setActiveBatch(batch)}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
              activeBatch === batch
                ? 'bg-[#5145FA] text-white shadow-lg shadow-indigo-100/20'
                : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            {batch}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <div className="relative w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search by student name..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200"
            />
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Paid</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" /> Pending</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500" /> Overdue</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-[11px] uppercase font-bold tracking-[0.1em]">
                <th className="px-8 py-5">Student Details</th>
                <th className="px-6 py-5">Current Batch</th>
                <th className="px-6 py-5 text-center">November</th>
                <th className="px-6 py-5 text-center">December</th>
                <th className="px-6 py-5 text-center">January</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-xs">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-100 leading-tight">{student.name}</p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-tighter">ID: #00{student.id}92</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{student.batch}</span>
                  </td>

                  {student.history.map((record) => (
                    <td key={`${student.id}-${record.month}`} className="px-6 py-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <StatusBadge status={record.status} />
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{record.amount}</span>
                      </div>
                    </td>
                  ))}

                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-400 dark:text-slate-500 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50/50 dark:bg-slate-800/40 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Showing 3 of 45 students</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-400 dark:text-slate-500 cursor-not-allowed">Prev</button>
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:border-indigo-200 dark:hover:border-indigo-400">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
