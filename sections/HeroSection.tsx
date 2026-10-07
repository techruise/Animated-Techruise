'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import dynamic from 'next/dynamic';

const Hero3DScene = dynamic(() => import('@/components/3d/Hero3DScene'), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      {isLoaded && <Hero3DScene />}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A]/80 via-[#05060A]/60 to-[#05060A]/90 z-[5] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="max-w-[640px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display font-display gradient-text mb-6"
            >
              {siteContent.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-body-lg text-gray-300 mb-10 max-w-[560px]"
            >
              {siteContent.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary">
                {siteContent.hero.primaryCTA}
              </a>
              <a href="#services" className="btn-secondary">
                {siteContent.hero.secondaryCTA}
              </a>
            </motion.div>
          </div>

          {/* 3D Scene takes the right column on large screens */}
          <div className="hidden lg:block" />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-xs tracking-widest mb-2">SCROLL</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14m0 0l-7-7m7 7l7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
