import { GraphQLClient, gql } from 'graphql-request';
import { SHOPIFY_GRAPHQL_ENDPOINT, SHOPIFY_CONFIG } from '../config/shopify';

const client = new GraphQLClient(SHOPIFY_GRAPHQL_ENDPOINT, {
  headers: {
    'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.storefrontAccessToken,
  },
});

export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: Array<{
    url: string;
    altText: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    availableForSale: boolean;
    priceV2: {
      amount: string;
      currencyCode: string;
    };
  }>;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    altText: string;
  };
  products: {
    edges: Array<{
      node: Product;
    }>;
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: Array<{
    id: string;
    merchandise: {
      id: string;
      title: string;
    };
    quantity: number;
  }>;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

export const shopifyQueries = {
  getProducts: gql`
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `,

  getProductByHandle: gql`
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 100) {
          edges {
            node {
              id
              title
              availableForSale
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `,

  getCollections: gql`
    query GetCollections($first: Int!) {
      collections(first: $first) {
        edges {
          node {
            id
            title
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `,

  getCollectionByHandle: gql`
    query GetCollectionByHandle($handle: String!, $first: Int!) {
      collectionByHandle(handle: $handle) {
        id
        title
        description
        image {
          url
          altText
        }
        products(first: $first) {
          edges {
            node {
              id
              title
              description
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `,

  createCart: gql`
    mutation CreateCart($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          totalQuantity
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
                quantity
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `,

  addToCart: gql`
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          totalQuantity
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
                quantity
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `,
};

export async function fetchShopifyData<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!SHOPIFY_CONFIG.storefrontAccessToken) {
    throw new Error('Shopify Storefront Access Token is not configured');
  }

  try {
    const data = await client.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('Shopify API Error:', error);
    throw error;
  }
}

export function formatPrice(amount: string, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(parseFloat(amount));
}

export function getImageUrl(url: string, width: number = 800): string {
  if (!url) return '';
  const imageUrl = new URL(url);
  imageUrl.searchParams.append('width', width.toString());
  imageUrl.searchParams.append('crop', 'center');
  return imageUrl.toString();
}
