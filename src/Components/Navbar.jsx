import { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { CartContext } from "../Context/CartContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Services", path: "/allService" },
  ];

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "text-primary bg-primary/10"
        : "text-base-content/80 hover:text-primary hover:bg-primary/5"
    }`;

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md shadow-md sticky top-0 z-50 px-4 lg:px-10">
      {/* ---------- Left: Logo + Mobile Menu Button ---------- */}
      <div className="navbar-start gap-2">
        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost btn-circle lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">
            ServiceHub
          </span>
        </Link>
      </div>

      {/* ---------- Center: Desktop Links ---------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- Right: Cart + CTA ---------- */}
      <div className="navbar-end gap-2">
        {/* Cart with badge */}
        <Link to="/cart" className="btn btn-ghost btn-circle relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="badge badge-primary badge-sm absolute -top-1 -right-1 text-white font-bold">
              {cartCount}
            </span>
          )}
        </Link>

        {/* CTA (desktop) */}
        <Link
          to="/allService"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
        >
          Explore Services
        </Link>
      </div>

      {/* ---------- Mobile Dropdown ---------- */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="menu menu-lg w-full p-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/allService"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary rounded-full"
            >
              Explore Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;