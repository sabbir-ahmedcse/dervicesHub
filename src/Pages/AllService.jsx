import { useLoaderData, useNavigation } from "react-router";
import ServiceCard from "../Components/ServiceCard";
import ServiceCardSkeleton from "../Components/ServiceCardSkeleton";

const AllService = () => {
  const services = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading" && !services) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">All Services</h1>
          <p className="mt-2 text-gray-500">
            Choose the best service according to your needs
          </p>
        </div>
        <ServiceCardSkeleton count={6} />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          All Services
        </h1>

        <p className="mt-2 text-gray-500">
          Choose the best service according to your needs
        </p>
      </div>

      <ServiceCard services={services} />
    </section>
  );
};

export default AllService;