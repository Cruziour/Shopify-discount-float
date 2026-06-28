import axios from "axios";
import { ApiError } from "../utils/index.js";

export const syncMetafieldToShopify = async (text) => {
  const shopifyUrl = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-04/metafields.json`;

  const shopifyPayload = {
    metafield: {
      namespace: "my_app",
      key: "announcement",
      value: text,
      type: "single_line_text_field",
    },
  };

  const shopifyHeaders = {
    headers: {
      "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      shopifyUrl,
      shopifyPayload,
      shopifyHeaders,
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? JSON.stringify(error.response.data)
      : error.message;
    throw new ApiError(502, `Shopify API Error: ${errorMessage}`);
  }
};
