const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;

const productsFilePath = path.join(__dirname, "product.json");

app.get("/api/products", (req, res) => {
  try {
    const productsData = fs.readFileSync(productsFilePath, "utf-8");
    const products = JSON.parse(productsData);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
