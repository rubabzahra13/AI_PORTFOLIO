'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export type ProjectDetailData = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  points: string[];
  tech: string[];
  links: { label: string; href: string }[];
  images: { src: string; alt: string; caption?: string }[];
  screenshotsCaption?: string;
  cardImage?: string;
  cardImagePosition?: string;
  heroImage?: string;
  gradient: string;
};

type Props = {
  project: ProjectDetailData | null;
  onClose: () => void;
};

export function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e0e16]/95 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] mx-2 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors z-30 touch-manipulation backdrop-blur-sm"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero gradient bar */}
        <div className={`relative h-28 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '256px 256px' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] to-transparent" />
        </div>

        <div className="p-5 sm:p-6 md:p-8 -mt-8 relative z-10">
          <h2 id="project-detail-title" className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            {project.name}
          </h2>
          {project.tagline && (
            <p className="text-zinc-400 text-sm mb-6">{project.tagline}</p>
          )}
          <p className="text-zinc-300 leading-relaxed mb-8 text-sm sm:text-base">
            {project.description}
          </p>

          {/* Points */}
          {project.points.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-4 rounded-full bg-gradient-to-b from-orange-400 to-amber-500" />
                <h3 className="text-white font-semibold text-sm">Details</h3>
              </div>
              <div className="space-y-2">
                {project.points.map((point, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-zinc-400 text-sm leading-relaxed">
                    <span className="text-orange-400 shrink-0 font-mono text-xs font-bold mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {project.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? 'inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 text-sm font-semibold hover:from-orange-400 hover:to-amber-400 transition-all shadow-[0_0_16px_rgba(251,146,60,0.2)]'
                      : 'inline-flex items-center gap-2 text-orange-400 font-medium text-sm hover:text-orange-300 transition-colors'
                  }
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ))}
            </div>
          )}

          {/* Screenshots */}
          {project.images.length > 0 && (
            <div>
              <div className="glow-divider mb-6" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-4 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
                <h3 className="text-white font-semibold text-sm">Screenshots</h3>
              </div>
              {project.screenshotsCaption && (
                <p className="text-zinc-400 text-sm mb-4 ml-4">{project.screenshotsCaption}</p>
              )}
              <div className="space-y-4 mt-4">
                {project.images.map((img, i) => (
                  <figure key={i} className="overflow-hidden rounded-xl border border-white/[0.06]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={480}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    {(img.caption ?? img.alt) && (
                      <figcaption className="px-3 py-2 text-zinc-400 text-xs border-t border-white/[0.04]">
                        {img.caption ?? img.alt}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
