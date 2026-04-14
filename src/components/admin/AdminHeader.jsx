import { Bell, Search, UserCircle2 } from "lucide-react";

export default function AdminHeader({ title = "Admin" }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Sila Market Admin
          </p>
          <h1 className="mt-1 text-2xl font-black text-slate-900">{title}</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 md:flex">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search admin..."
              className="w-40 bg-transparent text-sm outline-none"
            />
          </div>

          <button className="rounded-full border border-slate-200 p-2 text-slate-700">
            <Bell size={18} />
          </button>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
            <UserCircle2 size={18} className="text-slate-700" />
            <span className="hidden text-sm font-semibold text-slate-700 md:inline">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
