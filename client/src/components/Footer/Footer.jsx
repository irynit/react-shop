import paymentImg from "../../img/payment.png";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__row">
          <div className="footer__row-left">
            <div className="footer__row-left-item">
              <h3 className="footer__row-left-item-title">Categories</h3>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
            <div className="footer__row-left-item">
              <h3 className="footer__row-left-item-title">Links</h3>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
          </div>
          <div className="footer__row-right">
            <div className="footer__row-right-item">
              <h3 className="footer__row-right-item-title">About</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                eos asperiores error? Qui ea, labore corrupti repellat minima
                illo cumque!
              </span>
            </div>
            <div className="footer__row-right-item">
              <h3 className="footer__row-right-item-title">Contact</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                eos asperiores error? Qui ea, labore corrupti repellat minima
                illo cumque!
              </span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span className="footer__bottom-left-logo">Examstore</span>
            <span className="footer__bottom-left-copyright">
              Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="footer__bottom-right">
            <img src={paymentImg} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
