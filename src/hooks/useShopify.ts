import { useState, useCallback, useEffect } from 'react';
import useSWR from 'swr';
import {
  fetchShopifyData,
  shopifyQueries,
  Product,
  Collection,
  Cart,
} from '../lib/shopify-client';

export function useProducts(first: number = 20) {
  const { data, error, isLoading } = useSWR(
    ['products', first],
    async () => {
      const response = await fetchShopifyData<{
        products: { edges: Array<{ node: Product }> };
      }>(shopifyQueries.getProducts, { first });
      return response.products.edges.map((edge) => edge.node);
    }
  );

  return {
    products: data || [],
    isLoading,
    error,
  };
}

export function useProduct(handle: string) {
  const { data, error, isLoading } = useSWR(
    handle ? ['product', handle] : null,
    async () => {
      if (!handle) return null;
      const response = await fetchShopifyData<{ productByHandle: Product }>(
        shopifyQueries.getProductByHandle,
        { handle }
      );
      return response.productByHandle;
    }
  );

  return {
    product: data || null,
    isLoading,
    error,
  };
}

export function useCollections(first: number = 10) {
  const { data, error, isLoading } = useSWR(
    ['collections', first],
    async () => {
      const response = await fetchShopifyData<{
        collections: { edges: Array<{ node: Collection }> };
      }>(shopifyQueries.getCollections, { first });
      return response.collections.edges.map((edge) => edge.node);
    }
  );

  return {
    collections: data || [],
    isLoading,
    error,
  };
}

export function useCollection(handle: string, first: number = 20) {
  const { data, error, isLoading } = useSWR(
    handle ? ['collection', handle, first] : null,
    async () => {
      if (!handle) return null;
      const response = await fetchShopifyData<{
        collectionByHandle: Collection;
      }>(shopifyQueries.getCollectionByHandle, { handle, first });
      return response.collectionByHandle;
    }
  );

  return {
    collection: data || null,
    isLoading,
    error,
  };
}

export function useCart() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createCart = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchShopifyData<{ cartCreate: { cart: Cart } }>(
        shopifyQueries.createCart,
        { input: { lines: [] } }
      );
      setCart(response.cartCreate.cart);
      localStorage.setItem('cartId', response.cartCreate.cart.id);
      return response.cartCreate.cart;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to create cart');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addToCart = useCallback(
    async (variantId: string, quantity: number) => {
      if (!cart?.id) {
        await createCart();
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetchShopifyData<{ cartLinesAdd: { cart: Cart } }>(
          shopifyQueries.addToCart,
          {
            cartId: cart.id,
            lines: [{ merchandiseId: variantId, quantity }],
          }
        );
        setCart(response.cartLinesAdd.cart);
        return response.cartLinesAdd.cart;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to add to cart');
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [cart?.id, createCart]
  );

  useEffect(() => {
    const savedCartId = localStorage.getItem('cartId');
    if (savedCartId && !cart) {
      // Optionally fetch the cart if needed
    }
  }, []);

  return {
    cart,
    createCart,
    addToCart,
    isLoading,
    error,
  };
}
