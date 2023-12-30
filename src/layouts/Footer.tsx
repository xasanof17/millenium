import { Logo, UpArrow } from "@/components";
import Link from "next/link";
import { links } from "@/utils/data";
import { BadgeDollarSignIcon, MailIcon, PhoneIcon, Wallet } from "lucide-react";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";

type Social = {
  title: string;
  href: string;
  Icon: IconType;
};

const socials: Social[] = [
  {
    title: "Facebook",
    href: "https://facebook.com",
    Icon: FaFacebook,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/1henotorious_",
    Icon: FaInstagram,
  },
  {
    title: "Twitter",
    href: "https://x.com/xasanof17",
    Icon: FaXTwitter,
  },
  {
    title: "Telegram",
    href: "https://t.me/xxvlw",
    Icon: FaTelegram,
  },
  {
    title: "Github",
    href: "https://github.com/xasanof17",
    Icon: FaGithub,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const variants = {
    link: "flex items-center justify-center rounded-full p-2",
    icon: "w-6 h-6 transition-colors duration-300 text-white",
  };
  return (
    <footer id="footer" className="bg-[#2A2367] pb-5 pt-14">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-start">
            <div className="inline-block">
              <Logo footer />
            </div>
            <ul className="flex items-center space-x-2">
              {socials.map(({ title, href, Icon }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    target="_blank"
                    title={title}
                    className={variants.link}
                  >
                    <Icon className={variants.icon} />
                  </Link>
                </li>
              ))}
            </ul>
            <UpArrow />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-3 text-xl font-bold text-white">Company</h3>
            <ul className="flex flex-col space-y-2">
              {links.map(({ href, title }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-base text-white/80 hover:text-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-3 text-xl font-bold text-white">Contact Us</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="mailto:contact@milleniumcompany.tech"
                  className="flex items-center space-x-2 text-base text-white/80 hover:text-white"
                >
                  <MailIcon className="h-6 w-6" />
                  <span>contact@milleniumcompany.tech</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+998900198505"
                  className="flex items-center space-x-2 text-base text-white/80 hover:text-white"
                >
                  <PhoneIcon className="h-6 w-6 " />
                  <span>+998900198505</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-base text-white/80 hover:text-white"
                >
                  <BadgeDollarSignIcon className="h-6 w-6 " />
                  <span>Donate Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-500 pt-5 text-center text-base font-normal text-white">
          Copyright &copy; 2022-{currentYear} Millinum Company Tech Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
