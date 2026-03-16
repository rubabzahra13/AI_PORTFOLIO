import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';
import { BackToTop } from './BackToTop';

type Props = { params: Promise<{ id: string }> };

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a10] relative overflow-hidden">
      {/* Page-level background glows */}
      <div className="glow glow-orange glow-animate w-[800px] h-[800px] -top-60 -right-60 opacity-30 fixed" />
      <div className="glow glow-violet glow-animate-reverse w-[600px] h-[600px] top-1/2 -left-40 opacity-20 fixed" />

      {/* Hero */}
      {project.heroImage ? (
        <section className="relative min-h-[420px] sm:min-h-[480px] flex flex-col justify-end">
          <div className="absolute inset-0">
            <Image
              src={project.heroImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-[#0a0a10]/60 to-[#0a0a10]/20" aria-hidden />
          {/* Noise overlay on hero */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '256px 256px' }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 w-full">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors mb-6 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Back to portfolio
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            {project.tagline && (
              <p className="mt-3 sm:mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
                {project.tagline}
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className="relative pt-24 sm:pt-28 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          <div className="absolute inset-0 mesh-gradient-warm" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors mb-6 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Back to portfolio
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            {project.tagline && (
              <p className="mt-3 sm:mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
                {project.tagline}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Description */}
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 sm:mb-14">
          {project.description}
        </p>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-14">
            {project.links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? 'inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 text-sm font-semibold hover:from-orange-400 hover:to-amber-400 transition-all shadow-[0_0_20px_rgba(251,146,60,0.2)] hover:shadow-[0_0_30px_rgba(251,146,60,0.35)]'
                    : 'inline-flex items-center gap-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-orange-400 px-6 py-3 text-sm font-semibold hover:bg-white/[0.08] hover:border-orange-500/30 transition-all'
                }
              >
                {link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            ))}
          </div>
        )}

        {/* What I built */}
        {project.points.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-orange-400 to-amber-500" />
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                What I built
              </h2>
            </div>
            <div className="space-y-3">
              {project.points.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                >
                  <span className="text-orange-400 shrink-0 mt-0.5 font-mono text-sm font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech & stack */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-400 to-purple-500" />
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              Tech &amp; stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300 text-xs font-medium hover:bg-white/[0.07] hover:border-white/[0.1] transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Screenshots */}
      {project.images.length > 0 && (
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="glow-divider" />
          <div className="absolute inset-0 mesh-gradient-cool" />
          <div className="glow glow-blue glow-animate w-[500px] h-[500px] top-0 right-0 opacity-20" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                Screenshots
              </h2>
            </div>
            {project.screenshotsCaption && (
              <p className="text-zinc-400 text-sm mb-10 ml-4">{project.screenshotsCaption}</p>
            )}
            {!project.screenshotsCaption && <div className="mb-10" />}

            <div className="space-y-10">
              {project.images.map((img, i) => (
                <figure
                  key={i}
                  className="group overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={720}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {(img.caption ?? img.alt) && (
                    <figcaption className="px-4 py-3 text-zinc-400 text-sm border-t border-white/[0.04]">
                      {img.caption ?? img.alt}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <footer className="relative z-10 py-10 sm:py-12">
        <div className="glow-divider mb-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to portfolio
          </Link>
          <BackToTop />
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { id: 'care-property-hub' },
    { id: 'ai-alchemist' },
    { id: 'content-strategist' },
    { id: 'ppf-website' },
    { id: 'video-transcription' },
    { id: 'zoom-summaries-downloader' },
    { id: 'ecommerce-mvp' },
    { id: 'image-to-forms-automation' },
    { id: 'formflow' },
    { id: 'ai-candidate-assessment' },
    { id: 'portfolio-3d-mascot' },
  ];
}
