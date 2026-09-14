
import React from "react";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Decorations */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:px-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
            <Sparkles size={16} />
            All-in-One Service Marketplace
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            All Your Services.
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              One Simple Place.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg lg:mx-0">
            Discover professional services, choose your favorites,
            and enjoy exclusive bundle offers when you purchase
            multiple services together.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold transition hover:bg-indigo-500"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a
              href="#offers"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              View Special Offers
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-slate-300 lg:justify-start">
            <span className="flex items-center gap-2">
              <CheckCircle size={17} className="text-green-400" />
              Quality Services
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={17} className="text-green-400" />
              Exclusive Discounts
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          {/* Main Card */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Featured Bundle</p>
                <h2 className="mt-1 text-2xl font-bold">
                  Business Growth
                </h2>
              </div>

              <span className="rounded-full bg-green-400/20 px-3 py-1 text-sm font-bold text-green-300">
                Save 20%
              </span>
            </div>

            {/* Service Items */}
            <div className="space-y-3">
              {[
                {
                  icon: "🌐",
                  name: "Website Development",
                  price: "৳5,000",
                },
                {
                  icon: "🎨",
                  name: "Graphics Design",
                  price: "৳3,000",
                },
                {
                  icon: "📈",
                  name: "SEO Optimization",
                  price: "৳3,000",
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium sm:text-base">
                      {service.name}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between text-slate-400">
                <span>Original Price</span>
                <span className="line-through">৳11,000</span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-semibold">Bundle Price</span>
                <span className="text-3xl font-extrabold text-green-400">
                  ৳8,800
                </span>
              </div>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-bold text-slate-950 transition hover:bg-indigo-100">
              Get This Bundle
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Floating Badge */}
          <div className="absolute -right-2 -top-5 rounded-2xl border border-white/10 bg-indigo-600 px-4 py-3 shadow-xl sm:-right-5">
            <p className="text-xs text-indigo-200">Special Offer</p>
            <p className="text-lg font-extrabold">20% OFF 🎉</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;