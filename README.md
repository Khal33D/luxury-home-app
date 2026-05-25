# Veloria Living - Headless Shopify Storefront

Production-ready React + Vite + TypeScript e-commerce storefront for Shopify Storefront API.

## Architecture

```
src/
├── components/
│   ├── ui/               # Reusable UI components (Button, etc)
│   ├── product/          # Product-specific components
│   ├── layout/           # Layout components (Header, Footer)
│   └── hero/             # Hero sections
├── pages/                # Page components (Home, Products, etc)
├── hooks/                # Custom React hooks (useShopify, etc)
├── lib/                  # Utilities (shopify-client, formatters)
├── config/               # Configuration files
├── App.tsx               # Main app with routing
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **SWR** - Data fetching with caching
- **GraphQL Request** - Shopify API client
- **Lucide React** - Icons

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Shopify API

Create `.env.local`:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
```

Get these from:
1. Shopify Admin → Settings → Apps and integrations
2. Create/select a custom app
3. Enable Storefront API access
4. Copy the Storefront Access Token

### 3. Development

```bash
npm run dev
```

Opens http://localhost:3000

## Building

```bash
npm run build
```

Generates optimized dist/ folder for production.

## Features

- ✅ Product catalog with Shopify Storefront API
- ✅ Real-time inventory from Shopify
- ✅ Add to cart (redirects to Shopify checkout)
- ✅ Responsive design (mobile-first)
- ✅ Dark luxury minimalist aesthetic
- ✅ Framer Motion animations
- ✅ Optimized image loading
- ✅ SEO-friendly routing
- ✅ Error handling & loading states
- ✅ Type-safe Shopify queries

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in project settings
4. Deploy

```bash
vercel
```

### Netlify

```bash
npm run build
# Deploy dist/ folder
```

## Shopify Integration

### Queries Available

- `getProducts` - Fetch all products
- `getProductByHandle` - Fetch single product
- `getCollections` - Fetch all collections
- `getCollectionByHandle` - Fetch collection with products
- `createCart` - Create checkout cart
- `addToCart` - Add items to cart

### Example Usage

```typescript
import { useProducts, useCart } from '@/hooks/useShopify';

export function ProductPage() {
  const { products, isLoading } = useProducts(20);
  const { cart, addToCart } = useCart();

  const handleAdd = (variantId: string) => {
    addToCart(variantId, 1);
  };

  return (
    <div>
      {products.map(product => (
        <button key={product.id} onClick={() => handleAdd(product.variants[0].id)}>
          Add {product.title}
        </button>
      ))}
    </div>
  );
}
```

## Performance

- Code splitting by page & vendor
- Image optimization with width/crop params
- SWR caching for API calls
- Lazy loading with Framer Motion `whileInView`
- Minimal JavaScript output (~200KB gzipped)

## Browser Support

- Chrome/Edge (latest 2)
- Firefox (latest 2)
- Safari (latest 2)
- Mobile browsers

## License

Private
