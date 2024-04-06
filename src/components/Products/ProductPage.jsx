import React ,{useEffect} from "react";
import { fetchProductsRequest } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ProductListED from "./ProductListED";

const ProductPage = ({ fetchProductsRequest }) => {
 
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Product Management</h1>
      <ProductForm />
      <ProductListED />
    </div>
  );
};

const mapDispatchToProps = {
  fetchProductsRequest,
};

export default connect(null, mapDispatchToProps)(ProductPage);
