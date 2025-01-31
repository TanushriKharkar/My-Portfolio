import Image from "next/image";
import Link from "next/link";


const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Link
        href="https://github.com/TanushriKharkar"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="Link to Tanushri's gitHub profile"
          width={25}
          height={25}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          Github
        </span>
      </Link>
      

      <Link
        href="www.linkedin.com/in/tanushri-kharkar-177a3428b"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          alt="Link to Tanushri's linkedin profile"
          width={28}
          height={28}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          LinkedIn
        </span>
      </Link>
      
      <Link
        href="https://drive.google.com/file/d/1OQWQuCvDXthAnENQ2dSjzsMJgHnwfNeY/view?usp=drive_link"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/resume.svg"
          alt="Link to Tanushri's resume profile"
          width={28}
          height={28}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          Resume
        </span>
      </Link>
    </div>
  );
};
export default NavIcons;