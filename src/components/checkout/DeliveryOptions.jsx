export default function DeliveryOptions({
  orderType = "delivery",
  paymentMethod = "cash",
  onChange,
}) {
  return (
    <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Order Type
        </label>
        <select
          name="orderType"
          value={orderType}
          onChange={onChange}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
        >
          <option value="delivery">Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
      </div>

      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Payment Method
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={onChange}
            />
            <span className="font-semibold text-slate-800">
              Cash on Delivery
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={onChange}
            />
            <span className="font-semibold text-slate-800">Card / Online</span>
          </label>
        </div>
      </div>
    </div>
  );
}
