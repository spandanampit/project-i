'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Search, Bell, ChevronDown, Command, Sparkles, LogOut, Moon, Sun } from 'lucide-react';

const Header = ({ user, darkMode, onToggleTheme, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-4 left-72 right-8 z-50">
      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[1.5rem] px-6 py-3 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/20 rounded-lg border border-indigo-100/50 dark:border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300" />
            <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-200 uppercase tracking-wider">Pro Plan</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 hidden lg:block" />
          <h1 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Dashboard <span className="text-slate-300 dark:text-slate-600 font-normal mx-1">/</span>{' '}
            <span className="text-slate-500 dark:text-slate-300">Overview</span>
          </h1>
        </div>

        <div className="flex-1 max-w-md mx-8 group">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search or type a command..."
              className="w-full bg-slate-100/50 dark:bg-slate-800 border-transparent border focus:bg-white dark:focus:bg-slate-800 focus:border-indigo-100 dark:focus:border-indigo-500/30 rounded-2xl py-2.5 pl-11 pr-12 text-sm transition-all focus:shadow-sm outline-none text-slate-800 dark:text-slate-200"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-1.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm">
              <Command className="w-2.5 h-2.5 text-slate-400 dark:text-slate-500" />
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 leading-none font-sans">K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleTheme}
            className="p-2.5 text-slate-500 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-xl transition-all duration-200"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="group relative p-2.5 text-slate-400 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-xl transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white dark:border-slate-900 rounded-full group-hover:scale-110 transition-transform"></span>
          </button>

          <div className="w-[1px] h-6 bg-slate-100 dark:bg-slate-700 mx-2" />

          <div ref={menuRef} className="relative">
            <button onClick={() => setMenuOpen((prev) => !prev)} className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden ring-2 ring-white dark:ring-slate-700 shadow-sm group-hover:ring-indigo-100 dark:group-hover:ring-indigo-500/30 transition-all">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=man" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
              </div>

              <div className="hidden xl:block text-left">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-none group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {user?.fullName || 'User'}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase font-black tracking-tighter opacity-80">Administrator</p>
              </div>

              <div className="p-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
                <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
              </div>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 w-60 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-2">
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{user?.fullName || 'User'}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full mt-1 flex items-center gap-2 px-3 py-2 text-sm rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
