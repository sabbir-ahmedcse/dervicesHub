import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ShoppingBag,
  CreditCard,
  Wallet,
  Smartphone,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Truck,
  ArrowLeft,
} from "lucide-react";
import { CartContext } from "../Context/CartContext.jsx";

const DISCOUNT_THRESHOLD = 2;
const DISCOUNT_PERCENT = 20;

const paymentMethods = [
  {
    id: "card",
    name: "Credit / Debit Card",
    icon: CreditCard,
    description: "Visa, Mastercard, Maestro",
  },
  {
    id: "bkash",
    name: "bKash",
    icon: Wallet,
    description: "Personal or Account",
  },
  {
    id: "nagad",
    name: "Nagad",
    icon: Smartphone,
    description: "Digital Financial Service",
  },
  {
    id: "rocket",
    name: "Rocket",
    icon: Building2,
    description: "Cash on Delivery",
  },
];

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const eligibleForDiscount = cart.length >= DISCOUNT_THRESHOLD;
  const discountAmount = eligibleForDiscount ? (subtotal * DISCOUNT_PERCENT) / 100 : 0;
  const total = subtotal - discountAmount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
          <ShoppingBag className="h-10 w-10 text-blue-400" />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Nothing to Checkout
        </h2>
        <p className="mb-8 text-gray-500">
          Your cart is empty. Add some services first.
        </p>
        <Link
          to="/allService"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Services
          <ShoppingBag className="h-5 w-5" />
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Order Placed Successfully!
        </h2>
        <p className="mb-2 text-gray-500">
          Thank you, {formData.fullName || "Valued Customer"}.
        </p>
        <p className="mb-8 text-gray-400">
          Your payment via{" "}
          <span className="font-medium text-gray-600">
            {paymentMethods.find((m) => m.id === selectedPayment)?.name}
          </span>{" "}
          is being processed. Total: ৳{total.toLocaleString()}
        </p>
        <p className="text-sm text-gray-400">
          Redirecting to home...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
          <CreditCard className="h-9 w-9 text-blue-600" />
          Checkout
        </h1>
        <p className="mt-1 text-gray-500">Complete your booking securely</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Payment Form */}
        <div className="lg:col-span-3 space-y-6">
          {/* Contact Info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              Contact Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+880 1XXX-XXXXXX"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
              <Truck className="h-5 w-5 text-blue-600" />
              Shipping Address
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-600">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="House #, Street, Area"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="City"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-600">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="XXXXX"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Payment Method
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const isSelected = selectedPayment === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedPayment(method.id)}
                    className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition ${
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        isSelected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {method.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {method.description}
                      </p>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-blue-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mb-4 max-h-60 space-y-3 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 rounded-xl bg-gray-50 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        ৳{item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-2 h-px bg-gray-100" />

            <div className="space-y-3 py-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">
                  ৳{subtotal.toLocaleString()}
                </span>
              </div>

              {eligibleForDiscount && (
                <div className="flex justify-between text-green-600">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">Discount</span>
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                      {DISCOUNT_PERCENT}%
                    </span>
                  </span>
                  <span className="font-medium">
                    -৳{discountAmount.toLocaleString()}
                  </span>
                </div>
              )}

              {cart.length === 1 && (
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Add 1 more service</span>
                  <span className="font-medium text-blue-600">
                    Save 20%
                  </span>
                </div>
              )}

              <div className="my-1 h-px bg-gray-100" />

              <div className="flex justify-between text-2xl font-bold text-gray-900">
                <span>Total</span>
                <span className="text-blue-600">
                  ৳{total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Place Order — ৳{total.toLocaleString()}
            </button>

            <p className="mt-3 flex items-center justify-center gap-1 text-center text-xs text-gray-400">
              <ShieldCheck className="h-3 w-3" />
              Your data is encrypted and secure
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/allService"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
