import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Wrench,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { portfolioData } from '../../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    Frontend: <Layout className="w-5 h-5 text-sky-500" />,
    Backend: <Server className="w-5 h-5 text-emerald-500" />,
    Database: <Database className="w-5 h-5 text-amber-500" />,
    'Tools & DevOps': <Wrench className="w-5 h-5 text-purple-500" />,
    Languages: <Code2 className="w-5 h-5 text-rose-500" />,
    'CS Fundamentals': <Cpu className="w-5 h-5 text-indigo-500" />,
  };

  const categories = ['All', ...skills.map((s) => s.category)];

  const displayedSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Technical Proficiency"
        title="Skills & Technologies"
        subtitle="Grouped by domain expertise. Real development capabilities grounded in projects and problem solving — no superficial percentage bars."
      />

      {/* Category filter pills for quick viewing */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Grouped Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedSkills.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {categoryIcons[group.category] || <Layers className="w-5 h-5 text-brand-500" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-brand-500/50 hover:bg-brand-500/5 transition-all cursor-default"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-400 font-mono">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom count badge */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>{group.skills.length} core competencies</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
