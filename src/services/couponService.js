import { apiFetch } from "../lib/api";

export async function getCoupons() {
  return apiFetch("/coupons");
}

export async function getAdminCoupons() {
  return apiFetch("/coupons/admin/all");
}

export async function validateCoupon(payload) {
  return apiFetch("/coupons/validate", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function createCoupon(payload) {
  return apiFetch("/coupons", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateCoupon(id, payload) {
  return apiFetch(`/coupons/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

export async function deleteCoupon(id) {
  return apiFetch(`/coupons/${id}`, {
    method: "DELETE",
  });
}
