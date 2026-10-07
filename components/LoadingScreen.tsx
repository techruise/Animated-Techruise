'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100000] bg-[#05060A] flex flex-col items-center justify-center"
        >
          <div className="relative">
            {/* Animated logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-2">
                <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                  Techruise
                </span>
              </h1>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-gray-400 tracking-widest"
              >
                LOADING EXPERIENCE
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-magenta-400"
              />
            </div>

            {/* Progress percentage */}
            <motion.div
              className="text-center mt-4 text-xl font-mono text-cyan-400"
              key={Math.floor(progress)}
            >
              {Math.floor(progress)}%
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: window.innerHeight + 20,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-violet-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
