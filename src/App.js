import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProcustDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Dynamic route for product details, :productId is a dynamic parameter */}
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
