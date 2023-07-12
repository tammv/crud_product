import productsData from "./product.json";

export const getListProduct = () => {
  return productsData;
};

export const addProduct = (product) => {
  let products = getListProduct();
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};

export const removeProduct = (id) => {
  let products = getListProduct();
  products = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
};

export const getProductById = (id) => {
  const products = getListProduct();
  const product = products.find((product) => product.id === id);
  return product;
};

export const editProduct = (id, newProduct) => {
  let products = getListProduct();
  products = products.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        ...newProduct,
      };
    }
    return product;
  });
  localStorage.setItem("products", JSON.stringify(products));
};
