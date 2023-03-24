import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}&sort=createdAt:desc`
  );

  return (
    <section className="featured">
      <div className="container featured__container">
        <div className="featured__top">
          <h1 className="featured__top-title">{type} products</h1>
          <p className="featured__top-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ducimus, perspiciatis quam non laudantium debitis eum illum quisquam
            fugit dolorem, alias inventore modi repellendus nisi quaerat natus
            ab assumenda itaque? Vel excepturi placeat corrupti fuga minima
            facere vitae maiores quo dicta? Labore pariatur earum molestiae
            provident animi excepturi minima maiores.
          </p>
        </div>
        <div className="featured__bottom">
          {error
            ? "Something went wrong"
            : loading
            ? "loading"
            : data?.slice(0,4).map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
}
