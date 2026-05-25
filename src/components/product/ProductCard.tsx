import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product, formatPrice, getImageUrl } from '../../lib/shopify-client';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (variantId: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const imageVariants = {
  hover: { scale: 1.05 },
};

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const image = product.images?.[0];
  const price = formatPrice(product.priceRange.minVariantPrice.amount);
  const mainVariant = product.variants?.[0];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden bg-[#111]">
        {/* Image */}
        <motion.div
          className="relative h-80 overflow-hidden"
          whileHover="hover"
        >
          {image && (
            <motion.img
              src={getImageUrl(image.url)}
              alt={image.altText || product.title}
              className="w-full h-full object-cover"
              variants={imageVariants}
              transition={{ duration: 0.4 }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Wishlist button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#C9A96E] transition-colors z-10"
        >
          <Heart size={16} />
        </motion.button>

        {/* Quick add overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => mainVariant && onAddToCart?.(mainVariant.id)}
            disabled={!mainVariant?.availableForSale}
            className="flex items-center gap-2 px-6 py-3 bg-[#C9A96E] text-black font-medium text-sm uppercase tracking-wider hover:bg-[#B89855] transition-colors disabled:opacity-50"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Info */}
      <motion.div className="pt-4">
        <h3 className="font-display text-lg text-white/90 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-display text-[#C9A96E]">{price}</span>
          {!mainVariant?.availableForSale && (
            <span className="text-xs text-red-500 uppercase tracking-wide">Out of stock</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
