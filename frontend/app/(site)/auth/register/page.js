"use client";
import React, { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    academyName: ''
  });

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden px-6 py-12">
      {/* Dynamic Background: Mesh Gradient + Floating Light */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] animate-[pulse_8s_infinite]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] animate-[pulse_10s_infinite]" />
        
        {/* Animated Grid Mask */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, 
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] grid lg:grid-cols-2 bg-[#0b0f1a]/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Left Side: Branding & Info */}
        <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-blue-600/20 to-transparent border-r border-white/5">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">AcaFlow</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white leading-tight mb-6">
              Empowering the next generation of <span className="text-blue-400">educators.</span>
            </h2>
            
            <ul className="space-y-4">
              {[
                "Automated Student Enrollment",
                "Advanced AI Performance Analytics",
                "Built-in Financial Management",
                "White-labeled Student Portal"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-sm text-slate-400 italic">"This platform reduced our administrative overhead by 60% in the first three months."</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400" />
              <div>
                <p className="text-xs font-bold text-white">Sarah Jenkins</p>
                <p className="text-[10px] text-slate-500 uppercase">Director, Peak Academy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="p-8 md:p-12 lg:p-16">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-slate-400">Join 500+ academies scaling with AcaFlow.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Academy Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="Global Scholars"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Work Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="john@academy.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Password</label>
              <input 
                type="password" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-blue-600" id="terms" />
              <label htmlFor="terms" className="text-xs text-slate-400">
                I agree to the <a href="#" className="text-blue-400 hover:underline">Terms</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-blue-900/20 mt-4">
              Start Free 14-Day Trial
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              Already have an account? 
              <a href="login" className="ml-2 font-bold text-white hover:text-blue-400 transition-colors">
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}