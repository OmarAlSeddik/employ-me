import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Main = () => {
  return (
    <section className="container flex flex-col gap-24 py-24">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
          <h2 className="font-header-2 text-header-color">About Employ Me</h2>
          <p>
            Who we are: We are an Online recruitment and talent management
            Platform. What do we do: We assist startups, SMEs and Corporates in
            recruitment and talent management to develop a win win situation for
            employers and employees by providing the suitable candidate to the
            suitable employer and assisting the employers in developing their
            hires, Mission: To provide online recruitment and talent management
            solutions for candidates and employers to enhance both the
            organizational Performance and the employee’s performance of the
            Egyptian market.
          </p>
          <Button className="font-button gap-4 p-6" asChild>
            <Link href="/services">
              Become a Client
              <MoveRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="relative max-w-[90%] shrink-0 overflow-hidden rounded md:h-[13.875rem] md:w-[20rem] xl:h-[27.8125rem] xl:w-[40rem]">
          <Image
            src="/about-us/main-section.webp"
            alt="Employees Talking"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-4 md:flex-row">
        <Button className="font-button gap-4 p-6" asChild>
          <Link href="/services">
            Become a Client
            <MoveRight className="size-4" />
          </Link>
        </Button>
        <div className="flex grow flex-col items-center gap-4 text-center">
          <h2 className="font-header-2 text-header-color">
            What Else Do We Do?
          </h2>
          <p>
            We offer a full online solution according to the world&apos;s new
            requirements that lead to the need of social distancing. We deal
            with our clients in a case-based manner as every client has his own
            experience and model. We run smoothly along the work flow of the
            client&apos;s processes and help in reduction of time and increasing
            the candidate&apos;s comprehension of the employer&apos;s culture
            and his career path that we offer. Become A Client
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="relative overflow-hidden rounded-l xl:h-[20rem] xl:w-[30rem]">
          <Image src="/about-us/main-section-2.webp" alt="Shaking Hands" fill />
        </div>
        <div className="flex grow flex-col items-start gap-4 rounded bg-primary p-12 text-white xl:rounded-l-[0px]">
          <h2 className="font-header-2">
            We Help You Build Your Employer Brand
          </h2>
          <p>
            By outsourcing talent management processes we help our clients in
            building their employer brand and to become an employer off choice.
          </p>
          <Button
            variant="outline"
            className="font-button mt-auto gap-4 p-6 text-white"
            asChild
          >
            <Link href="/services">
              Join Us
              <MoveRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
