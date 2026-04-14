import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Tag,
  Users,
  Settings,
  PlusCircle,
  LogIn,
} from "lucide-react";

const links = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Orders", path: "/admin/orders", icon: ClipboardList },
  { name: "Products", path: "/admin/products", icon: ShoppingBag },
  { name: "Add Product", path: "/admin/products/add", icon: PlusCircle },
  { name: "Coupons", path: "/admin/coupons", icon: Tag },
  { name: "Customers", path: "/admin/customers", icon: Users },
  { name: "Settings", path: "/admin/settings", icon: Settings },
  { name: "Login", path: "/admin/login", icon: LogIn },
];

export default function AdminSidebar() {
  return (
    <aside className="h-full border-r border-slate-200 bg-slate-950 text-white">
      <div className="border-b border-white/10 px-5 py-5">
        <h2 className="text-2xl font-black">Sila Admin</h2>
        <p className="mt-1 text-sm text-white/60">Store control panel</p>
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
      </nav>
    </aside>
  );
}
