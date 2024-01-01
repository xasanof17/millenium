"use client";
import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

type Link = {
  href: string;
  title: string;
};

type Menu = {
  links: Link[];
  toggleMenu?: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};

const Menu: FC<Menu> = ({ links, toggleMenu, setToggleMenu }) => {
  return (
    <div className="fixed left-0 top-[65px] z-50 flex h-[90vh] w-screen flex-col items-center justify-center space-y-3 bg-background pt-5">
      <ul className="flex flex-col items-center space-y-3 lg:hidden">
        {links.map(({ href, title }, i) => (
          <li key={i}>
            <Link
              onClick={() => setToggleMenu((prev) => !prev)}
              href={href}
              title={title}
              aria-label={title}
              className="text-lg font-medium text-gray-500 hover:text-primaryColor"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <div className="flex flex-col items-end lg:hidden">
        <Link
          href={"tel:+998900198505"}
          className="text-lg font-bold lining-nums tracking-tight text-primaryColor dark:text-white xl:text-xl"
        >
          +998 (90) 019-85-05
        </Link>
        <span className="text-xs font-bold text-primaryColor">
          Ежедневно с 09:00 до 20:00
        </span>
      </div>
    </div>
  );
};

export default Menu;
