const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5006/api";

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("sila-admin-token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export default API_BASE;
