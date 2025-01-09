import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} onDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
