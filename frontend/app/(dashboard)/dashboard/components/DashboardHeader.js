// components/Header.tsx
import React from 'react';
import { Search, Bell, ChevronDown, Command, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-4 left-72 right-8 z-50">
      <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[1.5rem] px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Left: Contextual Breadcrumb */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-lg border border-indigo-100/50">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Pro Plan</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-200 hidden lg:block" />
          <h1 className="text-sm font-bold text-slate-800 tracking-tight">
            Dashboard <span className="text-slate-300 font-normal mx-1">/</span> <span className="text-slate-500">Overview</span>
          </h1>
        </div>

        {/* Center: Command-Style Search */}
        <div className="flex-1 max-w-md mx-8 group">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search or type a command..." 
              className="w-full bg-slate-100/50 border-transparent border focus:bg-white focus:border-indigo-100 rounded-2xl py-2.5 pl-11 pr-12 text-sm transition-all focus:shadow-sm outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-1.5 py-1 bg-white border border-slate-200 rounded-md shadow-sm">
              <Command className="w-2.5 h-2.5 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 leading-none font-sans">K</span>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Enhanced Notifications */}
          <button className="group relative p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full group-hover:scale-110 transition-transform"></span>
          </button>

          <div className="w-[1px] h-6 bg-slate-100 mx-2" />

          {/* Profile Section */}
          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden ring-2 ring-white shadow-sm group-hover:ring-indigo-100 transition-all">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=man" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="hidden xl:block">
              <p className="text-sm font-bold text-slate-800 leading-none group-hover:text-indigo-600 transition-colors">Spandan Saha</p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-tighter opacity-80">Administrator</p>
            </div>
            
            <div className="p-1 hover:bg-slate-50 rounded-md transition-colors">
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;