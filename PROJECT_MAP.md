# Veloria Living - Project Map

## Project Path
```
/tmp/cc-agent/66919065/project
```

## Full File Tree
```
project/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── postcss.config.js
├── vercel.json
├── .env.example
├── .gitignore
├── index.html
│
├── src/
│   ├── main.tsx                          # Entry point
│   ├── App.tsx                           # React Router (/, /products, /collections/:handle)
│   ├── index.css                         # Global styles + Tailwind + animations
│   ├── vite-env.d.ts
│   │
│   ├── config/
│   │   └── shopify.ts                    # Shopify API domain + token config
│   │
│   ├── lib/
│   │   └── shopify-client.ts            # GraphQL client, 6 queries, price formatter, image optimizer
│   │
│   ├── hooks/
│   │   └── useShopify.ts                # useProducts, useProduct, useCollections, useCollection, useCart
│   │
│   ├── pages/
│   │   ├── Home.tsx                      # Homepage: Hero > Marquee > TrustBar > Featured > Visualizer > Lighting > MoodLabs > Scent > ScentJourney > WallArt > Ambient > Products > Testimonials > Newsletter
│   │   └── Products.tsx                 # Products listing page
│   │
│   ├── components/
│   │   ├── hero/
│   │   │   └── HeroSplit.tsx            # Split-screen dark/light salon hero with pendant lights
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx               # Fixed header, scroll detection, mobile menu, cart icon
│   │   │   ├── Footer.tsx               # 4-column footer, social links, payment badges
│   │   │   └── MainLayout.tsx           # Wrapper: Header + children + Footer
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx          # Product card with wishlist, hover add-to-cart, Framer Motion
│   │   │   └── ProductGrid.tsx          # Responsive grid with category filters + skeleton loading
│   │   │
│   │   ├── ui/
│   │   │   └── Button.tsx               # Reusable button (primary/secondary/ghost) with Framer Motion
│   │   │
│   │   ├── Marquee.tsx                  # Gold scrolling brand ticker
│   │   ├── TrustBar.tsx                 # 4 trust signals (shipping, security, returns, quality)
│   │   ├── FeaturedCollection.tsx       # 3 hero category cards (Lighting, Scent, Wall Art)
│   │   ├── LightingSection.tsx          # Wireless lighting features + product showcase
│   │   ├── ScentSection.tsx             # 4 fragrance cards (Velvet Oud, Blanc Cedarwood, Cote Azur, Noir Patchouli)
│   │   ├── WallArtSection.tsx           # Minimalist art gallery with pricing
│   │   ├── Testimonials.tsx             # Customer reviews with star ratings
│   │   ├── Newsletter.tsx               # Email signup with success state
│   │   │
│   │   ├── InteractiveVisualizer.tsx    # NEW: Whole-home integration, 4 rooms, SVG ecosystem diagram
│   │   ├── MoodLabs.tsx                # NEW: 4 mood presets (Focus/Relax/Social/Creative), dynamic colors, particles
│   │   ├── ScentJourney.tsx            # NEW: 5-phase circadian scent timeline, intensity bars
│   │   ├── AmbientShowcase.tsx         # NEW: 3 dimensions of luxury (Light/Fragrance/Art)
│   │   │
│   │   ├── HeroScene.tsx               # Legacy hero (alternate)
│   │   ├── Navbar.tsx                  # Legacy navbar (alternate)
│   │   ├── Footer.tsx                  # Legacy footer (alternate)
│   │   ├── ProductGrid.tsx             # Legacy product grid (alternate)
│   │   └── About.tsx                   # Legacy about section (alternate)
│
├── .github/workflows/
│   └── deploy.yml                       # CI/CD: type-check, lint, build
│
├── README.md
├── QUICK_START.md
├── DEPLOYMENT.md
├── PROJECT_OVERVIEW.md
├── VELORIA_COMPLETE.md
├── BUILD_SUMMARY.txt
└── FINAL_CHECKLIST.md
```

## Tech Stack
- React 18 + TypeScript 5.5 + Vite 5.4
- Tailwind CSS 3.4 + Framer Motion 10.16
- Shopify Storefront API (GraphQL) + SWR
- React Router 6.22 + Lucide React icons

## Design
- Dark luxury minimalist (#0A0A0A background, #C9A96E gold accent, #F0EDE8 text)
- Cormorant Garamond (display) + Inter (body)
- Fully responsive, mobile-first

## Build
- `npm run build` → ~115 KB gzip
- Code splitting: vendor / framer / shopify / app
