import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="/hero-cover.jpg"
          alt="Sila Market hero"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:min-h-[85vh] md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <Sparkles size={16} />
            Weekly offers • Fresh products • Trusted local market
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Shop smarter with a modern digital experience for
            <span className="text-brand-400"> Sila Market</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
            Discover imported groceries, fresh meat, pantry essentials and
            weekly deals in one premium shopping experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-brand-600"
            >
              Browse Products
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-soft transition hover:bg-slate-100"
            >
              <MessageCircle size={18} />
              WhatsApp Order
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black text-white">500+</p>
              <p className="mt-1 text-sm text-white/75">Local customers</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black text-white">Fresh</p>
              <p className="mt-1 text-sm text-white/75">Daily products</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black text-white">Fast</p>
              <p className="mt-1 text-sm text-white/75">Call & order support</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img
              src="/images/store/store-front.jpg"
              alt="Sila Market storefront"
              className="h-[420px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-2 rounded-[28px] bg-white p-4 shadow-2xl md:-left-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-brand-50 p-3 text-brand-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Quick Order</p>
                <p className="font-bold text-slate-900">Call Sila Market now</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
