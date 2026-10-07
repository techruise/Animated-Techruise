'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import TiltCard from '@/components/TiltCard';
import ServiceIcon from '@/components/ServiceIcon';

const accentColors = [
  '#7C3AED', '#22D3EE', '#E879F9', '#7C3AED', '#22D3EE',
  '#E879F9', '#7C3AED', '#22D3EE', '#E879F9', '#7C3AED',
];

export default function ServicesSection() {
  const { services } = siteContent;

  return (
    <Section id="services">
      <SectionHeader
        label="What We Do"
        title="Top 10 AI Services"
        description="From strategy to deployment, we cover the full spectrum of AI services your business needs to succeed."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${accentColors[index]}15`, border: `1px solid ${accentColors[index]}30` }}
                >
                  <ServiceIcon name={service.icon} color={accentColors[index]} size={24} />
                </div>

                {/* Number */}
                <div className="text-xs font-bold tracking-widest mb-2" style={{ color: accentColors[index] }}>
                  {String(service.id).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-h3 font-display text-white mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm-body text-gray-400 mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accentColors[index] }} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a href="#contact" className="text-sm font-medium transition-colors hover:underline" style={{ color: accentColors[index] }}>
                    Learn More →
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
