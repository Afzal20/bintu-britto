import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsDetails from '../components/ProcustDetails'; 
import SimilarProducts from '../components/SimilarProducts';
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer';

const SingleProduct = () => {
  const { productId } = useParams(); // Retrieve productId from URL

  return (
    <>
      <Navbar />
      <ProductsDetails />
      <SimilarProducts productId={productId} />
      <Footer/>
    </>
  );
};

export default SingleProduct;
