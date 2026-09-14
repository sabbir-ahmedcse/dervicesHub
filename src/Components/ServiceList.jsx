import services from "../data/services.json";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          <p>{service.shortDescription}</p>
          <p>৳{service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;