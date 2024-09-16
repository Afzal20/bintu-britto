import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/AllProducts.css"; // Ensure this path is correct

const BestSellingProducts = ({ heading }) => {
  const [products, setProducts] = useState([]); // State to hold all products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [nextPage, setNextPage] = useState(null); // For pagination
  const [previousPage, setPreviousPage] = useState(null); // For pagination

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/items/");
        const allProducts = response.data.results;
        const bestSelling = allProducts.filter((product) => product.is_bestselling);
        
        setProducts(bestSelling); // Set the best-selling products
        setNextPage(response.data.next); // Handle pagination if any
        setPreviousPage(response.data.previous); // Handle pagination if any
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
        setLoading(false); // Stop loading even if an error occurs
      }
    };

    fetchProducts();
  }, []);

  // Pagination function
  const fetchPage = async (url) => {
    try {
      const response = await axios.get(url);
      const allProducts = response.data.results;
      const bestSelling = allProducts.filter((product) => product.is_bestselling);
      
      setProducts(bestSelling);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching page:", error);
    }
  };

  if (loading) {
    return <div>Loading best-selling products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="f-products">
      <h2 className="head">{heading}</h2>
      <div className="product-list">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id} className="product-card">
              <Link to={`/product/${product.product_id}`} className="product-link">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {product.discount_price > 0 && <div className="product-category">Sale</div>}
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
