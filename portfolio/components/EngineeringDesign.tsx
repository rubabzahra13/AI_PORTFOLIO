'use client';

import { RevealStagger } from '@/components/RevealStagger';

const SERVICES = [
  {
    title: 'Agentic AI',
    accent: 'from-orange-500/20 to-amber-500/10',
    iconColor: 'text-orange-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'RAG & Multi-LLM',
    accent: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    accent: 'from-pink-500/20 to-rose-500/10',
    iconColor: 'text-pink-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'System Architecture',
    accent: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: 'AI Automations',
    accent: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Other Automations',
    accent: 'from-amber-500/20 to-yellow-500/10',
    iconColor: 'text-amber-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function EngineeringDesign() {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden mesh-gradient-cool dot-grid">
      {/* Animated glow blobs */}
      <div className="glow glow-violet glow-animate w-[500px] h-[500px] -top-40 -right-40 opacity-60" />
      <div className="glow glow-blue glow-animate-reverse w-[400px] h-[400px] bottom-0 -left-32 opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Engineering &amp; Design
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-10 sm:mb-14 text-sm sm:text-base">
          I combine AI/ML depth with systems thinking to build production AI. Not just demos, evaluated models, clear APIs, and deployable pipelines.
        </p>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="reveal-stagger-item glass-card shimmer-border rounded-xl p-4 sm:p-6 flex flex-col items-start group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${s.accent} flex items-center justify-center mb-4`}>
                <span className={s.iconColor}>{s.icon}</span>
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
