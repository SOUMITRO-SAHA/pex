"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CarouselOptions } from "@/assets/constant";

interface PropertyCardProps {
  // Props
}

const PropertyCard: React.FC<PropertyCardProps> = () => {
  return (
    <section className="section bg-blue-1">
      <div className="w-full flex flex-col gap-10 container mx-auto max-w-7xl">
        <div className="mx-auto justify-center items-center text-white flex flex-col auto_gap">
          <div className="title">Our Properties</div>
          <div className="line-b-bar" />
        </div>

        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Autoplay, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full productSlider"
        >
          {CarouselOptions?.map(
            ({ id, image1, image2, name, investment, location, rental }) => (
              <SwiperSlide key={id}>
                <div className="relative bg-white w-[20rem] overflow-hidden rounded cursor-pointer">
                  {/* Image */}
                  <div className="">
                    <Image
                      src={image1}
                      alt={name}
                      className="absolute left-2 top-2 w-20 bg-white p-1"
                      title={name}
                    />
                    <Image
                      src={image2}
                      alt={name}
                      className="rounded-t object-fill w-full h-[200px]"
                    />
                  </div>

                  {/* Information */}
                  <div className="p-5">
                    <h3 className="font-bold text-xl">{name}</h3>
                    <h5 className="">{location}</h5>
                    <div className="mt-1 p-3 bg-white-2 rounded">
                      {renderInfoRow("Rental", rental)}
                      {renderInfoRow("Investment", investment)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

const renderInfoRow = (label: string, value: string) => (
  <div className="flex justify-between items-center" key={label}>
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default PropertyCard;
