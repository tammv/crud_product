const PRODUCTS_API_URL = "./product.json";

export const getListProduct = async () => {
  try {
    const response = await fetch(PRODUCTS_API_URL);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const newProduct = await response.json();
    return newProduct;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

export const removeProduct = async (id) => {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Failed to delete product");
  } catch (error) {
    console.error("Error removing product:", error);
    return false;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const editProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const updatedProductData = await response.json();
    return updatedProductData;
  } catch (error) {
    console.error("Error editing product:", error);
    return null;
  }
};
