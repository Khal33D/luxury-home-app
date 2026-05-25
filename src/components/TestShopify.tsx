import { useEffect } from "react";
import Client from "shopify-buy";

const shopifyClient = Client.buildClient({
    domain: import.meta.env.VITE_SHOPIFY_DOMAIN || "",
    storefrontAccessToken: import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN || "",
    apiVersion: ""
});

export default function TestShopify() {
  useEffect(() => {
    shopifyClient.product.fetchAll()
      .then((products) => {
        console.log("SHOPIFY PRODUCTS:", products);
      })
      .catch((err) => {
        console.error("SHOPIFY ERROR:", err);
      });
  }, []);

  return (
    <div style={{ color: "white" }}>
      Shopify connection test running...
    </div>
  );
}
