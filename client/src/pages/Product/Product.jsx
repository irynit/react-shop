import React from "react";
import "./Product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
export default function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setOuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <section className="product">
      <div className="container product__container">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="product__left">
              <div className="product__left-images">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="product__left-row">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="product__right">
              <h2 className="product__right-title">
                {" "}
                {data?.attributes?.title}{" "}
              </h2>
              <span className="product__right-price">
                $ {data?.attributes?.price}{" "}
              </span>
              <p className="product__right-text">
                {data?.attributes?.description}
              </p>
              <div className="product__right-quantity">
                <button
                  onClick={() =>
                    setOuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setOuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="product__right-add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      description: data.attributes.description,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className="product__right-links">
                <div className="product__right-links-item">
                  <FavoriteBorderIcon />
                  ADD TO WISH LIST
                </div>
                <div className="product__right-links-item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="product__right-info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="product__right-detalis">
                <span>DESCRIPTION</span>
                {data?.attributes.description === null ? (
                  ""
                ) : (
                  <div className="product__right-detalis-description">
                    ${data?.attributes.description}
                  </div>
                )}
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
