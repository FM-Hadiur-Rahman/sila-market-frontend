import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#0f172a",
          color: "#fff",
          borderRadius: "16px",
          padding: "14px 16px",
          fontWeight: 600,
        },
      }}
    />
  );
}
