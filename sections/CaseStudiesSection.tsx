'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

export default function CaseStudiesSection() {
  const { caseStudies } = siteContent;

  return (
    <Section id="case-studies" className="bg-gradient-to-b from-transparent to-[#0B1020]">
      <SectionHeader
        label="Proven Results"
        title="Case Studies"
        description="Illustrative examples of the impact AI has delivered across industries."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-card p-7 h-full flex flex-col"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-5">
              {study.industry}
            </div>

            <h3 className="text-h3 font-display text-white mb-4">{study.client}</h3>

            <div className="mb-4">
              <p className="text-label text-gray-500 mb-2">Challenge</p>
              <p className="text-sm-body text-gray-400">{study.challenge}</p>
            </div>

            <div className="mb-5">
              <p className="text-label text-gray-500 mb-2">Solution</p>
              <p className="text-sm-body text-gray-400">{study.solution}</p>
            </div>

            <div className="border-t border-white/5 pt-5 mt-auto">
              <p className="text-label text-gray-500 mb-3">Results</p>
              <ul className="space-y-2">
                {study.results.map((result, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-green-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
