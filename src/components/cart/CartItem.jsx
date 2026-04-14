import { Minus, Plus, Trash2 } from "lucide-react";
import useCart from "../../hooks/useCart";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-2xl object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm capitalize text-slate-500">{item.category}</p>
            <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
            <p className="mt-1 text-sm text-slate-500">
              €{item.price.toFixed(2)} / {item.unit}
            </p>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
            className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-red-300 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="rounded-full p-1 text-slate-700 transition hover:bg-slate-100"
            >
              <Minus size={16} />
            </button>

            <span className="min-w-[28px] text-center text-sm font-bold text-slate-900">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="rounded-full p-1 text-slate-700 transition hover:bg-slate-100"
            >
              <Plus size={16} />
            </button>
          </div>

          <p className="text-lg font-black text-brand-600">
            €{(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
