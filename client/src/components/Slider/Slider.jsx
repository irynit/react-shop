import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import pexelsImg from "../../img/pexels1.jpeg";
import pexels2Img from "../../img/pexels2.webp";
import pexels3Img from "../../img/pexels3.jpeg";

import "./Slider.scss";
import { json } from "react-router-dom";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderArr = [pexelsImg, pexels2Img, pexels3Img];

  const newSliderArr = sliderArr.map((item) => {
    console.log(item.image);
    <img src={item.image} key={item.id} alt="" />;
  });

  const prevSlide = () => {
    return setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <section className="slider">
      <div
        className="container slider__container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={sliderArr[0]} alt="" />
        <img src={sliderArr[1]} alt="" />
        <img src={sliderArr[2]} alt="" />
      </div>
      <div className="slider__icons">
        <div className="slider__icons-icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="slider__icons-icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </section>
  );
}
