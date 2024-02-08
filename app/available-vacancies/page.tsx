import AvailableVacancies from "@/components/AvailableVacancies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employ Me - Available Vacancies",
  description: "Available Vacancies.",
};

const AvailableVacanciesPage = () => {
  return <AvailableVacancies />;
};

export default AvailableVacanciesPage;
