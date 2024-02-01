import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

const MobileNav = () => {
  // temp
  const user = false;

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About Us", url: "/about-us" },
    { id: 3, title: "Services", url: "/services" },
    { id: 4, title: "Available Vacancies", url: "/available-vacancies" },
    { id: 5, title: "Contact Us", url: "/contact-us" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="text-3xl md:hidden" />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <nav className="flex flex-col items-center gap-4 text-lg">
          {links.map((item) => (
            <>
              <SheetClose asChild key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </SheetClose>
              <Separator />
            </>
          ))}
          {user ? (
            <SheetClose asChild>
              <Link href="/">Logout</Link>
            </SheetClose>
          ) : (
            <>
              <SheetClose asChild>
                <Link href="/">Register</Link>
              </SheetClose>
              <Separator />
              <SheetClose asChild>
                <Link href="/">Login</Link>
              </SheetClose>
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
