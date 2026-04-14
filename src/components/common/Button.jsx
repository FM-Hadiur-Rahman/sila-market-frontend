export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-cyan-600 text-white hover:bg-cyan-700",
    dark: "bg-slate-900 text-white hover:bg-cyan-700",
    outline:
      "border border-slate-200 bg-white text-slate-700 hover:border-cyan-600 hover:text-cyan-600",
    danger: "bg-rose-600 text-white hover:bg-rose-700",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
