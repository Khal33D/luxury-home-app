import { motion } from 'framer-motion';
import { useState } from 'react';

const moods = [
  {
    id: 'focus',
    name: 'Deep Focus',
    color: '#4F7BA7',
    bgColor: 'from-blue-900 to-blue-950',
    description: 'Crisp eucalyptus with cool LED blues. 4700K circadian light.',
    lightTemp: '4700K',
    fragrance: 'Eucalyptus Mint',
    icon: '🎯',
  },
  {
    id: 'relax',
    name: 'Deep Relax',
    color: '#9B7E5C',
    bgColor: 'from-amber-900 to-amber-950',
    description: 'Warm sandalwood with amber glow. 2700K warm candlelight.',
    lightTemp: '2700K',
    fragrance: 'Sandalwood Vanilla',
    icon: '🌙',
  },
  {
    id: 'social',
    name: 'Social Energy',
    color: '#D4847C',
    bgColor: 'from-rose-900 to-rose-950',
    description: 'Citrus burst with energetic white. 5600K vibrant presence.',
    lightTemp: '5600K',
    fragrance: 'Bergamot Rose',
    icon: '✨',
  },
  {
    id: 'creative',
    name: 'Creative Flow',
    color: '#B794D4',
    bgColor: 'from-violet-900 to-violet-950',
    description: 'Lavender incense with dynamic purple. 3500K creative balance.',
    lightTemp: '3500K',
    fragrance: 'Lavender Cedar',
    icon: '🎨',
  },
];

export function MoodLabs() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [hoveredMood, setHoveredMood] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Animated background gradient based on selected mood */}
      <motion.div
        key={selectedMood.id}
        animate={{
          background: `linear-gradient(135deg, rgb(${hexToRgb(selectedMood.color).join(',')}) 0%, rgba(10,10,10,0.8) 100%)`,
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 opacity-20"
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Mood Intelligence System
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light tracking-wide mb-6">
            Create Your Ambient Mood
          </h2>
          <p className="text-base text-[rgba(240,237,232,0.5)] max-w-2xl mx-auto">
            Veloria MoodLabs combines light temperature, fragrance, and intensity
            to orchestrate your perfect environment in seconds.
          </p>
        </motion.div>

        {/* Main display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Mood selector cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {moods.map((mood) => (
              <motion.button
                key={mood.id}
                onClick={() => setSelectedMood(mood)}
                onMouseEnter={() => setHoveredMood(mood.id)}
                onMouseLeave={() => setHoveredMood(null)}
                whileHover={{ x: 8 }}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedMood.id === mood.id
                    ? `border-[${mood.color}] bg-gradient-to-r ${mood.bgColor}`
                    : 'border-[rgba(201,169,110,0.2)] hover:border-[rgba(201,169,110,0.4)]'
                }`}
                style={{
                  borderColor: selectedMood.id === mood.id ? mood.color : undefined,
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white mb-1 font-light">
                      {mood.icon} {mood.name}
                    </h3>
                    <p className="text-xs text-[rgba(240,237,232,0.5)]">{mood.lightTemp}</p>
                  </div>
                  <motion.div
                    animate={{
                      scale: selectedMood.id === mood.id ? 1 : 0.8,
                      opacity: selectedMood.id === mood.id ? 1 : 0.5,
                    }}
                    className={`w-3 h-3 rounded-full`}
                    style={{ background: mood.color }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Large preview */}
          <motion.div
            key={selectedMood.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`lg:col-span-2 rounded-2xl border border-[rgba(201,169,110,0.2)] p-12 bg-gradient-to-br ${selectedMood.bgColor} relative overflow-hidden`}
          >
            {/* Animated particles */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 40 + 20,
                  height: Math.random() * 40 + 20,
                  background: selectedMood.color,
                  opacity: 0.1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                {selectedMood.icon}
              </motion.div>

              <h3 className="font-display text-4xl text-white mb-4 font-light tracking-wide">
                {selectedMood.name}
              </h3>

              <p className="text-lg text-[rgba(240,237,232,0.8)] mb-8 max-w-xl mx-auto">
                {selectedMood.description}
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-6 bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-[rgba(240,237,232,0.5)] mb-2">
                    Light Temperature
                  </p>
                  <p className="font-display text-2xl text-white font-light">{selectedMood.lightTemp}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-[rgba(240,237,232,0.5)] mb-2">
                    Fragrance
                  </p>
                  <p className="font-display text-2xl text-white font-light">{selectedMood.fragrance}</p>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-[#C9A96E] text-black font-medium text-sm uppercase tracking-widest hover:bg-[#B89855] transition-colors rounded-lg"
              >
                Activate Mood
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: '1-Tap Activation', desc: 'Set entire mood instantly' },
            { label: 'Smart Scheduling', desc: 'Auto-adjust throughout day' },
            { label: 'Voice Control', desc: 'Compatible with all platforms' },
            { label: 'Sleep Integration', desc: 'Sunset to sunrise tracking' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[rgba(201,169,110,0.05)] border border-[rgba(201,169,110,0.1)] rounded-lg p-6 text-center hover:border-[rgba(201,169,110,0.3)] transition-colors"
            >
              <p className="text-sm font-display text-[#C9A96E] mb-2 font-light">{feature.label}</p>
              <p className="text-xs text-[rgba(240,237,232,0.5)]">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [201, 169, 110];
}
