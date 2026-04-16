import { apiFetch } from "../lib/api";

export async function getDashboardStats() {
  return apiFetch("/admin/dashboard");
}

export async function getCustomers() {
  return apiFetch("/admin/customers");
}
