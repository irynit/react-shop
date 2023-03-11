import React from "react";
import "./Product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setOuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <section className="product">
      <div className="container product__container">
        <div className="product__left">
          <div className="product__left-images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" nClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="product__left-row">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="product__right">
          <h2 className="product__right-title">Title</h2>
          <span className="product__right-price">$199</span>
          <p className="product__right-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo
            nisi totam assumenda asperiores, odit a voluptas aperiam velit
            expedita necessitatibus aliquid accusamus quibusdam alias dolorum
            beatae nam adipisci qui.
          </p>
          <div className="product__right-quantity">
            <button
              onClick={() => setOuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setOuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="product__right-add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="product__right-links">
            <div className="product__right-links-item">
              <FavoriteBorderIcon />
              ADD TO WISH LIST
            </div>
            <div className="product__right-links-item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="product__right-info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="product__right-detalis">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
