import { X, ShoppingCart } from "lucide-react";
import useCart from "../../hooks/useCart";

export default function ProductQuickView({ product, isOpen, onClose }) {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-slate-950/60" onClick={onClose} />

      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-black text-slate-900">Quick View</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="bg-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              {product.category}
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              {product.name}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-6 flex items-end gap-3">
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
              <div className="mt-5 inline-flex rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700">
                {product.badge}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
