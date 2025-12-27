// components/Sidebar.tsx
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: BookOpen, label: 'My Courses', active: false },
    { icon: Users, label: 'Students', active: false },
    { icon: Calendar, label: 'Schedule', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-100 flex flex-col z-[60]">
      {/* Logo Section */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Tutorly</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              item.active 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-indigo-600' : 'text-slate-400'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all">
          <Settings className="w-5 h-5 text-slate-400" />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50 transition-all mt-1">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;