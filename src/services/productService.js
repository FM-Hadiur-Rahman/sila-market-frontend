import { apiFetch } from "../lib/api";

export async function getProducts(params = "") {
  return apiFetch(`/products${params}`);
}

export async function getProductBySlug(slug) {
  return apiFetch(`/products/${slug}`);
}

export async function getAdminProducts() {
  return apiFetch("/products/admin/all");
}
export async function getAdminProductBySlug(slug) {
  return apiFetch(`/products/admin/slug/${slug}`);
}

export async function createProduct(formData) {
  const token = localStorage.getItem("sila-admin-token");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL || "http://localhost:5006/api"}/products`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Create product failed");
  }

  return data;
}

export async function updateProduct(id, formData) {
  const token = localStorage.getItem("sila-admin-token");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL || "http://localhost:5006/api"}/products/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Update product failed");
  }

  return data;
}

export async function deleteProduct(id) {
  return apiFetch(`/products/${id}`, {
    method: "DELETE",
  });
}
