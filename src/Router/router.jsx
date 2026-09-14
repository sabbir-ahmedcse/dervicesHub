import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout";
import Home from "../Pages/Home";
import AllService from "../Pages/AllService";
import ServiceDetails from "../Components/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("/service.json"),
        element: <Home />,
      },

      {
        path: "allService",
        loader: () => fetch("/service.json"),
        element: <AllService />,
      },

      {
        path: "service/:id",
        loader: async ({ params }) => {
          const response = await fetch("/service.json");

          if (!response.ok) {
            throw new Error("Service data loading failed");
          }

          const services = await response.json();

          const service = services.find(
            (item) => String(item.id) === params.id
          );

          if (!service) {
            throw new Error("Service not found");
          }

          return service;
        },
        element: <ServiceDetails />,
      },
    ],
  },
]);