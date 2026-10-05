import ProductPage from "./product/[slug]/page";
import { product } from "@/data/products";

export default function Home() {
  return <ProductPage params={{ slug: product.slug }} />;
}
