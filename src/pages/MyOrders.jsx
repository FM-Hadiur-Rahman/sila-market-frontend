import { useMemo } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function getStatusClass(status) {
  switch (status) {
    case "Received":
      return "bg-blue-50 text-blue-700";
    case "Preparing":
      return "bg-amber-50 text-amber-700";
    case "Ready for Pickup":
      return "bg-cyan-50 text-cyan-700";
    case "Out for Delivery":
      return "bg-purple-50 text-purple-700";
    case "Delivered":
    case "Completed":
      return "bg-green-50 text-green-700";
    case "Cancelled":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getProgressSteps(orderType = "delivery") {
  if (orderType === "pickup") {
    return ["Received", "Preparing", "Ready for Pickup", "Completed"];
  }

  return ["Received", "Preparing", "Out for Delivery", "Delivered"];
}

function getStepIndex(status, orderType = "delivery") {
  const steps = getProgressSteps(orderType);
  return Math.max(steps.indexOf(status), 0);
}

function OrderProgress({ status, orderType }) {
  const steps = getProgressSteps(orderType);
  const activeIndex = getStepIndex(status, orderType);

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-3 md:gap-0 md:justify-between">
        {steps.map((step, index) => {
          const isActive = index <= activeIndex;

          return (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm font-semibold ${
                  isActive ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MyOrders() {
  const orders = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("sila-orders") || "[]");
    } catch {
      return [];
    }
  }, []);

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            My Orders
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Your order history
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Track your order status, estimated time, items and full order
            details.
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h2 className="text-3xl font-black text-slate-900">
              No orders yet
            </h2>
            <p className="mt-3 text-slate-600">
              Once you place an order, it will appear here.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.orderNumber}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Order Number</p>
                    <h3 className="text-xl font-black text-slate-900">
                      {order.orderNumber}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                        order.status,
                      )}`}
                    >
                      {order.status || "Received"}
                    </span>

                    <p className="text-sm text-slate-500">
                      ETA: {order.estimatedDelivery || "25-35 min"}
                    </p>

                    <p className="text-2xl font-black text-cyan-600">
                      €{order.totals.total.toFixed(2)}
                    </p>

                    <p className="text-sm capitalize text-slate-500">
                      {order.customer.orderType}
                    </p>
                  </div>
                </div>

                <OrderProgress
                  status={order.status || "Received"}
                  orderType={order.customer.orderType}
                />

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div>
                    <p className="text-sm text-slate-500">Order Type</p>
                    <p className="font-semibold capitalize text-slate-900">
                      {order.customer.orderType}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Payment Method</p>
                    <p className="font-semibold capitalize text-slate-900">
                      {order.customer.paymentMethod}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Customer</p>
                    <p className="font-semibold text-slate-900">
                      {order.customer.fullName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-semibold text-slate-900">
                      {order.customer.phone}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="mb-3 text-sm font-semibold text-slate-700">
                    Items
                  </p>

                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={`${order.orderNumber}-${item.id}`}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-12 w-12 rounded-xl object-cover"
                          />
                          <div>
                            <p className="font-semibold text-slate-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {item.quantity} × €{item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <p className="font-bold text-slate-900">
                          €{(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-500">Delivery Address</p>
                    <p className="font-semibold text-slate-900">
                      {order.customer.address || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Coupon Used</p>
                    <p className="font-semibold text-slate-900">
                      {order.coupon?.code || "No coupon"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Customer Note</p>
                    <p className="font-semibold text-slate-900">
                      {order.customer.notes || "No note added"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Store Note</p>
                    <p className="font-semibold text-slate-900">
                      {order.storeNote || "Your order is being processed."}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    to={`/my-orders/${order.orderNumber}`}
                    className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}
