export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-[32px] bg-cyan-600 px-6 py-12 text-center text-white">
          <h2 className="text-4xl font-black">
            Order directly from Sila Market
          </h2>
          <p className="mt-3 text-white/80">
            Skip third-party apps. Save money and stay connected with your
            customers.
          </p>

          <div className="mt-6">
            <a
              href="/products"
              className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-cyan-600"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
