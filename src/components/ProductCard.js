import React from 'react';

const ProductCard = ({ imageSrc, description }) => {
  return (
    <div className="product-card">
      <h3>{description}</h3>
      <img src={imageSrc} alt={description} />
    </div>
  );
};

export default ProductCard;
