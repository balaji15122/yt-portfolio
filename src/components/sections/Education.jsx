import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { portfolioData } from '../../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Academic Journey"
        title="Education &amp; Qualifications"
        subtitle="Rigorous academic training in Computer Science, AI/ML, and electronics systems engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Vertical Timeline (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-500/30 dark:border-brand-500/20 space-y-10 sm:space-y-12">
            {education.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-surface-dark group-hover:scale-125 transition-transform shadow" />

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {item.score}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {item.institution}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-500" />
                      {item.location}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {item.highlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Relevant Coursework & Certifications (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Sub-block: Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
              <div className="p-2 rounded-xl bg-brand-500/10 text-brand-500">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Relevant Coursework
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Core curriculum subjects
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.relevantCoursework.map((course, idx) => (
                <Badge key={idx} variant="default" size="sm">
                  {course}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Sub-block: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Certifications
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Verified Industry Credentials
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {education.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-3 hover:border-brand-500/40 transition-colors"
                >
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      <span>{cert.issuer}</span> · <span>{cert.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5">
                      {cert.description}
                    </p>
                  </div>
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-slate-400 hover:text-brand-500 transition-colors"
                      aria-label={`View ${cert.title} credential`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
