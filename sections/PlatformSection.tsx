'use client';

import { motion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

export default function PlatformSection() {
  const { platform } = siteContent;

  return (
    <Section id="platform">
      <SectionHeader
        label="Our Platform"
        labelColor="text-pink-400"
        title={platform.title}
        description={platform.description}
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass-card p-6">
            {/* Topbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="glass px-3 py-1 rounded-full text-xs text-gray-400">Techruise AI Platform</div>
              <div className="w-6 h-6 rounded-full bg-violet-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: 'AI Tasks', value: '12,847', change: '+24%' },
                { label: 'Automation', value: '98.2%', change: '+12%' },
                { label: 'Time Saved', value: '430h', change: '+67%' },
              ].map((m) => (
                <div key={m.label} className="glass rounded-xl p-3">
                  <div className="text-xs text-gray-500 mb-1">{m.label}</div>
                  <div className="text-lg font-bold text-white">{m.value}</div>
                  <div className="text-xs text-green-400">{m.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="glass rounded-xl p-4 mb-4">
              <div className="text-xs text-gray-400 mb-3">AI Performance Metrics</div>
              <div className="flex items-end gap-2 h-20">
                {[40, 65, 45, 80, 60, 90, 75, 95, 70, 88, 92, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-cyan-400"
                  />
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              {[
                { task: 'Document Analysis Complete', status: 'done', time: '2s ago' },
                { task: 'Customer Query Processed', status: 'done', time: '5s ago' },
                { task: 'Report Generation Running', status: 'running', time: 'now' },
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between glass rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${t.status === 'done' ? 'bg-green-400' : 'bg-cyan-400 animate-pulse'}`} />
                    <span className="text-xs text-gray-300">{t.task}</span>
                  </div>
                  <span className="text-xs text-gray-500">{t.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass-card p-4"
          >
            <div className="text-xs text-gray-400 mb-1">Active Agents</div>
            <div className="text-2xl font-bold text-violet-400">48</div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-h2 font-display text-white mb-8">{platform.subtitle}</h3>
          {platform.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 glass-card p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-violet-400 to-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm-body">{feature.description}</p>
              </div>
            </motion.div>
          ))}
          <a href="#contact" className="btn-primary inline-block mt-4">
            Request a Demo
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
