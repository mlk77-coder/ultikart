import { notFound } from "next/navigation";
import { product } from "@/data/products";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetail from "@/components/ProductDetail";
import DescriptionTabs from "@/components/DescriptionTabs";
import RelatedProducts from "@/components/RelatedProducts";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ slug: product.slug }];
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  if (params.slug !== product.slug) notFound();
  return (
    <>
      <TopBar />
      <Header />
      <Breadcrumb title="Gym Coords Set" />
      <main className="container">
        <ProductDetail />
        <DescriptionTabs />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}
