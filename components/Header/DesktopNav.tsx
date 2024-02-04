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
          className="transition hover:text-white"
        >
          {link.title}
        </Link>
      ))}
      {user ? (
        <Link href="/" className="transition hover:text-white">
          Logout
        </Link>
      ) : (
        <>
          <Link href="/" className="transition hover:text-white">
            Register
          </Link>
          <Link href="/" className="transition hover:text-white">
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default DesktopNav;
