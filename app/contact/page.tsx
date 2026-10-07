'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteContent } from '@/lib/content';

export default function ContactPage() {
  const { contact } = siteContent;
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simulate submission
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative">
        {/* Background blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-block mb-6 text-violet-400 text-sm hover:text-violet-300 transition-colors">
              ← Back to Home
            </Link>
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
              {contact.title}
            </h1>
            <p className="text-gray-400 text-lg">{contact.subtitle}</p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-12 text-center border border-green-500/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M8 20L16 28L32 12" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-orbitron)] mb-3">Message Sent!</h3>
              <p className="text-gray-400 mb-8">{contact.form.successMessage}</p>
              <Link
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg text-white font-medium hover:scale-105 transition-transform inline-block"
              >
                Return Home
              </Link>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    {contact.form.name} <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full glass border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors bg-transparent ${
                      errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-violet-500/60'
                    }`}
                    placeholder="John Smith"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    {contact.form.email} <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full glass border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors bg-transparent ${
                      errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-violet-500/60'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                  {contact.form.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full glass border border-white/10 focus:border-violet-500/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors bg-transparent"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  {contact.form.message} <span className="text-violet-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full glass border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors bg-transparent resize-none ${
                    errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-violet-500/60'
                  }`}
                  placeholder="Tell us about your AI project and goals..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl text-white font-bold text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  contact.form.submit
                )}
              </button>
            </motion.form>
          )}

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { label: 'Email', value: 'hello@techruise.com', icon: '✉️' },
              { label: 'Response Time', value: 'Within 24 hours', icon: '⚡' },
              { label: 'Consultation', value: 'Always free', icon: '🎯' },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-5 text-center border border-white/5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-white text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
