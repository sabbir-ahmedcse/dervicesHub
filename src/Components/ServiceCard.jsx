import React, { useState } from "react";
import { Link } from "react-router";
import {
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Heart,
  Zap,
} from "lucide-react";

const ServiceCard = ({ services = [], onAddToCart }) => {
  const [wishlist, setWishlist] = useState({});
  const [addedId, setAddedId] = useState(null);

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (service) => {
    onAddToCart?.(service);
    setAddedId(service.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  if (!services.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 py-20 text-center">
        <p className="text-lg font-semibold text-gray-500">
          No services found 😔
        </p>
        <p className="text-sm text-gray-400">
          Try changing filters or search keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const hasDiscount = service.discount > 0;
        const finalPrice = hasDiscount
          ? Math.round(service.price - (service.price * service.discount) / 100)
          : service.price;

        return (
          <div
            key={service.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
          >
            {/* ---------- Image Section ---------- */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Popular Badge */}
              {service.popular && (
                <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  <Zap size={12} fill="currentColor" />
                  Popular
                </span>
              )}

              {/* Discount Badge */}
              {hasDiscount && (
                <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {service.discount}% OFF
                </span>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(service.id)}
                aria-label="Add to wishlist"
                className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md transition-transform hover:scale-110"
              >
                <Heart
                  size={16}
                  className={`transition-colors ${
                    wishlist[service.id]
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }`}
                />
              </button>
            </div>

            {/* ---------- Content Section ---------- */}
            <div className="flex flex-1 flex-col p-5">
              {/* Category + Rating */}
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {service.category}
                </span>

                <div className="flex items-center gap-1 text-sm">
                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                  <span className="font-semibold text-gray-700">
                    {service.rating}
                  </span>
                  {service.reviews && (
                    <span className="text-xs text-gray-400">
                      ({service.reviews})
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 line-clamp-1 text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
                {service.shortDescription}
              </p>

              {/* Features */}
              {service.features?.length > 0 && (
                <ul className="mb-5 space-y-1.5">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={15}
                        className="shrink-0 text-green-500"
                      />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* ---------- Bottom Section ---------- */}
              <div className="mt-auto">
                {/* Delivery + Price */}
                <div className="mb-4 flex items-end justify-between border-t border-dashed pt-4">
                  <div>
                    <p className="mb-1 flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={13} />
                      {service.deliveryTime}
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-800">
                        ৳{finalPrice}
                      </span>
                      {hasDiscount && (
                        <span className="text-sm font-medium text-gray-400 line-through">
                          ৳{service.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details Link */}
                  <Link
                    to={`/service/${service.id}`}
                    className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-md bg-blue-600 text-sm font-semibold transition-colors "
                  >
                    Details
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(service)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 ${
                      addedId === service.id
                        ? "bg-green-600 scale-[0.98]"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                    }`}
                  >
                    {addedId === service.id ? (
                      <>
                        <CheckCircle size={16} />
                        Added!
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;