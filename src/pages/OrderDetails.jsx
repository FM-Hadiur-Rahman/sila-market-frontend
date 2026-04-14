import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getOrderByNumber } from "../utils/orderStorage";
import OrderDetailsPanel from "../components/orders/OrderDetailsPanel";
import { useEffect, useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function OrderDetails() {
  const { orderNumber } = useParams();
  const [order, setOrder] = useState(() => getOrderByNumber(orderNumber));
  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getOrderByNumber(orderNumber);
      setOrder(updated);
    }, 3000); // every 3 sec

    return () => clearInterval(interval);
  }, [orderNumber]);
  const prevStatusRef = useRef(order?.status);

  useEffect(() => {
    if (order?.status && prevStatusRef.current !== order.status) {
      toast.success(`Order updated: ${order.status}`);
      prevStatusRef.current = order.status;
    }
  }, [order?.status]);

  if (!order) {
    return (
      <MainLayout>
        <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <h1 className="text-3xl font-black text-slate-900">
            Order not found
          </h1>
          <p className="mt-3 text-slate-600">
            The requested order does not exist.
          </p>
          <Link
            to="/my-orders"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Back to My Orders
          </Link>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-8">
          <Link
            to="/my-orders"
            className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
          >
            Back to My Orders
          </Link>
        </div>

        <OrderDetailsPanel order={order} />
      </section>
    </MainLayout>
  );
}
