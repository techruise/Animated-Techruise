'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glare: { x: 50, y: 50 } });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / rect.height) * -8; // Max 8 degrees
    const rotateY = ((e.clientX - centerX) / rect.width) * 8;
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTransform({ rotateX, rotateY, glare: { x: glareX, y: glareY } });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, glare: { x: 50, y: 50 } });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className={`w-full h-full ${className}`}
    >
      <motion.div
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
        className="w-full h-full relative"
      >
        {children}
        {/* Subtle glare overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${transform.glare.x}% ${transform.glare.y}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
