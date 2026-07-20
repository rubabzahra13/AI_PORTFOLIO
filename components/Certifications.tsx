'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useState } from 'react';
import { RevealStagger } from '@/components/RevealStagger';

type Cert = {
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  href: string;
  preview: string;
  accent: string;
};

const CERTS: Cert[] = [
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    issued: 'Mar 23, 2026',
    credentialId: '8UHN2SLWL7WU',
    href: '/courseCertificates/pythoncoursera.pdf',
    preview: '/courseCertificates/previews/pythoncoursera.png',
    accent: 'bg-violet-400',
  },
  {
    title: 'NumPy, Matplotlib & Pandas',
    issuer: 'Packt',
    issued: 'Apr 13, 2026',
    credentialId: 'VO91ZNQ3CZPQ',
    href: '/courseCertificates/numpycoursera.pdf',
    preview: '/courseCertificates/previews/numpycoursera.png',
    accent: 'bg-emerald-400',
  },
  {
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    issued: 'Oct 4, 2023',
    credentialId: 'LQ088YYBJF7B',
    href: '/courseCertificates/aiforallcoursera.pdf',
    preview: '/courseCertificates/previews/aiforallcoursera.png',
    accent: 'bg-orange-400',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    issued: 'Nov 18, 2023',
    credentialId: 'YMK7VHR3392F',
    href: '/courseCertificates/frontendcoursera.pdf',
    preview: '/courseCertificates/previews/frontendcoursera.png',
    accent: 'bg-sky-400',
  },
  {
    title: 'Introduction to Back-End Development',
    issuer: 'Meta',
    issued: 'Nov 18, 2023',
    credentialId: '5SNQ0H2Y6FXK',
    href: '/courseCertificates/backendcoursera.pdf',
    preview: '/courseCertificates/previews/backendcoursera.png',
    accent: 'bg-blue-400',
  },
];

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);
  const titleId = useId();

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close]);

  return (
    <section id="certifications" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden mesh-gradient-violet">
      <div className="glow glow-violet glow-animate w-[420px] h-[420px] -bottom-20 left-0 opacity-35" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Licenses &amp; certifications
        </h2>
        <p className="text-zinc-400 mb-10 sm:mb-14 text-sm sm:text-base max-w-2xl">
          Credentials that shaped my foundation in AI, Python, and full-stack development.
        </p>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CERTS.map((cert) => (
            <article
              key={cert.credentialId}
              className="reveal-stagger-item glass-card rounded-xl overflow-hidden flex flex-col border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <button
                type="button"
                onClick={() => setActive(cert)}
                className="relative block aspect-[4/3] bg-white/[0.03] overflow-hidden group text-left w-full cursor-pointer"
              >
                <Image
                  src={cert.preview}
                  alt={`${cert.title} certificate`}
                  fill
                  className="object-contain object-top p-2 sm:p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-start gap-2 mb-2">
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${cert.accent} shadow-[0_0_8px_rgba(255,255,255,0.12)]`}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-base font-semibold text-white leading-snug">
                        {cert.title}
                      </h3>
                      <span className="text-zinc-500 text-xs tabular-nums">{cert.issued}</span>
                    </div>
                    <p className="text-zinc-300 text-sm mt-1.5">{cert.issuer}</p>
                    <p className="text-zinc-500 text-xs mt-1 tabular-nums">
                      ID {cert.credentialId}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="inline-flex items-center gap-1.5 mt-auto pt-3 text-sm font-medium text-orange-300/90 hover:text-orange-200 transition-colors self-start"
                >
                  View certificate
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </RevealStagger>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-label="Close certificate"
            onClick={close}
          />
          <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0e0e16] shadow-[0_24px_80px_rgba(0,0,0,0.65)] flex flex-col">
            <div className="flex items-start justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b border-white/[0.06]">
              <div className="min-w-0">
                <h3 id={titleId} className="font-display text-base sm:text-lg font-semibold text-white leading-snug truncate">
                  {active.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-0.5">
                  {active.issuer} · {active.issued}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="shrink-0 rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative flex-1 min-h-0 overflow-auto bg-zinc-950/50 p-3 sm:p-5">
              <div className="relative mx-auto w-full max-w-3xl aspect-[1.414/1] bg-white rounded-lg overflow-hidden">
                <Image
                  src={active.preview}
                  alt={`${active.title} certificate`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
            <div className="px-4 sm:px-5 py-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
              <p className="text-zinc-500 text-xs sm:text-sm tabular-nums">ID {active.credentialId}</p>
              <a
                href={active.href}
                download
                className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-300/90 hover:text-orange-200 transition-colors"
              >
                Download PDF
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
