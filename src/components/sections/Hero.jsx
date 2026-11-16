import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Code2,
  Mail,
  MapPin,
  Sparkles,
  ChevronDown,
  Terminal,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { trackEvent } from '../../utils/analytics';

export default function Hero() {
  const { personal } = portfolioData;

  const handleResumeDownload = () => {
    trackEvent('resume_download_click', { location: 'hero' });
  };

  const handleHireMeClick = () => {
    trackEvent('hire_me_click', { location: 'hero' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Animated Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-sky-400/10 dark:bg-sky-400/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Recruiter Badge: Open to internships / full-time roles */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 mb-6 backdrop-blur-sm shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personal.badge}</span>
        </motion.div>

        {/* Hero Name & Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <p className="text-sm sm:text-base font-mono text-brand-600 dark:text-brand-400 font-semibold tracking-wide">
            Hi there, my name is
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {personal.name}
            <span className="text-brand-500">.</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
            {personal.role}
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          &ldquo;{personal.tagline}&rdquo;
        </motion.p>

        {/* Location & Quick Context */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
        >
          <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
          <span>{personal.location}</span>
          <span>•</span>
          <span>{personal.subRole}</span>
        </motion.div>

        {/* 2 Main CTAs (View Projects & Download Resume) + Hire Me CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA: View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-brand-600 hover:bg-brand-500 active:bg-brand-700 shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA: Download Resume (public/resume.pdf) */}
          <a
            href={personal.resumeUrl}
            download="Balaji_Resume.pdf"
            onClick={handleResumeDownload}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <FileDown className="w-4 h-4 text-brand-500" />
            <span>Download Resume</span>
          </a>

          {/* Tertiary Quick "Hire Me" link */}
          <a
            href="#contact"
            onClick={handleHireMeClick}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-brand-600 dark:text-brand-400 hover:bg-brand-500/10 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 shadow-sm transition-all hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 shadow-sm transition-all hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 shadow-sm transition-all hover:-translate-y-0.5"
            aria-label="LeetCode Profile"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 shadow-sm transition-all hover:-translate-y-0.5"
            aria-label="Send direct email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="p-2 text-slate-400 hover:text-brand-500 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
