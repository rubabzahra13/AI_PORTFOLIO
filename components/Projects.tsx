'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS_AI_ENGINEER, PROJECTS_OTHER, type AiEngineerCategory, type OtherWorkCategory } from '@/data/projects';

type ProjectCardProject = (typeof PROJECTS_AI_ENGINEER)[number] | (typeof PROJECTS_OTHER)[number];

function ProjectCard({
  project,
}: {
  project: ProjectCardProject;
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden flex flex-col text-left h-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0a0a10]"
    >
      {/* Shimmer border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.1) 0%, transparent 40%, transparent 60%, rgba(139,92,246,0.1) 100%)' }} />

      {/* Card image with zoom on hover */}
      <div className={`relative h-36 overflow-hidden ${project.cardImage ? '' : `bg-gradient-to-br ${project.gradient}`}`}>
        {project.cardImage ? (
          <Image
            src={project.cardImage}
            alt=""
            fill
            className={`object-cover ${project.cardImagePosition ?? ''} transition-transform duration-700 group-hover:scale-110`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-white/60 font-mono text-3xl transition-transform duration-500 group-hover:scale-110">&#62;_</span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-[#0a0a10]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Floating tag in corner */}
        {project.tags[0] && (
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/[0.1] backdrop-blur-md border border-white/[0.1] px-2 py-0.5 rounded-full z-20">
            {project.tags[0]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col relative z-20">
        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {project.tags.slice(1).map((t) => (
            <span key={t} className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-white font-semibold mb-2 text-[15px] leading-snug">{project.name}</h3>
        <p className="text-zinc-400 text-[13px] leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>
        <span className="text-orange-400 text-sm font-medium mt-3 inline-flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5 group-hover:text-orange-300">
          View details
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </span>
      </div>
    </Link>
  );
}

function CategorySection({
  categories,
  byCategory,
  cardWidth,
  cardGap,
}: {
  categories: string[];
  byCategory: Record<string, ProjectCardProject[]>;
  cardWidth: string;
  cardGap: string;
}) {
  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
        {categories.map((category) => (
          <span
            key={category}
            className="text-[11px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/[0.12] transition-all cursor-default"
          >
            {category}
          </span>
        ))}
      </div>
      {/* Category groups */}
      <div className="space-y-12 sm:space-y-16">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-orange-400 to-violet-500" />
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                {category}
              </h4>
            </div>
            <div className={`flex flex-nowrap ${cardGap} overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide`}>
              {byCategory[category].map((project) => (
                <div key={project.id} className={`flex-shrink-0 ${cardWidth}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function groupByCategory<T extends ProjectCardProject>(
  projects: T[],
  defaultCategory: string,
  categoryOrder: string[],
): { categoriesToShow: string[]; byCategory: Record<string, T[]> } {
  const byCategory = projects.reduce<Record<string, T[]>>((acc, project) => {
    const cat = (project as { category?: string }).category ?? defaultCategory;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  }, {});
  const orderedCategories = categoryOrder.filter((c) => byCategory[c]?.length);
  const uncategorized = Object.keys(byCategory).filter((c) => !categoryOrder.includes(c));
  return { categoriesToShow: [...orderedCategories, ...uncategorized], byCategory };
}

export function Projects() {
  const aiData = groupByCategory(
    PROJECTS_AI_ENGINEER,
    'Agents & multi-LLM' satisfies AiEngineerCategory,
    ['Agents & multi-LLM', 'RAG & retrieval', 'ML pipelines & transcription'] satisfies AiEngineerCategory[],
  );

  const otherData = groupByCategory(
    PROJECTS_OTHER,
    'Full-stack & web' satisfies OtherWorkCategory,
    ['Full-stack & web', 'Non-profit & advocacy', 'Automation', 'E-commerce', 'Portfolio & 3D'] satisfies OtherWorkCategory[],
  );

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden mesh-gradient-warm">
      {/* Animated glow blobs */}
      <div className="glow glow-orange glow-animate w-[600px] h-[600px] -bottom-60 -left-40 opacity-50" />
      <div className="glow glow-violet glow-animate-reverse w-[400px] h-[400px] top-20 -right-32 opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* AI Engineer showcase */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Featured work</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              AI Engineer showcase
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              Agentic AI, RAG, multi-LLM systems, and ML pipelines, core AI engineering work.
            </p>
          </div>
          <a href="#contact" className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-1.5 shrink-0 transition-colors group">
            Get in touch
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <CategorySection
          categories={aiData.categoriesToShow}
          byCategory={aiData.byCategory}
          cardWidth="w-[290px] sm:w-[320px]"
          cardGap="gap-4 sm:gap-6"
        />

        {/* Other work */}
        {PROJECTS_OTHER.length > 0 && (
          <div className="mt-24 sm:mt-32 pt-12 sm:pt-16">
            <div className="glow-divider mb-14" />
            <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">Beyond AI</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Other work
            </h3>
            <p className="text-zinc-500 text-sm mb-10 max-w-xl">
              Full-stack apps, automations, and side projects, not part of my AI engineer showcase above.
            </p>
            <CategorySection
              categories={otherData.categoriesToShow}
              byCategory={otherData.byCategory}
              cardWidth="w-[270px] sm:w-[290px]"
              cardGap="gap-3 sm:gap-5"
            />
          </div>
        )}
      </div>
    </section>
  );
}
