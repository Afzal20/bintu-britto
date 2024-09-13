import { useState, useEffect } from "react";
import "./css/AllProducts.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProducts = ({ heading }) => {
  const [products, setProducts] = useState([]); // State to hold products
  const [nextPage, setNextPage] = useState(null); // Optional: for pagination
  const [previousPage, setPreviousPage] = useState(null); // Optional: for pagination

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://127.0.0.1:8000/api/items/',
        });
        
        // Update state with products and pagination info
        setProducts(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        
        console.log(response.data.results); // Check data structure
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getdata();
  }, []);

  // Move fetchPage inside the component so it can access state
  const fetchPage = async (url) => {
    try {
      const response = await axios.get(url);
      setProducts(response.data.results);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    } catch (error) {
      console.error('Error fetching page:', error);
    }
  };

  return (
    <div className="f-products">
      <h2 className="head">{heading}</h2>
      <div className="product-list">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id } className="product-card">
              <Link to={`/product/${product.product_id }`} className="product-link">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <div className="product-category">Sale</div>
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
                  <p className="product-stock">
                    {product.number_of_items > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                  <Link to={`/product/${product._id}`} className="view-details">
                    View Details
                  </Link>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      {/* Optional: Add pagination controls */}
      <div className="pagination">
        {previousPage && <button onClick={() => fetchPage(previousPage)}>Previous</button>}
        {nextPage && <button onClick={() => fetchPage(nextPage)}>Next</button>}
      </div>
    </div>
  );
};

export default AllProducts;
