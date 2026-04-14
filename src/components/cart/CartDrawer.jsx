import { Link } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <div className="absolute inset-0 bg-slate-950/50" onClick={closeCart} />

      <div className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-slate-50 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-brand-50 p-2 text-brand-600">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Your Cart</h3>
              <p className="text-sm text-slate-500">
                {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-slate-200 p-2 text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <h3 className="text-2xl font-black text-slate-900">
              Your cart is empty
            </h3>
            <p className="mt-2 max-w-sm text-slate-600">
              Add some products to make this demo feel like a real supermarket
              ordering system.
            </p>

            <Link
              to="/products"
              onClick={closeCart}
              className="mt-6 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="border-t border-slate-200 bg-white p-4">
              <CartSummary cartItems={cartItems} compact />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={clearCart}
                  className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-500"
                >
                  Clear Cart
                </button>

                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
