export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-cyan-600" />
      <p className="mt-4 text-sm font-medium text-slate-600">{text}</p>
    </div>
  );
}
