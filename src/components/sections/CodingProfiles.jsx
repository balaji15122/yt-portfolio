import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Trophy,
  ExternalLink,
  Flame,
  Award,
  Github,
  Zap,
  CheckCircle,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

export default function CodingProfiles() {
  const { codingProfiles } = portfolioData;
  const { leetcode, hackathons } = codingProfiles;

  return (
    <section id="profiles" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Algorithmic Mastery"
        title="Coding Profiles &amp; Achievements"
        subtitle="Consistent problem solver demonstrating algorithmic discipline, clean data structure implementations, and competitive excellence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LeetCode Special Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle brand glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xl">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    LeetCode Profile
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-mono font-medium">
                      @{leetcode.username}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Data Structures &amp; Algorithms Practice
                  </p>
                </div>
              </div>

              <a
                href={leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Total Solved Stat Box */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    {leetcode.totalSolved}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Total Algorithmic Problems Solved
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="flex sm:flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Languages:</span>
                <div className="flex gap-1.5">
                  {leetcode.favoriteLanguages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-[11px]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Difficulty Breakdown Grid */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Easy
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {leetcode.stats.easy}
                </div>
                <div className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
                  Foundations
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                  Medium
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {leetcode.stats.medium}
                </div>
                <div className="text-[10px] text-amber-600/80 dark:text-amber-400/80 mt-0.5">
                  Core Interview Tier
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                  Hard
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {leetcode.stats.hard}
                </div>
                <div className="text-[10px] text-rose-600/80 dark:text-rose-400/80 mt-0.5">
                  Advanced DP/Graphs
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
              &ldquo;{leetcode.highlight}&rdquo;
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Primary Focus: DP, Trees, Graphs, Two Pointers, Binary Search</span>
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
          </div>
        </motion.div>

        {/* Hackathons & Competitions (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Hackathons &amp; Honors
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Competitive teamwork &amp; speed execution
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {hackathons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">
                    <span>{item.role}</span>
                    <span className="font-mono text-slate-400">{item.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-500/10 to-indigo-500/10 border border-brand-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 mb-1">
                  <Award className="w-4 h-4" /> Academic Merit
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Lateral Entry Merit Scholar
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Admitted to B.Tech CSE (AI &amp; ML) at AKGEC on the basis of top academic rank in Diploma in Electronics Engineering.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
