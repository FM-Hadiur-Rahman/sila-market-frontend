import OrderStatusBadge from "./OrderStatusBadge";
import OrderProgress from "./OrderProgress";
import DeliveryCountdown from "./DeliveryCountdown";
import ReorderButton from "./ReorderButton";
import { formatOrderDate } from "../../utils/orderHelpers";

export default function OrderDetailsPanel({ order }) {
  if (!order) return null;

  const fakeDriverDistance =
    order.status === "Out for Delivery"
      ? (order.orderNumber?.length % 5) + 1
      : null;

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-slate-500">Order Number</p>
          <h1 className="text-3xl font-black text-slate-900">
            {order.orderNumber}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {formatOrderDate(order.createdAt)}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <OrderStatusBadge status={order.status} />
          <DeliveryCountdown order={order} />

          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
            <p className="text-sm text-slate-500">Estimated Time</p>
            <p className="font-bold text-slate-900">
              {order.estimatedDelivery}
            </p>
          </div>

          <p className="mt-1 text-sm text-slate-500 md:text-right">
            {order.status === "Received" && "We received your order."}
            {order.status === "Preparing" && "Your order is being prepared."}
            {order.status === "Out for Delivery" && "Driver is on the way 🚚"}
            {order.status === "Delivered" && "Delivered successfully 🎉"}
            {order.status === "Ready for Pickup" &&
              "Your order is ready for pickup."}
            {order.status === "Completed" && "Pickup completed successfully 🎉"}
            {order.status === "Cancelled" && "This order has been cancelled."}
          </p>

          {order.status === "Out for Delivery" && (
            <div className="mt-1 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
              📍 Driver is {fakeDriverDistance} km away
            </div>
          )}
        </div>
      </div>

      <OrderProgress
        status={order.status}
        orderType={order.customer.orderType}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[24px] bg-slate-50 p-5">
          <h3 className="text-lg font-black text-slate-900">Customer Info</h3>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-sm text-slate-500">Name</p>
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

            <div>
              <p className="text-sm text-slate-500">Address</p>
              <p className="font-semibold text-slate-900">
                {order.customer.address || "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-slate-50 p-5">
          <h3 className="text-lg font-black text-slate-900">Order Info</h3>
          <div className="mt-4 space-y-3">
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
              <p className="text-sm text-slate-500">Coupon</p>
              <p className="font-semibold text-slate-900">
                {order.coupon?.code || "No coupon"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[24px] bg-slate-50 p-5">
        <h3 className="text-lg font-black text-slate-900">Items</h3>

        <div className="mt-4 space-y-4">
          {order.items.map((item) => (
            <div
              key={`${order.orderNumber}-${item.id}`}
              className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-xl object-cover"
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

        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span>Subtotal</span>
            <span>€{order.totals.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span>Delivery Fee</span>
            <span>€{order.totals.deliveryFee.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span>Discount</span>
            <span>-€{order.totals.discount.toFixed(2)}</span>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">Total</span>
              <span className="text-2xl font-black text-cyan-600">
                €{order.totals.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[24px] bg-slate-50 p-5">
          <h3 className="text-lg font-black text-slate-900">Customer Note</h3>
          <p className="mt-3 text-slate-700">
            {order.customer.notes || "No note added by customer."}
          </p>
        </div>

        <div className="rounded-[24px] bg-slate-50 p-5">
          <h3 className="text-lg font-black text-slate-900">Store Note</h3>
          <p className="mt-3 text-slate-700">
            {order.storeNote || "Your order is being processed by Sila Market."}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <ReorderButton order={order} />

        {order.status === "Delivered" && (
          <button
            type="button"
            className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-500"
          >
            ⭐ Rate Order
          </button>
        )}
      </div>
    </div>
  );
}
