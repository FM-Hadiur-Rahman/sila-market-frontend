import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import MainLayout from "../layouts/MainLayout";
import useCart from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";
import calculateCartTotals from "../utils/calculateCartTotals";
import validateCoupon from "../utils/validateCoupon";

export default function Cart() {
  const { cartItems } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const totals = useMemo(
    () => calculateCartTotals(cartItems, couponDiscount),
    [cartItems, couponDiscount],
  );

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

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Shopping cart
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Your selected products
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Review items, apply coupon and continue to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h2 className="text-3xl font-black text-slate-900">
              Your cart is empty
            </h2>
            <p className="mt-3 text-slate-600">
              Start browsing products to create a premium supermarket demo
              experience.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-slate-900">
                  Coupon Code
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Try: WELCOME5, SILA10, WEEKLYDEAL
                </p>

                <div className="mt-5 flex gap-3">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) =>
                      setCouponCode(e.target.value.toUpperCase())
                    }
                    placeholder="Enter coupon"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                  >
                    Apply
                  </button>
                </div>

                {appliedCoupon && (
                  <div className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    Applied: {appliedCoupon.code} — {appliedCoupon.label}
                  </div>
                )}
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-slate-900">
                  Order Summary
                </h3>

                <div className="mt-6 space-y-4 text-sm">
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

                <div className="mt-6 grid gap-3">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
                  >
                    Continue Shopping
                  </Link>

                  <Link
                    to="/checkout"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
