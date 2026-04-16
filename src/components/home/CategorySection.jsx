import { Link } from "react-router-dom";

export default function CategorySection({ categories = [], loading = false }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h2 className="text-4xl font-black text-slate-900">Shop by Category</h2>

      {loading ? (
        <div className="mt-8 text-slate-600">Loading categories...</div>
      ) : categories.length === 0 ? (
        <div className="mt-8 text-slate-600">No categories available.</div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products`}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <img
                src={
                  category.image || "https://placehold.co/600x400?text=Category"
                }
                alt={category.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <h3 className="text-2xl font-black text-slate-900">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
