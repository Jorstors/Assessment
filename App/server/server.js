const express = require("express");
const cors = require("cors");
const app = express();
const productsRouter = require("./routes/products");

// CORS handling
app.use(cors());
app.use(express.json());

// Use the routes
app.use("/api/products", productsRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
