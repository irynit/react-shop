import { React, useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Banner from "./Banner";

export default function Products(catId) {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  // console.log(categoryId);

  const handleChange = (e) => {
    const categoryValue = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, categoryValue]
        : selectedSubCategory.filter((item) => item !== categoryValue)
    );
  };

  return (
    <section className="products">
      <div className="container products__container">
        <div className="products__left">
          <div className="products__left-filter-item">
            <h2>Products Categories</h2>
            {data?.map((item) => (
              <div className="products__left-filter-item-input" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
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
        </div>
        <div className="products__right">
          <div className="products__right-img">
            <Banner catId={categoryId}/>
            {/* <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            /> */}
          </div>
          <List
            categoryId={categoryId}
            maxPrice={maxPrice}
            sort={sort}
            subCategories={selectedSubCategory}
          />
        </div>
      </div>
    </section>
  );
}
