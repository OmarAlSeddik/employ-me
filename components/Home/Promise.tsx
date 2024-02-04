import {
  Banknote,
  Clock,
  Fingerprint,
  HeartHandshake,
  MoveRight,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Promise = () => {
  return (
    <section className="container flex flex-col items-center gap-4 py-24">
      <h2 className="font-header-1 text-header-color">Our Promise</h2>
      <Button className="font-button gap-4 p-6 text-white" asChild>
        <Link href="/services">
          Our Services
          <MoveRight className="size-4" />
        </Link>
      </Button>
      <div className="flex max-w-full flex-col flex-wrap items-center justify-center gap-[2rem] md:flex-row">
        <div className="flex h-[16rem] w-[25rem] max-w-[90%] flex-col gap-8 rounded p-10 text-base shadow-xl">
          <Clock className="size-[2rem] text-primary" />
          <div className="flex flex-col gap-4">
            <h3 className="font-header-4 text-header-color">24 Hours Access</h3>
            <p>We are available 24/7 to serve our clients.</p>
          </div>
        </div>
        <div className="flex h-[16rem] w-[25rem] max-w-[90%] flex-col gap-8 rounded p-10 text-base shadow-xl">
          <Users className="size-[2rem] text-primary" />
          <div className="flex flex-col gap-4">
            <h3 className="font-header-4 text-header-color">
              Online Solutions
            </h3>
            <p>
              We offer online solutions to avoid the time consuming meetings.
            </p>
          </div>
        </div>
        <div className="flex h-[16rem] w-[25rem] max-w-[90%] flex-col gap-8 rounded p-10 text-base shadow-xl">
          <Banknote className="size-[2rem] text-primary" />
          <div className="flex flex-col gap-4">
            <h3 className="font-header-4 text-header-color">
              Convenient Packages
            </h3>
            <p>We offer price convinient packages for our clients.</p>
          </div>
        </div>
        <div className="flex h-[16rem] w-[25rem] max-w-[90%] flex-col gap-8 rounded p-10 text-base shadow-xl">
          <Fingerprint className="size-[2rem] text-primary" />
          <div className="flex flex-col gap-4">
            <h3 className="font-header-4 text-header-color">
              Case-Sensitive Solutins
            </h3>
            <p>
              We offer case based solutions for our clients as every
              client&apos;s challenge has its uniqueness .
            </p>
          </div>
        </div>
        <div className="flex h-[16rem] w-[25rem] max-w-[90%] flex-col gap-8 rounded p-10 text-base shadow-xl">
          <HeartHandshake className="size-[2rem] text-primary" />
          <div className="flex flex-col gap-4">
            <h3 className="font-header-4 text-header-color">
              Longterm Partnership
            </h3>
            <p>
              We care to build a long term partnership with our clients by
              sustaining service quality .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
