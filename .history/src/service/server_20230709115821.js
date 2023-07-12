const express = require("express");
const app = express();
const path = require("path");

const productsData = require("./product.json");
const PORT = 3000;

app.get("/api/products", (req, res) => {
  res.json(productsData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
