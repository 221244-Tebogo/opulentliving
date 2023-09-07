import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      {/* Render your products based on the fetched data */}
      {products.map((product) => (
        <div key={product._id}>
          {/* Render your product components here */}
        </div>
      ))}
    </div>
  );
};

export default Products;
