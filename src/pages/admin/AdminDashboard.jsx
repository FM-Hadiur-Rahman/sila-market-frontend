import { ClipboardList, ShoppingBag, Tag, Users } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import AdminStatCard from "../../components/admin/AdminStatCard";
import { getOrders } from "../../utils/orderStorage";
import { products } from "../../data/products";

export default function AdminDashboard() {
  const orders = getOrders();
  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totals.total,
    0,
  );

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          title="Total Orders"
          value={orders.length}
          subtitle="All customer orders"
          icon={ClipboardList}
        />
        <AdminStatCard
          title="Products"
          value={products.length}
          subtitle="Items in catalog"
          icon={ShoppingBag}
        />
        <AdminStatCard
          title="Coupons"
          value="3"
          subtitle="Active demo coupons"
          icon={Tag}
        />
        <AdminStatCard
          title="Revenue"
          value={`€${totalRevenue.toFixed(2)}`}
          subtitle="Frontend demo total"
          icon={Users}
        />
      </div>

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-black text-slate-900">Overview</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          This admin dashboard is a demo control center for products, coupons,
          orders, customers and settings. It helps show store owners how they
          can manage everything from one place.
        </p>
      </div>
    </AdminLayout>
  );
}
