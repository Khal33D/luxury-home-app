import { MainLayout } from '../components/layout/MainLayout';
import { useProducts, useCart } from '../hooks/useShopify';
import { ProductGrid } from '../components/product/ProductGrid';
import { motion } from 'framer-motion';

export function Products() {
  const { products, isLoading } = useProducts(20);
  const { addToCart } = useCart();

  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[rgba(201,169,110,0.6)] mb-4">
            Handpicked Collection
          </p>
          <h1 className="font-display text-5xl text-white font-light tracking-wide mb-6">
            Our Products
          </h1>
          <div className="h-px w-20 bg-gradient-to-r from-[#C9A96E] to-transparent" />
        </motion.div>

        <ProductGrid
          products={products}
          isLoading={isLoading}
          onAddToCart={addToCart}
        />
      </div>
    </MainLayout>
  );
}
