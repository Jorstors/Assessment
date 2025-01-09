import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/products";

export async function getProducts() {
  const response = await axios.get(API_BASE_URL);
  return response.data; // array of products
}

export async function deleteProduct(id) {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
}
