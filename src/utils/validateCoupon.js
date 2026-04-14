import { coupons } from "../data/coupons";

export default function validateCoupon(code = "", subtotal = 0) {
  const normalized = code.trim().toUpperCase();

  if (!normalized) {
    return {
      valid: false,
      message: "Please enter a coupon code.",
      discount: 0,
      coupon: null,
    };
  }

  const coupon = coupons.find((item) => item.code === normalized);

  if (!coupon) {
    return {
      valid: false,
      message: "Invalid coupon code.",
      discount: 0,
      coupon: null,
    };
  }

  if (subtotal < coupon.minOrder) {
    return {
      valid: false,
      message: `Minimum order for ${coupon.code} is €${coupon.minOrder.toFixed(2)}.`,
      discount: 0,
      coupon: null,
    };
  }

  let discount = 0;

  if (coupon.type === "fixed") {
    discount = coupon.value;
  } else if (coupon.type === "percent") {
    discount = (subtotal * coupon.value) / 100;
  }

  return {
    valid: true,
    message: `${coupon.code} applied successfully.`,
    discount,
    coupon,
  };
}
