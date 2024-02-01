import Link from "next/link";

const DesktopNav = () => {
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
    <nav className="hidden md:flex md:gap-4 lg:gap-8">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className="transition hover:text-black"
        >
          {link.title}
        </Link>
      ))}
      {user ? (
        <Link href="/" className="transition hover:text-black">
          Logout
        </Link>
      ) : (
        <>
          <Link href="/" className="transition hover:text-black">
            Register
          </Link>
          <Link href="/" className="transition hover:text-black">
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default DesktopNav;
