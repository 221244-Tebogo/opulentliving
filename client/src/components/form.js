import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Form() {

  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productStock, setProductStock] = useState();
  const [productCategory, setProductCategory] = useState();

  const [products, setProducts] = useState([]);

  const style = {
    margin: "10px",
  }

  const addProduct = (e) => {
    let payload = { name: productName, price: productPrice, stock: productStock, category: productCategory }
    axios.post('http://localhost:5000/api/form', payload)
      .then()
      .catch()

  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/form/')
      .then((res) => {
        setProducts(res.data)
      })
      .catch()
  })

const handleDelete=(id)=>{
  axios.delete('http://localhost:5000/api/form/'+id)
}

  return (

    <div style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
      <form onSubmit={addProduct}>
        <div className="form">
          <h1 style={{ color: "black" }} >Products</h1>
          <div >
            <input style={style}
              type="text"
              placeholder="Product Name"
              onChange={(e => setProductName(e.target.value))}
            />
            <input style={style}
              type="number"
              placeholder="Price"
              onChange={(e => setProductPrice(e.target.value))}
            />
            <input style={style}
              type="number"
              placeholder="Stock"
              onChange={(e => setProductStock(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Category"
              onChange={(e => setProductCategory(e.target.value))}
            />
            <button type='submit' style={style}>Add Product</button>
            <button style={style}>Update Product</button>
            <button style={style}>Delete Product</button>
          </div>
        </div>
      </form>

      <div>
        <table class="table mx-auto">
          <tbody>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            {products.map(product => {
              return (
                <tr>
                  <td id='name'>{product.name}</td>
                  <td id='price'>{product.price}</td>
                  <td id='stock'>{product.stock}</td>
                  <td id='category'>{product.category}</td>
                  {/* <td><a class="btn btn-primary" role="button">Update</a></td>   */} <Link to={`/update/${product._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                  <td><a class="btn btn-danger" onClick={()=>handleDelete(product._id)} role="button">Delete</a></td>
                </tr>
              )
            })}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Form;