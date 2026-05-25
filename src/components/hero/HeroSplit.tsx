import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function HeroSplit() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden -mt-32">
      {/* Left side - Dark */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-[#060606] to-[#0D0D0D]">
        <img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200&fit=crop"
          alt="Dark luxury salon"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(6,6,6,0.7)] to-[rgba(13,13,13,0.6)]" />

        {/* Pendant lights */}
        <div className="absolute top-[12%] left-[5%] right-[5%] h-20 flex justify-around items-start">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-gray-700" />
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(255,200,100,0.4)',
                    '0 0 16px 4px rgba(255,200,100,0.2)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-[rgba(255,200,100,0.8)]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px left-1/2 transform -translate-x-1/2 z-10"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.6), transparent)',
        }}
      />

      {/* Right side - Light */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-[#F5F2EC] to-[#EDE9E0]">
        <img
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200&fit=crop"
          alt="Bright luxury salon"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,242,236,0.65)] to-[rgba(237,233,224,0.55)]" />

        {/* Spotlights */}
        <div className="absolute top-[15%] left-[10%] right-[10%] h-16 flex justify-around opacity-70">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity }}
              className="w-3 h-3 rounded-sm bg-gradient-to-br from-white to-[rgba(200,180,150,0.4)] shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Center content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center"
      >
        <motion.p
          custom={0}
          variants={textVariants}
          className="text-xs tracking-[0.4em] uppercase text-[rgba(201,169,110,0.7)] mb-4 font-medium"
        >
          Créez l'ambiance parfaite
        </motion.p>

        <motion.h1
          custom={1}
          variants={textVariants}
          className="font-display text-6xl md:text-7xl text-white font-light tracking-widest leading-tight mb-2"
        >
          Transformez votre
        </motion.h1>

        <motion.h2
          custom={2}
          variants={textVariants}
          className="font-display text-5xl md:text-6xl text-white font-light tracking-widest italic mb-4"
        >
          intérieur
        </motion.h2>

        <motion.p
          custom={3}
          variants={textVariants}
          className="text-lg md:text-xl italic text-[rgba(26,26,26,0.7)] mb-6 font-display"
        >
          en une expérience de luxe
        </motion.p>

        <div className="h-px w-20 bg-[#C9A96E] mb-8" />

        <motion.p
          custom={4}
          variants={textVariants}
          className="text-sm md:text-base text-[rgba(26,26,26,0.6)] max-w-md mb-8 leading-relaxed"
        >
          Éclairages sans fil, parfums d'intérieur et décorationsminimalisées pour un quotidien plus élégant.
        </motion.p>

        <motion.div
          custom={5}
          variants={textVariants}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Button href="/collections/lighting" variant="primary">
            Découvrir l'éclairage
          </Button>
          <Button href="/products" variant="secondary">
            Voir la collection
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] text-[rgba(201,169,110,0.4)] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[rgba(201,169,110,0.4)] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
