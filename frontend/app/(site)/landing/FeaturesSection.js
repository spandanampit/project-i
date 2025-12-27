import React from 'react';

const features = [
  {
    title: "Student Management",
    description: "Centralized database for student profiles, batch assignments, and academic progress tracking.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Attendance Tracking",
    description: "Smart digital registers with automated absentee alerts and comprehensive monthly reports.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Fee & Payments",
    description: "Automated invoicing, partial payment tracking, and digital receipt generation in one click.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400"
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful tools designed to simplify your administrative workflow and focus on what matters: teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Feature Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl rounded-2xl bg-gradient-to-br ${feature.color}`} />
              
              <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-10 text-white`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}