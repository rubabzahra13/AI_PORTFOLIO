'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS_AI_ENGINEER, PROJECTS_OTHER } from '@/data/projects';

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS_AI_ENGINEER)[number];
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl overflow-hidden bg-[#22222c] border border-zinc-800 flex flex-col text-left hover:border-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#18181f]"
    >
      <div className={`relative h-28 flex items-center justify-center overflow-hidden ${project.cardImage ? 'bg-[#22222c]' : `bg-gradient-to-br ${project.gradient}`}`}>
        {project.cardImage ? (
          <Image
            src={project.cardImage}
            alt=""
            fill
            className={`object-cover ${project.cardImagePosition ?? ''}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <span className="text-white/80 font-mono text-2xl">&#62;_</span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((t) => (
            <span key={t} className="text-zinc-500 text-xs">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-white font-semibold mb-2">{project.name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        <span className="text-orange-400 text-sm font-medium mt-3 inline-flex items-center gap-1">
          View details
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#18181f]">
      <div className="max-w-5xl mx-auto">
        {/* AI Engineer showcase — main */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              AI Engineer showcase
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              Agentic AI, RAG, multi-LLM systems, and ML pipelines—core AI engineering work.
            </p>
          </div>
          <a href="#contact" className="text-zinc-400 hover:text-white text-sm font-medium flex items-center gap-1 shrink-0">
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS_AI_ENGINEER.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other work — fullstack, automations, etc. (not part of AI engineer showcase) */}
        {PROJECTS_OTHER.length > 0 && (
          <div className="mt-20 sm:mt-24 pt-12 sm:pt-16 border-t border-zinc-800">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
              Other work
            </h3>
            <p className="text-zinc-500 text-sm mb-6 max-w-xl">
              Full-stack apps, automations, and side projects—not part of my AI engineer showcase above.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {PROJECTS_OTHER.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
