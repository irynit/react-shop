import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import languageEn from "../../img/en.png";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import "./Navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const { data, loading, error } = useFetch(`/categories`);
  // console.log(data);

  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__navbar">
          <div className="header__navbar-left">
            <div className="header__navbar-left-item">
              <img src={languageEn} alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="header__navbar-left-item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            {data?.map((item) => (
              <div className="header__navbar-left-item" key={item.id}>
                <Link className="link" to={`/products/${item.id}`}>
                  {item.attributes.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="header__navbar-center">
            <Link className="link" to="/">
              Examstore
            </Link>
          </div>
          <div className="header__navbar-right">
            <div className="header__navbar-right-item">
              <Link className="link" to="/">
                Homepage
              </Link>
            </div>
            <div className="header__navbar-right-item">
              <Link className="link" to="/">
                About
              </Link>
            </div>
            <div className="header__navbar-right-item">
              <Link className="link" to="/">
                Contact
              </Link>
            </div>
            <div className="header__navbar-right-item">
              <Link className="link" to="/">
                Stores
              </Link>
            </div>
            <div className="header__navbar-right-icons">
              {/* <SearchIcon />
              <PersonOutlinedIcon />
              <FavoriteBorderOutlinedIcon /> */}
              <div
                className="header__navbar-right-icons-cart"
                onClick={() => setOpen(!open)}
              >
                <ShoppingCartOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </div>
        </nav>
        {open && <Cart />}
      </div>
    </header>
  );
}
