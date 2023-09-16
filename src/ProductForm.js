// src/components/ProductForm.js
import React, { useState } from 'react';
import './ProductForm.css';
function ProductForm({ addProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    qty: '',
    price: '',
    store: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({ name: '', qty: '', price: '', store: '' });
  };

  return (
  
    <div className="product-form">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Product Qty:
          <input
            type="number"
            name="qty"
            value={newProduct.qty}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Store Name:
          <input
            type="text"
            name="store"
            value={newProduct.store}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
   
  );
}

export default ProductForm;
