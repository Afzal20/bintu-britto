import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/css/ProductsPage.css"; // Ensure this path is correct
import Colors from "../components/Colors";
import DetailsThumb from "../components/DetailsThumb";

// Placeholder image for when the product image is not available
const placeholderImage = "path/to/placeholder-image.jpg"; // Add the path to your placeholder image here

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null); // State to store product details
  const [index, setIndex] = useState(0); // State for selected image index
  const [selectedColor, setSelectedColor] = useState(""); // State for selected color
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size
  const [quantity, setQuantity] = useState(1); // State for product quantity
  const [error, setError] = useState(null); // State to handle error messages
  const myRef = useRef(); // Ref for thumbnail images

  // Fetch product details based on productId
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/items/${productId}/`);
        setProduct(response.data);

        // Set default selected color and size if they exist
        if (response.data.colors && response.data.colors.length > 0) {
          setSelectedColor(response.data.colors[0]);
        }
        if (response.data.sizes && response.data.sizes.length > 0) {
          setSelectedSize(response.data.sizes[0]);
        }
      } catch (error) {
        setError("Could not load product. Please try again later.");
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Handle image tab selection
  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  // Handle color selection change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Handle size selection change
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  // Display error message if product fetch fails
  if (error) {
    return <p>{error}</p>;
  }

  // Display loading message if product is not yet fetched
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product">
      <div className="details">
        {/* Product image display */}
        <div className="big-img">
          <img
            src={product.src && product.src.length > 0 ? product.src[index] : placeholderImage}
            alt={product.title || "No image available"}
          />
        </div>

        {/* Product information */}
        <div className="box">
          <div className="row">
            <h2>{product.title}</h2>
            <span>{product.price}৳</span>
          </div>

          <div className="options">
            {/* Color selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="colors">
                <h3>Select Color:</h3>
                <Colors
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onColorChange={handleColorChange}
                />
              </div>
            )}

            {/* Size selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="sizes">
                <h3>Select Size:</h3>
                <select
                  value={selectedSize}
                  onChange={(e) => handleSizeChange(e.target.value)}
                >
                  {product.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity selection */}
            <div className="quantity">
              <h3>Quantity:</h3>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
          </div>

          {/* Product description */}
          <p>{product.description}</p>

          {/* Thumbnails for product images */}
          {product.src && product.src.length > 0 && (
            <DetailsThumb images={product.src} tab={handleTab} myRef={myRef} />
          )}

          {/* Add to cart button */}
          <button className="cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
