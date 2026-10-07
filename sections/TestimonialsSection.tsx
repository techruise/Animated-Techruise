'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

export default function TestimonialsSection() {
  const { testimonials } = siteContent;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials">
      <SectionHeader
        label="Client Stories"
        title="What Our Clients Say"
      />

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-10 md:p-14 text-center"
          >
            <div className="text-6xl text-violet-500/30 font-serif mb-6">&ldquo;</div>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">{testimonials[current].author}</div>
                <div className="text-gray-400 text-sm">{testimonials[current].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-violet-500/50 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'bg-violet-500 w-6' : 'bg-gray-600 w-2'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-violet-500/50 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </Section>
  );
}
