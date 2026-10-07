'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import dynamic from 'next/dynamic';
import Container from '@/components/Container';

const FinalCTAScene = dynamic(() => import('@/components/3d/FinalCTAScene'), { ssr: false, loading: () => null });

export default function FinalCTASection() {
  const { finalCTA } = siteContent;

  return (
    <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
      <FinalCTAScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05060A] via-transparent to-[#05060A] pointer-events-none z-[1]" />

      <Container className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label text-violet-400 mb-6"
        >
          Start Your AI Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-display font-display gradient-text mb-8"
        >
          {finalCTA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-body-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {finalCTA.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/contact" className="btn-primary">
            {finalCTA.primaryCTA}
          </a>
          <a href="#case-studies" className="btn-secondary">
            {finalCTA.secondaryCTA}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
