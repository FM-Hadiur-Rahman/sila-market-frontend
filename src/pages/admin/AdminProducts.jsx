import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AdminLayout from "../../layouts/AdminLayout";
import { getAdminProducts, deleteProduct } from "../../services/productService";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await getAdminProducts();
      setProducts(res.data || []);
    } catch (error) {
      toast.error(error.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(`Delete "${name}"?`);

    if (!confirmed) return;

    try {
      setDeletingId(id);
      await deleteProduct(id);
      toast.success("Product deleted");
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      toast.error(error.message || "Delete failed");
    } finally {
      setDeletingId("");
    }
  };

  return (
    <AdminLayout title="Products">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">All Products</h2>
          <p className="mt-1 text-slate-600">
            Manage your supermarket catalog from one place.
          </p>
        </div>

        <Link
          to="/admin/products/add"
          className="inline-flex w-fit rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:from-cyan-700 hover:to-cyan-600"
        >
          Add Product
        </Link>
      </div>

      {loading ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-slate-600">Loading products...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-soft">
          <h3 className="text-2xl font-black text-slate-900">
            No products yet
          </h3>
          <p className="mt-2 text-slate-600">
            Start by adding your first product.
          </p>

          <Link
            to="/admin/products/add"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:from-cyan-700 hover:to-cyan-600"
          >
            Add Product
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Product
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Category
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Price
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Badge
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Stock
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Status
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b border-slate-100">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            product.image ||
                            "https://placehold.co/80x80?text=No+Image"
                          }
                          alt={product.name}
                          className="h-14 w-14 rounded-2xl object-cover"
                        />

                        <div>
                          <p className="font-semibold text-slate-900">
                            {product.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {product.unit || "piece"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                        {product.category}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div>
                        <p className="font-bold text-slate-900">
                          €{Number(product.price || 0).toFixed(2)}
                        </p>
                        {Number(product.oldPrice || 0) > 0 && (
                          <p className="text-sm text-slate-400 line-through">
                            €{Number(product.oldPrice).toFixed(2)}
                          </p>
                        )}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      {product.badge ? (
                        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                          {product.badge}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      {product.stock ?? 0}
                    </td>

                    <td className="px-5 py-4">
                      {product.isActive ? (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          Active
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          Hidden
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Link
                          to={`/admin/products/${product.slug}/edit`}
                          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(product._id, product.name)
                          }
                          disabled={deletingId === product._id}
                          className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:opacity-60"
                        >
                          {deletingId === product._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
