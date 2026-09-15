import { useState } from "react";
import { useLoaderData, Link } from "react-router";
import {
  Star,
  Clock,
  CheckCircle,
  ArrowLeft,
  Tag,
  Check,
} from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(service);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-10">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

          {/* Image */}
          <div className="relative h-[300px] md:h-[450px]">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />

            {service.popular && (
              <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                Popular Service
              </span>
            )}

            {service.discount && (
              <span className="absolute right-5 top-5 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                {service.discount}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-10">

            {/* Category + Rating */}
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                {service.category}
              </span>

              <div className="flex items-center gap-1">
                <Star
                  size={18}
                  fill="currentColor"
                  className="text-yellow-500"
                />
                <span className="font-semibold">
                  {service.rating}
                </span>

                <span className="text-gray-400">
                  ({service.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {service.title}
            </h1>

            {/* Description */}
            <p className="max-w-3xl leading-7 text-gray-600">
              {service.description || service.shortDescription}
            </p>

            {/* Info */}
            <div className="my-8 grid grid-cols-1 gap-4 border-y py-6 sm:grid-cols-3">

              <div className="rounded-xl bg-gray-50 p-4">
                <Clock className="mb-2 text-blue-600" size={22} />

                <p className="text-sm text-gray-400">
                  Delivery Time
                </p>

                <p className="font-semibold text-gray-800">
                  {service.deliveryTime}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <Tag className="mb-2 text-blue-600" size={22} />

                <p className="text-sm text-gray-400">
                  Category
                </p>

                <p className="font-semibold text-gray-800">
                  {service.category}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <Star className="mb-2 text-yellow-500" size={22} />

                <p className="text-sm text-gray-400">
                  Rating
                </p>

                <p className="font-semibold text-gray-800">
                  {service.rating} / 5
                </p>
              </div>

            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                What's Included
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border p-4"
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-500"
                    />

                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + Button */}
            <div className="flex flex-col gap-5 rounded-2xl bg-gray-900 p-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Starting from
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white">
                    ৳{service.price}
                  </span>

                  {service.oldPrice && (
                    <span className="text-gray-500 line-through">
                      ৳{service.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              {added ? (
                <Link
                  to="/cart"
                  className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  <Check size={18} /> View Cart
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Book This Service
                </button>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;