import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employ Me - Services",
  description: "The services that the Employ Me platform offers.",
};

const ServicesPage = () => {
  return <Services />;
};

export default ServicesPage;
