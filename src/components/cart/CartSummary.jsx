import { Link } from "react-router-dom";
import calculateCartTotals from "../../utils/calculateCartTotals";

export default function CartSummary({
  cartItems = [],
  compact = false,
  couponDiscount = 0,
}) {
  const { subtotal, deliveryFee, discount, total } = calculateCartTotals(
    cartItems,
    couponDiscount,
  );

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-black text-slate-900">Order Summary</h3>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Delivery Fee</span>
          <span>€{deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Discount</span>
          <span>-€{discount.toFixed(2)}</span>
        </div>

        <div className="border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-slate-900">Total</span>
            <span className="text-2xl font-black text-brand-600">
              €{total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {!compact && (
        <Link
          to="/checkout"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Continue to Checkout
        </Link>
      )}
    </div>
  );
}
