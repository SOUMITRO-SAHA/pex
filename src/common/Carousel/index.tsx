"use client";
import { CarouselOptionsType } from "@/assets/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface MainCarouselProps {
  options: CarouselOptionsType[];
  className?: string;
}

const MainCarousel: React.FC<MainCarouselProps> = ({ options }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="w-full select-none"
    >
      <CarouselContent className="flex justify-center items-start gap-5">
        {options?.map(
          ({ id, image1, image2, name, location, investment, rental }) => (
            <CarouselItem
              key={id}
              className="basis-full sm:basis-1/2 md:basis-1/3 relative"
            >
              <div className="p-1 w-full h-[15rem] flex justify-center items-center border-2 border-white rounded cursor-pointer relative group">
                {/* Image Container */}
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="overflow-hidden object-contain">
                    {/* <ImageCarousel images={[image1, image2]} title={title} /> */}
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl text-white font-bold">
                    {name}
                  </h3>
                </div>

                {/* Tooltip/Overlay */}
                <div className="hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 p-4 rounded text-white justify-center items-center flex-col">
                  <h3 className="text-base md:text-lg lg:text-2xl text-white font-semibold">
                    {name}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg">
                    Location: {location}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    Investment: {investment}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    Rental: {rental}
                  </p>
                </div>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className="text-orange-1 hover:text-white-2 -left-8 md:-left-9" />
      <CarouselNext className="text-orange-1 hover:text-white-2 text-2xl -right-8 md:-right-9" />
    </Carousel>
  );
};

export default MainCarousel;
