import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";
export default function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-Shirt",
      desc: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Produts in your cart</h2>
        {data?.map((item) => (
          <div className="cart__item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="cart__item-details">
              <h2> {item.title} </h2>
              <p> {item.desc?.substring(0, 99)} </p>
              <div className="cart__item-price">1 x $ {item.price} </div>
            </div>
            <DeleteOutlineIcon className="cart__delete" />
          </div>
        ))}
        <div className="cart__total">
          <span>SUBTOTAL</span>
          <span>$129</span>
        </div>
        <button >PROSEED TO CHECKOUT</button>
        <span className="cart__reset">RESET CART</span>
      </div>
    </div>
  );
}
