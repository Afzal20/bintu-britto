import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProductsPage from "./pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fixed `element` and param extraction */}
        <Route path="/product/:productId" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
