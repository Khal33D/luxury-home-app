export const SHOPIFY_CONFIG = {
  storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || 'veloria-living.myshopify.com',
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || '',
  apiVersion: '2024-01',
};

export const SHOPIFY_GRAPHQL_ENDPOINT = `https://${SHOPIFY_CONFIG.storeDomain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`;

export const DEFAULT_CURRENCY = 'EUR';
export const DEFAULT_LANGUAGE = 'FR';
