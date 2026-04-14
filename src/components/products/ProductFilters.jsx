import CategoryPills from "./CategoryPills";
import ProductSearch from "./ProductSearch";

export default function ProductFilters({
  search = "",
  onSearchChange,
  activeCategory = "all",
  onCategoryChange,
  categories = ["all", "pantry", "snacks", "frozen", "meat"],
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full lg:max-w-md">
        <ProductSearch value={search} onChange={onSearchChange} />
      </div>

      <CategoryPills
        categories={categories}
        activeCategory={activeCategory}
        onChange={onCategoryChange}
      />
    </div>
  );
}
