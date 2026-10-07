'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !numericValue) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * numericValue));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center glass-card p-8"
    >
      <div className="text-5xl md:text-6xl font-bold font-display gradient-text mb-2">
        {isInView ? (numericValue ? count + suffix : value) : '0' + suffix}
      </div>
      <div className="text-gray-400 text-label">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label text-cyan-400">{about.subtitle}</p>
          <h2 className="text-h2 font-display text-white mb-6">{about.title}</h2>
          <p className="text-body-lg text-gray-400 mb-8">{about.description}</p>

          <div className="flex flex-col gap-4">
            <div className="glass-card p-5">
              <h4 className="text-violet-400 font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-400 text-sm-body">{about.mission}</p>
            </div>
            <div className="glass-card p-5">
              <h4 className="text-cyan-400 font-semibold mb-2">Our Vision</h4>
              <p className="text-gray-400 text-sm-body">{about.vision}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-8 glass-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl font-bold font-display gradient-text">AI</div>
                <div className="text-gray-400 mt-4 text-label">Powered by Intelligence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {about.stats.map((stat) => (
          <Counter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Section>
  );
}
