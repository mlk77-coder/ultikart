import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "./Logo";

const cats = ["Baby Essentials", "Bag Emporium", "Books", "Christmas", "Classic Furnishings", "Crystal Clarity Optics"];
const links = ["Home", "Collections", "About Us", "Blogs", "Offers", "Search"];
const help = ["My Account", "My Orders", "Wishlist", "Faq's", "Contact Us"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="f-grid">
          <div className="f-about">
            <Logo light />
            <p>Discover the latest trends and enjoy seamless shopping with our exclusive collections.</p>
            <p className="f-line"><MapPin size={14} /> Multikart Demo Store, Demo Store India 345-659</p>
            <p className="f-line"><Phone size={14} /> Call Us: 123-456-7898</p>
            <p className="f-line"><Mail size={14} /> Email Us: Support@Multikart.Com</p>
          </div>
          <div><h4>CATEGORIES</h4><ul>{cats.map((c) => <li key={c}><a href="#">{c}</a></li>)}</ul></div>
          <div><h4>USEFUL LINKS</h4><ul>{links.map((c) => <li key={c}><a href="#">{c}</a></li>)}</ul></div>
          <div className="f-help"><h4>HELP CENTER</h4><ul>{help.map((c) => <li key={c}><a href="#">{c}</a></li>)}</ul></div>
          <div className="f-follow">
            <h4>FOLLOW US</h4>
            <p>Never Miss Anything From Store<br />By Signing Up To Our Newsletter.</p>
            <input type="email" placeholder="Enter Email Address" aria-label="Email address" />
            <button className="btn sub-btn">SUBSCRIBE</button>
            <div className="social">
              <a href="#" aria-label="Facebook"><Facebook size={13} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={13} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={13} /></a>
              <a href="#" aria-label="Pinterest">P</a>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <div className="container f-bottom-in">
          <span className="f-powered">© 2026 Multikart. Powered by <b>Malek Msouti</b></span>
          <div className="pay-icons" aria-label="Accepted payment methods">
            <span className="pay visa">VISA</span>
            <span className="pay paypal"><i>P</i>PayPal</span>
            <span className="pay mc"><i className="c1" /><i className="c2" /></span>
            <span className="pay stripe">stripe</span>
            <span className="pay amex">AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
