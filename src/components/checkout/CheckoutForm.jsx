export default function CheckoutForm({
  form,
  onChange,
  onSubmit,
  submitLabel = "Place Order",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            placeholder="Enter full name"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Enter phone number"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={onChange}
            placeholder="Enter address"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Order Notes
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={onChange}
            rows="4"
            placeholder="Add notes for your order..."
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-600"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-w-[180px] items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-cyan-700"
      >
        {submitLabel}
      </button>
    </form>
  );
}
