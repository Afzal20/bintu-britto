import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import BestSellingProducts from "../components/BestSellingProducts.jsx";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/PromoBanner";
import PromoSection from "../components/PromoSection";
import AllProducts from "../components/AllProducts.jsx";
// import SliderWithSidebar from "../components/slider.jsx";
import FeatureSection from "../components/FeatureSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <SliderWithSidebar/> */}
      <FeaturedProducts heading="Featured Products" />
      <PromoBanner/>
      <BestSellingProducts heading="Best Selling Products" />
      <PromoSection />
      <AllProducts heading= "AllProducts" />
      <FeatureSection />
      <Footer/>
    </>
  );
};

export default HomePage;



// import React, { useEffect } from 'react';

// function App() {
//   // Fetch all products
//   const fetchAllProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/items/');
//       const data = await response.json();
//       console.log("All Products:", data);
//     } catch (error) {
//       console.error('Error fetching all products:', error);
//     }
//   };

//   // Fetch a single product by ID (change '1' to an actual product_id)
//   const fetchSingleProduct = async (productId) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/items/CMS/`);
//       const data = await response.json();
//       console.log("Single Product:", data);
//     } catch (error) {
//       console.error('Error fetching single product:', error);
//     }
//   };

//   // Fetch sliders
//   const fetchSliders = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/sliders/');
//       const data = await response.json();
//       console.log("Sliders:", data);
//     } catch (error) {
//       console.error('Error fetching sliders:', error);
//     }
//   };

//   // Run these fetch functions when the component is loaded
//   useEffect(() => {
//     fetchAllProducts();
//     fetchSingleProduct(1); // Fetch product with ID 1 (replace with actual ID)
//     fetchSliders();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Check the Console for Data</h1>
//     </div>
//   );
// }

// export default App;
