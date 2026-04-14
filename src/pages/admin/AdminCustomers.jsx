import AdminLayout from "../../layouts/AdminLayout";
import { getOrders } from "../../utils/orderStorage";

export default function AdminCustomers() {
  const orders = getOrders();

  const customersMap = new Map();
  orders.forEach((order) => {
    customersMap.set(order.customer.phone, {
      name: order.customer.fullName,
      phone: order.customer.phone,
      address: order.customer.address,
      ordersCount:
        (customersMap.get(order.customer.phone)?.ordersCount || 0) + 1,
    });
  });

  const customers = Array.from(customersMap.values());

  return (
    <AdminLayout title="Customers">
      {customers.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-slate-900">
            No customers found
          </h2>
          <p className="mt-3 text-slate-600">
            Customer data from placed orders will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Name
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Phone
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Address
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Orders
                  </th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer) => (
                  <tr
                    key={customer.phone}
                    className="border-b border-slate-100"
                  >
                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {customer.name}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {customer.phone}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {customer.address}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {customer.ordersCount}
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
