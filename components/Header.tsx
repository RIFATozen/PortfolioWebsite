import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div>
        <a
          href="#maincontent"
          className="fixed top-0 left-0 right-0 text-center p-2 -translate-y-full focus:translate-y-0 bg-primary transition-transform duration-150 ease-in-out"
        >
          Skip to main content
        </a>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            RIFAT<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Button asChild>
            <Link href="/contact">Hire me</Link>
          </Button>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
