import Image from "next/image";
import { TypographyH2 } from "./ui/typography";
import { Button } from "./ui/button";

const cards = [
  {
    image: "/assets/phone-mockup.svg",
    left: true,
    title: "Каталог товаров",
    list: [
      "возможность выгружать свои товары в неограниченном количестве",
      "добавлять и редактировать описание товаров",
      "сортировать товары по заданным критериям",
      "моментальная оплата товара или оформление при помощи добавления корзины",
    ],
  },
  {
    image: "/assets/order-mockup.svg",
    left: false,
    title: "Оформление заказа",
    list: [
      "личный кабинет",
      "корзина с отображением выбранных товаров",
      "оформление заказа с указанием контактных данных",
      "возможность приема онлайн-платежей",
      "использование купонов, скидок и специальных предложений",
    ],
  },
  {
    image: "/assets/integration-mockup.svg",
    left: true,
    title: "Интеграции",
    list: [
      "1С, Мой склад (выгрузка товаров на сайт, полная синхронизация)",
      "Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)",
      "Интеграция со службами доставки СДЭК, Почта России",
    ],
  },
  {
    image: "/assets/crm-mockup.svg",
    left: false,
    title: "CRM",
    list: [
      "фиксация и отслеживание поступивших заявок",
      "уведомления о заказах",
      "отчетность магазина",
    ],
  },
];

const YouGetting = () => {
  return (
    <section id="you_getting" className="my-[150px]">
      <div className="container flex flex-col">
        <TypographyH2 className="mb-10 text-start text-2xl font-bold text-[#2A2367] dark:text-white sm:text-3xl md:mb-16 md:text-4xl">
          Что вы <span className="text-primaryColor">получаете ?</span>
        </TypographyH2>
        <div className="flex flex-col">
          {cards.map(({ image, left, list, title }, i) => (
            <div
              key={i}
              className={`flex gap-2 sm:grid sm:grid-cols-2 sm:gap-7 lg:gap-16 ${
                left ? "flex-col" : "flex-col-reverse"
              }`}
            >
              {left ? (
                <>
                  <div className="relative h-[300px] w-full md:h-[355px]">
                    <Image src={image} alt={title} fill />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-primaryColor">
                      {title}
                    </h3>
                    <ul className="my-3 ml-6 list-disc text-base font-medium [&>li]:mt-2">
                      {list.map((list, i) => (
                        <li key={i}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-primaryColor">
                      {title}
                    </h3>
                    <ul className="my-3 ml-6 list-disc text-base font-medium [&>li]:mt-2">
                      {list.map((list, i) => (
                        <li key={i}>{list}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-[300px] w-full md:h-[355px]">
                    <Image src={image} alt={title} fill />
                  </div>
                </>
              )}
            </div>
          ))}

          <div className="mt-10 flex items-center justify-center">
            <Button>Узнать стоимость</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouGetting;
