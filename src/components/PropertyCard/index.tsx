import { CarouselOptions } from "@/assets/constant";
import MainCarousel from "@/common/Carousel";
import React from "react";

interface PropertyCardProps {
  //Props
}

const PropertyCard: React.FC<PropertyCardProps> = () => {
  return (
    <section className="py-20 bg-blue-1 ">
      <div className="w-full flex flex-col gap-10 container mx-auto max-w-7xl">
        <div className="mx-auto justify-center items-center text-white flex flex-col gap-3">
          <div className="text-2xl">Our Properties</div>
          <div className="line-b-bar" />
        </div>

        <div className="col-span-8">
          <MainCarousel options={CarouselOptions} />
        </div>
      </div>
    </section>
  );
};

export default PropertyCard;
