import Image from "next/image";
import { TypographyH2 } from "./ui/typography";

const ReserchingBusiness = () => {
  return (
    <section id="researching_business">
      <div className="container flex flex-col">
        <TypographyH2 className="mb-7 text-center text-2xl font-bold text-[#2A2367] dark:text-white sm:text-3xl md:mb-10 md:text-4xl xl:text-start">
          Исследуем <span className="text-primaryColor">бизнес</span>
        </TypographyH2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-3 text-base font-medium tracking-normal text-[#2A2367] dark:text-white xl:space-y-5 xl:text-lg xl:tracking-wide">
            <p>
              Каждый клиент – своя история. Мы не берем шаблонные решения, а
              исследуем рынок конкретно под ваши цели и задачи.
            </p>
            <p>
              Сделать интернет-магазин с нуля непросто. Нужен сайт с
              качественной разработкой дизайна, который не будет отвлекать от
              сути, наполнением и рабочими модулями. Кроме этого, для успешного
              запуска электронной торговой площадки владельцу бизнеса требуется
              найти поставщиков, выбрать товарные позиции, просчитать
              рентабельность, уладить другие организационные вопросы вне сети.
            </p>
            <p>
              Создание интернет-магазина лучше делегировать на профессионалов.
              Мы возьмем на себя вопросы по разработке интернет-магазина под
              ключ. Специалисты компании предоставляют заказчику готовый
              продающий сайт. Он уже наполнен контентом, ориентирован на
              конечного потребителя и интуитивно понятен для заказчика.
            </p>
          </div>
          <div className="relative h-[400px] w-full xl:h-[550px]">
            <Image
              src={"/assets/researching-business.svg"}
              alt="researching_business"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserchingBusiness;
