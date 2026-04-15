import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  Phone,
  ShoppingCart,
  MapPin,
  X,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import useCart from "../../hooks/useCart";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Offers", path: "/offers" },
  { name: "My Orders", path: "/my-orders" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="group flex min-w-0 items-center gap-3">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <img
                  src="/logo.png"
                  alt="Sila Market"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-2xl font-black tracking-tight text-slate-950">
                    Sila Market
                  </p>

                  <span className="hidden rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[11px] font-semibold text-cyan-700 xl:inline-flex">
                    Local Store
                  </span>
                </div>

                <p className="mt-1 line-clamp-2 text-sm font-medium leading-5 text-slate-500 md:text-base">
                  Fresh grocery • offers • halal meat
                </p>
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
              <nav className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2.5 text-sm font-semibold transition xl:px-4 ${
                        isActive
                          ? "bg-gradient-to-r from-slate-950 to-slate-800 text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)]"
                          : "text-slate-700 hover:bg-slate-100 hover:text-cyan-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-2 lg:flex xl:gap-3">
              <a
                href="tel:+492087000000"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 xl:px-5 xl:py-3"
              >
                <Phone size={17} />
                Call
              </a>

              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:from-cyan-700 hover:to-cyan-600 xl:px-5 xl:py-3"
              >
                <ShoppingCart size={17} />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-rose-600 px-1 text-xs font-bold text-white shadow">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {isHome && (
            <div className="mt-4 hidden items-center justify-between rounded-[24px] border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-cyan-50/50 px-5 py-3 lg:flex">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Sparkles size={16} className="text-cyan-600" />
                Weekly offers, premium ordering flow, and direct customer
                access.
              </div>

              <Link
                to="/offers"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
              >
                Explore offers
                <ChevronRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-[3px]"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl">
            <div className="border-b border-slate-200 px-5 py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <img
                      src="/logo.png"
                      alt="Sila Market"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-2xl font-black text-slate-950">
                      Sila Market
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Quick navigation
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-slate-200 p-3 text-slate-700"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex h-[calc(100%-95px)] flex-col overflow-y-auto">
              <div className="px-4 py-5">
                <div className="rounded-[24px] bg-gradient-to-r from-slate-950 to-slate-900 p-4 text-white">
                  <p className="text-sm font-semibold text-cyan-300">
                    Premium Demo
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Browse products, track orders, and experience a modern local
                    grocery system.
                  </p>
                </div>
              </div>

              <nav className="flex flex-col gap-2 px-4 pb-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition ${
                        isActive
                          ? "bg-cyan-50 text-cyan-700"
                          : "text-slate-700 hover:bg-slate-100"
                      }`
                    }
                  >
                    {item.name}
                    <ChevronRight size={18} />
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto border-t border-slate-200 p-4">
                <div className="space-y-3">
                  <a
                    href="tel:+492087000000"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:from-cyan-700 hover:to-cyan-600"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>

                  <a
                    href="https://maps.google.com/?q=Eppinghofer+Str.+77,+45468+Mülheim+an+der+Ruhr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <MapPin size={16} />
                    Find Us
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      openCart();
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <ShoppingCart size={16} />
                    Open Cart {cartCount > 0 ? `(${cartCount})` : ""}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
