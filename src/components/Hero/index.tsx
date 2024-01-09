import Image from "next/image";
import React from "react";
import { Banner1 } from "../../../public/images";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  imageURL?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageURL }) => {
  return (
    <section className="md:h-[480px] lg:h-[650px] bg-white-2 py-5 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className={cn("grid grid-cols-12 gap-6 md:gap-3 ")}>
          {/* Info */}
          <div className="col-span-full text-center md:col-span-6 flex flex-col justify-center items-center gap-3">
            <h1 className="text-base md:text-xl lg:text-3xl">{title}</h1>
            <p className="text-xs md:text-base lg:text-xl text-gray-500">
              {subtitle}
            </p>
          </div>

          {/* Image */}
          <div className="col-span-full md:col-span-6 flex justify-center items-center">
            <Image
              src={imageURL ? imageURL : Banner1}
              alt={title}
              className="mx-auto w-[166px] h-[150px] md:w-[216px] md:h-[200px] xl:w-[350px] xl:h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
