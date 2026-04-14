const defaultCategories = ["all", "pantry", "snacks", "frozen", "meat"];

export default function CategoryPills({
  categories = defaultCategories,
  activeCategory = "all",
  onChange,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange?.(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-600 hover:text-cyan-600"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
