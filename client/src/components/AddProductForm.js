import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    image: '',
    countInStock: 0,
  });
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedProductId) {
        // Update the existing product
        const response = await axios.put(
          `http://localhost:3000/api/product/${selectedProductId}`,
          productData
        );
        console.log('Product updated:', response.data);
      } else {
        // Create a new product
        const response = await axios.post('http://localhost:3000/admin/products/add', productData);
        console.log('Product created:', response.data);
      }
      // Reset the form
      setProductData({
        name: '',
        image: '',
        countInStock: 0,
      });
      setSelectedProductId(null);
      // Fetch the updated list of products
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (productId) => {
    // Find the product to edit
    const productToEdit = products.find((product) => product._id === productId);
    if (productToEdit) {
      // Set the form data and selected product ID for editing
      setProductData({
        name: productToEdit.name,
        image: productToEdit.image,
        countInStock: productToEdit.countInStock,
      });
      setSelectedProductId(productId);
    }
  };

  const handleDelete = async (productId) => {
    try {
      // Delete the product
      const response = await axios.delete(`http://localhost:3000/api/product/${productId}`);
      console.log('Product deleted:', response.data);
      // Fetch the updated list of products
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Add or Update a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Count in Stock:</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">{selectedProductId ? 'Update Product' : 'Add Product'}</button>
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} -{' '}
            <button onClick={() => handleEdit(product._id)}>Edit</button>{' '}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProductForm;
