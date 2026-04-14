import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

export default function Offers() {
  const offerProducts = products.filter((product) => product.isOffer);

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="rounded-[32px] bg-slate-900 px-6 py-10 text-white md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Weekly deals
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Special offers at Sila Market
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Highlight your best promotions and make customers feel urgency with
            a real digital campaign section.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
