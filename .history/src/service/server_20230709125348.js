const express = require("express");
const app = express();
const path = require("path");

const PRODUCTS_FILE_PATH = path.join(__dirname, "product.json");
const PORT = 3000;

app.get("/api/products", (req, res) => {
  try {
    const productsData = fs.readFileSync(PRODUCTS_FILE_PATH, "utf-8");
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
