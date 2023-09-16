// src/components/ProductList.js
import React from 'react';
import Product from './Product';
import "./ProductList.css";
function ProductList({ products, removeProduct }) {
  return (
    
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product, index) => (
        <Product key={index} product={product} index={index} removeProduct={removeProduct} />
      ))}
    </div>
   
  );
}

export default ProductList;
