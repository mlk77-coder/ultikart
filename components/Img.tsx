// Plain <img> with a grey fallback so the layout holds while assets are missing.
"use client";
import { useState } from "react";

export default function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`img-fallback ${className ?? ""}`} role="img" aria-label={alt} />;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const url = src.startsWith("/") ? base + src : src;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt={alt} className={className} onError={() => setFailed(true)} />;
}
