import ContactUs from "@/components/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employ Me - Contact Us",
  description: "Contact Employ Me.",
};

const ContactUsPage = () => {
  return <ContactUs />;
};

export default ContactUsPage;
