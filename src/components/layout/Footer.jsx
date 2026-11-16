import React from 'react';
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  ArrowUp,
  Heart,
  Terminal,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-slate-200 dark:border-slate-800/80 pb-10">
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-lg font-extrabold text-slate-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span>{portfolioData.personal.name}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {portfolioData.personal.role} · {portfolioData.personal.subRole}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              {portfolioData.personal.location}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              aria-label="Send an email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 shadow-sm"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-brand-500" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            © {currentYear} {portfolioData.personal.name}. Designed &amp; built for impact.
          </p>
          <p className="flex items-center gap-1.5">
            Built with React, Vite, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
