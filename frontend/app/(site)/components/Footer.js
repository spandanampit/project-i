import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold">T</div>
              <span className="font-bold text-lg tracking-tight">Tutor</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Empowering educators with AI-driven tools to manage and scale their coaching institutes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Automations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Social</h4>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <div key={platform} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 cursor-pointer transition-all">
                  <span className="sr-only">{platform}</span>
                  <div className="w-4 h-4 bg-gray-600 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono tracking-widest uppercase">
          <p>© 2025 Tutor AI Inc. All rights reserved.</p>
          <p>System Status: Operational</p>
        </div>
      </div>
    </footer>
  );
}