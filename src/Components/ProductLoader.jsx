import {store} from "../store.jsx"; // Adjust the path if needed

export const ProductLoader = async ({ params }) => {
  const { id } = params;

  // Try to get product from Redux store
  const product = store.getState().product.products.find(
    (item) => item.id === parseInt(id)
  );

  if (product) {
    return product;
  }

  // Fallback: fetch from backend if not in store
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
