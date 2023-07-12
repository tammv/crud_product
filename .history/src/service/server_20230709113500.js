const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8000/products.json");
    const products = response.data;
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
