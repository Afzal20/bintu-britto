
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FiAlignJustify, FiX } from "react-icons/fi";
import "./css/Navbar.css";
import logo from "../assets/img/logo-2-300x124.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <>
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
        <button className="searchIcon" type="button">
          <FaSearch />
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="active" onClick={toggleMenu}>
            EVERYTHING
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product-category/women"
            activeClassName="active"
            onClick={toggleMenu}
          >
            WOMEN
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product-category/men"
            activeClassName="active"
            onClick={toggleMenu}
          >
            MEN 
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" activeClassName="active" onClick={toggleMenu}>
            <IoPerson className="accountsIcon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active" onClick={toggleMenu}>
            <MdOutlineShoppingBag className="cartIcon" />
            <span className="cart-total--item">10</span>
          </NavLink>
        </li>
      </ul>
      <div className="mobile-navbar-btn">
        {!isOpen ? (
          <FiAlignJustify
            className="mobile-navbar-btn--icon"
            onClick={toggleMenu}
          />
        ) : (
          <FiX className="mobile-navbar-btn--icon" onClick={toggleMenu} />
        )}
      </div>
    </nav>
    <div className="space">
      
    </div>
    </>
};

export default Navbar;
