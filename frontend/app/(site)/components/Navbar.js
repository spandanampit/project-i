"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, LogIn, UserPlus } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
          credentials: 'include',
        });

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();
        setUser(data.user || null);
      } catch {
        setUser(null);
      }
    };

    getSession();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
      <div
        className={`
          mx-auto transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? 'mt-4 max-w-5xl rounded-2xl border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] px-6 py-3'
              : 'max-w-full rounded-none border-b border-white/5 bg-transparent px-8 py-6'
          }
        `}
      >
        <div className="flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-9 h-9 bg-black rounded-lg flex items-center justify-center font-bold text-white border border-white/10">T</div>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              Tutor<span className="text-blue-500">.</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <button
                onClick={() => router.push('/dashboard')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/40 text-blue-200 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all text-xs font-bold uppercase tracking-widest"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => router.push('/auth/login')}
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Log in
                </button>
                <button
                  onClick={() => router.push('/auth/register')}
                  className="relative group px-6 py-2.5 rounded-xl overflow-hidden transition-all active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-105 transition-transform" />
                  <span className="relative inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                    <UserPlus className="w-4 h-4" />
                    Get Started
                  </span>
                </button>
              </>
            )}

            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-[#020617] border border-white/10 rounded-2xl animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4 text-center py-4">
              <a href="#features" className="text-gray-400 py-2">
                Features
              </a>
              <a href="#solutions" className="text-gray-400 py-2">
                Solutions
              </a>
              <a href="#pricing" className="text-gray-400 py-2">
                Pricing
              </a>
              {user ? (
                <button
                  onClick={() => router.push('/dashboard')}
                  className="bg-blue-600 text-white py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              ) : (
                <button onClick={() => router.push('/auth/login')} className="bg-white text-black py-3 rounded-xl font-bold">
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
