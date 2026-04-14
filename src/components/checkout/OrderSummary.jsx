import calculateCartTotals from "../../utils/calculateCartTotals";

export default function OrderSummary({
  cartItems = [],
  couponDiscount = 0,
  title = "Order Summary",
}) {
  const totals = calculateCartTotals(cartItems, couponDiscount);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-black text-slate-900">{title}</h3>

      <div className="mt-5 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3"
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
          <span>€{totals.subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Delivery Fee</span>
          <span>€{totals.deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>Discount</span>
          <span>-€{totals.discount.toFixed(2)}</span>
        </div>

        <div className="border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-slate-900">Total</span>
            <span className="text-2xl font-black text-cyan-600">
              €{totals.total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
