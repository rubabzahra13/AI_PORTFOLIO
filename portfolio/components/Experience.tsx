'use client';

import { RevealStagger } from '@/components/RevealStagger';

const ROLES: {
  title: string;
  company: string;
  companyVia?: string;
  period: string;
  line: string;
  accent: string;
}[] = [
  {
    title: 'Lead Agentic AI Engineer & Full-Stack Developer',
    company: 'BrandScaling (UK)',
    companyVia: 'Global outsourcing Hub',
    period: 'July 2025 – Present',
    line: 'Agentic AI, Decision Intelligence Agent, automation.',
    accent: 'bg-orange-400',
  },
  {
    title: 'Lead Full-Stack Developer',
    company: 'Adminless (UK)',
    companyVia: 'Global outsourcing Hub',
    period: 'July 2025 – Present',
    line: 'Care Property Hub, GHL CRM, dashboards.',
    accent: 'bg-violet-400',
  },
  { title: 'AI Intern', company: 'NASTP', period: 'Jun, Aug 2024', line: 'Aerospace & tech park.', accent: 'bg-blue-400' },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden mesh-gradient-cool">
      <div className="glow glow-blue glow-animate w-[400px] h-[400px] top-0 right-0 opacity-40" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Experience
        </h2>
        <p className="text-zinc-400 mb-10 sm:mb-14 text-sm sm:text-base">
          Where I work and what I focus on.
        </p>
        <RevealStagger className="space-y-0">
          {ROLES.map((role, i) => (
            <div key={i} className="reveal-stagger-item relative pl-8 pb-8 sm:pb-10 last:pb-0 group">
              {/* Timeline line */}
              {i < ROLES.length - 1 && (
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-zinc-700 to-zinc-800/30" />
              )}
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${role.accent} shadow-[0_0_10px_rgba(255,255,255,0.15)] ring-4 ring-[#0a0a10]`} />

              <div className="glass-card rounded-xl p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-2">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-white">{role.title}</h3>
                  <span className="text-zinc-500 text-sm tabular-nums">{role.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-1 leading-snug min-w-0">
                  <span className="text-zinc-300">{role.company}</span>
                  {role.companyVia ? (
                    <>
                      <span className="hidden sm:inline"> </span>
                      <span className="mt-0.5 block text-zinc-500 sm:mt-0 sm:inline">
                        by {role.companyVia}
                      </span>
                    </>
                  ) : null}
                </p>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{role.line}</p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
