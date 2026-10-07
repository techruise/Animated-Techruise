'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

export default function ProcessSection() {
  const { process } = siteContent;

  return (
    <Section id="process" className="bg-gradient-to-b from-transparent to-[#0B1020]">
      <SectionHeader label="Our Approach" title={process.title} description={process.subtitle} />

      {/* Connecting line */}
      <div className="relative">
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-magenta-400 hidden md:block" />

        <div className="grid md:grid-cols-5 gap-8">
          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Number circle */}
              <div className="w-20 h-20 rounded-full glass border border-violet-500/50 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-2xl font-bold font-display gradient-text-vio-cyan">
                  {String(step.number).padStart(2, '0')}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full border border-violet-400 opacity-50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>

              <h3 className="text-h3 font-display text-white mb-3">{step.title}</h3>
              <p className="text-sm-body text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
