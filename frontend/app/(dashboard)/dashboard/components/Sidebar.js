'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Users, BarChart3, Settings, DollarSign, CircleUserRound } from 'lucide-react';

const Sidebar = ({ user }) => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: BookOpen, label: 'My Courses', href: '/dashboard/sections/courses' },
    { icon: Users, label: 'Students', href: '/dashboard/sections/students' },
    { icon: DollarSign, label: 'Fees', href: '/dashboard/sections/fees' },
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/sections/analytics' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/90 dark:bg-slate-900/80 border-r border-slate-100 dark:border-slate-800 flex flex-col z-[60] backdrop-blur-xl transition-colors duration-300">
      <div className="p-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-slate-100">Tutorly</span>
        </div>
        <div className="flex items-center gap-3">
          <CircleUserRound className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          <div className="min-w-0">
            <p className="text-xs text-slate-400 uppercase tracking-widest">Signed in as</p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">{user?.fullName || 'User'}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300'
                  : 'text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-400 dark:text-slate-400'}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white transition-all">
          <Settings className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
