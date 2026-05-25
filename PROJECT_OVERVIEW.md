# Veloria Living - Complete Project Overview

## Project Status: Production-Ready ✅

A modern, luxury headless Shopify storefront built with React, Vite, TypeScript, and Framer Motion.

---

## 📁 Project Structure

### Core Files
```
project/
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TS config
├── vite.config.ts            # Vite build configuration
├── tailwind.config.js        # Tailwind CSS setup
├── postcss.config.js         # PostCSS configuration
├── vercel.json               # Vercel deployment config
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── README.md                 # Main documentation
├── QUICK_START.md            # Quick start guide
├── DEPLOYMENT.md             # Detailed deployment guide
├── BUILD_SUMMARY.txt         # Build statistics
└── .github/
    └── workflows/
        └── deploy.yml        # CI/CD pipeline
```

### Source Files

#### Components (`src/components/`)

**UI Components:**
- `ui/Button.tsx` - Reusable button with Framer Motion

**Product Components:**
- `product/ProductCard.tsx` - Individual product card with animations
- `product/ProductGrid.tsx` - Grid layout with filtering

**Layout Components:**
- `layout/Header.tsx` - Fixed header with scroll detection
- `layout/Footer.tsx` - Footer with links and info
- `layout/MainLayout.tsx` - Main layout wrapper

**Hero:**
- `hero/HeroSplit.tsx` - Split-screen dark/light salon design

**Legacy Components** (from previous version):
- `Navbar.tsx`, `HeroScene.tsx`, `Marquee.tsx`
- `ProductGrid.tsx`, `FeaturedCollection.tsx`
- `LightingSection.tsx`, `ScentSection.tsx`, `WallArtSection.tsx`
- `Testimonials.tsx`, `Newsletter.tsx`, `TrustBar.tsx`, `About.tsx`
- `Footer.tsx`

#### Pages (`src/pages/`)
- `Home.tsx` - Homepage with hero + featured products
- `Products.tsx` - Full products listing

#### Hooks (`src/hooks/`)
- `useShopify.ts` - Custom hooks for Shopify data fetching
  - `useProducts()` - Fetch products
  - `useProduct()` - Fetch single product
  - `useCollections()` - Fetch collections
  - `useCollection()` - Fetch single collection
  - `useCart()` - Cart management

#### Library (`src/lib/`)
- `shopify-client.ts` - GraphQL client + queries
  - Product/Collection queries
  - Cart mutations
  - Image optimization helpers
  - Price formatting utilities

#### Config (`src/config/`)
- `shopify.ts` - Shopify API configuration

#### App Files
- `App.tsx` - React Router setup with routes
- `main.tsx` - Entry point
- `index.css` - Global styles + Tailwind
- `vite-env.d.ts` - Vite type definitions

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript 5.5** - Type safety
- **Vite 5.4** - Build tool (10x faster than Webpack)

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 10.16** - Animation library
- **Lucide React 0.344** - Icon set

### Commerce
- **Shopify Storefront API 2024-01** - GraphQL API
- **GraphQL Request 6.1** - GraphQL client
- **SWR 2.2** - Data fetching with caching

### Routing & State
- **React Router 6.22** - Client-side routing
- **Custom hooks** - State management

### Utilities
- **Axios 1.7** - HTTP client
- **Classnames 2.3** - Conditional CSS
- **Supabase 2.57** - Backend (optional)

---

## 🎨 Design System

### Colors
```
Primary:        #C9A96E (Gold)
Background:     #0A0A0A (Near black)
Surface:        #111111 (Slightly lighter)
Text:           #F0EDE8 (Warm white)
```

### Typography
```
Display Font:   Cormorant Garamond (serif)
Body Font:      Inter (sans-serif)
Font Weights:   300 (light), 400 (regular), 500 (medium)
```

### Spacing
- Uses Tailwind's 8px grid system
- Max width: 1280px (screen-xl)

---

## 🚀 Build & Performance

### Build Output
```
Total: ~310 KB (uncompressed)
Gzip:  ~103 KB (compressed)

Breakdown:
- HTML:        1.09 KB
- CSS:         5.05 KB (gzip)
- JavaScript:  98 KB (gzip)
- Vendor:      51.17 KB (gzip)
```

### Build Time
- Development: < 1s HMR updates
- Production: ~10s full build

### Performance Targets
- Lighthouse Score: 90+
- FCP (First Contentful Paint): < 1.5s
- LCP (Largest Contentful Paint): < 2.5s
- TTI (Time to Interactive): < 3s

---

## 📋 Features

### ✅ E-commerce
- Fetch products from Shopify in real-time
- Display inventory status
- Add to cart functionality (redirects to Shopify checkout)
- Price display in EUR (customizable)
- Product filtering by category

### ✅ Design
- Split-screen hero (dark/light salon aesthetic)
- Responsive on all devices
- Dark luxury minimalist theme
- Smooth Framer Motion animations
- Touch-friendly mobile interface

### ✅ Navigation
- Fixed header with scroll detection
- Announcement bar (free shipping)
- Mobile hamburger menu
- French menu labels (customizable)
- Footer with links and contact

### ✅ Performance
- Code splitting (vendor, framework, shopify)
- Lazy loading with `whileInView`
- Image optimization
- SWR caching for API calls
- ~100 KB gzip total size

### ✅ Developer Experience
- Full TypeScript coverage
- No `any` types
- Custom hooks for data fetching
- Component-based architecture
- Clear file organization

---

## 🔄 Data Flow

```
User Action (click "Add to Cart")
    ↓
Component calls addToCart(variantId)
    ↓
useCart() hook makes GraphQL mutation
    ↓
Shopify API creates/updates cart
    ↓
Mutation returns updated cart
    ↓
Component updates UI
    ↓
User can proceed to checkout
```

---

## 📦 Shopify Integration

### GraphQL Queries Available
```typescript
// Fetch products
const { products } = useProducts(20);

// Fetch single product
const { product } = useProduct('product-handle');

// Fetch collections
const { collections } = useCollections(10);

// Fetch collection with products
const { collection } = useCollection('lighting', 20);

// Cart management
const { cart, addToCart, createCart } = useCart();
```

### Environment Variables Required
```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_token_here
```

---

## 🧪 Commands

### Development
```bash
npm run dev              # Start dev server (localhost:3000)
npm run type-check      # Check TypeScript errors
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
```

### Production
```bash
npm run build           # Create optimized build
npm run preview         # Preview production build locally
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```
- Auto-deploys on git push
- Built-in analytics
- Zero-config

### Netlify
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

### AWS Amplify
```bash
amplify init
amplify hosting add
amplify publish
```

See `DEPLOYMENT.md` for detailed instructions.

---

## 🔐 Security

### Best Practices Implemented
- Environment variables for sensitive data
- TypeScript for type safety
- No hardcoded API keys
- CORS headers configured
- XSS prevention with React escaping
- CSRF protection via Shopify

### Sensitive Files
- `.env.local` (never commit)
- Node modules (in .gitignore)
- Build output (in .gitignore)

---

## 📊 Project Metrics

| Metric | Value |
|--------|-------|
| Components | 20+ |
| Pages | 2 (extendable) |
| Custom Hooks | 5 |
| GraphQL Queries | 6 |
| Build Size (gzip) | 103 KB |
| TypeScript Coverage | 100% |
| Browser Support | Modern browsers |
| Mobile Responsive | Yes |
| Animations | Framer Motion |

---

## 🔮 Future Enhancements

### Short-term
- [ ] Product detail page
- [ ] Collection filtering/sorting
- [ ] Search functionality
- [ ] User reviews & ratings
- [ ] Newsletter subscription

### Medium-term
- [ ] User authentication
- [ ] Wishlist/favorites
- [ ] Order history
- [ ] Cart persistence
- [ ] Payment integration

### Long-term
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Order tracking
- [ ] Customer analytics
- [ ] Recommendation engine

---

## 📚 Documentation

- `README.md` - Main documentation
- `QUICK_START.md` - Getting started guide
- `DEPLOYMENT.md` - Deployment instructions
- `BUILD_SUMMARY.txt` - Build statistics
- Code comments - Inline documentation

---

## 💡 Tips for Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  gold: '#YOUR_COLOR',
}
```

### Add Navigation Items
Edit `src/components/layout/Header.tsx`:
```typescript
const navItems = [
  { label: 'YOUR_LABEL', href: '/path' },
  // ...
];
```

### Fetch More Products
Change the parameter in `Home.tsx`:
```typescript
const { products } = useProducts(50); // was 20
```

### Customize Fonts
Update `src/index.css` Google Fonts import.

---

## 🐛 Troubleshooting

### Products not loading?
1. Check `.env.local` variables
2. Verify Shopify store has products
3. Check browser console for GraphQL errors
4. Verify API token scope includes "Storefront API"

### Build fails?
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Type errors?
```bash
npm run type-check
```

---

## 📞 Support

- Shopify Docs: https://shopify.dev
- React: https://react.dev
- Vite: https://vitejs.dev
- Framer Motion: https://www.framer.com/motion/

---

## 📄 License

Private - All rights reserved

---

**Last Updated:** 2024-05-19
**Status:** Production Ready ✅
