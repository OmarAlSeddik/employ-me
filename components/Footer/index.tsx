import { ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-secondary text-white">
      <div className="container flex flex-col items-center gap-16 py-16 md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            src="/home/employ-me.webp"
            alt="Employ Me Logo"
            width={150}
            height={150}
          />
          <p>We help you reach your dream</p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="font-header-3">Quick Links</h2>
          <div className="flex flex-col items-center gap-2 text-base md:items-start md:text-[0.875rem]">
            <Link href="/" className="flex gap-1 transition hover:text-primary">
              <ChevronRight className="hidden md:block" />
              Home
            </Link>
            <Link
              href="/about-us"
              className="flex gap-1 transition hover:text-primary"
            >
              <ChevronRight className="hidden md:block" />
              About Us
            </Link>
            <Link
              href="/services"
              className="flex gap-1 transition hover:text-primary"
            >
              <ChevronRight className="hidden md:block" />
              Services
            </Link>
            <Link
              href="/available-vacancies"
              className="flex gap-1 transition hover:text-primary"
            >
              <ChevronRight className="hidden md:block" />
              Available Vacancies
            </Link>
            <Link
              href="/contact-us"
              className="flex gap-1 transition hover:text-primary"
            >
              <ChevronRight className="hidden md:block" />
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:ml-auto">
          <h2 className="font-header-3">Let&apos;s Connect!</h2>
          <p>
            Connect with us for a unique recruitment and talent management
            experience
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/EmploymeEgypt/?_rdc=1&_rdr"
              target="_blank"
              className="transition hover:text-primary"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/company/42942367/admin/"
              target="_blank"
              className="transition hover:text-primary"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/employme_egypt/"
              target="_blank"
              className="transition hover:text-primary"
            >
              <Instagram />
            </a>
          </div>
          <a href="https://my.greengeeks.com/seal/" target="_blank">
            <Image
              src="/home/green.webp"
              alt="This Website is Green"
              width={119}
              height={49}
            />
          </a>
        </div>
      </div>
      <Separator className="bg-gray-700" />
      <div className="container flex flex-col items-center justify-between gap-2 py-4 md:flex-row">
        <p>Copyright © 2024 Employ Me</p>
        <p>Powered by Employ Me</p>
      </div>
    </footer>
  );
};

export default Footer;
