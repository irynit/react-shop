import paymentImg from "../../img/payment.png";
import "./footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__top-item">
            <h3 className="footer__top-item-title">Categories</h3>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="footer__top-item">
            <h3 className="footer__top-item-title">Links</h3> 
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__row-item">
            <h3 className="footer__row-title">About</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eos asperiores error?
              Qui ea, labore corrupti repellat minima illo cumque!</span>
          </div>
          <div className="footer__row-item">
            <h3 className="footer__row-title">Contact</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eos asperiores error?
              Qui ea, labore corrupti repellat minima illo cumque!</span>
          </div>
          
        </div>
        <div className="footer__botton">
          <div className="footer__botton-left">
            <span className="logo">Lamastore</span>
            <span className="copyright">
              Copyright 2023. All Rights Reserved
            </span>
            <div className="footer__botton-right">
              <img src={paymentImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}