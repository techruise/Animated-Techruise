'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

export default function PricingSection() {
  const { pricing } = siteContent;

  return (
    <Section id="pricing">
      <SectionHeader
        label="Flexible Plans"
        title={pricing.title}
        description={pricing.subtitle}
      />

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {pricing.tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative glass-card p-8 transition-all h-full flex flex-col ${
              tier.highlighted ? 'border-violet-500/60 scale-105 shadow-2xl shadow-violet-500/20' : ''
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full text-xs font-bold text-white tracking-wider">
                RECOMMENDED
              </div>
            )}

            <h3 className="text-2xl font-bold text-white font-display mb-2">{tier.name}</h3>
            <p className="text-gray-400 text-sm-body mb-6">{tier.description}</p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              <span className="text-gray-400 text-sm ml-2">/ {tier.period}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.highlighted ? 'bg-violet-500/20' : 'bg-white/5'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke={tier.highlighted ? '#7C3AED' : '#22D3EE'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
                tier.highlighted ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
