import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/AllProducts.css'; // Ensure this is the correct path to your CSS file

const BestSellingProducts = ({ heading }) => {
  const [products, setProducts] = useState([]); // State to hold best-selling products
  const [nextPage, setNextPage] = useState(null); // For pagination (optional)
  const [previousPage, setPreviousPage] = useState(null); // For pagination (optional)
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/items/');
        const bestSelling = response.data.results.filter(product => product.is_bestselling);
        setProducts(bestSelling); // Set filtered best-selling products
        setNextPage(response.data.next); // Set next page for pagination if any
        setPreviousPage(response.data.previous); // Set previous page for pagination if any
        setLoading(false); // Set loading to false after data fetch
      } catch (error) {
        console.error('Error fetching best-selling products:', error);
        setError('Failed to load best-selling products. Please try again.');
        setLoading(false);
      }
    };

    fetchBestSellingProducts();
  }, []);

  // Pagination function to fetch next or previous page
  const fetchPage = async (url) => {
    try {
      const response = await axios.get(url);
      const bestSelling = response.data.results.filter(product => product.is_bestselling);
      setProducts(bestSelling);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    } catch (error) {
      console.error('Error fetching page:', error);
    }
  };

  // Loading and error handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="f-products">
      <h2 className="head">{heading}</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.product_id} className="product-card">
              <Link to={`/product/${product.product_id}`} className="product-link">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {product.discount_price > 0 && (
                    <div className="product-category">Sale</div>
                  )}
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p className="product-prices">
                    {product.discount_price > 0 ? (
                      <>
                        <span className="price-cut">{product.price}৳</span>
                        <span className="price-discount">{product.discount_price}৳</span>
                      </>
                    ) : (
                      <span className="price">{product.price}৳</span>
                    )}
                  </p>
                  <div className="product-stock">
                    {product.number_of_items > 0 ? "In Stock" : "Out of Stock"}
                  </div>
                  <div className="product-colors">
                    {product.colors && product.colors.map(color => (
                      <span key={color.id} className="color" style={{ backgroundColor: color.code }}>{color.name}</span>
                    ))}
                  </div>
                  <div className="product-sizes">
                    {product.sizes && product.sizes.map(size => (
                      <span key={size.id} className="size">{size.name}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No best-selling products found.</p>
        )}
      </div>
      {/* Optional Pagination Controls */}
      <div className="pagination">
        {previousPage && <button onClick={() => fetchPage(previousPage)}>Previous</button>}
        {nextPage && <button onClick={() => fetchPage(nextPage)}>Next</button>}
      </div>
    </div>
  );
};

export default BestSellingProducts;
