import React from 'react';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative group p-1 rounded-3xl overflow-hidden">
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-gradient-x opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main CTA Card */}
          <div className="relative bg-[#0b0f1a]/90 backdrop-blur-xl rounded-[22px] px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to <span className="text-blue-400">Simplify</span> Your <br className="hidden md:block" />
              Coaching Business?
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 500+ institutes that have already modernized their operations. 
              No credit card required to start.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1">
                Create Free Account
              </button>
              
              <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Contact Sales
              </button>
            </div>

            {/* Bottom micro-copy */}
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14-Day Free Trial
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Setup in 5 Minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}