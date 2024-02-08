import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Main = () => {
  return (
    <section className="container flex flex-col gap-24 py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-header-1 text-header-color">Get in Touch</h2>
        <p className="font-header-5">
          If you have any inquiry or any request please never hesitate to
          interact with us through our different interactive channels and join
          our community.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/EmploymeEgypt/?_rdc=1&_rdr"
            target="_blank"
            className="transition hover:scale-125 hover:text-primary"
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/company/42942367/admin/"
            target="_blank"
            className="transition hover:scale-125 hover:text-primary"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/employme_egypt/"
            target="_blank"
            className="transition hover:scale-125 hover:text-primary"
          >
            <Instagram />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 text-base lg:flex-row">
        <div className="flex h-[12rem] w-[20rem] flex-col justify-between rounded p-8 shadow-xl">
          <MapPin className="size-8 text-primary" />
          <h3 className="font-header-3 text-header-color">Our Location</h3>
          <p>45 kambeez St Giza, Giza Governorate, Egypt</p>
        </div>
        <div className="flex h-[12rem] w-[20rem] flex-col justify-between rounded p-8 shadow-xl">
          <Phone className="size-8 text-primary" />
          <h3 className="font-header-3 text-header-color">Call Us On</h3>
          <p>+201555311986</p>
        </div>
        <div className="flex h-[12rem] w-[20rem] flex-col justify-between rounded p-8 shadow-xl">
          <Mail className="size-8 text-primary" />
          <h3 className="font-header-3 text-header-color">Email Us</h3>
          <ul className="ml-4 list-disc">
            <li>hr@employme-egy.com</li>
            <li>info@employme-egy.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Main;
