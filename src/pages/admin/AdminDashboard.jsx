import { useEffect, useState } from "react";
import { ClipboardList, ShoppingBag, Tag, Euro } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import AdminStatCard from "../../components/admin/AdminStatCard";
import { getDashboardStats } from "../../services/adminService";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    ordersCount: 0,
    productsCount: 0,
    couponsCount: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await getDashboardStats();
        setStats(res.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {loading ? (
        <div className="text-slate-600">Loading dashboard...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AdminStatCard
            title="Total Orders"
            value={stats.ordersCount}
            subtitle="All customer orders"
            icon={ClipboardList}
          />
          <AdminStatCard
            title="Products"
            value={stats.productsCount}
            subtitle="Items in catalog"
            icon={ShoppingBag}
          />
          <AdminStatCard
            title="Coupons"
            value={stats.couponsCount}
            subtitle="Active promo system"
            icon={Tag}
          />
          <AdminStatCard
            title="Revenue"
            value={`€${stats.revenue.toFixed(2)}`}
            subtitle="Total order value"
            icon={Euro}
          />
        </div>
      )}
    </AdminLayout>
  );
}
