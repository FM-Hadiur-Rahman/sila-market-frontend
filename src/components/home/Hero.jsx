import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="/hero-cover.jpg"
          alt="Sila Market hero"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 md:min-h-[88vh] md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <Sparkles size={16} className="text-cyan-300" />
            Weekly offers • Fresh products • Trusted local market
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Shop smarter with a
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              modern digital experience
            </span>
            for Sila Market
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 md:text-lg">
            Discover imported groceries, fresh meat, pantry essentials and
            weekly deals in one premium shopping experience designed for local
            customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(6,182,212,0.35)] transition hover:-translate-y-0.5 hover:from-cyan-500 hover:to-cyan-400 hover:shadow-[0_14px_34px_rgba(6,182,212,0.45)]"
            >
              Browse Products
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <MessageCircle size={18} />
              WhatsApp Order
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.22)] backdrop-blur-xl">
              <p className="text-3xl font-black text-white">500+</p>
              <p className="mt-1 text-sm text-white/72">Local customers</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.22)] backdrop-blur-xl">
              <p className="text-3xl font-black text-white">Fresh</p>
              <p className="mt-1 text-sm text-white/72">Daily products</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.22)] backdrop-blur-xl">
              <p className="text-3xl font-black text-white">Fast</p>
              <p className="mt-1 text-sm text-white/72">Call & order support</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <ShieldCheck size={16} className="text-cyan-300" />
              Trusted neighborhood store
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <Clock3 size={16} className="text-cyan-300" />
              Quick ordering experience
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 14 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-white/10 via-cyan-500/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-3 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <img
              src="/images/store/store-front.jpg"
              alt="Sila Market storefront"
              className="h-[460px] w-full rounded-[28px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-2 rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.20)] md:-left-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-cyan-50 p-3 text-cyan-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Quick Order</p>
                <p className="text-2xl font-bold text-slate-900">
                  Call Sila Market now
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-6 hidden rounded-[24px] border border-white/10 bg-white/10 px-4 py-3 text-white shadow-[0_16px_40px_rgba(15,23,42,0.22)] backdrop-blur-xl md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Popular
            </p>
            <p className="mt-1 text-sm font-semibold">Pantry • Frozen • Meat</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
