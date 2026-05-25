import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function InteractiveVisualizer() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  const rooms = [
    {
      id: 'living',
      name: 'Living Room',
      icon: '🛋️',
      desc: 'Ambient light + air diffuser',
      color: '#D4847C',
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      icon: '🛏️',
      desc: 'Sleep scheduling lights + scent',
      color: '#9B7E5C',
    },
    {
      id: 'office',
      name: 'Home Office',
      icon: '💼',
      desc: 'Focus mood + productivity scent',
      color: '#4F7BA7',
    },
    {
      id: 'wellness',
      name: 'Wellness Space',
      icon: '🧘',
      desc: 'Meditation ambience system',
      color: '#B794D4',
    },
  ];

  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden border-b border-[rgba(201,169,110,0.1)]">
      {/* Animated background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(201,169,110,0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 60%, rgba(201,169,110,0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, rgba(201,169,110,0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
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
            Whole Home Integration
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light tracking-wide mb-6">
            Your Home, Transformed
          </h2>
          <p className="text-base text-[rgba(240,237,232,0.5)] max-w-2xl mx-auto">
            Veloria systems work together seamlessly, creating integrated ambient experiences across every room.
          </p>
        </motion.div>

        {/* Interactive room grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              onMouseEnter={() => setHoveredArea(room.id)}
              onMouseLeave={() => setHoveredArea(null)}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group cursor-pointer"
            >
              {/* Card background */}
              <div
                className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                  hoveredArea === room.id
                    ? `border-[${room.color}] bg-gradient-to-br`
                    : 'border-[rgba(201,169,110,0.2)] bg-[rgba(201,169,110,0.05)]'
                }`}
                style={{
                  borderColor: hoveredArea === room.id ? room.color : undefined,
                  background:
                    hoveredArea === room.id
                      ? `linear-gradient(135deg, ${room.color}20, ${room.color}05)`
                      : undefined,
                }}
              />

              {/* Content */}
              <div className="relative p-8">
                {/* Animated glow */}
                <motion.div
                  animate={{
                    boxShadow:
                      hoveredArea === room.id
                        ? `0 0 30px ${room.color}40`
                        : '0 0 0px rgba(0,0,0,0)',
                  }}
                  className="absolute inset-0 rounded-xl"
                />

                <motion.div
                  animate={{
                    scale: hoveredArea === room.id ? 1.2 : 1,
                  }}
                  className="text-5xl mb-4"
                >
                  {room.icon}
                </motion.div>

                <h3 className="font-display text-xl text-white mb-2 font-light tracking-wide">
                  {room.name}
                </h3>
                <p className="text-sm text-[rgba(240,237,232,0.6)] leading-relaxed">
                  {room.desc}
                </p>

                {/* Hover indicator */}
                <motion.div
                  animate={{
                    opacity: hoveredArea === room.id ? 1 : 0,
                    y: hoveredArea === room.id ? 0 : -10,
                  }}
                  className="mt-4 flex items-center gap-2 text-xs text-[#C9A96E] font-medium"
                >
                  <span>Explore</span>
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[rgba(201,169,110,0.15)] bg-gradient-to-b from-[rgba(201,169,110,0.05)] to-transparent p-12 mb-20 overflow-hidden"
        >
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 font-medium">
              Smart Home Intelligence
            </p>
            <h3 className="font-display text-3xl text-white font-light tracking-wide">
              Integrated Ecosystem
            </h3>
          </div>

          {/* Animated particle field */}
          <svg viewBox="0 0 500 300" className="w-full h-auto mb-8 max-h-96">
            {/* Lines connecting components */}
            <motion.circle
              cx="250"
              cy="150"
              r="40"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="2"
              animate={{ r: [40, 45, 40] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Connected nodes */}
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 250 + 120 * Math.cos(rad);
              const y = 150 + 120 * Math.sin(rad);
              return (
                <g key={angle}>
                  <line
                    x1="250"
                    y1="150"
                    x2={x}
                    y2={y}
                    stroke="rgba(201,169,110,0.3)"
                    strokeWidth="1"
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="25"
                    fill="rgba(201,169,110,0.1)"
                    stroke="#C9A96E"
                    strokeWidth="2"
                    animate={{ r: [25, 30, 25] }}
                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dy="0.3em"
                    fill="#F0EDE8"
                    className="text-xs font-light"
                    fontSize="10"
                  >
                    {['Lighting', 'Fragrance', 'Art', 'Control'][i]}
                  </text>
                </g>
              );
            })}

            {/* Central text */}
            <text
              x="250"
              y="160"
              textAnchor="middle"
              fill="#C9A96E"
              className="font-display text-sm font-light"
              fontSize="14"
            >
              Veloria
            </text>
          </svg>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: '🔗', label: 'Seamless Integration' },
              { icon: '📱', label: 'Mobile Control' },
              { icon: '⚡', label: 'Energy Efficient' },
              { icon: '🎯', label: 'AI Learning' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="text-center p-4 rounded-lg bg-[rgba(201,169,110,0.05)] border border-[rgba(201,169,110,0.1)] hover:border-[rgba(201,169,110,0.3)] transition-colors"
              >
                <p className="text-2xl mb-2">{feature.icon}</p>
                <p className="text-xs text-white font-light">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-base text-[rgba(240,237,232,0.6)] mb-6 max-w-xl mx-auto">
            Every Veloria product is designed to work with every other product.
            Start with one. Build your complete ambient ecosystem.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#C9A96E] text-black font-medium text-sm uppercase tracking-widest hover:bg-[#B89855] transition-colors rounded-lg"
          >
            Explore the System
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
