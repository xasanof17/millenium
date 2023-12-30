import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TypographyH2 } from "./ui/typography";

const cards = [
  {
    feature: "Удобный интерфейс",
    text: "Блоковая подача информации, удобные кнопки, карточки товаров, понятное меню и легкая навигация по многостраничному сайту.",
  },
  {
    feature: "Продающая структура",
    text: "Делаем анализ вашей целевой аудитории и вашего предложения. Опираясь на анализ прописываем продающуюу структуру сайта.",
  },
  {
    feature: "Адаптивность",
    text: "Сайт корректно отображается на различных устройствах, элементы динамически подстраиваются под различные разрешения экрана, что повышает конверсию сайта в покупку.",
  },
  {
    feature: "Уникальный дизайн",
    text: "Не пользуемся шаблонными решениями. Под каждый проект разрабатывается индивидуальный дизайн который подчеркнет имидж компании",
  },
  {
    feature: "Защита и безопасность",
    text: "Подключаем HTPS протокол, защиту от DDOS атак, чтобы данные клиентов были в безопасности.",
  },
  {
    feature: "SEO оптимизация",
    text: "Сайты соответствуют требованиям поисковой оптимизации, они без труда покоряют топы поисковой выдачи Яндекс и Google.",
  },
];

const OurFeatures = () => {
  return (
    <section id="features" className="my-20">
      <div className="container flex flex-col">
        <TypographyH2 className="mb-10 text-center text-2xl font-bold text-[#2A2367] dark:text-white sm:text-3xl md:text-4xl">
          Мы создаем интернет-магазины,{" "}
          <span className="text-primaryColor">которые продают</span>
        </TypographyH2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
          {cards.map(({ feature, text }, i) => (
            <Card
              key={i}
              className="bg-gradient-to-tr from-indigo-500 to-indigo-900 shadow-md"
            >
              <CardHeader className="px-4 xl:px-5">
                <CardTitle
                  className="text-shadow text-4xl font-bold text-white sm:text-5xl xl:text-6xl"
                  style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)" }}
                >
                  {`0${i + 1}`}
                </CardTitle>
                <CardDescription className="text-base font-bold text-slate-900 underline underline-offset-8 dark:text-slate-800">
                  {feature}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 xl:px-5">
                <p className="whitespace-normal text-base font-medium text-white">
                  {text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
