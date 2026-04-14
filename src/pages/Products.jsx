import { useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

const categories = ["all", "pantry", "snacks", "frozen", "meat"];

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Product catalog
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Browse Sila Market products
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Search products, explore categories and discover the latest offers.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 lg:max-w-md"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  activeCategory === category
                    ? "bg-brand-500 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-10 rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              No products found
            </h3>
            <p className="mt-2 text-slate-600">
              Try another search or choose a different category.
            </p>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
