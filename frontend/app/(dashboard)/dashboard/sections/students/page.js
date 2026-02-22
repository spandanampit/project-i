import React from 'react';
import { Search, Filter, MoreHorizontal, UserPlus } from 'lucide-react';

const students = [
  { id: 1, name: 'Leo Chen', batch: 'Physics I', salaryPaid: '$450', status: 'Paid', image: '/api/placeholder/40/40' },
  { id: 2, name: 'Sarah Jenkins', batch: 'Advanced Calculus', salaryPaid: '$600', status: 'Paid', image: '/api/placeholder/40/40' },
  { id: 3, name: 'Mrs. Gable', batch: 'Literature 101', salaryPaid: '$0', status: 'Pending', image: '/api/placeholder/40/40' },
];

export default function StudentSection() {
  return (
    <div className="p-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Students</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage your students and their enrollment details.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#5145FA] text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
          <UserPlus size={18} />
          <span>Add Student</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-sm">Total Students</p>
          <h3 className="text-2xl font-bold mt-1 text-slate-900 dark:text-slate-100">45</h3>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-sm">Fees Collected</p>
          <h3 className="text-2xl font-bold mt-1 text-green-600 dark:text-green-400">$1,840</h3>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-sm">Pending Payments</p>
          <h3 className="text-2xl font-bold mt-1 text-orange-500 dark:text-orange-400">03</h3>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-slate-50 dark:border-slate-800">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 dark:text-slate-200"
            />
          </div>
          <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-800">
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-8 py-4 font-semibold">Student Name</th>
                <th className="px-6 py-4 font-semibold">Current Batch</th>
                <th className="px-6 py-4 font-semibold">Salary Paid (Jan)</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={student.image} alt="" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700" />
                      <span className="font-semibold text-slate-700 dark:text-slate-100">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300 text-sm">{student.batch}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{student.salaryPaid}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Paid'
                          ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300'
                          : 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-400 dark:text-slate-500">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
