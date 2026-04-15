export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-[0_10px_25px_rgba(6,182,212,0.35)] hover:from-cyan-500 hover:to-cyan-400 hover:shadow-[0_12px_30px_rgba(6,182,212,0.5)]",
    dark: "bg-gradient-to-r from-slate-950 to-slate-800 text-white shadow-[0_10px_25px_rgba(15,23,42,0.35)] hover:from-slate-900 hover:to-cyan-700 hover:shadow-[0_12px_30px_rgba(8,145,178,0.28)]",
    outline:
      "border border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600",
    danger:
      "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-[0_10px_25px_rgba(225,29,72,0.28)] hover:from-rose-500 hover:to-rose-400",
    warning:
      "bg-gradient-to-r from-yellow-400 to-amber-300 text-slate-900 shadow-[0_10px_25px_rgba(250,204,21,0.28)] hover:from-yellow-300 hover:to-amber-200",
    ghost:
      "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
