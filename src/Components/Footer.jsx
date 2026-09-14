import React from "react";
import {
  ArrowRight,
  
  Mail,
  MapPin,
  Phone,
  
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row lg:px-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay Updated With Us
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Subscribe to get the latest services and exclusive offers.
            </p>
          </div>

          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* Brand */}
        <div>
          <a
            href="/"
            className="inline-block text-2xl font-extrabold tracking-tight text-white"
          >
            Service<span className="text-indigo-400">Hub</span>
          </a>

          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
            Your trusted marketplace for professional digital services. Find the
            right service, save more with bundle offers, and grow your business
            with confidence.
          </p>

          {/* Social Icons */}
          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white">Our Services</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#services" className="transition hover:text-indigo-400">
                Web Development
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-indigo-400">
                Graphics Design
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-indigo-400">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-indigo-400">
                SEO Optimization
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-indigo-400">
                Video Editing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="/" className="transition hover:text-indigo-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-indigo-400">
                All Services
              </a>
            </li>
            <li>
              <a href="#offers" className="transition hover:text-indigo-400">
                Special Offers
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-indigo-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-indigo-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white">Contact Us</h3>

          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-indigo-400" size={18} />
              <span>Khulna, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="shrink-0 text-indigo-400" size={18} />
              <a href="tel:+8801000000000" className="hover:text-indigo-400">
                +880 1000-000000
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="shrink-0 text-indigo-400" size={18} />
              <a
                href="mailto:hello@servicehub.com"
                className="break-all hover:text-indigo-400"
              >
                hello@servicehub.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-sm text-slate-500 sm:px-8 md:flex-row md:text-left lg:px-12">
          <p>© {new Date().getFullYear()} ServiceHub. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
