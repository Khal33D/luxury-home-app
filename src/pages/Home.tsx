import { motion } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroSplit } from '../components/hero/HeroSplit';
import { useProducts, useCart } from '../hooks/useShopify';
import { ProductGrid } from '../components/product/ProductGrid';
import { Marquee } from '../components/Marquee';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { LightingSection } from '../components/LightingSection';
import { ScentSection } from '../components/ScentSection';
import { WallArtSection } from '../components/WallArtSection';
import { AmbientShowcase } from '../components/AmbientShowcase';
import { MoodLabs } from '../components/MoodLabs';
import { ScentJourney } from '../components/ScentJourney';
import { InteractiveVisualizer } from '../components/InteractiveVisualizer';
import { TrustBar } from '../components/TrustBar';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export function Home() {
  const { products, isLoading } = useProducts(12);
  const { addToCart } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSplit />

      {/* Marquee */}
      <Marquee />

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Interactive Visualizer - NEW */}
      <InteractiveVisualizer />

      {/* Lighting Section */}
      <LightingSection onAddToCart={addToCart} />

      {/* Mood Labs - NEW INNOVATIVE */}
      <MoodLabs />

      {/* Scent Section */}
      <ScentSection onAddToCart={addToCart} />

      {/* Scent Journey - NEW INNOVATIVE */}
      <ScentJourney />

      {/* Wall Art Section */}
      <WallArtSection onAddToCart={addToCart} />

      {/* Ambient Showcase - NEW INNOVATIVE */}
      <AmbientShowcase />

      {/* All Products Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto px-6 lg:px-12 py-28"
      >
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs tracking-[0.5em] uppercase text-[rgba(201,169,110,0.6)] mb-4"
          >
            Complete Collection
          </motion.p>
          <h2 className="font-display text-5xl text-white font-light tracking-wide mb-6">
            Every Product, Curated
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-[#C9A96E] to-transparent" />
        </div>

        <ProductGrid
          products={products}
          isLoading={isLoading}
          onAddToCart={addToCart}
        />
      </motion.section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </MainLayout>
  );
}
