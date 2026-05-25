import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const scentJourneys = [
  {
    id: 'morning',
    name: 'Morning Awakening',
    duration: '6:00 - 9:00 AM',
    scents: ['Bergamot', 'Lemon', 'Black Pepper'],
    intensity: 70,
    description: 'Citrus notes that invigorate and energize your senses',
  },
  {
    id: 'work',
    name: 'Deep Work Session',
    duration: '9:00 AM - 1:00 PM',
    scents: ['Cedarwood', 'Peppermint', 'Eucalyptus'],
    intensity: 60,
    description: 'Focus-enhancing aromatics for sustained concentration',
  },
  {
    id: 'afternoon',
    name: 'Afternoon Clarity',
    duration: '1:00 - 5:00 PM',
    scents: ['Ginger', 'Green Tea', 'Jasmine'],
    intensity: 55,
    description: 'Balanced scents for post-lunch productivity',
  },
  {
    id: 'evening',
    name: 'Evening Unwind',
    duration: '5:00 - 9:00 PM',
    scents: ['Lavender', 'Vanilla', 'Sandalwood'],
    intensity: 50,
    description: 'Warm, comforting aromas for relaxation',
  },
  {
    id: 'night',
    name: 'Sleep Preparation',
    duration: '9:00 PM - 6:00 AM',
    scents: ['Chamomile', 'Vetiver', 'Ylang Ylang'],
    intensity: 30,
    description: 'Gentle, soothing scents to drift into sleep',
  },
];

export function ScentJourney() {
  const [selectedPhase, setSelectedPhase] = useState(scentJourneys[0]);
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#111] via-[#0A0A0A] to-[#050505] overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(201,169,110,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(201,169,110,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(201,169,110,0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4">
            Circadian Scent Experience
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light tracking-wide mb-6">
            Your Scent Timeline
          </h2>
          <p className="text-base text-[rgba(240,237,232,0.5)] max-w-2xl mx-auto">
            An intelligently designed fragrance journey that adapts to your natural circadian rhythm,
            automatically releasing the perfect scent at the perfect time.
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Timeline cards - left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-3"
          >
            {scentJourneys.map((journey, idx) => (
              <motion.button
                key={journey.id}
                onClick={() => setSelectedPhase(journey)}
                whileHover={{ x: 8 }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${
                  selectedPhase.id === journey.id
                    ? 'border-[#C9A96E] bg-[rgba(201,169,110,0.1)]'
                    : 'border-[rgba(201,169,110,0.1)] hover:border-[rgba(201,169,110,0.3)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base text-white font-light">{journey.name}</h3>
                    <p className="text-xs text-[rgba(240,237,232,0.4)] mt-1">{journey.duration}</p>
                  </div>
                  {selectedPhase.id === journey.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-2 h-2 rounded-full bg-[#C9A96E]"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Main display - center/right */}
          <motion.div
            key={selectedPhase.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-[rgba(201,169,110,0.2)] p-12 bg-gradient-to-br from-[rgba(201,169,110,0.05)] to-transparent backdrop-blur-sm"
          >
            {/* Scent particles animation */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#C9A96E] opacity-30"
                animate={{
                  x: [Math.random() * 100, Math.random() * 200 - 100],
                  y: [Math.random() * 100, Math.random() * 200 - 100],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <div className="relative z-10">
              {/* Phase number */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-[rgba(201,169,110,0.1)] border border-[#C9A96E] rounded-full mb-6"
              >
                <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-medium">
                  Phase {scentJourneys.indexOf(selectedPhase) + 1} of {scentJourneys.length}
                </p>
              </motion.div>

              <h3 className="font-display text-4xl text-white mb-2 font-light tracking-wide">
                {selectedPhase.name}
              </h3>

              <p className="text-sm text-[#C9A96E] mb-6 tracking-widest uppercase font-medium">
                {selectedPhase.duration}
              </p>

              <p className="text-base text-[rgba(240,237,232,0.7)] mb-10 leading-relaxed max-w-lg">
                {selectedPhase.description}
              </p>

              {/* Scent components */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-[rgba(240,237,232,0.5)] mb-4 font-medium">
                  Scent Composition
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedPhase.scents.map((scent, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-4 py-2 rounded-full bg-[rgba(201,169,110,0.15)] border border-[rgba(201,169,110,0.3)] text-sm text-white font-light"
                    >
                      {scent}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Intensity bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.3em] uppercase text-[rgba(240,237,232,0.5)] font-medium">
                    Diffusion Intensity
                  </p>
                  <p className="text-sm text-[#C9A96E] font-light">{selectedPhase.intensity}%</p>
                </div>
                <motion.div
                  className="h-1 bg-[rgba(201,169,110,0.1)] rounded-full overflow-hidden"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedPhase.intensity}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#C9A96E] to-transparent"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Smart features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-[rgba(201,169,110,0.05)] border border-[rgba(201,169,110,0.1)] rounded-xl p-6">
            <h4 className="font-display text-lg text-white mb-3 font-light">Automatic Scheduling</h4>
            <p className="text-sm text-[rgba(240,237,232,0.6)]">
              The diffuser learns your daily routine and automatically executes the perfect scent journey,
              requiring zero manual adjustments.
            </p>
          </div>
          <div className="bg-[rgba(201,169,110,0.05)] border border-[rgba(201,169,110,0.1)] rounded-xl p-6">
            <h4 className="font-display text-lg text-white mb-3 font-light">Personalization</h4>
            <p className="text-sm text-[rgba(240,237,232,0.6)]">
              Customize intensity, scent notes, and timing through our app. Your scent timeline adapts to your preferences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
