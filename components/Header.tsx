import Link from "next/link";
import { HiSearch, HiBell, HiUser } from "react-icons/hi";
import { useState , useEffect} from "react";
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
    }   

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }}, []);

  return (
    <header className={`${ isScroll && 'bg-[hsl(0,0%,8%)]'}`}>
      {/* --------------------------Left---------------------------------- */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="NetFlix"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      {/* --------------------------End Left---------------------------------- */}

      {/* ---------------------------Right------------------------------- */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <HiSearch className="hidden h-6 w-6 cursor-pointer sm:inline " />
        <p className="hidden lg:inline">Kids</p>
        <HiBell className="h-6 w-6 cursor-pointer " />
        <Link href="/account">
          <HiUser className="h-6 w-6 cursor-pointer" />
        </Link>
      </div>
      {/* ---------------------------End Right------------------------------- */}
    </header>
  );
};

export default Header;
