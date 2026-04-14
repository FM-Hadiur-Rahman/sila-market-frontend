import { MapPin, Phone, Clock3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-xl font-black text-slate-900">Sila Market</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Your neighborhood market for fresh groceries, imported products,
            snacks, pantry essentials and halal meat.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-slate-900">Contact</h4>

          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-brand-600" />
              <span>
                Eppinghofer Str. 77
                <br />
                45468 Mülheim an der Ruhr
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-brand-600" />
              <a href="tel:+492087000000" className="hover:text-brand-600">
                +49 208 7000000
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold text-slate-900">Opening Hours</h4>

          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <Clock3 size={18} className="text-brand-600" />
              <span>Mon - Sat: 08:00 - 21:00</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 size={18} className="text-brand-600" />
              <span>Sunday: Closed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-slate-500 md:flex-row md:px-6">
          <p>© 2026 Sila Market. Demo website by Backpunkt IT Solutions.</p>
          <p>Modern grocery ordering experience.</p>
        </div>
      </div>
    </footer>
  );
}
