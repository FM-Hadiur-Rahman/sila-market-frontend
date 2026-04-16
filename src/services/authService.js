import { apiFetch } from "../lib/api";

export async function loginAdmin(payload) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getAdminMe() {
  return apiFetch("/auth/me");
}
