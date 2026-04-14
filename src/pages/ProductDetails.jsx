import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import ProductDetailsContent from "../components/products/ProductDetailsContent";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug],
  );

  if (!product) {
    return (
      <MainLayout>
        <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <h1 className="text-3xl font-black text-slate-900">
            Product not found
          </h1>
          <p className="mt-3 text-slate-600">
            The product you are looking for does not exist.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-600"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
            <img
              src={product.image}
              alt={product.name}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <ProductDetailsContent product={product} />
        </div>
      </section>
    </MainLayout>
  );
}
