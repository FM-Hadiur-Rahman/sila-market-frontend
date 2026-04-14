import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getOrders, updateOrderByNumber } from "../utils/orderStorage";
import { getNextStatus } from "../utils/orderHelpers";
import AdminOrderCard from "../components/admin/AdminOrderCard";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const refreshOrders = () => {
    setOrders(getOrders());
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentOrders = getOrders();

      const updated = currentOrders.map((order) => {
        if (
          ["Delivered", "Completed", "Cancelled", "Ready for Pickup"].includes(
            order.status,
          )
        ) {
          return order;
        }

        const minutesPassed =
          (Date.now() - new Date(order.createdAt).getTime()) / (1000 * 60);

        if (order.customer.orderType === "pickup") {
          if (minutesPassed >= 1 && order.status === "Preparing") {
            return {
              ...order,
              status: "Ready for Pickup",
              storeNote: "Your order is ready for pickup.",
            };
          }
        } else {
          if (minutesPassed >= 1 && order.status === "Received") {
            return {
              ...order,
              status: "Preparing",
              storeNote: "We are preparing your order.",
            };
          }

          if (minutesPassed >= 2 && order.status === "Preparing") {
            return {
              ...order,
              status: "Out for Delivery",
              storeNote: "Your order is out for delivery.",
            };
          }

          if (minutesPassed >= 3 && order.status === "Out for Delivery") {
            return {
              ...order,
              status: "Delivered",
              storeNote: "Your order has been delivered.",
            };
          }
        }

        return order;
      });

      localStorage.setItem("sila-orders", JSON.stringify(updated));
      const lastOrder = JSON.parse(
        localStorage.getItem("sila-last-order") || "null",
      );
      if (lastOrder) {
        const updatedLast =
          updated.find(
            (order) => order.orderNumber === lastOrder.orderNumber,
          ) || lastOrder;
        localStorage.setItem("sila-last-order", JSON.stringify(updatedLast));
      }

      setOrders(updated);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Admin Orders
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Manage incoming orders
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Demo admin view to update customer order status and simulate live
            tracking.
          </p>
        </div>

        {orders.length === 0 ? (
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
      </section>
    </MainLayout>
  );
}
