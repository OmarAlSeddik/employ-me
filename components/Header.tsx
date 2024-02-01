import Image from "next/image";
import Link from "next/link";
import MobileNav2 from "./MobileNav2";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 flex items-center justify-between bg-white px-8 text-gray-500 shadow-lg">
      <Image
        src="/images/empoly-me.png"
        alt="Employ Me Logo"
        width={64}
        height={64}
      />
      <nav className="hidden md:flex md:gap-4 lg:gap-8">
        <Link href="/" className="transition-all hover:text-black">
          Home
        </Link>
        <Link href="/" className="transition-all hover:text-black">
          About Us
        </Link>
        <Link href="/" className="transition-all hover:text-black">
          Services
        </Link>
        <Link href="/" className="transition-all hover:text-black">
          Available Vacancies
        </Link>
        <Link href="/" className="transition-all hover:text-black">
          Contact Us
        </Link>
        <Link href="/" className="transition-all hover:text-black">
          Register
        </Link>
        <Link href="/" className="transition-all hover:text-black">
          Login
        </Link>
      </nav>
      <MobileNav2 />
    </header>
  );
};

export default Header;
