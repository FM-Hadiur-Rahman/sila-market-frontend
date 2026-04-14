export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-full px-5 py-3 font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
