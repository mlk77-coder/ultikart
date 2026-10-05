export default function Breadcrumb({ title }: { title: string }) {
  return (
    <section className="crumb">
      <h2>{title}</h2>
      <nav aria-label="breadcrumb">
        <a href="/">HOME</a><i>/</i><a href="#">PRODUCT</a><i>/</i><span>{title.toUpperCase()}</span>
      </nav>
    </section>
  );
}
