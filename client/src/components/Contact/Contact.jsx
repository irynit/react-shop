import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import "./Contast.scss";
export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__container">
        <span>BE IN TOUCH WITH US:</span>
        <div className="contact__mail">
          <form name="contact" method="POST" data-netlify="true">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>JOIN US</button>
          </form>
        </div>
        <div className="contact__icons">
          <Link to="https://facebook.com" target="_blank">
            <FacebookIcon />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <InstagramIcon />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <TwitterIcon />
          </Link>
          <Link to="https://google.com" target="_blank">
            <GoogleIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
