import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ShopCategory from "./Pages/Shop/ShopCategory";
import ProductCheckOut from "./Pages/Shop/ProductCheckOut";
import ProductDetails from "./Pages/Shop/ProductDetails";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Contact from "./Pages/Contact/Contact";
import SignUpPage from "./Pages/Login&SignUp/SignUpPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopCategory />} />
        <Route path="/productchecko`ut" element={<ProductCheckOut />} />
        <Route path="/shopcategory" element={<ShopCategory />} />
        <Route path="/productdetail/_id" element={<ProductDetails />} />
        <Route path="/order-tracking" element={<TrackOrder />} />
        <Route path="/contact-page" element={<Contact />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
