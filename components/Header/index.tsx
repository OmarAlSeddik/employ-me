"use client";

import Image from "next/image";
import { useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header?.classList.toggle("bg-secondary", window.scrollY > 32);
      header?.classList.toggle("shadow", window.scrollY > 32);

      const logoImage = document.querySelector("#logo-image");
      logoImage?.classList.toggle("!size-16", window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-base text-gray-300 transition-all duration-500">
      <div className="container flex items-center justify-between">
        <div
          className="relative size-32 transition-all duration-500"
          id="logo-image"
        >
          <Image
            src="/shared/employ-me.webp"
            alt="Employ Me Logo"
            fill
            objectFit="contain"
          />
        </div>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
