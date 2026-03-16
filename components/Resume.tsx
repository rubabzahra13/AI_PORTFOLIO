'use client';

export function Resume() {
  return (
    <section id="resume" className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden mesh-gradient-cool">
      <div className="glow glow-blue glow-animate w-[300px] h-[300px] top-0 right-20 opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
          CV
        </h2>
        <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
          Full CV available on request.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/nuzhat-rubab-zahra-ab553b237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-orange-400 font-medium hover:bg-white/[0.08] hover:border-orange-500/30 transition-all"
          >
            LinkedIn
            <span aria-hidden>↗</span>
          </a>
          <a
            href="mailto:rubabzahra248@gmail.com?subject=CV request"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-orange-400 font-medium hover:bg-white/[0.08] hover:border-orange-500/30 transition-all"
          >
            Email for CV
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
