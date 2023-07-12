import axios from "axios";

const PRODUCTS_API_URL = "http://localhost:3000/api/products";

export const getListProduct = async () => {
  try {
    const response = await axios.get(PRODUCTS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(PRODUCTS_API_URL, product);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

export const removeProduct = async (id) => {
  try {
    const response = await axios.delete(`${PRODUCTS_API_URL}/${id}`);
    if (response.status === 200) {
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
    const response = await axios.get(`${PRODUCTS_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const editProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`${PRODUCTS_API_URL}/${id}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    return null;
  }
};
