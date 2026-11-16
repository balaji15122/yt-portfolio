import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Maximize2,
  Sparkles,
  ArrowRight,
  Layers,
  Code2,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ProjectModal from '../ui/ProjectModal';
import Badge from '../ui/Badge';
import { portfolioData } from '../../data/portfolio';
import { trackEvent } from '../../utils/analytics';

const FILTER_TABS = ['All', 'Full-Stack', 'AI-ML'];

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.filterCategory === selectedCategory);

  const handleOpenModal = (project) => {
    setActiveModalProject(project);
    trackEvent('project_modal_open', { project: project.title });
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Proven Engineering"
        title="Featured Projects"
        subtitle="Full-stack real-time web applications and AI-driven platforms built to solve real-world problems. Click any card for architectural breakdown."
      />

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12">
        <div className="p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center gap-1 shadow-inner">
          {FILTER_TABS.map((tab) => {
            const isActive = selectedCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Projects' : tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all overflow-hidden"
            >
              {/* Card Banner / Thumbnail */}
              <div
                onClick={() => handleOpenModal(project)}
                className={`relative h-44 sm:h-48 w-full bg-gradient-to-tr ${
                  project.gradient || 'from-indigo-600 to-sky-500'
                } p-5 flex flex-col justify-between cursor-pointer overflow-hidden`}
              >
                {/* Visual Glass Pattern */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/30 text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Big Display Project Name Overlay */}
                <div className="relative z-10 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/80 font-medium line-clamp-1 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Hover trigger overlay icon */}
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-xl bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* 1-Line Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <Badge key={i} variant="default" size="xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 self-center pl-1 font-mono">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          trackEvent('live_demo_click', { project: project.title });
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 hover:bg-brand-500/20 transition-colors"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          trackEvent('github_repo_click', { project: project.title });
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label={`GitHub repository of ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  {/* Open Detail Modal Trigger */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-brand-500 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Recruiter-focused "Hire Me" Callout Box (Requirement: CTA in hero, projects, contact) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-600/15 via-indigo-600/10 to-sky-600/15 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <Sparkles className="w-4 h-4" /> Ready for Impact
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Impressed by these projects?
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            I am ready to bring this level of code quality, architecture, and execution to your engineering team.
          </p>
        </div>

        <a
          href="#contact"
          onClick={() => trackEvent('hire_me_click', { location: 'projects_cta' })}
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <span>Hire Me for Your Team</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={handleCloseModal}
      />
    </section>
  );
}
