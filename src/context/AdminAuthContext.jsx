import { createContext, useContext, useEffect, useState } from "react";
import { getAdminMe, loginAdmin } from "../services/authService";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const bootstrapAdmin = async () => {
    const token = localStorage.getItem("sila-admin-token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await getAdminMe();
      setAdmin(res.user);
    } catch {
      localStorage.removeItem("sila-admin-token");
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bootstrapAdmin();
  }, []);

  const login = async (email, password) => {
    const res = await loginAdmin({ email, password });
    localStorage.setItem("sila-admin-token", res.token);
    setAdmin(res.user);
    return res;
  };

  const logout = () => {
    localStorage.removeItem("sila-admin-token");
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        loading,
        login,
        logout,
        isAuthenticated: !!admin,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  }

  return context;
}
