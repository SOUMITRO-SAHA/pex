"use clinet";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface ImageCarouselProps {
  images: [string | StaticImageData, string | StaticImageData];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center items-center w-full h-full rounded overflow-hidden">
              <Image
                src={img}
                alt={`${title}__${index}`}
                className="object-contain h-[80%] w-[100%] rounded-xl shadow-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
