import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function WeeklyOffers() {
  const offerProducts = products
    .filter((product) => product.isOffer)
    .slice(0, 3);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Weekly offers
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
            This week’s special deals
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Show real store promotions in a clean, premium format that customers
            can browse instantly.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offerProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  {product.badge || "Offer"}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm capitalize text-slate-500">
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-3xl font-black text-brand-600">
                    €{product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-slate-400 line-through">
                      €{product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <Link
                  to="/offers"
                  className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  View Offers
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
