import classNames from "classnames";
import { Button } from "./ui/button";
import { IoLaptopOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { FaChevronDown } from "react-icons/fa6";

const priceList = [
  {
    title: "Стандарт",
    price: 500,
    list: [
      {
        Icon: IoLaptopOutline,
        title: "Индивидуальный дизайн",
      },
      {
        Icon: IoLaptopOutline,
        title: "Верстка Html, CSS, JavaScript, PHP",
      },
      {
        Icon: IoLaptopOutline,
        title: "«Посадка» на CMS 1C Битрикс",
      },
      {
        Icon: IoLaptopOutline,
        title: "Функционал онлайн оплаты товаров",
      },
    ],
  },
  {
    title: "Премиум",
    price: 700,
    list: [
      {
        Icon: IoLaptopOutline,
        title: "Индивидуальный дизайн",
      },
      {
        Icon: IoLaptopOutline,
        title: "Адаптивная верстка Html, CSS, JavaScript, PHP",
      },
      {
        Icon: IoLaptopOutline,
        title: "«Посадка» на CMS 1C Битрикс",
      },
      {
        Icon: IoLaptopOutline,
        title: "Функционал онлайн оплаты товаров",
      },
      {
        Icon: IoLaptopOutline,
        title: "Личный кабинет",
      },
      {
        Icon: IoLaptopOutline,
        title: "Расширенные фильтры с поддержкой SEO",
      },
      {
        Icon: IoLaptopOutline,
        title: "Интеграция с системами служб доставки",
      },
      {
        Icon: IoLaptopOutline,
        title: "Наполнение товарами",
      },
      {
        Icon: IoLaptopOutline,
        title: "Обучение пользования сайтом",
      },
    ],
  },
  {
    title: "Престиж",
    price: 1800,
    list: [
      {
        Icon: IoLaptopOutline,
        title: "Индивидуальный дизайн",
      },
      {
        Icon: IoLaptopOutline,
        title: "Адаптивная верстка Html, CSS, JavaScript, PHP",
      },
      {
        Icon: IoLaptopOutline,
        title: "«Посадка» на CMS 1C Битрикс",
      },
      {
        Icon: IoLaptopOutline,
        title: "Функционал онлайн оплаты товаров",
      },
      {
        Icon: IoLaptopOutline,
        title: "Личный кабинет",
      },
      {
        Icon: IoLaptopOutline,
        title: "Расширенные фильтры с поддержкой SEO",
      },
      {
        Icon: IoLaptopOutline,
        title: "Интеграция с системами служб доставки",
      },
      {
        Icon: IoLaptopOutline,
        title: "Наполнение товарами",
      },
      {
        Icon: IoLaptopOutline,
        title: "Обучение пользования сайтом",
      },
      {
        Icon: IoLaptopOutline,
        title: "Интеграция с 1С, Мой склад",
      },
      {
        Icon: IoLaptopOutline,
        title: "Интеграция с маркетплейсами",
      },
      {
        Icon: IoLaptopOutline,
        title: "Внедрение политики лояльности, купоны, бонусы",
      },
      {
        Icon: IoLaptopOutline,
        title: "Интеграция с CRM",
      },
      {
        Icon: IoLaptopOutline,
        title: "Любой не стандартный функционал",
      },
    ],
  },
];
type List = {
  Icon: IconType;
  title: string;
};

type PriceList = {
  title: string;
  price: number;
  list: List[];
};

const PriceListBox = ({ item, index }: { item: PriceList; index: number }) => {
  const { list, price, title } = item;
  return (
    <div
      className={classNames(
        index % 2 == 0
          ? "lg:mt-8"
          : "rounded-b-xl rounded-t-xl border-primaryColor lg:rounded-b-none lg:rounded-t-2xl lg:border-x",
        index === 0 &&
          "rounded-l-xl rounded-r-xl rounded-bl-xl rounded-tl-xl lg:rounded-r-none",
        index === 2 &&
          "rounded-l-xl rounded-br-xl rounded-tr-xl lg:rounded-l-none",
        "relative flex flex-col items-center bg-white px-4 py-5 text-primaryColor lg:py-4",
      )}
    >
      {/* https://telegra.ph/Fibonacci-settings-of-Aro-Trade-12-02 */}
      {index == 1 && (
        <span className="rounded-full bg-primaryColor px-2 py-1 text-xs font-medium text-white">
          Most Popular
        </span>
      )}
      <h3 className="mb-2 text-lg font-bold md:text-xl xl:text-2xl">{title}</h3>
      <button className="absolute right-7 top-7 block sm:hidden">
        <FaChevronDown />
      </button>
      <p className="text-3xl font-bold tabular-nums md:text-4xl">{price}$</p>
      <ul className="flex w-full flex-col space-y-2 py-4 text-base">
        {list.map(({ Icon, title }, i) => (
          <li key={i} className="flex items-center text-sm">
            <Icon className="mr-3 block h-7 w-7" />
            <span className="inline text-sm">{title}</span>
          </li>
        ))}
      </ul>
      <div className="w-full border-t border-dashed border-slate-500 pt-5">
        <Button className="w-full">Заказать</Button>
      </div>
    </div>
  );
};

const PriceBlock = () => {
  return (
    <div className="flex flex-col rounded-[20px] bg-primaryColor px-3 py-4 lg:px-0 xl:px-4 xl:py-7">
      <div className="relative bg-[url('/assets/price-bg.svg')] bg-center bg-no-repeat sm:min-h-[400px] sm:bg-right lg:min-h-[300px] lg:bg-center lg:pl-4 xl:pl-0">
        <p className="flex w-full max-w-xl flex-col space-y-5 text-base font-medium text-white xl:text-lg">
          <span>
            Итоговая стоимость разработки интернет-магазина складывается от
            требований заказчика выясненные на этапе обсуждения. При расчёте
            конечной стоимости учитываются сложность дизайна и функционала
            (интеграция с 1С, подключение корпоративного портала и т.д.).
          </span>

          <strong>Стоимость лицензии 1С Битрикс не входит в стоимость.</strong>
        </p>
      </div>
      <div className="mx-auto mt-10 grid w-full max-w-xl grid-cols-1 gap-7 md:mt-0 lg:max-w-full lg:grid-cols-3 lg:gap-0">
        {priceList.map((item, i) => (
          <PriceListBox item={item} index={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PriceBlock;
