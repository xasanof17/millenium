"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { works } from "@/constants/works";
import Link from "next/link";

const CarouselSlider = () => {
  return (
    <div className="mx-auto w-full lg:max-w-3xl xl:max-w-4xl">
      <Carousel>
        <CarouselContent className="h-[280px] rounded-2xl lg:h-[500px]">
          {works.map(({ title, image, code }, i) => (
            <CarouselItem
              key={i}
              className="relative h-full w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt="img"
                fill
                className="rounded-2xl object-contain"
              />
              <Link
                href={code[1]}
                target={"_blank"}
                className="absolute bottom-3 block w-full rounded-b-2xl bg-white py-2 text-center text-lg font-bold text-primaryColor invert-0 backdrop-blur-md md:text-2xl lg:bottom-0"
              >
                {title}
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
