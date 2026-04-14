import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import MainLayout from "../layouts/MainLayout";
import useCart from "../hooks/useCart";
import calculateCartTotals from "../utils/calculateCartTotals";
import validateCoupon from "../utils/validateCoupon";
import { Tag } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    orderType: "delivery",
    paymentMethod: "cash",
    notes: "",
  });

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const totals = useMemo(
    () => calculateCartTotals(cartItems, couponDiscount),
    [cartItems, couponDiscount],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyCoupon = () => {
    const result = validateCoupon(couponCode, totals.subtotal);

    if (!result.valid) {
      toast.error(result.message);
      setCouponDiscount(0);
      setAppliedCoupon(null);
      return;
    }

    setCouponDiscount(result.discount);
    setAppliedCoupon(result.coupon);
    toast.success(result.message);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      return;
    }

    if (!form.fullName || !form.phone || !form.address) {
      toast.error("Please complete all required fields.");
      return;
    }

    const orderData = {
      customer: form,
      items: cartItems,
      coupon: appliedCoupon,
      totals,
      createdAt: new Date().toISOString(),
      orderNumber: `SILA-${Date.now()}`,
    };

    localStorage.setItem("sila-last-order", JSON.stringify(orderData));
    clearCart();
    navigate("/order-success");
  };

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Checkout
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Complete your order
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            This shows how customers can place direct grocery orders through
            Sila Market.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handlePlaceOrder}
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
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
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
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Order Type
                </label>
                <select
                  name="orderType"
                  value={form.orderType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                >
                  <option value="delivery">Delivery</option>
                  <option value="pickup">Pickup</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter delivery address"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Payment Method
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={form.paymentMethod === "cash"}
                      onChange={handleChange}
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
                      checked={form.paymentMethod === "card"}
                      onChange={handleChange}
                    />
                    <span className="font-semibold text-slate-800">
                      Card / Online
                    </span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Order Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Add notes for your order..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Place Order
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-slate-900">Coupon Code</h3>
              <p className="mt-2 text-sm text-slate-600">
                Try: WELCOME5, SILA10, WEEKLYDEAL
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter coupon"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                />

                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  <Tag size={16} />
                  Apply Coupon
                </button>
              </div>

              {appliedCoupon && (
                <div className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  Applied: {appliedCoupon.code} — {appliedCoupon.label}
                </div>
              )}
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-slate-900">
                Order Summary
              </h3>

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
                    <span className="text-base font-bold text-slate-900">
                      Total
                    </span>
                    <span className="text-2xl font-black text-brand-600">
                      €{totals.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
