import Image from "next/image";
import { TypographyH2 } from "./ui/typography";
import { steps } from "@/utils/data";
import classnames from "classnames";

type Block = {
  id: number;
  title: string;
  text: string | string[];
  image: string | null;
  imageHeight?: number;
  sm?: boolean;
};

const Block = ({ id, title, text, image, imageHeight, sm }: Block) => {
  return (
    <div className="flex w-full max-w-2xl flex-col rounded-lg bg-white px-4 py-5 shadow-xl dark:bg-primaryColor md:px-9 md:py-8 xl:max-w-full">
      <div className="flex items-center justify-between border-b-2 pb-5 dark:border-slate-400 md:pb-7">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-xl font-bold text-white md:h-10 md:w-10 md:text-2xl">
          {id}
        </div>
        <h3 className="flex-1 pl-4 text-start text-lg font-bold text-[#2A2367] dark:text-white md:pl-0 md:text-center md:text-2xl">
          {title}
        </h3>
      </div>
      <div className="my-5 flex flex-col space-y-3 text-base font-medium text-[#2A2367] dark:text-white">
        {typeof text === "string" ? (
          <p>{text}</p>
        ) : (
          text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        )}
      </div>
      {image && (
        <div
          className={classnames(
            "relative h-full w-full",
            sm && "min-h-[480px]",
            !sm && "min-h-[770px] md:min-h-[400px]",
          )}
        >
          <Image src={image} alt={title} fill />
        </div>
      )}
    </div>
  );
};

const Stepper = () => {
  return (
    <section id="steps" className="my-10">
      <div className="container flex flex-col">
        <TypographyH2 className="mb-7 text-start text-2xl font-bold text-[#2A2367] dark:text-white sm:mb-10 sm:text-3xl md:mb-16 md:text-4xl">
          Этапы
        </TypographyH2>
        <div className="grid-cols-3 sm:mx-10 lg:mx-auto lg:grid xl:grid-cols-2 xl:gap-10">
          <ul className="col-span-1 mb-10 flex flex-col text-base font-semibold text-primaryColor dark:text-white md:text-lg lg:mb-0">
            <li>01. Маркетинговый анализ бизнеса</li>
          </ul>
          <div className="col-span-2 flex flex-col space-y-7 md:space-y-10 xl:col-span-1">
            {steps.map(({ title, text, image, height, sm }, i) => (
              <Block
                key={i}
                id={i + 1}
                title={title}
                text={text}
                image={image ? image : null}
                imageHeight={height}
                sm={sm}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
