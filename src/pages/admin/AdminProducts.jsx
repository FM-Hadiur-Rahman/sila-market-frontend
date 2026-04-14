import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { products } from "../../data/products";

export default function AdminProducts() {
  return (
    <AdminLayout title="Products">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900">All Products</h2>
          <p className="mt-1 text-slate-600">
            Manage your product catalog for the demo store.
          </p>
        </div>

        <Link
          to="/admin/products/add"
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          Add Product
        </Link>
      </div>

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
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-100">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {product.name}
                        </p>
                        <p className="text-sm text-slate-500">{product.unit}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 capitalize text-slate-700">
                    {product.category}
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-900">
                    €{product.price.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-slate-700">
                    {product.badge || "-"}
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      to={`/admin/products/${product.slug}/edit`}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
