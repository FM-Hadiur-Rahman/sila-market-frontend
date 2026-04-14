import { useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { products } from "../data/products";
import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";

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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Product catalog
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Browse Sila Market products
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Search products, explore categories and discover the latest offers.
          </p>
        </div>

        <ProductFilters
          search={search}
          onSearchChange={setSearch}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categories={categories}
        />

        <ProductGrid products={filteredProducts} />
      </section>
    </MainLayout>
  );
}
