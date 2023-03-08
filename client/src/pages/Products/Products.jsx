import {React, useState} from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

export default function Products() {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <section className="products">
      <div className="container products__container">
        <div className="products__left">
          <div className="products__left-filter-item">
            <h2>Products Categories</h2>
            <div className="products__left-input-item">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="products__left-input-item">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Skirss</label>
            </div>
            <div className="products__left-input-item">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="1">Coats</label>
            </div>
          </div>
          <div className="products__left-filter-item">
            <h2>Filter by price</h2>
            <div className="products__left-filter-item-input">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="products__left-filter-item">
            <h2>Sort by</h2>
            <div className="products__left-filter-item-input">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="products__left-filter-item-input">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="products__right">
          <div className="products__right-img">
            <img
              className="catImg"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </section>
  );
}
