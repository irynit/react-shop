import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./Cart.scss";
import { makeRequest } from "../../makeRequest";

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

  const stripePromise = loadStripe(
    "pk_test_51MmZN5BEOfapSt9bABB2aFfynDVuOY6fvbVMSkIk3uDC2wMvPM68csZg65ulmZtncD16VmZGpzhW25wqTsHW8Lo000QuyLdK1y"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Produts in your cart</h2>
        {products?.map((item) => (
          <div className="cart__item" key={item.id}>
            <img src={item.img} alt="" />
            {/* process.env.REACT_APP_UPLOAD_URL + */}
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
        <button onClick={handlePayment}>PROSEED TO CHECKOUT</button>
        <span className="cart__reset" onClick={() => dispatch(resetCart())}>
          RESET CART
        </span>
      </div>
    </div>
  );
}
