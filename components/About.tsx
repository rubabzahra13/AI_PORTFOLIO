'use client';

import { RevealStagger } from '@/components/RevealStagger';

const FOCUS = [
  'Agentic AI & AI engineering at BrandScaling',
  'Multi-LLM systems, RAG, and ML pipelines',
  'Scaling AI prototypes to production',
];

export function About() {
  return (
    <section id="about-me" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden mesh-gradient-emerald">
      <div className="glow glow-emerald glow-animate w-[500px] h-[500px] -bottom-32 right-0 opacity-60" />
      <div className="glow glow-orange glow-animate-reverse w-[300px] h-[300px] top-10 -left-20 opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <RevealStagger className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <div className="reveal-stagger-item">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              About me
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
              I build AI systems that ship. Agentic AI, RAG pipelines, multi-LLM routing, and ML tooling, from research to production. I focus on grounding models in data, safe deployment, and clear evaluation so products are reliable and scalable.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              I lead AI engineering and agentic AI work at BrandScaling; I also do full-stack and automation work. Based in the twin cities.
            </p>
          </div>
          <div className="reveal-stagger-item glass-card rounded-xl p-4 sm:p-6">
            <h3 className="text-white font-semibold mb-4">Current focus</h3>
            <ul className="space-y-3">
              {FOCUS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${i === 0 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]'}`} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}
