import "./Contast.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__container">
        <span>BE IN TOUCH WITH US:</span>
        <div className="contact__mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="contact__icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
        </div>
      </div>
    </section>
  );
}

