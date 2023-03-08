import React from "react";
import "./Product.scss";
import { useState } from "react";
export default function Product() {
  const [selectedImg,setSelectedImg] = useState(0)
  const images = ["https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
"https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"];
  return (
    <section className="product">
      <div className="container product__container">
        <div className="product__left">
          <div className="product__left-images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" nClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="product__left-row">
            <img src={images[setSelectedImg]} alt="" />
          </div>
        </div>
        <div className="product__right"></div>
      </div>
    </section>
  );
}
