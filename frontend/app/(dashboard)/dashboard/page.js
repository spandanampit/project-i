// components/DashboardContent.tsx
import React from 'react';
import { 
  Users, BookOpen, Calendar, DollarSign, 
  PlayCircle, FileText, MessageCircle, 
  ArrowUpRight, MoreHorizontal 
} from 'lucide-react';

const DashboardContent = () => {
  const metrics = [
    { title: 'Total Students', value: '45', growth: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-500/10', trend: 'up' },
    { title: 'Active Courses', value: '08', growth: 'In Progress', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-500/10', trend: 'neutral' },
    { title: 'Upcoming Sessions', value: '04', growth: 'Today', icon: Calendar, color: 'text-indigo-600', bg: 'bg-indigo-500/10', trend: 'up' },
    { title: 'Monthly Earnings', value: '$1,840', growth: '+8.2%', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-500/10', trend: 'up' },
  ];

  return (
    <div className="w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* 1. Glass Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="group relative bg-white/40 backdrop-blur-md p-6 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`${m.bg} ${m.color} w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 transition-transform group-hover:scale-110 duration-500`}>
                <m.icon className="w-6 h-6" />
              </div>
              <span className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/40 ${m.trend === 'up' ? 'bg-emerald-500/10 text-emerald-700' : 'bg-slate-500/10 text-slate-600'}`}>
                {m.growth} {m.trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
              </span>
            </div>
            
            <div className="relative z-10">
              <p className="text-slate-500/80 text-xs font-bold uppercase tracking-widest">{m.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">{m.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. Frosted Schedule View */}
        <div className="lg:col-span-2 bg-white/30 backdrop-blur-lg rounded-[2.5rem] border border-white/80 shadow-2xl shadow-indigo-500/5 p-8 relative overflow-hidden">
          {/* Subtle Background Gradient Blob */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Today's Schedule</h2>
              <p className="text-sm font-medium text-slate-500 mt-1">Ready for your next 4 sessions?</p>
            </div>
            <button className="p-3 bg-white/50 backdrop-blur-md hover:bg-white/80 rounded-2xl transition-all text-slate-400 border border-white/60 shadow-sm">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 relative z-10">
            {/* Glass Live Session Card */}
            <div className="group relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              <div className="bg-gradient-to-r from-indigo-500/10 via-white/40 to-white/10 backdrop-blur-md p-6 rounded-3xl flex flex-wrap md:flex-nowrap items-center justify-between gap-6 border border-white/60 shadow-inner">
                <div className="flex gap-5 items-center">
                  <div className="hidden sm:block w-16 h-16 rounded-2xl border-2 border-white/80 shadow-xl bg-white/20 overflow-hidden backdrop-blur-md">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Student" className="scale-110" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
                      <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em]">Live Session</p>
                    </div>
                    <h4 className="font-bold text-slate-900 text-xl leading-tight">Sarah Jenkins</h4>
                    <p className="text-sm font-semibold text-slate-500/80 uppercase tracking-tighter mt-0.5">Advanced Calculus • Room 402</p>
                  </div>
                </div>
                <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-[0_10px_20px_-5px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Join Room
                </button>
              </div>
            </div>

            {/* Glass Regular Session */}
            <div className="group relative pl-6 transition-all">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-indigo-300 rounded-full transition-colors" />
              <div className="bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/40 rounded-3xl p-6 flex items-center justify-between transition-all duration-300">
                <div className="flex gap-5 items-center">
                  <div className="hidden sm:block w-16 h-16 rounded-2xl border border-white/60 bg-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" alt="Student" className="scale-110" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-1">Upcoming • 3:30 PM</p>
                    <h4 className="font-bold text-slate-800 text-lg">Leo Chen — <span className="text-slate-500 font-medium italic underline decoration-indigo-200 decoration-2">Physics I</span></h4>
                  </div>
                </div>
                <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-indigo-600 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 transition-all">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Side Panels */}
        <div className="space-y-8">
          {/* Glass Activity Feed */}
          <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-xl p-7">
            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center justify-between">
              Activity
              <span className="text-[10px] bg-slate-900 text-white px-2 py-1 rounded-lg">New</span>
            </h2>
            <div className="space-y-7">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-4 relative group">
                  <div className="w-12 h-12 rounded-2xl bg-white/50 border border-white shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:rotate-3 transition-transform">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i === 0 ? 'Leo' : 'Gable'}`} alt="Avatar" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 leading-snug">
                      <span className="font-bold text-slate-900">{i === 0 ? 'Leo' : 'Mrs. Gable'}</span> {i === 0 ? 'submitted the Lab Report.' : 'sent a priority message.'}
                    </p>
                    <span className="text-[10px] font-bold text-indigo-500/70 uppercase mt-1 inline-block">24m ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Glass Goal Card */}
          <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px]" />
            <h3 className="text-xl font-black mb-1">Monthly Goal</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Revenue Target</p>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-3xl font-black">$1,840<span className="text-slate-500 text-sm font-normal"> / $2,500</span></span>
                <span className="text-indigo-400 font-bold text-sm">74%</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 h-full w-[74%] rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
              </div>
              <button className="w-full bg-white text-slate-900 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-[0.98]">
                Analytics
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardContent;