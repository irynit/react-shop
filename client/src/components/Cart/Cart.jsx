import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./Cart.scss";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  function totalPrice() {
    let total = 0;
    // console.log("total " + total);
    products.forEach((item) => {
      // console.log("quantity: " + item.quantity);
      // console.log("price: " + item.price);
      total += item.quantity * item.price;
      // console.log("new total: " + total);
    });
    return total.toFixed(2);
  }

  return (
    <div className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Produts in your cart</h2>
        {products?.map((item) => (
          <div className="cart__item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="cart__item-details">
              <h2>{item.title}</h2>
              <p>{item.description?.substring(0, 99)}</p>
              <div className="cart__item-price">
                {item.quantity} x $ {item.price}{" "}
              </div>
            </div>
            <DeleteOutlineIcon
              className="cart__delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
        <div className="cart__total">
          <span>SUBTOTAL</span>
          <span>$ {totalPrice()} </span>
        </div>
        <button>PROSEED TO CHECKOUT</button>
        <span className="cart__reset" onClick={() => dispatch(resetCart())}>
          RESET CART
        </span>
      </div>
    </div>
  );
}
