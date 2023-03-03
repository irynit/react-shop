import Card from "../Card/Card";
import "./FeaturedProducts.scss";

export default function FeaturedProducts(type) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <section className="featured">
      <div className="container featured__container">
        <div className="featured__top">
          <h1 className="featured__title">{type} products</h1>
          <p className="featured__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ducimus, perspiciatis quam non laudantium debitis eum illum quisquam
            fugit dolorem, alias inventore modi repellendus nisi quaerat natus
            ab assumenda itaque? Vel excepturi placeat corrupti fuga minima
            facere vitae maiores quo dicta? Labore pariatur earum molestiae
            provident animi excepturi minima maiores.
          </p>
        </div>
        <div className="featured__bottom">
          <Card />
        </div>
      </div>
    </section>
  );
}
