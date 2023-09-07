import React from 'react'

const ProductCard = ({ product, onDelete }) => {

    const handleDelete = () => {
        //Call the onDelete callback function with the product ID 
        onDelete(product.id);
    };

  return (
    <Card className='shadow' style={{width: '18rem'}}>
        <Card.Body>
            
        </Card.Body>
    </Card>
    <div>
      
    </div>
  )
}

export default ProductCard
