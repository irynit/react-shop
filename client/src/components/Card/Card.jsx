import { Link } from "react-router-dom";
import "./Card.scss";
export default function Card({ item }) {
  return (
    <Link className="Link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="card__image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              // process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              // process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="card__prices">
          {item?.attributes.oldPrice === null
            ? ""
            : <h3 className="card__prices-sale">${item?.attributes.oldPrice}</h3>}
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}
