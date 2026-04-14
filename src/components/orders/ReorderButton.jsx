import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

export default function ReorderButton({ order }) {
  const { addToCart } = useCart();

  const handleReorder = () => {
    if (!order?.items?.length) {
      toast.error("No items found in this order.");
      return;
    }

    order.items.forEach((item) => {
      for (let i = 0; i < item.quantity; i += 1) {
        addToCart(item);
      }
    });

    toast.success("Items added back to cart");
  };

  return (
    <button
      type="button"
      onClick={handleReorder}
      className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
    >
      Reorder
    </button>
  );
}
