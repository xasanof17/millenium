import FormBlock from "@/components/Form";
import { TypographyH1 } from "@/components/ui/typography";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact with Millenium Company",
};

export default function ContactPage() {
  return (
    <section id="contact" className="container grid grid-cols-1 md:grid-cols-2">
      <div className="mb-10 flex flex-col items-center justify-start text-center md:mb-0">
        <TypographyH1 className="w-full text-[#2A2367] dark:text-white">
          Контакты
        </TypographyH1>
      </div>

      <div className="mx-auto flex w-full max-w-lg flex-col rounded-3xl bg-primaryColor px-5 py-7 dark:bg-white sm:px-6 sm:py-10 lg:max-w-full xl:px-16 xl:py-14">
        <h3 className="tex-white text-center text-xl font-bold text-white dark:text-primaryColor sm:text-2xl">
          Звоните нам по телефону <br />
          <a href="tel:+998900198505">+998(90)019-85-05</a>
        </h3>
        <p className="my-5 text-center text-sm font-medium text-white dark:text-primaryColor sm:text-base">
          или закажите обратный звонок чтобы получить ответы на все интересующие
          вас вопросы.
        </p>
        <FormBlock />
      </div>
    </section>
  );
}
