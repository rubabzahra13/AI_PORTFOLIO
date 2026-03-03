'use client';

const SKILL_GROUPS = [
  {
    label: 'AI engineering',
    tools: ['Prompt engineering', 'RAG', 'Multi-LLM routing', 'LangChain', 'Evaluation', 'Cursor', 'Rapid prototyping'],
  },
  {
    label: 'Agentic AI',
    tools: ['AI agents', 'Tool use', 'Multi-step reasoning', 'Autonomous workflows', 'Orchestration', 'Reasoning loops'],
  },
  {
    label: 'Frontend',
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Component-driven UI', 'UX principles', 'Wireframing', 'Figma'],
  },
  {
    label: 'Backend',
    tools: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Webhooks', 'Auth (JWT)', 'Event-driven triggers'],
  },
  {
    label: 'GenAI',
    tools: ['OpenAI', 'Claude', 'DeepSeek', 'Gemini', 'RAG', 'LangChain', 'Multi-LLM routing', 'Web search tooling'],
  },
  {
    label: 'Data',
    tools: ['PostgreSQL', 'Supabase', 'MySQL', 'AWS Aurora/RDS', 'pgvector', 'ChromaDB'],
  },
  {
    label: 'Cloud & deploy',
    tools: ['AWS Amplify', 'AWS App Runner', 'Docker', 'Vercel', 'CI/CD pipelines', 'HTTPS', 'RLS'],
  },
  {
    label: 'CRM / automation',
    tools: ['GoHighLevel (GHL)', 'n8n', 'EC2', 'Lifecycle triggers', 'Notification workflows'],
  },
];

const EXECUTION = [
  {
    title: 'Speed',
    line: 'Ship agentic and RAG systems from idea to deployable API; iterate on evals and prompts in tight loops.',
  },
  {
    title: 'Rapid prototyping',
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
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f0f14] border-y border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Skills &amp; execution
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-12 max-w-2xl">
          Technical stack and how I ship: AI/ML tools, GenAI, and execution style.
        </p>

        {/* Technical skills: category cards with pill tags */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
            Technical skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="rounded-xl bg-[#18181f] border border-zinc-800 p-4 sm:p-5"
              >
                <p className="text-white font-semibold text-sm mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Execution style: short cards */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
            Execution style
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXECUTION.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-[#18181f] border border-zinc-800 p-4 sm:p-5 flex flex-col"
              >
                <p className="text-orange-400 font-semibold text-sm mb-1.5">{item.title}</p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
