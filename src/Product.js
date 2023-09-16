// src/components/Product.js
import React from 'react';

function Product({ product, index, removeProduct }) {
  return (
    <div className="product">
      <div className="product-details">
        <p>Product Name: {product.name}</p>
        <p>Product Qty: {product.qty}</p>
        <p>Product Price: {product.price}</p>
        <p>Store Name: {product.store}</p>
      </div>
      <button onClick={() => removeProduct(index)}>Remove</button>
    </div>
  );
}

export default Product;
