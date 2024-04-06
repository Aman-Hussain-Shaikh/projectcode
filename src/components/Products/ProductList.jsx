import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchProductsRequest } from '../../redux/actions/actions';
import './ProductList.css'

const ProductList = ({ products, loading, error, fetchProductsRequest }) => {
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

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
              </tr>
            ))}
          </tbody>
        </table>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
