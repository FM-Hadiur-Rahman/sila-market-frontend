import { useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    shopName: "Sila Market",
    phone: "+49 208 7000000",
    address: "Eppinghofer Str. 77, 45468 Mülheim an der Ruhr",
    deliveryTime: "25-35 min",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Demo settings saved");
  };

  return (
    <AdminLayout title="Settings">
      <div className="max-w-3xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
        <form onSubmit={handleSave} className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Shop Name
            </label>
            <input
              name="shopName"
              value={settings.shopName}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone
            </label>
            <input
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Address
            </label>
            <input
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Delivery Time
            </label>
            <input
              name="deliveryTime"
              value={settings.deliveryTime}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Save Settings
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
