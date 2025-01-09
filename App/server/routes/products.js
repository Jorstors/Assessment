const express = require("express");
const router = express.Router();

// Mock data (could be replaced with a DB later)
let products = [
  {
    id: 1,
    name: "Product 1",
    description: "description 1",
    price: 100,
    imageUrl: "",
  },
  {
    id: 2,
    name: "Product 2",
    description: "description 2",
    price: 200,
    imageUrl: "",
  },
  {
    id: 3,
    name: "Product 3",
    description: "description 3",
    price: 300,
    imageUrl: "",
  },
  {
    id: 4,
    name: "Product 4",
    description: "description 4",
    price: 150,
    imageUrl: "",
  },
  {
    id: 5,
    name: "Product 5",
    description: "description 5",
    price: 500,
    imageUrl: "",
  },
  {
    id: 6,
    name: "Product 6",
    description: "description 6",
    price: 50,
    imageUrl: "",
  },
];

// Helper: Assign random images
function assignRandomImageUrl(product) {
  // Example: use picsum.photos or any random image API
  product.imageUrl = `https://picsum.photos/300?random=${Math.floor(
    Math.random() * 1000
  )}`;
}

// GET /api/products
router.get("/", (req, res) => {
  // Assign random images on the fly (or at server startup)
  products.forEach((p) => {
    if (!p.imageUrl) {
      assignRandomImageUrl(p);
    }
  });
  res.json(products);
});

// DELETE /api/products/:id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  products = products.filter((product) => product.id !== id);
  res.json({ message: `Product ${id} deleted successfully.` });
});

module.exports = router;
