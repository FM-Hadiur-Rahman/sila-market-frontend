import ProductCard from "../products/ProductCard";

export default function FeaturedProducts({ products = [], loading = false }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
        Featured Products
      </p>
      <h2 className="mt-2 text-5xl font-black text-slate-900">
        Popular items customers look for
      </h2>
      <p className="mt-4 max-w-2xl text-2xl text-slate-600">
        Weekly deals, trusted pantry essentials, imported snacks and fresh halal
        meat.
      </p>

      {loading ? (
        <div className="mt-10 text-slate-600">Loading featured products...</div>
      ) : products.length === 0 ? (
        <div className="mt-10 text-slate-600">
          No featured products available.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id || product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
