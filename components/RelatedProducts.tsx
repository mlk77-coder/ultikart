import { Heart, Star, Percent, ShoppingCart, Search, RefreshCw } from "lucide-react";
import { related } from "@/data/products";
import Img from "./Img";

export default function RelatedProducts() {
  return (
    <section className="related">
      <h3>Related Products</h3>
      <div className="grid">
        {related.map((p) => (
          <article className="card" key={p.id}>
            <div className="card-img">
              {p.badge && <span className={`ribbon ${p.badge.toLowerCase()}`}>{p.badge}</span>}
              <div className="card-actions">
                <button className="act" aria-label="Wishlist"><Heart size={14} /></button>
                <button className="act hov" aria-label="Add to cart"><ShoppingCart size={14} /></button>
                <button className="act hov" aria-label="Quick view"><Search size={14} /></button>
                <button className="act hov" aria-label="Compare"><RefreshCw size={14} /></button>
              </div>
              <Img src={p.image} alt={p.title} />
              <span className="rate"><Star size={11} fill="#f5a623" stroke="#f5a623" /> 0</span>
            </div>
            <div className="card-top">
              <h6>{p.brand}</h6>
              {p.swatches && (
                <div className="mini-sw">{p.swatches.map((s, i) => <Img key={s} src={s} alt="" className={i === 2 && p.id === 4 ? "on" : ""} />)}</div>
              )}
            </div>
            <p className="sub">{p.title}</p>
            <p className="price">
              ${p.price.toFixed(2)} <s>${p.oldPrice.toFixed(2)}</s> <em>{p.off}% Off</em>
            </p>
            <p className="offer"><Percent size={9} /> Limited Time Offer: {p.offer}%</p>
          </article>
        ))}
      </div>
    </section>
  );
}
