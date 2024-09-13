// PromoSection.js

import React from 'react';
import backgroundImage from '../assets/images/backgound/products06.jpg'; 
import "./css/PromoSection.css"

const PromoSection = () => {
  return (
    <div className="promo-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="promo-content">
        <h2>Limited Time Offer</h2>
        <h1>Special Edition</h1>
        <p>Now you can buy all our Black T-shirts at more than 30% discount! Our production partner logo will be added to the back side of the T-shirt in a small size.</p>
        <p className="discount-text">Buy This T-shirt At 30% Discount</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default PromoSection;
