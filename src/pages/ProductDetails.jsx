import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart, BadgePercent } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import useCart from "../hooks/useCart";

export default function ProductDetails() {
  const { slug } = useParams();
  const { addToCart } = useCart();

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
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-brand-600"
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

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black text-slate-900">
              {product.name}
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-4xl font-black text-brand-600">
                €{product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="pb-1 text-lg text-slate-400 line-through">
                  €{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-slate-500">Unit: {product.unit}</p>

            {product.badge && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <BadgePercent size={16} />
                {product.badge}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <Link
                to="/cart"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
              >
                View Cart
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] bg-white p-4 shadow-soft">
                <p className="text-sm text-slate-500">Quality</p>
                <p className="mt-1 font-bold text-slate-900">
                  Trusted local selection
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-4 shadow-soft">
                <p className="text-sm text-slate-500">Service</p>
                <p className="mt-1 font-bold text-slate-900">
                  Call & WhatsApp support
                </p>
              </div>

              <div className="rounded-[24px] bg-white p-4 shadow-soft">
                <p className="text-sm text-slate-500">Order Flow</p>
                <p className="mt-1 font-bold text-slate-900">
                  Ready for checkout demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
