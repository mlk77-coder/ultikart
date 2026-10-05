export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="logo" aria-label="Multikart">
      <svg width="34" height="30" viewBox="0 0 34 30" aria-hidden>
        <rect width="34" height="30" rx="7" fill="#f08455" />
        <path d="M7 8h20l-3 12H10z" fill="#fff" />
      </svg>
      <span style={{ color: light ? "#fff" : "#222" }}>ultikart</span>
    </span>
  );
}
