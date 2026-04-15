'use client';

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden mesh-gradient-amber">
      {/* Big warm CTA glow */}
      <div className="glow glow-amber glow-animate w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="glow glow-orange glow-animate-reverse w-[300px] h-[300px] bottom-0 left-10 opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Get in touch
        </h2>
        <p className="text-zinc-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Open to full-stack and AI engineering roles. Have a project? Say hello.
        </p>
        <a
          href="mailto:rubabzahra248@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:from-orange-400 hover:to-amber-400 transition-all shadow-[0_0_30px_rgba(251,146,60,0.25)] hover:shadow-[0_0_40px_rgba(251,146,60,0.4)]"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          rubabzahra248@gmail.com
        </a>
        <p className="mt-8 text-zinc-500 text-sm">
          Rawalpindi / Islamabad · Remote or onsite
        </p>
      </div>
    </section>
  );
}
