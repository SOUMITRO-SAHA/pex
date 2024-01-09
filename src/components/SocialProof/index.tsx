import { brandName } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { HalfStarIcon, StarIcon } from "../../../public/icon";

const SocialProof: React.FC = () => {
  return (
    <section className="bg-socialProof bg-left-top bg-no-repeat bg-white-2 section">
      <div className="container mx-auto max-w-7xl grid grid-cols-12">
        {/* Info */}
        <div className="col-span-full flex gap-5 justify-center items-center flex-col">
          <div className="title">We are Rated</div>
          <div className="text-base flex gap-2 items-center">
            <Image src={StarIcon} alt="" className="w-6 h-6 lg:w-10 lg:h-10" />
            <Image src={StarIcon} alt="" className="w-6 h-6 lg:w-10 lg:h-10" />
            <Image src={StarIcon} alt="" className="w-6 h-6 lg:w-10 lg:h-10" />
            <Image src={StarIcon} alt="" className="w-6 h-6 lg:w-10 lg:h-10" />
            <Image
              src={HalfStarIcon}
              alt=""
              className="w-9 h-9 lg:w-14 lg:h-14"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="col-span-full w-full grid grid-cols-12 gap-4 mt-12">
          <SocialProofFeaturedCard
            line1="1000+"
            line2="Registered Customers"
            className="col-span-4 md:col-span-4"
          />
          <SocialProofFeaturedCard
            line1="500+"
            line2="Premium Properties"
            className="col-span-4 md:col-span-4"
          />
          <SocialProofFeaturedCard
            line1="1200+"
            line2="Rent Properties"
            className="col-span-4 md:col-span-4"
          />
        </div>

        {/* Message */}
        <div className="col-span-full text-center mt-10 text-gray-1 font-semibold text-sm md:text-lg">
          {brandName} is one of the india&apos;s leading Property Exchange
          Platform
        </div>
      </div>
    </section>
  );
};

interface SocialProofFeaturedCardProps {
  line1: string;
  line2: string;
  className?: string;
}
const SocialProofFeaturedCard: React.FC<SocialProofFeaturedCardProps> = ({
  line1,
  line2,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white py-6  md:py-24 px-10 rounded-xl flex flex-col gap-3 justify-center items-center",
        className
      )}
    >
      <div className="tex-base lg:text-2xl text-blue-1 font-bold">{line1}</div>
      <div className="text-orange-1 text-sm md:text-lg lg:text-xl text-center">
        {line2}
      </div>
    </div>
  );
};

export default SocialProof;
