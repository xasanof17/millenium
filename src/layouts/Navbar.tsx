"use client";
import { useEffect, useState } from "react";
import { Logo, Menu, Modal, ThemeToggle } from "@/components";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/utils/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      role="banner"
      className={cn(
        isScrolled && "shadow-md",
        "sticky left-0 top-0 z-50 bg-background",
      )}
    >
      {/* <Banner /> */}
      <nav
        role="navigation"
        className="container flex items-center justify-between py-3"
      >
        <Button
          name="menu-btn"
          title="Menu"
          onClick={() => setToggleMenu((prev) => !prev)}
          variant={"outline"}
          className="px-3 lg:hidden"
          aria-label="menu-btn"
        >
          {!toggleMenu ? (
            <MenuIcon className="h-6 w-6 font-medium text-foreground" />
          ) : (
            <XIcon className="h-6 w-6 font-medium text-foreground" />
          )}
        </Button>
        <Logo />
        <ul className="hidden items-center lg:flex">
          {links.map(({ href, title }, i) => (
            <li key={i}>
              <Link
                href={href}
                aria-label={`url to ${title} page`}
                className="transtiion-colors px-2 text-base font-medium text-primary duration-200 ease-out hover:text-primaryColor dark:text-gray-200 xl:px-3"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center lg:space-x-3">
          <div className="hidden flex-col items-end xl:flex">
            <a
              href={"tel:+998900198505"}
              className="text-lg font-bold lining-nums tracking-tight text-primaryColor dark:text-white xl:text-xl"
            >
              +998 (90) 019-85-05
            </a>
            <span className="text-xs font-bold text-primaryColor">
              Ежедневно с 09:00 до 20:00
            </span>
          </div>
          <Modal />
          <ThemeToggle className="hidden lg:block" />
        </div>
        {toggleMenu && (
          <Menu
            links={links}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
