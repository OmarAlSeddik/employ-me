import AboutUs from "@/components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employ Me - About Us",
  description: "About employ me.",
};

const AboutUsPage = () => {
  return <AboutUs />;
};

export default AboutUsPage;
