import { motion } from 'framer-motion';
import { Zap, Wind, Eye } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Wireless Precision',
    icon: Zap,
    description: 'Smart illumination that adapts to your mood and circadian rhythm',
    gradient: 'from-amber-500 to-orange-600',
    color: 'text-amber-400',
  },
  {
    id: 2,
    title: 'Air Intelligence',
    icon: Wind,
    description: 'Molecular fragrance diffusion with AI-powered scent scheduling',
    gradient: 'from-cyan-500 to-blue-600',
    color: 'text-cyan-400',
  },
  {
    id: 3,
    title: 'Visual Poetry',
    icon: Eye,
    description: 'Minimalist canvas art that redefines spatial awareness',
    gradient: 'from-purple-500 to-pink-600',
    color: 'text-purple-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export function AmbientShowcase() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0D0D0A] overflow-hidden border-y border-[rgba(201,169,110,0.1)]">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Three Dimensions of Luxury
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light tracking-wide mb-6">
            The Ambient Experience
          </h2>
          <p className="text-base text-[rgba(240,237,232,0.5)] max-w-2xl mx-auto leading-relaxed">
            We engineer three interconnected systems that transform your home into a living organism,
            responding intelligently to your presence and preferences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,169,110,0.1)] to-transparent rounded-xl border border-[rgba(201,169,110,0.2)] group-hover:border-[rgba(201,169,110,0.4)] transition-colors" />

                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${exp.gradient}`}
                  style={{ opacity: 0 }}
                />

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${exp.gradient} flex items-center justify-center mb-6 text-white`}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Text */}
                  <h3 className="font-display text-2xl text-white mb-3 font-light tracking-wide">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[rgba(240,237,232,0.6)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 40 }}
                    className="h-px bg-[#C9A96E]"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[rgba(201,169,110,0.05)] to-transparent rounded-2xl border border-[rgba(201,169,110,0.15)] p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Ambient AI', value: 'Real-time Adaptation' },
              { label: 'Chromatic Sync', value: 'Circadian Rhythm' },
              { label: 'Scent Memory', value: 'Personalized Profiles' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-2 font-medium">
                  {feature.label}
                </p>
                <p className="font-display text-xl text-white font-light">{feature.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
