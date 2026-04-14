export default function EmptyState({
  title = "Nothing here yet",
  description = "There is currently no data to show.",
  action = null,
}) {
  return (
    <div className="rounded-[32px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <h2 className="text-3xl font-black text-slate-900">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-600">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
