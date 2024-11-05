// This line imports React and two hooks, useEffect and useState, from the React library.
import React, { useEffect, useState } from "react";

import "./ProductCategory.css";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

const ProductCategory = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("");

  const url = "http://localhost:8000/products/random";

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData(url);
  }, [url]);

  console.log(products);

  const filterData = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filterBySort = () => {
    if (sort === "asc") {
      return [...filterData].sort((a, b) => a.new_price - b.new_price);
    }
    if (sort === "dsc") {
      return [...filterData].sort((a, b) => b.new_price - a.new_price);
    }
    return filterData;
  };

  return (
    <div className="contain">
      <div className="leftbox">
        <div className="leftb1">
          <div className="title">
            <h2>Browse Category</h2>
          </div>
          <div className="option">
            <input type="radio" id="option1" name="option" value="option1" />
            <label htmlFor="option1"> Frozen Fish</label>
          </div>
          <div className="option">
            <input type="radio" id="option2" name="option" value="option2" />
            <label htmlFor="option2"> Dried Fish</label>
          </div>
          <div className="option">
            <input type="radio" id="option3" name="option" value="option3" />
            <label htmlFor="option3"> Fresh Fish</label>
          </div>
          <div className="option">
            <input type="radio" id="option4" name="option" value="option4" />
            <label htmlFor="option4"> Meat Alternatives</label>
          </div>
          <div className="option">
            <input type="radio" id="option5" name="option" value="option5" />
            <label htmlFor="option5"> Meat</label>
          </div>
        </div>
        <div className="leftb1">
          <div className="title">
            <h2>Product Brand</h2>
          </div>
          <div className="option">
            <input type="radio" id="brand1" name="brand" value="brand1" />
            <label htmlFor="brand1"> Apple</label>
          </div>
          <div className="option">
            <input type="radio" id="brand2" name="brand" value="brand2" />
            <label htmlFor="brand2"> Asus</label>
          </div>
          <div className="option">
            <input type="radio" id="brand3" name="brand" value="brand3" />
            <label htmlFor="brand3"> Gionee</label>
          </div>
          <div className="option">
            <input type="radio" id="brand4" name="brand" value="brand4" />
            <label htmlFor="brand4"> Micromax</label>
          </div>
          <div className="option">
            <input type="radio" id="brand5" name="brand" value="brand5" />
            <label htmlFor="brand5"> Samsung</label>
          </div>
        </div>
        <div className="leftb1">
          <div className="title">
            <h2>Color Filter</h2>
          </div>
          <div className="option">
            <input type="radio" id="color1" name="color" value="color1" />
            <label htmlFor="color1"> Black</label>
          </div>
          <div className="option">
            <input type="radio" id="color2" name="color" value="color2" />
            <label htmlFor="color2"> Black Leather</label>
          </div>
          <div className="option">
            <input type="radio" id="color3" name="color" value="color3" />
            <label htmlFor="color3"> Black with Red</label>
          </div>
          <div className="option">
            <input type="radio" id="color4" name="color" value="color4" />
            <label htmlFor="color4"> Gold</label>
          </div>
          <div className="option">
            <input type="radio" id="color5" name="color" value="color5" />
            <label htmlFor="color5"> Spacegray</label>
          </div>
        </div>
        <div className="leftb1">
          <div className="title">
            <h2>Price Filter</h2>
          </div>
          <label htmlFor="rangeInput"> Price</label>
          <input
            type="range"
            id="rangeInput"
            min="0"
            max="100"
            defaultValue="50"
            onInput={(e) => updateValueDisplay(e.target.value)}
          />
          <div id="valueDisplay">50</div>
        </div>
      </div>
      <div className="rightbox">
        <div className="box3">
          <div className="default">
            <select
              className="sort12"
              id=""
              name=""
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Relevence</option>
              <option value="asc">Low to High</option>
              <option value="dsc">High to Low</option>
            </select>
          </div>
          <div className="show12"></div>
        </div>
        <div className="box4">
          {error && <div className="error">{error}</div>}
          {filterBySort().map((item, index) => (
            <SingleProductCart key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
