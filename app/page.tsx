import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employ Me - Homepage",
  description: "An Egyptian Employment Platform.",
};

export default function HomePage() {
  return <Home />;
}
