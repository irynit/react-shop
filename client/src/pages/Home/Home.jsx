import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="container home__container">
        <Slider />
        <FeaturedProducts type="featured" />
        <Categories />
        <FeaturedProducts type="trending" />
        <Contact/>
      </div>
    </section>
  );
}
