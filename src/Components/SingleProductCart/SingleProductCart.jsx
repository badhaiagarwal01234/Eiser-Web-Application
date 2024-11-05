import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleProductCart = ({ product }) => {
  console.log("Product:", product); // Log the product data
  return (
    <>
      <div className="b41">
        <div className="inner1">
          <Link to={`/productdetail/${product.id}`}>
            <LazyLoadImage
              effect="blur"
              width={"300px"}
              src={product.productImg}
              alt={product.productName}
            />
          </Link>
          <div className="cart-info">
            <div className="circle">
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="circle">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="circle">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="circle">
              <i className="fa-regular fa-thumbs-up"></i>
            </div>
            <div className="circle">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
        <div className="inner2">
          <h5>{product.name}</h5>
          <span>{product.description.slice(0, 30)}...</span>
          <br />
          <b>{product.category}</b>
        </div>
        <div className="inner3">
          <div className="i1">&#8377;{product.new_price}</div>
          {product.old_price && (
            <div className="i2">
              <del>&#8377;{product.old_price}</del>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductCart;
