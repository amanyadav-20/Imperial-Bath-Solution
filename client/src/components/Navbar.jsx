import { Menu, Phone, X, Bath } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  // { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Jacuzzi Bath", href: "/#jacuzzi" },
  { label: "Projects", href: "/#projects" },
  // { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" }
];

const Navbar = ({ onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
      {/* <div className="top-strip">
        <div className="container top-strip__inner">
          <span>Imperial Bath solutions</span>
          <a href="tel:+91620198624594">+91 62019 862459</a>
        </div>
      </div> */}

      <nav className="container-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center bg-champagne text-ink">
            <Bath size={22} />
          </span>
          <span>
            <span className="block font-display text-2xl font-bold leading-none">Imperial</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-champagne">Bath solutions</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-champagne"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    isActive ? "text-champagne" : "text-white/70 hover:text-champagne"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <a className="icon-button" href="tel:+91 6201986245" aria-label="Call">
            <Phone size={18} />
          </a>
          <Link to="/contact" className="btn-primary hidden lg:inline-flex">
            Enquire Now
          </Link>
          <button className="btn btn--dark hidden lg:inline-flex" onClick={onQuoteClick}>
            Get quote
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-white/20 text-white lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="container-shell grid gap-1 py-5">
            {navItems.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-2 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className="px-2 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75"
                >
                  {item.label}
                </NavLink>
              )
            )}
            <NavLink to="/login" onClick={closeMenu} className="px-2 py-3">
              Login
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;