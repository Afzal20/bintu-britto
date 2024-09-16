import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../components/css/ProductsPage.css";
import Colors from "../components/Colors";
import DetailsThumb from "../components/DetailsThumb";
import axios from 'axios';

const ProductsDetails = () => {
  const [product, setProduct] = useState(null);
  const [index, setIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const myRef = useRef();

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/items/${productId}/`);
        const fetchedProduct = response.data;

        // Check if `item_color` and `item_size` exist and have at least one element
        setProduct(fetchedProduct);
        if (fetchedProduct.item_color && fetchedProduct.item_color.length > 0) {
          setSelectedColor(fetchedProduct.item_color[0].color.name);
        }
        if (fetchedProduct.item_size && fetchedProduct.item_size.length > 0) {
          setSelectedSize(fetchedProduct.item_size[0].size.name);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product && myRef.current) {
      const images = myRef.current.children;
      if (images[index]) {
        images[index].className = "active";
      }
    }
  }, [index, product]);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    if (images[index]) {
      images[index].className = "active";
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    console.log(`Selected Color: ${color}`);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    console.log(`Selected Size: ${size}`);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size.");
    } else {
      const sizePrice = product.item_size.find(s => s.size.name === selectedSize);
      const price = sizePrice ? sizePrice.price_for_this_size : product.price;
      console.log(`Selected Color: ${selectedColor}, Size: ${selectedSize}, Price: ${price}`);
      // Add further logic to add to cart here
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product">
      <div className="details">
        <div className="big-img">
          {product.images && product.images.length > 0 ? (
            <img src={product.images[index].image} alt={product.title} />
          ) : (
            <p>No image available</p>
          )}
        </div>

        <div className="box">
          <div className="row">
            <h2>{product.title}</h2>
            <span>${product.discount_price || product.price}</span>
          </div>

          <div className="options">
            {product.item_color && product.item_color.length > 0 && (
              <div className="colors">
                <h3>Select Color:</h3>
                <Colors
                  colors={product.item_color.map(color => color.color.name)}
                  selectedColor={selectedColor}
                  onColorChange={handleColorChange}
                />
              </div>
            )}

            {product.item_size && product.item_size.length > 0 && (
              <div className="sizes">
                <h3>Select Size:</h3>
                <select
                  value={selectedSize}
                  onChange={(e) => handleSizeChange(e.target.value)}
                >
                  {product.item_size.map(size => (
                    <option key={size.size.id} value={size.size.name}>
                      {size.size.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

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

          <p>{product.description}</p>

          {product.images && product.images.length > 0 && (
            <DetailsThumb images={product.images.map(img => img.image)} tab={handleTab} myRef={myRef} />
          )}
          <button className="cart" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
