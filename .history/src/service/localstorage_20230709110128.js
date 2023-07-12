export const getListProduct = () => {
  const products = require("./product.json");
  return products;
};

export const addProduct = (product) => {
  let products = getListProduct();
  products.push(product);
  fs.writeFileSync("product.json", JSON.stringify(products));
};

export const removeProduct = (id) => {
  let products = getListProduct();
  products = products.filter((product) => product.id !== id);
  fs.writeFileSync("product.json", JSON.stringify(products));
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
  fs.writeFileSync("product.json", JSON.stringify(products));
};
