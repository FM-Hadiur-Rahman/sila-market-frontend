import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import useCart from "../../hooks/useCart";
import ProductQuickView from "./ProductQuickView";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const image = product?.image || "https://placehold.co/600x400?text=No+Image";
  const name = product?.name || "Unnamed Product";
  const category = product?.category || "General";
  const description = product?.description || "No description available.";
  const price = Number(product?.price || 0);
  const oldPrice = Number(product?.oldPrice || 0);
  const unit = product?.unit || "piece";
  const badge = product?.badge || "";

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft"
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {badge && (
            <span className="absolute left-4 top-4 rounded-full bg-rose-700 px-3 py-1 text-xs font-bold text-white shadow">
              {badge}
            </span>
          )}
        </div>

        <div className="p-5">
          <p className="text-sm font-medium capitalize text-slate-500">
            {category}
          </p>

          <h3 className="mt-1 text-xl font-black text-slate-900">{name}</h3>

          <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">
            {description}
          </p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-2xl font-black text-cyan-600">
                €{price.toFixed(2)}
              </p>
              <div className="flex items-center gap-2">
                {oldPrice > 0 && (
                  <span className="text-sm text-slate-400 line-through">
                    €{oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-medium text-slate-500">
                  / {unit}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              <ShoppingCart size={16} />
              Add
            </button>

            <button
              type="button"
              onClick={() => setIsQuickViewOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
            >
              <Eye size={16} />
              View
            </button>
          </div>
        </div>
      </motion.div>

      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
