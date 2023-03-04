import { Link } from "react-router-dom";
import "./Card.scss";
export default function Card({item}) {
  return (
    <Link  className="Link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="card__image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="card__prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price} </h3>
        </div>
      </div>
    </Link>
  );
}
