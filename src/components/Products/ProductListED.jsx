// ProductListED.jsx

import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchProductsRequest, deleteProduct, updateProduct } from '../../redux/actions/actions';
import './ProductList.css';

const ProductListED = ({ products, loading, error, fetchProductsRequest, deleteProduct, updateProduct }) => {
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

  // State to manage edited product data
  const [editedProduct, setEditedProduct] = useState(null);

  // Function to handle editing of product data
  const handleEdit = (product) => {
    setEditedProduct(product);
  };

  // Function to handle updating the product
  const handleUpdate = () => {
    if (editedProduct) {
      updateProduct(editedProduct);
      setEditedProduct(null);
    }
  };

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <table className='product-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount Percentage</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.discountPercentage}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Modal or form for editing the product */}
      {editedProduct && (
        <div className="edit-modal">
          <h2>Edit Product</h2>
          <form>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={editedProduct.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={editedProduct.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={editedProduct.price}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Discount Percentage:</label>
              <input
                type="number"
                name="discountPercentage"
                value={editedProduct.discountPercentage}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                value={editedProduct.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Stock:</label>
              <input
                type="number"
                name="stock"
                value={editedProduct.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Brand:</label>
              <input
                type="text"
                name="brand"
                value={editedProduct.brand}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={editedProduct.category}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <button onClick={handleUpdate}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error,
});

const mapDispatchToProps = {
  fetchProductsRequest,
  deleteProduct,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListED);
