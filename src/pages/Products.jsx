import { useEffect, useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import { getProducts } from "../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data || []);
      } catch (error) {
        console.error("Failed to load products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = useMemo(() => {
    const dynamicCategories = [
      "all",
      ...new Set(
        products
          .map((product) => product.category?.toLowerCase())
          .filter(Boolean),
      ),
    ];

    return dynamicCategories;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" ||
        product.category?.toLowerCase() === activeCategory;

      const matchesSearch =
        product.name?.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, search, activeCategory]);

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

        {loading ? (
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-slate-600">Loading products...</p>
          </div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </section>
    </MainLayout>
  );
}
