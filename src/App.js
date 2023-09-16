import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <div className='container'>
      <h1>Inventory Management System</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} removeProduct={removeProduct} />
      </div>
    </div>
  );
}

export default App;
