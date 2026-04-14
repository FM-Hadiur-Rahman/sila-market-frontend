export default function AdminStatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">{value}</h3>
          {subtitle ? (
            <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
          ) : null}
        </div>

        {Icon ? (
          <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
            <Icon size={22} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
