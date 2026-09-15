import Banner from "../Components/Banner";
import { useLoaderData, Link, useNavigation } from "react-router";
import ServiceCard from "../Components/ServiceCard";
import ServiceCardSkeleton from "../Components/ServiceCardSkeleton";

const Home = () => {
  const services = useLoaderData();
  const navigation = useNavigation();

  // শুধু প্রথম ৬টি service নেওয়া হচ্ছে
  const popularServices = services?.slice(0, 6) || [];

  if (navigation.state === "loading" && !services) {
    return (
      <div>
        <Banner />
        <section className="mx-auto max-w-7xl px-4 py-12">
          <ServiceCardSkeleton count={6} />
        </section>
      </div>
    );
  }

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

        <ServiceCard services={popularServices} />
      </section>

      <div className="mt-10 text-center">
        <Link
          to="/allService"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Home;