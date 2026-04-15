'use client';

const TECHS = ['React', 'Node.js', 'TypeScript', 'AI Agents', 'Next.js', 'Tailwind', 'PostgreSQL', 'AWS'];

export function TechStrip() {
  return (
    <section className="relative py-4 sm:py-6 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 glow-divider top-0" />
      <div className="absolute inset-0 glow-divider bottom-0" style={{ top: 'auto' }} />
      <div className="max-w-5xl mx-auto">
        <p className="text-zinc-500 text-xs sm:text-sm text-center tracking-[0.2em] uppercase break-words">
          {TECHS.join('  ·  ')}
        </p>
      </div>
    </section>
  );
}
