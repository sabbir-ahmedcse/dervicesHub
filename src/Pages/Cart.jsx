import { useContext, useState } from "react";
import { Link } from "react-router";
import {
  ShoppingBag,
  Trash2,
  Tag,
  Percent,
  ArrowRight,
} from "lucide-react";
import { CartContext } from "../Context/CartContext.jsx";

const DISCOUNT_THRESHOLD = 2;
const DISCOUNT_PERCENT = 20;

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const eligibleForDiscount = cart.length >= DISCOUNT_THRESHOLD;
  const discountAmount = eligibleForDiscount ? (subtotal * DISCOUNT_PERCENT) / 100 : 0;
  const total = subtotal - discountAmount;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    window.location.href = "/checkout";
  };

  const handleClearCart = () => {
    setShowConfirm(true);
  };

  const confirmClear = () => {
    clearCart();
    setShowConfirm(false);
  };

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
          <ShoppingBag className="h-10 w-10 text-blue-400" />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Your Cart is Empty
        </h2>
        <p className="mb-8 text-gray-500">
          Looks like you haven't booked any services yet.
        </p>
        <Link
          to="/allService"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Services
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
          <ShoppingBag className="h-9 w-9 text-blue-600" />
          Shopping Cart
        </h1>
        <p className="mt-1 text-gray-500">
          {cart.length} service{cart.length > 1 ? "s" : ""} in your cart
        </p>
      </div>

      {/* Discount Banner */}
      {eligibleForDiscount && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100">
            <Percent className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-green-800">
              {DISCOUNT_PERCENT}% Off — Bundle Discount!
            </p>
            <p className="text-sm text-green-600">
              Book {DISCOUNT_THRESHOLD}+ services to enjoy this exclusive discount.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-28 w-full shrink-0 rounded-xl object-cover sm:w-28"
              />

              <div className="flex-1 min-w-0">
                <h3 className="truncate text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">
                    ৳{item.price.toLocaleString()}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ৳{item.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {item.discount && (
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-green-600">
                    <Tag className="h-3 w-3" /> {item.discount}% OFF
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center gap-1.5 rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Remove</span>
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={handleClearCart}
            className="text-sm font-medium text-gray-400 underline transition hover:text-red-500"
          >
            Clear all items
          </button>

          {showConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
              <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  Clear Cart?
                </h3>
                <p className="mb-6 text-sm text-gray-500">
                  All items will be removed from your cart. This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmClear}
                    className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">
                  ৳{subtotal.toLocaleString()}
                </span>
              </div>

              {eligibleForDiscount && (
                <div className="flex justify-between text-green-600">
                  <span className="flex items-center gap-1">
                    <Percent className="h-4 w-4" /> Discount ({DISCOUNT_PERCENT}%)
                  </span>
                  <span className="font-medium">
                    -৳{discountAmount.toLocaleString()}
                  </span>
                </div>
              )}

              {cart.length === 1 && (
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Book 1 more for 20% off!</span>
                  <span className="font-medium text-blue-600">৳0</span>
                </div>
              )}

              <div className="my-2 h-px bg-gray-100" />

              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Proceed to Checkout
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-3 text-center text-xs text-gray-400">
              Secure checkout powered by ServiceHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
