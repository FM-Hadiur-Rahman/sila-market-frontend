import { apiFetch } from "../lib/api";

export async function getAdminOrders() {
  return apiFetch("/orders");
}

export async function getOrderByNumber(orderNumber) {
  return apiFetch(`/orders/${orderNumber}`);
}

export async function createOrder(payload) {
  return apiFetch("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateOrderStatus(orderNumber, payload) {
  return apiFetch(`/orders/${orderNumber}/status`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}
