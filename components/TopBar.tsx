"use client";
import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

const languages = [
  { code: "ENGLISH", flag: "🇺🇸" },
  { code: "FRENCH", flag: "🇫🇷" },
  { code: "SPANISH", flag: "🇪🇸" },
  { code: "GERMAN", flag: "🇩🇪" },
  { code: "ARABIC", flag: "🇸🇦" },
];
const currencies = ["USD", "EUR", "GBP", "SAR", "EGP"];

function Dropdown({ id, label, items, onSelect }: { id: string; label: React.ReactNode; items: { key: string; node: React.ReactNode }[]; onSelect: (k: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dd" onMouseLeave={() => setOpen(false)}>
      <button id={id} className="dd-btn" onClick={() => setOpen(!open)} aria-expanded={open}>{label} <ChevronDown size={12} /></button>
      {open && (
        <ul className="dd-menu">
          {items.map((i) => (
            <li key={i.key}><button onClick={() => { onSelect(i.key); setOpen(false); }}>{i.node}</button></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TopBar() {
  const [lang, setLang] = useState(languages[0]);
  const [cur, setCur] = useState(currencies[0]);
  return (
    <div className="topbar">
      <div className="container topbar-in">
        <span className="topbar-welcome">Welcome to Our store Multikart</span>
        <span className="topbar-call"><Phone size={13} /> Call Us: 123 - 456 - 7890</span>
        <div className="topbar-right">
          <Dropdown id="lang-dd" label={<>{lang.flag} {lang.code}</>}
            items={languages.map((l) => ({ key: l.code, node: <>{l.flag} {l.code}</> }))}
            onSelect={(k) => setLang(languages.find((l) => l.code === k)!)} />
          <Dropdown id="cur-dd" label={cur}
            items={currencies.map((c) => ({ key: c, node: c }))}
            onSelect={setCur} />
        </div>
      </div>
    </div>
  );
}
