import { BadgePercent, ShoppingCart } from "lucide-react";
import useCart from "../../hooks/useCart";

export default function ProductDetailsContent({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
        {product.category}
      </p>

      <h1 className="mt-3 text-4xl font-black text-slate-900">
        {product.name}
      </h1>

      <p className="mt-5 text-base leading-8 text-slate-600">
        {product.description}
      </p>

      <div className="mt-8 flex items-end gap-3">
        <span className="text-4xl font-black text-cyan-600">
          €{product.price.toFixed(2)}
        </span>

        {product.oldPrice && (
          <span className="pb-1 text-lg text-slate-400 line-through">
            €{product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-slate-500">Unit: {product.unit}</p>

      {product.badge && (
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700">
          <BadgePercent size={16} />
          {product.badge}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[24px] bg-white p-4 shadow-soft">
          <p className="text-sm text-slate-500">Quality</p>
          <p className="mt-1 font-bold text-slate-900">
            Trusted local selection
          </p>
        </div>

        <div className="rounded-[24px] bg-white p-4 shadow-soft">
          <p className="text-sm text-slate-500">Service</p>
          <p className="mt-1 font-bold text-slate-900">
            Call & WhatsApp support
          </p>
        </div>

        <div className="rounded-[24px] bg-white p-4 shadow-soft">
          <p className="text-sm text-slate-500">Order Flow</p>
          <p className="mt-1 font-bold text-slate-900">
            Ready for checkout demo
          </p>
        </div>
      </div>
    </div>
  );
}
