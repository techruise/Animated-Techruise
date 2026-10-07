'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import Container from '@/components/Container';

const TechIcons = [
  { name: 'OpenAI', color: '#22D3EE' },
  { name: 'LangChain', color: '#7C3AED' },
  { name: 'PyTorch', color: '#E879F9' },
  { name: 'TensorFlow', color: '#22D3EE' },
  { name: 'HuggingFace', color: '#7C3AED' },
  { name: 'AWS', color: '#E879F9' },
  { name: 'Azure', color: '#22D3EE' },
  { name: 'Google Cloud', color: '#7C3AED' },
  { name: 'Pinecone', color: '#E879F9' },
  { name: 'Anthropic', color: '#22D3EE' },
  { name: 'Vercel', color: '#7C3AED' },
  { name: 'Next.js', color: '#E879F9' },
];

export default function MarqueeSection() {
  const items = [...TechIcons, ...TechIcons]; // duplicate for seamless loop

  return (
    <div className="py-16 border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#05060A] via-transparent to-[#05060A] z-10 pointer-events-none" />

      <Container>
        <p className="text-center text-gray-500 text-label mb-8">
          Powered By Industry-Leading AI Technologies
        </p>
      </Container>

      <div className="flex overflow-hidden">
        <div className="animate-marquee gap-8">
          {items.map((tech, i) => (
            <div key={i} className="glass px-5 py-2.5 rounded-full shrink-0 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }} />
              <span className="text-white font-medium text-sm whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
