import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Badge from './Badge';
import { trackEvent } from '../../utils/analytics';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl my-auto bg-white dark:bg-[#111827] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Visual Bar */}
          <div
            className={`relative p-6 sm:p-8 bg-gradient-to-r ${
              project.gradient || 'from-indigo-600 to-sky-600'
            } text-white shrink-0`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm uppercase tracking-wider">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/90 text-slate-950 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Featured Project
                </span>
              )}
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-white/90 font-medium">
              {project.subtitle}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('live_demo_click', { project: project.title })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold text-sm shadow hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-white"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('github_repo_click', { project: project.title })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-900/80 text-white font-medium text-sm border border-white/20 backdrop-blur-sm transition-colors"
                >
                  <Github className="w-4 h-4" /> View Source
                </a>
              )}
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
            {/* The Problem */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> The Problem
              </h4>
              <p className="leading-relaxed bg-amber-500/5 dark:bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20 text-slate-800 dark:text-slate-200">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4 text-brand-500" /> Engineering Solution
              </h4>
              <p className="leading-relaxed bg-brand-500/5 dark:bg-brand-500/10 p-3.5 rounded-xl border border-brand-500/20 text-slate-800 dark:text-slate-200">
                {project.solution}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Challenges & How They Were Solved */}
            {project.challenges && (
              <div>
                <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4 text-indigo-400" /> Challenges Overcome
                </h4>
                <p className="text-sm sm:text-base leading-relaxed p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-300">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Impact Metric */}
            {project.impact && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300">
                <Sparkles className="w-5 h-5 shrink-0 text-emerald-500" />
                <p className="text-sm font-semibold">
                  <span className="font-bold">Impact: </span>
                  {project.impact}
                </p>
              </div>
            )}

            {/* Tech Stack List */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <Badge key={idx} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Press <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">ESC</kbd> to close
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
