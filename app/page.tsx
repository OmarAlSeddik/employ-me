import { Button } from "@/components/ui/button";
import { CircleUser, GraduationCap, MoveRight, ThumbsUp } from "lucide-react";
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
          <h1 className="text-4xl font-bold">
            A Better Recruitment Experience
          </h1>
          <Link href="/about-us">
            <Button className="gap-4 p-6 font-bold">
              Learn More
              <MoveRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Promise Section */}
      <section className="container flex flex-col items-center gap-4 py-24">
        <h2 className="text-4xl font-bold">Our Promise</h2>
        <Link href="/services">
          <Button className="gap-4 p-6 font-bold">
            Our Services
            <MoveRight className="size-4" />
          </Button>
        </Link>
      </section>
      {/* Sign-In Section */}
      <section className="bg-primary text-white">
        <div className="container flex flex-col justify-between gap-24 py-24">
          <h2 className="text-4xl font-bold">A New Recruitment Experience</h2>
          <p>
            We offer our clients new experiences in recruitment, talent
            management, and online trainings with tailored price packages.
          </p>
          <Link href="/login">
            <Button
              variant="outline"
              className="gap-4 p-6 font-bold text-white"
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
            <h2 className="text-4xl font-bold">
              We Provide All Facilities For Better employment Experience
            </h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <CircleUser className="size-8 text-primary" />
                <h3 className="text-xl">Video Interviewing</h3>
              </div>
              <div className="flex items-center gap-4">
                <GraduationCap className="size-8 text-primary" />
                <h3 className="text-xl">Online Training Courses</h3>
              </div>
            </div>
            <Link href="/submit-your-cv">
              <Button
                variant="outline"
                className="gap-4 p-6 font-bold text-primary outline-primary hover:bg-primary hover:text-white"
              >
                Submit Your CV
                <MoveRight className="size-4" />
              </Button>
            </Link>
          </div>
          <div className="relative flex flex-1 flex-col items-center">
            <div className="relative h-[48.75rem] w-[31.25rem] overflow-hidden rounded">
              <Image src="/images/facilites.jpg" alt="Facility" fill />
            </div>
            <div className="absolute bottom-0 flex gap-4 rounded bg-primary p-6 text-white">
              <ThumbsUp className="size-16" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">
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
        <div>Hello</div>
      </section>
      {/* Footer */}
    </main>
  );
}
