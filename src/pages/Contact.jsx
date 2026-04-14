import MainLayout from "../layouts/MainLayout";
import { MapPin, Phone, Clock3, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Visit or contact Sila Market
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Make it easy for customers to find, call and order from the store.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-[28px] bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-brand-600" />
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
                <Phone className="mt-1 text-brand-600" />
                <div>
                  <h3 className="text-xl font-black text-slate-900">Phone</h3>
                  <p className="mt-2 text-slate-600">+49 208 7000000</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 text-brand-600" />
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Opening Hours
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Mon - Sat: 08:00 - 21:00
                  </p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
            <iframe
              title="Sila Market location"
              src="https://www.google.com/maps?q=Eppinghofer%20Str.%2077,%2045468%20M%C3%BClheim%20an%20der%20Ruhr&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
