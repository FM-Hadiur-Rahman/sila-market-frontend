import AdminLayout from "../../layouts/AdminLayout";
import { coupons } from "../../data/coupons";

export default function AdminCoupons() {
  return (
    <AdminLayout title="Coupons">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                  Code
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                  Type
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                  Value
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                  Min Order
                </th>
              </tr>
            </thead>

            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.code} className="border-b border-slate-100">
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {coupon.code}
                  </td>
                  <td className="px-5 py-4 capitalize text-slate-700">
                    {coupon.type}
                  </td>
                  <td className="px-5 py-4 text-slate-700">{coupon.value}</td>
                  <td className="px-5 py-4 text-slate-700">
                    €{coupon.minOrder.toFixed(2)}
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
