import Image from "next/image";
import DesktopNav from "./Header/DesktopNav";
import MobileNav from "./Header/MobileNav";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white px-8 text-gray-500 shadow-lg">
      <Image
        src="/images/empoly-me.png"
        alt="Employ Me Logo"
        width={64}
        height={64}
      />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
