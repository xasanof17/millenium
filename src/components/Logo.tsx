import Link from "next/link";
import Image from "next/image";

type Logo = {
  footer?: boolean;
};

const Logo = ({ footer }: Logo) => {
  return (
    <Link href="/" className="inline-flex items-center justify-center">
      <span className="relative h-[45px] w-[130px] lg:h-[55px] xl:w-[160px]">
        {footer ? (
          <Image src={`/assets/dark-logo.svg`} alt="logo" priority fill />
        ) : (
          <>
            <Image
              className="hidden dark:block"
              src={`/assets/dark-logo.svg`}
              alt="logo"
              priority
              fill
            />
            <Image
              className="block dark:hidden"
              src={"/assets/logo.svg"}
              alt="logo"
              priority
              fill
            />
          </>
        )}
      </span>
    </Link>
  );
};

export default Logo;
