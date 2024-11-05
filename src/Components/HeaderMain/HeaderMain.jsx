import React, { useState } from "react";
import "./HeaderMain.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HeaderMain = ({ setSearch }) => {
  return (
    <>
      <div className="secondbar">
        <div className="b1">
          <Link to="/">
            <img
              src="https://themewagon.github.io/eiser/img/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="b2">
          <ul>
            <li>
              <Link to="/">Mens</Link>
            </li>
            <li className="dropdown">
              <Link to="/shop">Women</Link>
              <ul className="dropdown-content">
                <li className="shop">
                  <Link to="/shopcategory">Shop Category</Link>
                </li>
                <li>
                  <Link to="/productdetail">Product Detail</Link>
                </li>
                <li>
                  <Link to="/productcheckout">Product Checkout</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Beauty</Link>
            </li>
            <li>
              <Link to="/order-tracking">Home Ans Kitchen</Link>
            </li>
          </ul>
        </div>
        <div className="b3">
          <input
            className="form-control myInput"
            type="search"
            placeholder="Search Easier"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="#">
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
          </Link>
          <Link to="#">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
