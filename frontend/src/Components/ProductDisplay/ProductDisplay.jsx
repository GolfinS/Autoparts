import React, { useContext, useState } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setCartQuantity(newQuantity); // Pass the quantity to the parent component
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          This fuses offer reliable, cost-effective, and safety-enhancing overcurrent protection for a wide range of electrical applications.
        </div>
        <div className="productdisplay-right-size">
          <h1>Quantity</h1>
          <input
            className="inputblock"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button onClick={() => { addToCart(product.id, quantity) }}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Mechanical / Electrical </p>
        <p className="productdisplay-right-category"><span>Tags :</span> Autoparts</p>
        <p className="productdisplay-right-category"><span>Inventory :</span> 3424</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
