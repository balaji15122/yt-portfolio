import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  GraduationCap,
  Briefcase,
  Trophy,
  CheckCircle,
  ExternalLink,
  UserCheck,
  Terminal,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

export default function About() {
  const { personal } = portfolioData;

  const statIcons = [
    <Code className="w-5 h-5 text-brand-500" key="code" />,
    <Trophy className="w-5 h-5 text-amber-500" key="trophy" />,
    <Briefcase className="w-5 h-5 text-emerald-500" key="briefcase" />,
    <GraduationCap className="w-5 h-5 text-purple-500" key="grad" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Get To Know Me"
        title="About Me"
        subtitle="Full-Stack Developer bridging scalable backend architecture with intuitive UI design."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Visual Profile Card & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          {/* Profile Card / Avatar Placeholder */}
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
            {/* Ambient decorative glowing border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-600 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative w-full h-full bg-slate-900 rounded-3xl p-6 flex flex-col items-center justify-center text-center overflow-hidden border border-slate-700/60 shadow-xl">
              {/* Monogram / Avatar Graphic */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-brand-500 to-sky-400 flex items-center justify-center text-white text-3xl font-black shadow-lg mb-4">
                B
              </div>

              <h3 className="text-xl font-bold text-white">{personal.name}</h3>
              <p className="text-xs text-brand-400 font-mono mt-1 font-semibold">
                FULL-STACK &amp; AI/ML
              </p>
              <p className="text-xs text-slate-400 mt-2">
                B.Tech CSE (2024–2027)
              </p>

              {/* Status pill */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready to contribute</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
            {/* TODO: Place your professional portrait photo at public/avatar.png */}
            Based in {personal.location}
          </p>
        </motion.div>

        {/* Right Column: Recruiter-Friendly Intro & Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Bio Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {personal.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  {statIcons[idx]}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {stat.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recruiter highlights summary */}
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 text-slate-800 dark:text-slate-200 space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-2">
              <UserCheck className="w-4 h-4" /> Why Hire Me?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Production MERN &amp; WebSockets proficiency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strong DSA Foundation (300+ LeetCode)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hands-on internship shipping real products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Immediate joiner with proactive communication</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
