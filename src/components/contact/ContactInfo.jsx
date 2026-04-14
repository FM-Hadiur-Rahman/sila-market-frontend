import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] bg-white p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 text-cyan-600" />
          <div>
            <h3 className="text-xl font-black text-slate-900">Address</h3>
            <p className="mt-2 text-slate-600">
              Eppinghofer Str. 77
              <br />
              45468 Mülheim an der Ruhr
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] bg-white p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <Phone className="mt-1 text-cyan-600" />
          <div>
            <h3 className="text-xl font-black text-slate-900">Phone</h3>
            <p className="mt-2 text-slate-600">+49 208 7000000</p>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] bg-white p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <Clock3 className="mt-1 text-cyan-600" />
          <div>
            <h3 className="text-xl font-black text-slate-900">Opening Hours</h3>
            <p className="mt-2 text-slate-600">Mon - Sat: 08:00 - 21:00</p>
            <p className="text-slate-600">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/491234567890"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
      >
        <MessageCircle size={18} />
        Order via WhatsApp
      </a>
    </div>
  );
}
