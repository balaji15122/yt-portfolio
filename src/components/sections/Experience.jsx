import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { portfolioData } from '../../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Hands-On Work"
        title="Work Experience"
        subtitle="Practical software development and AI engineering internships delivering measurable business impact."
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/40 hover:shadow-xl transition-all"
          >
            {/* Top row: Role, Type, Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-brand-500/10 text-brand-500">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 font-semibold mt-0.5">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:self-start pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  {exp.duration}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Role Overview */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4">
              {exp.description}
            </p>

            {/* 3 Bullet Points with Measurable Impact */}
            <div className="space-y-3">
              {exp.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies used */}
            {exp.skillsUsed && (
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
                  Skills:
                </span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="default" size="xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
