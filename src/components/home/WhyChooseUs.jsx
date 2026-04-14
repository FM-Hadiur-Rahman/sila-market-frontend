import { ShieldCheck, Truck, Sparkles } from "lucide-react";

const items = [
  {
    title: "Trusted Local Store",
    description:
      "Customers feel more confident buying from a local market with a professional website.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Ordering",
    description:
      "Call, WhatsApp, cart and checkout flow make the shopping experience much easier.",
    icon: Truck,
  },
  {
    title: "Modern Brand Image",
    description:
      "Digital offers, product browsing and better presentation make the shop feel premium.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Why Sila Market
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
            Built for local trust and daily convenience
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="inline-flex rounded-2xl bg-brand-50 p-3 text-brand-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-2xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
