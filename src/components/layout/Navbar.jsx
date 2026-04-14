import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, ShoppingCart, MapPin, X } from "lucide-react";
import useCart from "../../hooks/useCart";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Offers", path: "/offers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive ? "text-brand-600" : "text-slate-700 hover:text-brand-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-soft">
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
            <p className="text-lg font-black tracking-tight text-slate-900">
              Sila Market
            </p>
            <p className="text-xs text-slate-500">
              Fresh grocery • offers • halal meat
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+492087000000"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
          >
            <Phone size={16} />
            Call
          </a>

          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
          >
            <ShoppingCart size={16} />
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950/50 md:hidden">
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-lg font-black text-slate-900">Sila Market</p>
                <p className="text-xs text-slate-500">Quick navigation</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-700"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col px-5 py-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto border-t border-slate-200 p-5">
              <div className="space-y-3">
                <a
                  href="tel:+492087000000"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white"
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
      )}
    </header>
  );
}
