const PRODUCTS_KEY = "products";

export const getListProduct = () => {
  if (!localStorage.getItem(PRODUCTS_KEY)) {
    localStorage.setItem(PRODUCTS_KEY, "[]");
  }

  const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
  return products;
};

export const addProduct = (product) => {
  const products = getListProduct();
  products.push(product);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const removeProduct = (id) => {
  let products = getListProduct();
  products = products.filter((product) => product.id !== id);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
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
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};
