const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "product.json");

export const getListProduct = () => {
  try {
    const productsData = fs.readFileSync(productsFilePath, "utf-8");
    const products = JSON.parse(productsData);
    return products;
  } catch (error) {
    console.error("Error reading product data:", error);
    return [];
  }
};

export const addProduct = (product) => {
  try {
    const products = getListProduct();
    products.push(product);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const removeProduct = (id) => {
  try {
    let products = getListProduct();
    products = products.filter((product) => product.pid !== id);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
  } catch (error) {
    console.error("Error removing product:", error);
  }
};

export const getProductById = (id) => {
  try {
    const products = getListProduct();
    const product = products.find((product) => product.pid === id);
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const editProduct = (id, updatedProduct) => {
  try {
    let products = getListProduct();
    products = products.map((product) => {
      if (product.pid === id) {
        return {
          ...product,
          ...updatedProduct,
        };
      }
      return product;
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
  } catch (error) {
    console.error("Error editing product:", error);
  }
};
