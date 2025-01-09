import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ProductCard({ product, onDelete }) {
  const { id, name, description, price, imageUrl } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={name} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ${price} — {description}
        </Typography>
        <IconButton aria-label="delete" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
