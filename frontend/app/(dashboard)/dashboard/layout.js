'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Header from './components/DashboardHeader';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('dashboard-theme');
    const useDark = storedTheme ? storedTheme === 'dark' : true;

    setDarkMode(useDark);
    document.documentElement.classList.toggle('dark', useDark);
  }, []);

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
          credentials: 'include',
        });

        if (!response.ok) {
          router.replace('/auth/login');
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch {
        router.replace('/auth/login');
      } finally {
        setLoading(false);
      }
    };

    getSession();
  }, [router]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('dashboard-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      router.push('/auth/login');
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-950" />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex transition-colors duration-300">
      <Sidebar user={user} />

      <div className="flex-1 ml-64">
        <Header user={user} darkMode={darkMode} onToggleTheme={handleToggleTheme} onLogout={handleLogout} />

        <main className="pt-24 px-8 pb-12 text-slate-800 dark:text-slate-100">{children}</main>
      </div>
    </div>
  );
}
