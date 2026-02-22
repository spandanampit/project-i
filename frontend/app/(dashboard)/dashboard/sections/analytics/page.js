'use client';
import React, { useState } from 'react';
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line } from 'recharts';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Week 1', revenue: 400, projection: 400, students: 24 },
  { name: 'Week 2', revenue: 700, projection: 700, students: 28 },
  { name: 'Week 3', revenue: 600, projection: 600, students: 35 },
  { name: 'Week 4', revenue: 1100, projection: 1100, students: 42 },
  { name: 'Week 5', revenue: null, projection: 1400, students: null },
];

export default function AdvancedAnalytics() {
  const [timeRange, setTimeRange] = useState('Month');

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Business Intelligence</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Growth analysis for <span className="text-indigo-600 dark:text-indigo-300 font-bold">Jan 2026</span>
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          {['Week', 'Month', 'Year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                timeRange === range ? 'bg-[#5145FA] text-white shadow-md' : 'text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              {range}
            </button>
          ))}
          <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700 mx-1" />
          <button className="p-2 text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <Download size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard label="Net Revenue" value="$4,840.00" change="+18.5%" isUp={true} />
        <MetricCard label="Avg Student Value" value="$107.50" change="-2.1%" isUp={false} />
        <MetricCard label="Active Enrollments" value="45" change="+5" isUp={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 dark:border-slate-800">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100">Revenue Flow and Projection</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500">
                <span className="w-3 h-3 rounded-full bg-indigo-500" /> Actual
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500">
                <span className="w-3 h-3 rounded-full border-2 border-indigo-300 border-dashed" /> Forecast
              </div>
            </div>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5145FA" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#5145FA" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="10 10" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#475569', strokeWidth: 2 }} />

                <Area type="monotone" dataKey="revenue" fill="url(#colorRev)" stroke="none" />
                <Line type="monotone" dataKey="revenue" stroke="#5145FA" strokeWidth={4} dot={{ r: 6, fill: '#5145FA', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="projection" stroke="#5145FA" strokeWidth={2} strokeDasharray="8 8" dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1A1D1F] p-8 rounded-[2.5rem] text-white border border-slate-700">
          <h3 className="font-bold text-xl mb-6">Course Efficiency</h3>
          <div className="space-y-8 mt-10">
            <EfficiencyItem label="Physics I" progress={85} color="bg-orange-500" />
            <EfficiencyItem label="Advanced Calculus" progress={62} color="bg-indigo-500" />
            <EfficiencyItem label="Literature 101" progress={94} color="bg-emerald-500" />
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
            <p className="text-white/50 text-xs uppercase font-bold tracking-widest mb-2">Smart Insight</p>
            <p className="text-sm leading-relaxed">Your Physics I batch is operating at 85% capacity. Consider opening a second slot for peak hours.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MetricCard({ label, value, change, isUp }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-indigo-100 dark:hover:border-indigo-500/40 transition-all">
      <p className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">{value}</h2>
        <div className={`flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full ${isUp ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-rose-50 text-rose-600 dark:bg-rose-500/20 dark:text-rose-300'}`}>
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
    </div>
  );
}

function EfficiencyItem({ label, progress, color }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm font-bold">
        <span className="text-white/80">{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className={`h-full ${color} rounded-full`} />
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white dark:border-slate-700">
        <p className="text-xs font-black text-slate-400 uppercase mb-1">{payload[0].payload.name}</p>
        <p className="text-lg font-black text-[#5145FA]">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};
