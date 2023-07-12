const express = require("express");
const productsData = require("./products.json");

const app = express();
const PORT = 3000;

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = productsData.find((product) => product.pid === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
