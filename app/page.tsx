import { Button } from "@/components/ui/button";
import {
  Banknote,
  CircleUser,
  Clock,
  DollarSign,
  Fingerprint,
  Gem,
  GraduationCap,
  HeartHandshake,
  MoveRight,
  Scale,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employ Me - Homepage",
  description: "An Egyptian Employment Platform.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-[32rem] rounded-b-3xl bg-[url('../public/images/hero.webp')] bg-cover text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full flex-col items-start justify-center gap-4">
          <h1 className="font-header-1">A Better Recruitment Experience</h1>
          <Link href="/about-us">
            <Button className="font-button gap-4 p-6">
              Learn More
              <MoveRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Promise Section */}
      <section className="container flex flex-col items-center gap-4 py-24">
        <h2 className="font-header-1 text-header-color">Our Promise</h2>
        <Link href="/services">
          <Button className="font-button gap-4 p-6 text-white">
            Our Services
            <MoveRight className="size-4" />
          </Button>
        </Link>
        <div className="flex flex-wrap justify-center gap-[2rem]">
          <div className="flex w-[25rem] flex-col gap-8 rounded p-10 text-base shadow-xl">
            <Clock className="size-[2rem] text-primary" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-3 text-header-color">
                24 Hours Access
              </h3>
              <p>We are available 24/7 to serve our clients.</p>
            </div>
          </div>
          <div className="flex w-[25rem] flex-col gap-8 rounded p-10 text-base shadow-xl">
            <Users className="size-[2rem] text-primary" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-3 text-header-color">
                Online Solutions
              </h3>
              <p>
                We offer online solutions to avoid the time consuming meetings.
              </p>
            </div>
          </div>
          <div className="flex w-[25rem] flex-col gap-8 rounded p-10 text-base shadow-xl">
            <Banknote className="size-[2rem] text-primary" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-3 text-header-color">
                Convenient Packages
              </h3>
              <p>We offer price convinient packages for our clients.</p>
            </div>
          </div>
          <div className="flex w-[25rem] flex-col gap-8 rounded p-10 text-base shadow-xl">
            <Fingerprint className="size-[2rem] text-primary" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-3 text-header-color">
                Case-Sensitive Solutins
              </h3>
              <p>
                We offer case based solutions for our clients as every
                client&apos;s challenge has its uniqueness .
              </p>
            </div>
          </div>
          <div className="flex w-[25rem] flex-col gap-8 rounded p-10 text-base shadow-xl">
            <HeartHandshake className="size-[2rem] text-primary" />
            <div className="flex flex-col gap-4">
              <h3 className="font-header-3 text-header-color">
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
      {/* Sign-In Section */}
      <section className="bg-primary text-white">
        <div className="container flex flex-col justify-between gap-24 py-24">
          <h2 className="font-header-2">A New Recruitment Experience</h2>
          <p>
            We offer our clients new experiences in recruitment, talent
            management, and online trainings with tailored price packages.
          </p>
          <Link href="/login">
            <Button
              variant="outline"
              className="font-button gap-4 p-6 text-white"
            >
              Employer Sign-In
              <MoveRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Main Section */}
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
            <Link href="/submit-your-cv">
              <Button
                variant="outline"
                className="font-button gap-4 p-6 text-primary outline-primary hover:bg-primary hover:text-white"
              >
                Submit Your CV
                <MoveRight className="size-4" />
              </Button>
            </Link>
          </div>
          <div className="relative flex flex-1 flex-col items-center">
            <div className="relative h-[45rem] w-[30rem] overflow-hidden rounded">
              <Image src="/images/facilites.webp" alt="Facility" fill />
            </div>
            <div className="absolute bottom-0 flex w-full items-center gap-4 rounded bg-primary p-6 text-white">
              <ThumbsUp className="size-16" />
              <div className="flex flex-col gap-4">
                <h3 className="font-header-4">
                  Everything to Build Our Talents
                </h3>
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
            <div className="relative h-[45rem] w-[30rem] overflow-hidden rounded">
              <Image
                src="/images/affordable-pricing.webp"
                alt="Facility"
                fill
              />
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
            <Link href="/pricing">
              <Button
                variant="outline"
                className="font-button gap-4 p-6 text-primary outline-primary hover:bg-primary hover:text-white"
              >
                Check Pricing
                <MoveRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
    </main>
  );
}
