import { Link } from "react-router-dom";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderProgress from "./OrderProgress";
import { formatOrderDate } from "../../utils/orderHelpers";

export default function OrderCard({ order }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-slate-500">Order Number</p>
          <h3 className="text-xl font-black text-slate-900">
            {order.orderNumber}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            {formatOrderDate(order.createdAt)}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <OrderStatusBadge status={order.status} />
          <p className="text-sm text-slate-500">
            ETA: {order.estimatedDelivery}
          </p>
          <p className="text-2xl font-black text-cyan-600">
            €{order.totals.total.toFixed(2)}
          </p>
        </div>
      </div>

      <OrderProgress
        status={order.status}
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
          <p className="font-semibold text-slate-900">{order.customer.phone}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="mb-3 text-sm font-semibold text-slate-700">Items</p>

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
                  <p className="font-semibold text-slate-900">{item.name}</p>
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
  );
}
