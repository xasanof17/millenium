import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

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
];

const Socials = () => {
  const variants = {
    link: "flex items-center justify-center rounded-full bg-slate-200 p-2 dark:bg-slate-900",
    icon: "text-[23px] text-primaryColor transition-colors duration-300 hover:text-indigo-800 dark:text-gray-400 dark:hover:text-white md:text-[27px]",
  };
  return (
    <div className="fixed bottom-4 right-3 flex items-center justify-center">
      <ul className="flex flex-col space-y-3">
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
        <li>
          <a href="tel:+998900198505" className={variants.link}>
            <PhoneIcon className={variants.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
