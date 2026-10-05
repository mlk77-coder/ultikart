import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const nav = [
  { label: "Home" },
  { label: "Collection", dd: true },
  { label: "Product", dd: true },
  { label: "Mega Menu", dd: true },
  { label: "Blogs", dd: true },
  { label: "Pages", dd: true },
  { label: "Seller", dd: true },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-in">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          {nav.map((n) => (
            <a key={n.label} href="#" className="nav-link">{n.label}{n.dd && <ChevronDown size={11} />}</a>
          ))}
          <button className="icon-btn" aria-label="Search"><Search size={18} /></button>
          <button className="icon-btn" aria-label="Wishlist"><Heart size={18} /></button>
          <button className="icon-btn cart" aria-label="Cart"><ShoppingCart size={18} /><b>3</b></button>
          <button className="icon-btn" aria-label="Account"><User size={18} /></button>
        </nav>
      </div>
    </header>
  );
}
