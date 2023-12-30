import Image from "next/image";
import { TypographyH2 } from "./ui/typography";
import Form from "./Form";

const Company = () => {
  return (
    <section id="millenium_company" className="my-24 md:my-32">
      <div className="container">
        <div className="relative grid grid-cols-1 gap-10 rounded-2xl bg-slate-200 px-3 pb-[100px] pt-14 dark:bg-slate-900 sm:px-8 sm:pb-[150px] md:gap-14 md:pb-[200px] lg:grid-cols-2 lg:gap-3 lg:pb-[180px] xl:gap-8 xl:px-24 xl:pt-16">
          <div className="absolute -top-7 left-20 animate-spin lg:-top-10 lg:left-[40%]">
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image src={"/assets/platonic.svg"} alt="kubik" fill priority />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <TypographyH2 className="mb-5 text-start text-2xl font-extrabold text-[#2A2367] dark:text-white md:text-4xl">
              Компания Millenium
            </TypographyH2>
            <div className="flex flex-col space-y-3 text-center text-base font-medium text-[#2A2367] dark:text-white md:text-lg lg:text-start">
              <p>
                Это дорогая и долгая разработка интернет-магазинов на 1С
                Битрикс! Нельзя сделать{" "}
                <span className="text-primaryColor">качественный</span> цифровой
                продукт за дешево и быстро!
              </p>
              <p>
                Мы создадим интернет-магазин с нуля. Заказчику не придется
                искать других IT-специалистов для дальнейшей настройки и запуска
                сайта. Мы настроим сервисы, интегрируем модули для
                онлайн-торговли, добавим контент и товары. Работы по созданию
                интернет-магазина с нуля ведутся только после анализа ниши
                бизнеса.
              </p>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-lg flex-col rounded-3xl bg-primaryColor px-5 py-7 dark:bg-white sm:px-6 sm:py-10 lg:max-w-full xl:px-16 xl:py-14">
            <h3 className="tex-white text-center text-xl font-bold text-white dark:text-primaryColor sm:text-2xl">
              Звоните нам по телефону <br />
              <a href="tel:+998900198505">+998(90)019-85-05</a>
            </h3>
            <p className="my-5 text-center text-sm font-medium text-white dark:text-primaryColor sm:text-base">
              или закажите обратный звонок чтобы получить ответы на все
              интересующие вас вопросы.
            </p>
            <Form />
            <div className="absolute bottom-16 left-0 z-10 animate-spin sm:-left-7 sm:bottom-8 md:-bottom-8 md:-left-20 lg:-bottom-12 lg:-left-12">
              <div className="relative h-10 w-10 md:h-16 md:w-16">
                <Image src={"/assets/confetti.svg"} alt="kubik" fill priority />
              </div>
            </div>
            <div className="absolute -right-20 bottom-[30%] hidden md:block lg:-right-14 lg:hidden xl:block">
              <div className="relative h-20 w-11">
                <Image src={"/assets/thin.svg"} alt="kubik" fill priority />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 sm:bottom-10">
            <div className="relative h-[115px] w-[220px] md:h-[125px] md:w-[310px] lg:h-[160px] lg:w-[400px]">
              <Image src={"/assets/hand.svg"} alt="kubik" fill priority />
            </div>
          </div>
          <div className="absolute bottom-14 right-5 animate-bounce sm:bottom-0 md:-bottom-10">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px]">
              <Image src={"/assets/kubik.svg"} alt="kubik" fill priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
