# Veloria Living - Quick Start Guide

## Project Built Successfully ✅

Production-ready Shopify headless storefront with:
- React 18 + TypeScript
- Vite 5 optimized builds
- Framer Motion animations
- Shopify Storefront API
- Responsive design
- Component architecture

## File Structure

```
src/
├── components/
│   ├── ui/                # Reusable buttons, inputs
│   ├── product/           # ProductCard, ProductGrid
│   ├── layout/            # Header, Footer, MainLayout
│   └── hero/              # HeroSplit component
├── pages/                 # Home, Products pages
├── hooks/                 # useShopify (custom hooks)
├── lib/                   # shopify-client GraphQL queries
├── config/                # shopify.ts configuration
├── App.tsx                # Routing with React Router
└── main.tsx               # Entry point
```

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Shopify
Create `.env.local`:
```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_token
```

Get these from:
1. Shopify Admin → Settings → Apps and integrations
2. Create/select custom app
3. Enable "Storefront API"
4. Copy access token

### 3. Start Development
```bash
npm run dev
```
Opens http://localhost:3000

## Key Features

### Shopify Integration
- Fetch products in real-time
- Add to cart (redirects to Shopify checkout)
- Collections support
- Image optimization

```typescript
// Hook example
import { useProducts, useCart } from '@/hooks/useShopify';

export function MyComponent() {
  const { products } = useProducts(20);
  const { addToCart } = useCart();
  
  return products.map(p => (
    <button onClick={() => addToCart(p.variants[0].id, 1)}>
      Add {p.title}
    </button>
  ));
}
```

### Animations (Framer Motion)
All components support smooth animations:
- Scroll-triggered reveals
- Hover effects
- Page transitions

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>
```

### Styling (Tailwind)
Dark luxury aesthetic with gold accents:
- Color: `#C9A96E` (gold)
- Background: `#0A0A0A` (near black)
- Text: `#F0EDE8` (warm white)

```jsx
<div className="bg-[#0A0A0A] text-[#C9A96E]">
  Luxury styling
</div>
```

## Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder (~200KB gzip).

## Deploy to Vercel

```bash
vercel
```

Or:
1. Push to GitHub
2. Connect to Vercel dashboard
3. Add environment variables
4. Auto-deploys on push

See `DEPLOYMENT.md` for detailed instructions.

## Common Tasks

### Add a New Page
1. Create `src/pages/MyPage.tsx`
2. Add route in `src/App.tsx`

```typescript
// App.tsx
<Route path="/my-page" element={<MyPage />} />
```

### Fetch More Products
```typescript
const { products } = useProducts(50); // Fetch 50 instead of 20
```

### Customize Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  gold: '#NEW_COLOR',
}
```

### Add New Component
1. Create `src/components/feature/MyComponent.tsx`
2. Export from component's index
3. Import in pages

## Performance

Build sizes:
- HTML: 1.09 KB
- CSS: 22.90 KB (5.05 KB gzip)
- Shopify client: 21.81 KB (8.70 KB gzip)
- Framer Motion: 98.60 KB (33.18 KB gzip)
- Vendor: 156.97 KB (51.17 KB gzip)
- **Total: ~310 KB (103 KB gzip)**

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| VITE_SHOPIFY_STORE_DOMAIN | Yes | Your Shopify store domain |
| VITE_SHOPIFY_STOREFRONT_TOKEN | Yes | Storefront API token |
| VITE_SUPABASE_URL | No | For backend (optional) |
| VITE_SUPABASE_ANON_KEY | No | For backend (optional) |

## Troubleshooting

### Products not showing?
- Check `.env.local` variables
- Verify Shopify store has products
- Check browser console for GraphQL errors

### Build fails?
- Delete `node_modules` and `dist`
- Run `npm install` again
- Check for TypeScript errors: `npm run type-check`

### Animations stuttering?
- Check GPU acceleration in DevTools
- Reduce animation complexity
- Use `will-change` CSS strategically

## Next Steps

1. **Customize branding** - Update colors, fonts in tailwind config
2. **Add more pages** - Product detail, collection pages
3. **Connect backend** - Supabase for orders, reviews
4. **SEO optimization** - Add meta tags, sitemap
5. **Analytics** - Integrate Google Analytics
6. **Payment** - Set up Shopify checkout

## Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Shopify API: https://shopify.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- React Router: https://reactrouter.com/

## Support

- Check logs: `npm run dev` shows errors in terminal
- TypeScript errors: `npm run type-check`
- Lint issues: `npm run lint`

## License

Private
