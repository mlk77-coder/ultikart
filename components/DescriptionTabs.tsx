"use client";
import { useState } from "react";
import { product } from "@/data/products";

const tabs = ["Description", "Review", "Q&A"] as const;

export default function DescriptionTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Description");
  return (
    <section className="tabs" id="reviews">
      <div className="tab-list" role="tablist">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "tab on" : "tab"} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="tab-body">
        {tab === "Description" && product.description.map((p, i) => <p key={i}>{p}</p>)}
        {tab === "Review" && <p>No reviews yet.</p>}
        {tab === "Q&A" && <p>No questions yet.</p>}
      </div>
    </section>
  );
}
