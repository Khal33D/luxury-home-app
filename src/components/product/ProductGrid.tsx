import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../lib/shopify-client';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/Button';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onAddToCart?: (variantId: string) => void;
}

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

export function ProductGrid({ products, isLoading, onAddToCart }: ProductGridProps) {
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Products' },
    { key: 'lighting', label: 'Lighting' },
    { key: 'scent', label: 'Air Perfume' },
    { key: 'wall-art', label: 'Wall Art' },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-[#111] h-96 animate-pulse rounded"
          />
        ))}
      </div>
    );
  }

  return (
    <section className="space-y-12">
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex gap-2 flex-wrap"
      >
        {filters.map((f) => (
          <Button
            key={f.key}
            onClick={() => setFilter(f.key)}
            variant={filter === f.key ? 'primary' : 'secondary'}
            size="sm"
          >
            {f.label}
          </Button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </motion.div>
    </section>
  );
}
