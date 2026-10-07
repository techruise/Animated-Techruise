'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const industryIcons: Record<string, string> = {
  finance: '💹',
  healthcare: '🏥',
  retail: '🛒',
  education: '🎓',
  logistics: '🚚',
  realestate: '🏢',
  manufacturing: '🏭',
  marketing: '📈',
};

export default function IndustriesSection() {
  const { industries } = siteContent;

  return (
    <Section id="industries">
      <SectionHeader
        label="Who We Help"
        title={industries.title}
        description={industries.subtitle}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {industries.list.map((industry, i) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-4xl mb-4">{industryIcons[industry.icon]}</div>
            <h3 className="text-white font-medium text-sm leading-snug">{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
