// ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Row } from 'react-bootstrap'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5001/api/products')
      .then((results) => setProducts(results.data))
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <Row>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
          </Row>
  );
          };

export default ProductList;
