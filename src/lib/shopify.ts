import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
    domain: import.meta.env.VITE_SHOPIFY_DOMAIN,
    storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
    apiVersion: ""
});