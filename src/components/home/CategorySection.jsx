const categories = [
  { name: "Pantry", image: "/images/pantry.jpg" },
  { name: "Snacks", image: "/images/snacks.jpg" },
  { name: "Frozen", image: "/images/frozen.jpg" },
  { name: "Meat", image: "/images/meat.jpg" },
];

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black text-slate-900">Shop by Category</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group cursor-pointer overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft"
            >
              <div className="h-40 bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-slate-900">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
