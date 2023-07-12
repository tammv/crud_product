export const getListProduct = () => {
  if (!localStorage["products"]) {
    localStorage["products"] = "[]";
  }

  let products = localStorage["products"];
  products = JSON.parse(products);
  return products;
};

export const addProduct = (product) => {
  const products = getListProduct();
  products.push(product);
  localStorage["products"] = JSON.stringify(products);
};

export const removeProduct = (id) => {
  let products = getListProduct();
  products = products.filter((product) => product.id !== id);
  localStorage["products"] = JSON.stringify(products);
};

export const getProductById = (id) => {
  const products = getListProduct();
  const product = products.find((product) => product.id === id);
  return product;
};
export const getProduct = (id) => {
  const product = getProductById(id);
  return product;
};

export const editProduct = (id, newProduct) => {
  let products = getListProduct();
  products = products.filter((product) => product.id !== id);
  products.push(newProduct);
  localStorage["products"] = JSON.stringify(products);
};
