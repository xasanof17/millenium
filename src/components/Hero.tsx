import Image from "next/image";
import { TypographyH1, TypographyP } from "./ui/typography";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative my-10 bg-contain bg-no-repeat sm:bg-hero-mockup md:bg-right-bottom lg:bg-none"
    >
      <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <div className="flex w-full flex-col lg:max-w-3xl">
          <TypographyH1 className="w-full text-[#2A2367] dark:text-white">
            Разработка интернет-магазинов{" "}
            <span className="text-primaryColor">на 1C-Битрикс</span>
          </TypographyH1>
          <div className="relative block h-full min-h-[300px] w-full max-w-full sm:hidden">
            <Image
              aria-hidden="true"
              src={"/assets/mockup.svg"}
              alt="mockup"
              className="object-cover"
              fill
              loading="lazy"
            />
          </div>
          <TypographyP className="text-sm font-medium text-[#2A2367] dark:text-white sm:max-w-sm sm:text-base lg:max-w-full xl:text-lg">
            Разработаем интернет-магазин за 30 дней с уникальным дизайном и
            продуманной структурой который{" "}
            <span className="font-bold text-primaryColor">
              выделит вас на фоне конкурентов
            </span>
          </TypographyP>
          <div className="mx-auto mt-5 flex w-full max-w-[200px] items-center justify-start md:mt-10 md:max-w-full">
            <Button
              role="button"
              className="inline-block w-full md:h-[50px] md:max-w-[275px] md:text-base"
            >
              Узнать стоимость
            </Button>
          </div>
          <TypographyP className="w-full text-center text-sm font-medium leading-3 text-primaryColor md:max-w-[280px] md:text-start md:text-base lg:max-w-lg lg:font-semibold lg:tracking-tight">
            Оставьте заявку и получите бесплатную консультацию от специалиста,
            полный расчет стоимости разработки и бонус:
            <br />
            <span className="text-[#2A2367] dark:text-white">
              «15 сервисов которые покажут стратегию продвижения конкурентов,
              всё об их выдаче в поиске и не только»
            </span>
          </TypographyP>
        </div>
        <div className="relative hidden h-full min-h-[560px] w-full max-w-4xl lg:block">
          <Image
            aria-hidden="true"
            src={"/assets/mockup.svg"}
            alt="mockup"
            fill
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center md:mt-24">
        <Button
          aria-label="down-button"
          title="Click to down"
          name="down-btn"
          type="button"
          variant={"link"}
          className="animate-bounce"
        >
          <ChevronDown className="h-7 w-7 text-primaryColor" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
