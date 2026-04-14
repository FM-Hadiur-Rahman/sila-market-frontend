import toast from "react-hot-toast";
import { formatOrderDate, getNextStatus } from "../../utils/orderHelpers";
import { updateOrderByNumber } from "../../utils/orderStorage";
import OrderStatusBadge from "../orders/OrderStatusBadge";

export default function AdminOrderCard({ order, onRefresh }) {
  const handleAdvanceStatus = () => {
    const nextStatus = getNextStatus(order.status, order.customer.orderType);

    if (nextStatus === order.status) {
      toast("Already at final status");
      return;
    }

    const updatedStoreNote =
      nextStatus === "Preparing"
        ? "We are preparing your order."
        : nextStatus === "Out for Delivery"
          ? "Your order is out for delivery."
          : nextStatus === "Delivered"
            ? "Your order has been delivered."
            : nextStatus === "Ready for Pickup"
              ? "Your order is ready for pickup."
              : nextStatus === "Completed"
                ? "Pickup completed successfully."
                : `Status updated to ${nextStatus}.`;

    updateOrderByNumber(order.orderNumber, {
      status: nextStatus,
      storeNote: updatedStoreNote,
    });

    toast.success(`Updated to ${nextStatus}`);
    onRefresh?.();
  };

  const handleCancel = () => {
    updateOrderByNumber(order.orderNumber, {
      status: "Cancelled",
      storeNote: "This order was cancelled by the store.",
    });
    toast.success("Order cancelled");
    onRefresh?.();
  };

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

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

        <div>
          <p className="text-sm text-slate-500">Order Type</p>
          <p className="font-semibold capitalize text-slate-900">
            {order.customer.orderType}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Payment</p>
          <p className="font-semibold capitalize text-slate-900">
            {order.customer.paymentMethod}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm text-slate-500">Store Note</p>
        <p className="mt-1 font-semibold text-slate-900">
          {order.storeNote || "No store note yet."}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAdvanceStatus}
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          Advance Status
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}
