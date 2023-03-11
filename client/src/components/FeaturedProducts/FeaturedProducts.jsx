import Card from "../Card/Card";
import axios from "axios";
import "./FeaturedProducts.scss";
import { useEffect, useState } from "react";

export default function FeaturedProducts({ type }) {
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
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  let newCard = data.map((item) => <Card item={item} key={item.id} />);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
        <div className="featured__bottom">{newCard}</div>
      </div>
    </section>
  );
}
