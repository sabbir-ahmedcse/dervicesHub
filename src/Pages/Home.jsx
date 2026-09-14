import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData, Link } from "react-router";
import ServiceCard from "../Components/ServiceCard";
import ServiceCardSkeleton from "../Components/ServiceCardSkeleton";

const Home = () => {
  const services = useLoaderData();

  // শুধু প্রথম ৬টি service নেওয়া হচ্ছে
  const popularServices = services.slice(0, 6);

  return (
    <div>
      <Banner />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Popular Services
          </h2>

          <p className="mt-2 text-gray-500">
            Explore our top 6 services
          </p>
        </div>

       
      <section className="mx-auto max-w-7xl px-4 py-12">

        {navigation.state === "loading" ? (
          <ServiceCardSkeleton count={6} />
        ) : (
          <ServiceCard services={popularServices} />
        )}

      </section>

        <div className="mt-10 text-center">
          <Link
            to="/allService"
            className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;