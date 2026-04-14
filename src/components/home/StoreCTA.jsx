import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function StoreCTA() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-[32px] bg-slate-900 px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Ready to order
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Call, message or visit Sila Market today
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            This demo shows how Sila Market can take direct customer orders with
            a premium digital experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+492087000000"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              <MessageCircle size={18} />
              WhatsApp Order
            </a>

            <a
              href="https://maps.google.com/?q=Eppinghofer+Str.+77,+45468+Mülheim+an+der+Ruhr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              <MapPin size={18} />
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
