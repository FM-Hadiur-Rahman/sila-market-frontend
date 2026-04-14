import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              About Sila Market
            </p>
            <h1 className="mt-3 text-4xl font-black text-slate-900">
              A trusted neighborhood grocery store with a modern future
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Sila Market serves the local community with fresh groceries,
              imported products, snacks, pantry essentials and halal meat. This
              demo shows how the business can grow from Facebook posts into a
              real premium digital supermarket experience.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Customers can browse products more easily, discover weekly offers,
              contact the store directly and place orders in a more professional
              and organized way.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-soft">
            <img
              src="/images/store/store-front.jpg"
              alt="Sila Market"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-black text-slate-900">
              Fresh Quality
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Showcase fresh meat, pantry items and trusted everyday grocery
              essentials.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-black text-slate-900">
              Better Branding
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A premium website makes the store feel bigger, more trusted and
              more professional.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-black text-slate-900">
              Ready to Grow
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This can later grow into a full online ordering platform with
              checkout, delivery and admin tools.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
