import Link from "next/link";
const NavLinks = () => {
  return (
    <nav className="mt-20 flex flex-col gap-8 font-semibold text-10xl md:mt-0 md:flex-row md:text-sm">
      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#about">
        About
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#projects">
        Projects
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#skills">
        Skills
      </Link>
      
      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#contact">
        Contact me
      </Link>
    </nav>
  );
};
export default NavLinks;