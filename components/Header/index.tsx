import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 flex items-center justify-between bg-white px-8 text-gray-500 shadow-lg">
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
