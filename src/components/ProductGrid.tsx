import { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Arc Sphere Light',
    category: 'lighting',
    price: '€189',
    originalPrice: '€240',
    img: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Wireless',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Cube Pendant Set',
    category: 'lighting',
    price: '€229',
    originalPrice: null,
    img: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'New',
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 3,
    name: 'Veloria Noir Diffuser',
    category: 'scent',
    price: '€149',
    originalPrice: '€180',
    img: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Best Seller',
    rating: 4.9,
    reviews: 201,
  },
  {
    id: 4,
    name: 'Soleil Scent Pod',
    category: 'scent',
    price: '€89',
    originalPrice: null,
    img: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: null,
    rating: 4.7,
    reviews: 88,
  },
  {
    id: 5,
    name: 'Minimal Horizon Print',
    category: 'wall-art',
    price: '€119',
    originalPrice: '€145',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Limited',
    rating: 4.8,
    reviews: 44,
  },
  {
    id: 6,
    name: 'Black Line Canvas',
    category: 'wall-art',
    price: '€159',
    originalPrice: null,
    img: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: null,
    rating: 4.6,
    reviews: 32,
  },
  {
    id: 7,
    name: 'Strip LED Bar',
    category: 'lighting',
    price: '€99',
    originalPrice: '€130',
    img: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Sale',
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 8,
    name: 'Geometric Wall Panel',
    category: 'wall-art',
    price: '€199',
    originalPrice: null,
    img: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'New',
    rating: 4.9,
    reviews: 21,
  },
];

const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'lighting', label: 'Lighting' },
  { key: 'scent', label: 'Air Perfume' },
  { key: 'wall-art', label: 'Wall Art' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <div
          key={s}
          style={{
            width: '6px',
            height: '6px',
            background: s <= Math.floor(rating) ? '#C9A96E' : 'rgba(201,169,110,0.2)',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  const [active, setActive] = useState('all');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="products"
      className="py-28"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(201,169,110,0.6)',
                fontFamily: 'Inter',
                marginBottom: '12px',
              }}
            >
              Handpicked For You
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 300,
                color: '#F0EDE8',
                letterSpacing: '0.04em',
              }}
            >
              Our Products
            </h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                style={{
                  padding: '8px 18px',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: active === f.key ? '#C9A96E' : 'transparent',
                  borderColor: active === f.key ? '#C9A96E' : 'rgba(201,169,110,0.25)',
                  color: active === f.key ? '#0A0A0A' : 'rgba(240,237,232,0.55)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card group"
              style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '260px' }}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    filter: 'brightness(0.85) saturate(0.85)',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                />

                {/* Tag */}
                {product.tag && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: product.tag === 'Sale' ? '#8B3A3A' : product.tag === 'Limited' ? '#5A5A5A' : '#C9A96E',
                      color: product.tag === 'Sale' || product.tag === 'Limited' ? '#F0EDE8' : '#0A0A0A',
                      fontSize: '8px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      padding: '3px 8px',
                    }}
                  >
                    {product.tag}
                  </div>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => setWishlist((prev) => prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id])}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '32px',
                    height: '32px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: wishlist.includes(product.id) ? '#C9A96E' : 'rgba(240,237,232,0.5)',
                  }}
                >
                  <Heart size={13} fill={wishlist.includes(product.id) ? '#C9A96E' : 'none'} />
                </button>

                {/* Quick add overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px',
                    background: 'rgba(0,0,0,0.7)',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="group-hover:translate-y-0"
                  onMouseEnter={(e) => ((e.currentTarget).style.transform = 'translateY(0)')}
                  onMouseLeave={(e) => ((e.currentTarget).style.transform = 'translateY(100%)')}
                >
                  <button
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: '#C9A96E',
                      color: '#0A0A0A',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    <ShoppingBag size={13} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <StarRating rating={product.rating} />
                  <span style={{ fontSize: '10px', color: 'rgba(240,237,232,0.35)', fontFamily: 'Inter' }}>
                    ({product.reviews})
                  </span>
                </div>
                <h4
                  className="font-display"
                  style={{
                    fontSize: '17px',
                    fontWeight: 400,
                    color: '#F0EDE8',
                    letterSpacing: '0.03em',
                    marginBottom: '8px',
                  }}
                >
                  {product.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '16px',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontWeight: 400,
                      color: '#C9A96E',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'rgba(240,237,232,0.3)',
                        textDecoration: 'line-through',
                        fontFamily: 'Inter',
                      }}
                    >
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="btn-primary">
            <span>View All Products</span>
          </a>
        </div>
      </div>
    </section>
  );
}
