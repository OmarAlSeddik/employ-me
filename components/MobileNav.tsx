"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  // temp
  const user = false;

  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About Us", url: "/" },
    { id: 3, title: "Services", url: "/" },
    { id: 4, title: "Available Vacancies", url: "/" },
    { id: 5, title: "Contact Us", url: "/" },
    { id: 6, title: "Register", url: "/" },
    { id: 7, title: "Login", url: "/" },
  ];

  return (
    <div className="flex items-center justify-center md:hidden">
      {open ? (
        <X className="text-3xl" onClick={() => setOpen((prev) => !prev)} />
      ) : (
        <Menu className="text-3xl" onClick={() => setOpen((prev) => !prev)} />
      )}
      <div
        className={`absolute left-0 top-16 z-50 flex w-full flex-col items-center gap-8 overflow-hidden bg-secondary text-xl font-bold text-white transition-all duration-300 ${
          open ? "h-auto py-8" : "h-0 py-0"
        }`}
      >
        {links.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            onClick={() => setOpen((prev) => !prev)}
          >
            {item.title}
          </Link>
        ))}
        {user ? (
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Orders
          </Link>
        ) : (
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
