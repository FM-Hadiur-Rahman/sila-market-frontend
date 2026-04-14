import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import AdminLayout from "../../layouts/AdminLayout";
import { products } from "../../data/products";

export default function AdminEditProduct() {
  const { slug } = useParams();

  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug],
  );

  const [form, setForm] = useState({
    name: product?.name || "",
    category: product?.category || "",
    price: product?.price || "",
    badge: product?.badge || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Demo product updated");
  };

  return (
    <AdminLayout title="Edit Product">
      <div className="max-w-3xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
        {!product ? (
          <p className="text-slate-600">Product not found.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Product Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Price
              </label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Badge
              </label>
              <input
                name="badge"
                value={form.badge}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Update Product
            </button>
          </form>
        )}
      </div>
    </AdminLayout>
  );
}
