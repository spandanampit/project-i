import React from 'react';

export default function ThumbnailSection() {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Decorative background glow to match Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            One Dashboard. <span className="text-blue-400">Total Control.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Experience a sleek, high-performance interface designed for clarity and speed. 
            Manage everything from a single, unified command center.
          </p>
        </div>

        {/* Futuristic Image Container */}
        <div className="relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Main Preview Card */}
          <div className="relative bg-[#0b0f1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform perspective-1000 hover:rotate-x-1 transition-transform duration-500">
            {/* Top Bar / Mac-style Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
              </div>
              <div className="mx-auto text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                System Analytics v2.0
              </div>
            </div>

            {/* Placeholder for Dashboard Image */}
            <div className="relative aspect-video flex items-center justify-center bg-[#0d111c]">
              {/* Replace the div below with an actual <img> tag when ready */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                   <svg className="w-8 h-8 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                </div>
                <p className="text-gray-500 font-medium tracking-wide">Interactive Dashboard Preview</p>
              </div>

              {/* Decorative Floating Elements (optional) */}
              <div className="absolute top-10 right-10 w-32 h-20 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm p-3 hidden md:block">
                <div className="w-full h-2 bg-blue-500/20 rounded-full mb-2" />
                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Tags beneath the preview */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          {['Real-time Sync', 'Dark Mode UI', 'Automated Invoicing'].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}