import { apiFetch } from "../lib/api";

export async function getSettings() {
  return apiFetch("/settings");
}

export async function updateSettings(payload) {
  return apiFetch("/settings", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}
