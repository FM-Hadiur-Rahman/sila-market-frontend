import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import AdminOrderCard from "../../components/admin/AdminOrderCard";
import { getAdminOrders } from "../../services/orderService";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshOrders = async () => {
    try {
      const res = await getAdminOrders();
      setOrders(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  return (
    <AdminLayout title="Orders">
      {loading ? (
        <div className="text-slate-600">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-slate-900">
            No orders found
          </h2>
          <p className="mt-3 text-slate-600">
            Orders placed by customers will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <AdminOrderCard
              key={order.orderNumber}
              order={order}
              onRefresh={refreshOrders}
            />
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
