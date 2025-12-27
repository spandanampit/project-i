"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (clientX - left) / width - 0.5,
        y: (clientY - top) / height - 0.5,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-32 overflow-hidden bg-[#020617] text-white selection:bg-blue-500/30"
    >
      {/* --- Advanced Background Layer --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Aurora Glows */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] transition-transform duration-1000 ease-out" 
          style={{ transform: `translate(${mousePos.x * 50}px, ${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[120px] transition-transform duration-1000 ease-out" 
          style={{ transform: `translate(${mousePos.x * -30}px, ${scrollY * -0.1}px)` }}
        />
        
        {/* Kinetic Grid System */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
          }}
        />

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/3 right-12 w-32 h-32 border border-purple-500/10 rotate-45 animate-pulse" />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Glass Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:border-blue-500/50 transition-colors group cursor-default">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </div>
          <span className="text-[11px] font-bold tracking-[0.15em] text-blue-100/80 uppercase">
            v2.0 Now Live: Next-Gen Analytics
          </span>
        </div>

        {/* Dynamic Heading */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] perspective-1000">
          <span className="block transform transition-transform duration-500 hover:scale-[1.02]">
            Master Your
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 filter drop-shadow-2xl">
            Academy’s Future
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          The autonomous operating system for high-growth coaching institutes. 
          <span className="block mt-2 text-slate-200 font-normal italic">Scale without the chaos.</span>
        </p>

        {/* Neo-Brutalist Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <button className="group relative px-8 py-4 rounded-xl bg-blue-600 font-bold transition-all duration-300 hover:shadow-[0_0_40px_8px_rgba(37,99,235,0.4)] hover:-translate-y-1">
            <span className="relative z-10 flex items-center gap-2">
              Get Started for Free
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl font-bold hover:bg-white/10 transition-all flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <svg width="12" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M10 6L0 12V0L10 6Z"/></svg>
            </div>
            Book a Demo
          </button>
        </div>

        {/* --- Advanced Hero Visual (3D Perspective Dashboard) --- */}
        <div 
          className="relative max-w-6xl mx-auto group"
          style={{ 
            perspective: '2000px',
          }}
        >
          <div 
            className="relative transition-all duration-1000 ease-out-expo border border-white/20 rounded-[2.5rem] bg-[#0b0f1a]/80 backdrop-blur-3xl p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
            style={{ 
              transform: `rotateX(${Math.max(0, 15 - scrollY * 0.04)}deg) rotateY(${mousePos.x * 5}deg) scale(${Math.min(1.05, 0.95 + scrollY * 0.0002)})`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Inner Dashboard UI Mock */}
            <div className="rounded-[1.8rem] bg-[#020617] aspect-[16/10] overflow-hidden relative border border-white/5">
              {/* Fake UI Header */}
              <div className="h-12 border-b border-white/5 w-full flex items-center px-6 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="h-4 w-32 bg-white/5 rounded-md" />
              </div>

              {/* Fake Content Grid */}
              <div className="p-8 grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                  <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-white/5 p-6">
                    <div className="h-4 w-24 bg-blue-400/20 rounded mb-4" />
                    <div className="flex items-end gap-2">
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-500/40 rounded-t-sm" style={{ height: `${h}px` }} />
                        ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="h-32 rounded-2xl bg-white/5 border border-white/5" />
                    <div className="h-32 rounded-2xl bg-white/5 border border-white/5" />
                  </div>
                </div>
                <div className="h-full rounded-2xl bg-white/5 border border-white/5" />
              </div>

              {/* Floating 3D Elements */}
              <div 
                className="absolute top-20 -right-12 p-6 rounded-2xl bg-[#1e293b] border border-white/10 shadow-2xl transition-transform duration-500 hover:translate-y-[-10px]"
                style={{ transform: 'translateZ(50px)' }}
              >
                <p className="text-[10px] text-emerald-400 font-bold mb-1">REVENUE GROWTH</p>
                <p className="text-3xl font-black">+142%</p>
              </div>

              <div 
                className="absolute bottom-12 -left-8 p-5 rounded-2xl bg-blue-600 border border-blue-400/30 shadow-2xl"
                style={{ transform: 'translateZ(80px)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse" />
                  <div>
                    <div className="h-2 w-16 bg-white/40 rounded mb-1" />
                    <div className="h-2 w-10 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modern Trusted By Section */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-6 pointer-events-none">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Industry Standards Integrated</p>
        <div className="flex gap-10 opacity-30 grayscale contrast-125">
          {['Stripe', 'Zoom', 'Slack', 'WhatsApp'].map((brand) => (
            <span key={brand} className="text-lg font-black tracking-tighter italic">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}