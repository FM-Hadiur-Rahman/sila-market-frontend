export default function calculateCartTotals(
  cartItems = [],
  couponDiscount = 0,
) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const deliveryFee = subtotal > 0 ? 4.99 : 0;
  const discount = Math.min(couponDiscount, subtotal);
  const total = Math.max(subtotal + deliveryFee - discount, 0);

  return {
    subtotal,
    deliveryFee,
    discount,
    total,
  };
}
