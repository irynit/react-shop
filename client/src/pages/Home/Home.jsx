import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="container home__container">
        <Slider />
        <FeaturedProducts type="featured" />
        <FeaturedProducts type="trending" />
      </div>
    </section>
  );
}
