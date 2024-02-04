import {
  BookOpen,
  Clock,
  DollarSign,
  Fingerprint,
  Network,
  Route,
  Scale,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Main = () => {
  const services = [
    {
      id: 1,
      title: "24x7 Access",
      content: "we are an online service and we are accessible 24/7.",
      icon: <Clock />,
    },
    {
      id: 2,
      title: "Long-term Partnerships",
      content:
        "We believe that every membership is a longterm business partnership.",
      icon: <Users />,
    },
    {
      id: 3,
      title: "We Create the Path",
      content:
        "We proudly help our clients and talents pool dig their paths to their goals.",
      icon: <Route />,
    },
    {
      id: 4,
      title: "Career Path Building",
      content:
        "We help our talent pool to build their career path they dreamt of.",
      icon: <Network />,
    },
    {
      id: 5,
      title: "Video Interviews",
      content:
        "According to the new normal life imposed by Covid-19 we considred video over IP for all our services.",
      icon: <Video />,
    },
    {
      id: 6,
      title: "Competitive Prices",
      content: "We offer competitive value based prices for our clients.",
      icon: <DollarSign />,
    },
    {
      id: 7,
      title: "Case-Based Management",
      content:
        "We believe that every challenge facing our clients is a unique opportunity that needs to be treated solely.",
      icon: <Fingerprint />,
    },
    {
      id: 8,
      title: "Continuous Development",
      content:
        "One of our core values is continous development as we need to be updated to consult and train our clients.",
      icon: <BookOpen />,
    },
    {
      id: 9,
      title: "Fairness",
      content:
        "We beleive in fairness as equal opportunities need to be given to our talent pool equally.",
      icon: <Scale />,
    },
  ];

  return (
    <section className="container flex flex-col gap-8 py-24">
      <h2 className="font-header-1 text-center text-header-color">
        What We Have Here for You
      </h2>
      <div className="flex flex-wrap gap-8">
        {services.map((service) => (
          <div
            className="relative flex h-[10rem] w-[25rem] flex-col gap-4 rounded px-8 py-4 shadow-xl"
            key={service.id}
          >
            <div className="absolute left-0 top-0 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white">
              {service.icon}
            </div>
            <h3 className="font-header-4 text-header-color">{service.title}</h3>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
      <Button className="font-button gap-4 self-start p-6" asChild>
        <Link href="/pricing">Check Out Our Prices</Link>
      </Button>
    </section>
  );
};

export default Main;
