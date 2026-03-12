'use client';

import { RevealStagger } from '@/components/RevealStagger';

const SKILL_GROUPS = [
  {
    label: 'AI engineering',
    accent: 'from-orange-500/20 to-amber-500/5',
    dotColor: 'bg-orange-400',
    tools: ['Prompt engineering', 'RAG', 'Multi-LLM routing', 'LangChain', 'Evaluation', 'Iterative development'],
  },
  {
    label: 'Agentic AI',
    accent: 'from-violet-500/20 to-purple-500/5',
    dotColor: 'bg-violet-400',
    tools: ['AI agents', 'Tool use', 'Multi-step reasoning', 'Autonomous workflows', 'Orchestration', 'Reasoning loops'],
  },
  {
    label: 'Frontend',
    accent: 'from-blue-500/20 to-cyan-500/5',
    dotColor: 'bg-blue-400',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Component-driven UI', 'UX principles', 'Wireframing', 'Figma'],
  },
  {
    label: 'Backend',
    accent: 'from-emerald-500/20 to-green-500/5',
    dotColor: 'bg-emerald-400',
    tools: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Webhooks', 'Auth (JWT)', 'Event-driven triggers'],
  },
  {
    label: 'GenAI',
    accent: 'from-pink-500/20 to-rose-500/5',
    dotColor: 'bg-pink-400',
    tools: ['OpenAI', 'Claude', 'DeepSeek', 'Gemini', 'RAG', 'LangChain', 'Multi-LLM routing', 'Web search tooling'],
  },
  {
    label: 'Data',
    accent: 'from-amber-500/20 to-yellow-500/5',
    dotColor: 'bg-amber-400',
    tools: ['PostgreSQL', 'Supabase', 'MySQL', 'AWS Aurora/RDS', 'pgvector', 'ChromaDB'],
  },
  {
    label: 'Cloud & deploy',
    accent: 'from-cyan-500/20 to-sky-500/5',
    dotColor: 'bg-cyan-400',
    tools: ['AWS Amplify', 'AWS App Runner', 'Docker', 'Vercel', 'CI/CD pipelines', 'HTTPS', 'RLS'],
  },
  {
    label: 'CRM / automation',
    accent: 'from-rose-500/20 to-red-500/5',
    dotColor: 'bg-rose-400',
    tools: ['GoHighLevel (GHL)', 'n8n', 'EC2', 'Lifecycle triggers', 'Notification workflows'],
  },
];

const EXECUTION = [
  {
    title: 'Speed',
    line: 'Ship agentic and RAG systems from idea to deployable API; iterate on evals and prompts in tight loops.',
  },
  {
    title: 'Iterative development',
    line: 'AI demos and live pipelines aligned to product goals; experiment-first, then harden for production.',
  },
  {
    title: 'Autonomy',
    line: 'Design data pipelines, model routing, and evaluation so AI systems are measurable and maintainable.',
  },
  {
    title: 'Collaboration',
    line: 'Work with product, infra, and other engineers; clear APIs and docs so AI components integrate cleanly.',
  },
  {
    title: 'Evaluation-driven iteration',
    line: 'Improve on evals and user feedback; version prompts and models with clear baselines.',
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden mesh-gradient-violet">
      <div className="glow glow-violet glow-animate w-[500px] h-[500px] -top-32 -left-32 opacity-50" />
      <div className="glow glow-pink glow-animate-reverse w-[400px] h-[400px] bottom-0 right-0 opacity-40" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Skills &amp; execution
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-12 max-w-2xl">
          Technical stack and how I ship: AI/ML tools, GenAI, and execution style.
        </p>

        <div className="mb-14">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
            Technical skills
          </h3>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="reveal-stagger-item glass-card shimmer-border rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${group.dotColor} shadow-[0_0_6px_currentColor]`} />
                  <p className="text-white font-semibold text-sm">{group.label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`inline-block px-2.5 py-1 rounded-md bg-gradient-to-r ${group.accent} text-zinc-300 text-xs font-medium border border-white/[0.04]`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
            Execution style
          </h3>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXECUTION.map((item) => (
              <div
                key={item.title}
                className="reveal-stagger-item glass-card rounded-xl p-4 sm:p-5 flex flex-col"
              >
                <p className="text-orange-400 font-semibold text-sm mb-1.5">{item.title}</p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.line}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 glow-divider" />
    </section>
  );
}
