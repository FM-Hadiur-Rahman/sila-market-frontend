import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { ImagePlus, Package, Tag, Boxes } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import { createProduct } from "../../services/productService";

const DEFAULT_CATEGORIES = [
  "Obst & Gemüse",
  "Fleisch & Wurst",
  "Milchprodukte",
  "Backwaren",
  "Tiefkühlprodukte",
  "Snacks & Süßwaren",
  "Getränke",
  "Konserven",
  "Gewürze",
  "Haushaltsartikel",
];

export default function AdminAddProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    newCategory: "",
    description: "",
    price: "",
    oldPrice: "",
    unit: "",
    badge: "",
    stock: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const categoryOptions = useMemo(() => {
    return [...DEFAULT_CATEGORIES, "__new__"];
  }, []);

  const finalCategory =
    form.category === "__new__"
      ? form.newCategory.trim()
      : form.category.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      category: value,
      newCategory: value === "__new__" ? prev.newCategory : "",
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setForm({
      name: "",
      category: "",
      newCategory: "",
      description: "",
      price: "",
      oldPrice: "",
      unit: "",
      badge: "",
      stock: "",
    });
    setImageFile(null);
    setPreviewUrl("");
    toast.success("Form reset");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !finalCategory || !form.price) {
      toast.error("Please fill in product name, category and price.");
      return;
    }

    if (form.category === "__new__" && !form.newCategory.trim()) {
      toast.error("Please enter the new category name.");
      return;
    }

    if (!imageFile) {
      toast.error("Please choose a product image.");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("category", finalCategory);
      formData.append("description", form.description.trim());
      formData.append("price", form.price);
      formData.append("oldPrice", form.oldPrice || 0);
      formData.append("unit", form.unit.trim() || "piece");
      formData.append("badge", form.badge.trim());
      formData.append("stock", form.stock || 0);
      formData.append("image", imageFile);

      await createProduct(formData);

      toast.success("Product created successfully");
      handleReset();
    } catch (error) {
      toast.error(error.message || "Product creation failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout title="Add Product">
      <div className="max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Tomato Paste Öncü"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleCategoryChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-600"
                >
                  <option value="">Select category</option>

                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category === "__new__" ? "+ Add new category" : category}
                    </option>
                  ))}
                </select>
              </div>

              {form.category === "__new__" && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    New Category Name
                  </label>
                  <input
                    name="newCategory"
                    value={form.newCategory}
                    onChange={handleChange}
                    placeholder="e.g. Seafood"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write a short product description..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Price
                  </label>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="e.g. 4.99"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Old Price
                  </label>
                  <input
                    name="oldPrice"
                    type="number"
                    step="0.01"
                    value={form.oldPrice}
                    onChange={handleChange}
                    placeholder="e.g. 5.49"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Unit
                  </label>
                  <input
                    name="unit"
                    value={form.unit}
                    onChange={handleChange}
                    placeholder="e.g. pack, kg, jar"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
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
                    placeholder="e.g. Sale, Hot Deal"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Stock
                  </label>
                  <input
                    name="stock"
                    type="number"
                    value={form.stock}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <ImagePlus size={18} className="text-cyan-600" />
                  <h3 className="text-lg font-black text-slate-900">
                    Product Image
                  </h3>
                </div>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center transition hover:border-cyan-500">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="h-52 w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <>
                      <ImagePlus size={28} className="text-slate-400" />
                      <p className="mt-3 font-semibold text-slate-700">
                        Upload product image
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        JPG, PNG or WebP
                      </p>
                    </>
                  )}
                </label>

                {imageFile && (
                  <p className="mt-3 text-sm text-slate-600">
                    Selected:{" "}
                    <span className="font-semibold">{imageFile.name}</span>
                  </p>
                )}
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-black text-slate-900">
                  Quick Summary
                </h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Package size={16} className="mt-0.5 text-cyan-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {form.name || "No product name yet"}
                      </p>
                      <p className="text-slate-500">
                        {form.description ||
                          "Short product description will appear here."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Boxes size={16} className="text-cyan-600" />
                    <p className="text-slate-700">
                      Category:{" "}
                      <span className="font-semibold">
                        {finalCategory || "—"}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tag size={16} className="text-cyan-600" />
                    <p className="text-slate-700">
                      Badge:{" "}
                      <span className="font-semibold">{form.badge || "—"}</span>
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white px-4 py-3">
                    <p className="text-sm text-slate-500">Preview Price</p>
                    <p className="text-2xl font-black text-cyan-600">
                      {form.price
                        ? `€${Number(form.price).toFixed(2)}`
                        : "€0.00"}
                    </p>
                    <p className="text-sm text-slate-500">
                      {form.unit || "unit not set"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-fit rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:from-cyan-700 hover:to-cyan-600 disabled:opacity-60"
            >
              {submitting ? "Saving..." : "Save Product"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
