'use client';

const FOCUS = [
  'Agentic AI & AI engineering at BrandScaling',
  'Multi-LLM systems, RAG, and ML pipelines',
  'Scaling AI prototypes to production',
];

export function About() {
  return (
    <section id="about-me" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f0f14]">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              About me
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
              I build AI systems that ship. Agentic AI, RAG pipelines, multi-LLM routing, and ML tooling—from research to production. I focus on grounding models in data, safe deployment, and clear evaluation so products are reliable and scalable.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              I lead AI engineering and agentic AI work at BrandScaling; I also do full-stack and automation work. Based in Rawalpindi.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-orange-900/40 to-amber-900/40 border border-zinc-700/50 p-4 sm:p-6">
            <h3 className="text-white font-semibold mb-4">Current focus</h3>
            <ul className="space-y-3">
              {FOCUS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${i === 0 ? 'bg-emerald-400' : 'bg-orange-400'}`} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
