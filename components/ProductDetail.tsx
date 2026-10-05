"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Minus, Plus, ShoppingCart, Heart, RefreshCw, Share2, Truck, MessageSquare, X, Star, Undo2, TrendingUp } from "lucide-react";
import { product } from "@/data/products";
import Img from "./Img";

const stars = (n: number) => Array.from({ length: 5 }, (_, i) => <Star key={i} size={13} className={i < n ? "star on" : "star"} />);

function Qty({ qty, setQty }: { qty: number; setQty: (n: number) => void }) {
  return (
    <div className="qty">
      <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease"><ChevronLeft size={14} /></button>
      <input value={qty} readOnly aria-label="Quantity" />
      <button onClick={() => setQty(Math.min(product.quantity, qty + 1))} aria-label="Increase"><ChevronRight size={14} /></button>
    </div>
  );
}

export default function ProductDetail() {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [stickyOn, setStickyOn] = useState(false);
  const [toast, setToast] = useState(true);
  const [wish, setWish] = useState(false);
  const imgs = product.images;
  const start = Math.min(active, imgs.length - 3);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector(".footer");
      const atFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setStickyOn(window.scrollY > 500 && !atFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="product-layout">
      <section className="gallery">
        {product.featured && <span className="featured">FEATURED</span>}
        <button className="arrow left" onClick={() => setActive((active - 1 + imgs.length) % imgs.length)} aria-label="Previous"><ChevronLeft size={12} /></button>
        <div className="main-img"><Img src={imgs[active]} alt={product.title} /></div>
        <button className="arrow right" onClick={() => setActive((active + 1) % imgs.length)} aria-label="Next"><ChevronRight size={12} /></button>
        <div className="thumbs">
          {imgs.slice(start, start + 3).map((src, i) => (
            <button key={src} className={start + i === active ? "thumb on" : "thumb"} onClick={() => setActive(start + i)} aria-label={`Image ${start + i + 1}`}>
              <Img src={src} alt="" />
            </button>
          ))}
        </div>
      </section>

      <section className="detail">
        <div className="detail-left">
          <p className="selling"><span className="fire"><TrendingUp size={14} color="#f08455" /></span> {product.sellingFast}</p>
          <h1>{product.title}</h1>
          <div className="rating">{stars(0)} <i>|</i> <a href="#reviews">0 Review</a></div>
          <p className="mrp">MRP: <b>${product.price.toFixed(2)}</b></p>
          <p className="tax">Inclusive all the text</p>

          <div className="links-row">
            <a href="#"><Truck size={14} /> Delivery &amp; Return</a>
            <a href="#"><MessageSquare size={14} /> Ask A Question</a>
          </div>

          <h4>Product Info</h4>
          <ul className="info">
            <li>SKU: {product.sku}</li>
            <li>Unit: {product.unit}</li>
            <li>Weight: {product.weight}</li>
            <li>Stock Status: {product.stock}</li>
            <li>Quantity: {product.quantity} Items Left</li>
          </ul>

          <hr />
          <h4>Delivery Details</h4>
          <p className="deliv"><Truck size={16} /> Your order is likely to reach you within 7 days.</p>
          <p className="deliv"><Undo2 size={16} /> Hassle free returns within 7 Days.</p>

          <fieldset className="safe">
            <legend>Guaranteed Safe Checkout</legend>
            <div className="chips">
              {["VISA", "PayPal", "MC", "stripe", "AMEX"].map((p) => <span key={p} className="chip">{p}</span>)}
            </div>
          </fieldset>
        </div>

        <aside className="buybox">
          <h5>Colour:</h5>
          <div className="swatches">
            {product.colors.map((c, i) => (
              <button key={c.name} className={i === color ? "sw on" : "sw"} onClick={() => {
                setColor(i);
                const idx = product.images.indexOf(c.image);
                if (idx !== -1) setActive(idx);
              }} aria-label={c.name}>
                <Img src={c.image} alt={c.name} />
              </button>
            ))}
          </div>
          <Qty qty={qty} setQty={setQty} />
          <div className="cta-row">
            <button className="btn"><ShoppingCart size={15} /> Add To Cart</button>
            <button className="btn">Buy Now</button>
          </div>
          <div className="mini-row">
            <button onClick={() => setWish(!wish)}><Heart size={14} fill={wish ? "#f08455" : "none"} /> Add To Wishlist</button>
            <button><RefreshCw size={14} /> Add To Compare</button>
          </div>
          <div className="mini-row"><button><Share2 size={14} /> share</button></div>
        </aside>
      </section>
      </div>

      {toast && (
        <div className="toast" role="status">
          <Img src={product.recent.image} alt="" className="toast-img" />
          <div>
            <b>Someone recently purchase this item</b>
            <a href="#">{product.recent.name}</a>
            <small>{product.recent.ago}</small>
          </div>
          <button onClick={() => setToast(false)} aria-label="Close"><X size={13} /></button>
        </div>
      )}

      <div className={stickyOn ? "sticky on" : "sticky"}>
        <div className="sticky-in">
          <Img src={imgs[0]} alt="" className="sticky-img" />
          <div className="sticky-name"><b>{product.title}</b><span>${product.price.toFixed(2)}</span></div>
          <div className="select"><span>{product.colors[color].name}</span><ChevronDown size={14} /></div>
          <Qty qty={qty} setQty={setQty} />
          <button className="btn"><ShoppingCart size={15} /> ADD TO CART</button>
        </div>
      </div>
    </>
  );
}
