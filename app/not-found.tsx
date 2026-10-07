'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const FinalCTAScene = dynamic(() => import('@/components/3d/FinalCTAScene'), { ssr: false });

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FinalCTAScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060A] via-transparent to-[#05060A] pointer-events-none z-[1]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-9xl md:text-[200px] font-bold font-[family-name:var(--font-orbitron)] bg-gradient-to-r from-violet-400 via-cyan-400 to-magenta-400 bg-clip-text text-transparent leading-none mb-6">
            404
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold text-white font-[family-name:var(--font-orbitron)] mb-4"
        >
          Lost in the Digital Universe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-400 text-lg max-w-md mx-auto mb-10"
        >
          The page you're looking for has drifted into the void. Let AI guide you back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl text-white font-bold hover:scale-105 transition-transform"
          >
            Return to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 glass border border-white/20 rounded-xl text-white font-semibold hover:border-violet-500/50 hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
