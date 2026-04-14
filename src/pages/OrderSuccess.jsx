import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { getLastOrder } from "../utils/orderStorage";

export default function OrderSuccess() {
  const order = getLastOrder();

  return (
    <MainLayout>
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-soft md:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 size={40} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Order placed
          </p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">
            Thank you for your order
          </h1>
          <p className="mt-4 text-slate-600">
            Your order has been created successfully.
          </p>

          {order && (
            <div className="mx-auto mt-8 max-w-2xl rounded-[28px] bg-slate-50 p-6 text-left">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Order Number</p>
                  <p className="font-bold text-slate-900">
                    {order.orderNumber}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Customer</p>
                  <p className="font-bold text-slate-900">
                    {order.customer.fullName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Order Status</p>
                  <p className="font-bold text-slate-900">{order.status}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Estimated Time</p>
                  <p className="font-bold text-slate-900">
                    {order.estimatedDelivery}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm text-slate-500">Total</p>
                <p className="text-3xl font-black text-cyan-600">
                  €{order.totals.total.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/my-orders"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              View My Orders
            </Link>

            <Link
              to="/products"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
