import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employ Me - Homepage",
  description: "An egyptian employment platform.",
};

export default function HomePage() {
  return <Home />;
}
