import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminLayout({ title = "Admin", children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen md:grid-cols-[280px_1fr]">
        <div className="hidden md:block">
          <AdminSidebar />
        </div>

        <div className="flex min-h-screen flex-col">
          <AdminHeader title={title} />
          <main className="flex-1 px-4 py-6 md:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
