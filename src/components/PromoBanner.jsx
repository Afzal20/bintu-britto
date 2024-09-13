// PromoBanner.jsx

import React from 'react';
import backgroundImage from "../assets/images/backgound/products01.jpg";
import "./css/PromoBanner.css"

const PromoBanner = () => {
  return (
    <div className="promo-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="promo-content">
        <h1>Raining Offers For Hot Summer!</h1>
        <h2>10% Off On All Products</h2>
        <p>(Only if order from website)</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default PromoBanner;
