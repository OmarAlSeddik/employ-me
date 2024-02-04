import {
  CircleUser,
  DollarSign,
  Gem,
  GraduationCap,
  MoveRight,
  Scale,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Main = () => {
  return (
    <section className="container flex flex-col items-center gap-24 py-24">
      <div className="flex w-full flex-col justify-between gap-24 md:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-8">
          <h2 className="font-header-2 text-header-color">
            We Provide All Facilities For Better Employment Experience
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <CircleUser className="size-8 text-primary" />
              <h3 className="font-header-4 text-header-color">
                Video Interviewing
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <GraduationCap className="size-8 text-primary" />
              <h3 className="font-header-4 text-header-color">
                Online Training Courses
              </h3>
            </div>
          </div>
          <Button
            variant="outline"
            className="font-button gap-4 p-6 text-primary outline-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link href="/submit-your-cv">
              Submit Your CV
              <MoveRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="relative flex flex-1 flex-col items-center">
          <div className="relative h-[30rem] w-[20rem] overflow-hidden rounded lg:h-[45rem] lg:w-[30rem]">
            <Image src="/home/facilites.webp" alt="Facility" fill />
          </div>
          <div className="absolute bottom-0 flex w-full items-center gap-4 rounded bg-primary p-6 text-white">
            <ThumbsUp className="size-16" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-4">Everything to Build Our Talents</h3>
              <p>
                We help jobseekers by providing every possible way to build
                their qualifications and be competitive talents.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-24 md:flex-row">
        <div className="relative flex flex-1 flex-col items-center">
          <div className="relative h-[30rem] w-[20rem] overflow-hidden rounded lg:h-[45rem] lg:w-[30rem]">
            <Image src="/home/affordable-pricing.webp" alt="Facility" fill />
          </div>
          <div className="absolute top-0 flex w-full items-center gap-4 rounded bg-primary p-6 text-white">
            <DollarSign className="size-12" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-4">Friendly-Priced Packages</h3>
              <p>We offer four convenient price service packages.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-8">
          <h2 className="font-header-2 text-header-color">
            Most Affordable Recruitment and Talent Management Prices
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Scale className="size-8 text-primary" />
              <h3 className="font-header-4 text-header-color">
                Value-Based Packages
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Gem className="size-8 text-primary" />
              <h3 className="font-header-4 text-header-color">
                Specially Tailored Packages
              </h3>
            </div>
          </div>
          <Button
            variant="outline"
            className="font-button gap-4 p-6 text-primary outline-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link href="/pricing">
              Check Pricing
              <MoveRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
