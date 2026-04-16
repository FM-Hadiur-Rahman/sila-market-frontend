import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Tag,
  Users,
  Settings,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { useAdminAuth } from "../../context/AdminAuthContext";

const links = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Orders", path: "/admin/orders", icon: ClipboardList },
  { name: "Products", path: "/admin/products", icon: ShoppingBag },
  { name: "Add Product", path: "/admin/products/add", icon: PlusCircle },
  { name: "Coupons", path: "/admin/coupons", icon: Tag },
  { name: "Customers", path: "/admin/customers", icon: Users },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const { admin, logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <aside className="h-full border-r border-slate-200 bg-slate-950 text-white">
      <div className="border-b border-white/10 px-5 py-5">
        <h2 className="text-2xl font-black">Sila Admin</h2>
        <p className="mt-1 text-sm text-white/60">Store control panel</p>

        {admin && (
          <div className="mt-4 rounded-2xl bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
              Logged in as
            </p>
            <p className="mt-1 font-semibold text-white">{admin.name}</p>
            <p className="text-sm text-white/60">{admin.email}</p>
          </div>
        )}
      </div>

      <nav className="space-y-1 p-3">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-rose-600 hover:text-white"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
