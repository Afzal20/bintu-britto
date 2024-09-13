import React from 'react';
import './css/SingleProduct.css';
import ProductsDetails from'../components/ProcustDetails';
import FeaturedProducts from '../components/FeaturedProducts';


const SingleProduct = () => {
  
  return <>
  <ProductsDetails />
  <FeaturedProducts heading="Other Products"/>
  </>
};

export default SingleProduct;