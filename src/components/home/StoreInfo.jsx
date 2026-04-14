export default function StoreInfo() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-slate-900">Location</h4>
          <p className="text-slate-600">Eppinghofer Str. 77, Mülheim</p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900">Phone</h4>
          <p className="text-slate-600">+49 208 7000000</p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900">Hours</h4>
          <p className="text-slate-600">Mon–Sat: 08:00–21:00</p>
        </div>
      </div>
    </section>
  );
}
