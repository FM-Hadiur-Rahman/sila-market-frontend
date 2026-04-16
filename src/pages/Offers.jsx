import { useEffect, useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductGrid from "../components/products/ProductGrid";
import { getProducts } from "../services/productService";

export default function Offers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOffers = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data || []);
      } catch (error) {
        console.error("Failed to load offers:", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadOffers();
  }, []);

  const offerProducts = useMemo(() => {
    return products.filter((product) => {
      const hasDiscount =
        Number(product.oldPrice || 0) > Number(product.price || 0);

      const badge = String(product.badge || "").toLowerCase();

      const hasOfferBadge =
        badge.includes("sale") ||
        badge.includes("angebot") ||
        badge.includes("hot") ||
        badge.includes("deal") ||
        badge.includes("5+1") ||
        badge.includes("free");

      return hasDiscount || hasOfferBadge;
    });
  }, [products]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="rounded-[32px] bg-slate-950 px-8 py-12 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Weekly deals
          </p>
          <h1 className="mt-4 text-5xl font-black">
            Special offers at Sila Market
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Highlight your best promotions and make customers feel urgency with
            a real digital campaign section.
          </p>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-slate-600">Loading offers...</p>
            </div>
          ) : offerProducts.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-soft">
              <h2 className="text-3xl font-black text-slate-900">
                No offers available
              </h2>
              <p className="mt-3 text-slate-600">
                Add discounted or promotional products from admin panel.
              </p>
            </div>
          ) : (
            <ProductGrid products={offerProducts} />
          )}
        </div>
      </section>
    </MainLayout>
  );
}
