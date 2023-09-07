import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const handleDeleteClick = () => {
    onDelete(product._id);
  };

  const handleUpdateClick = () => {
    onUpdate(product._id);
  };

  return (
    <Card className='shadow' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Description: {product.description}</Card.Text>
        <Card.Text>Price: {product.price}</Card.Text>
        <Card.Text>Count in Stock: {product.countInStock}</Card.Text>
        <Button variant="primary" onClick={handleUpdateClick}>Update</Button> 
        <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
