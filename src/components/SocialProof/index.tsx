import { brandName } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { HalfStarIcon, StarIcon } from "../../../public/icon";

const SocialProof: React.FC = () => {
  return (
    <section className="bg-socialProof bg-left-top bg-no-repeat bg-white-2 py-24">
      <div className="container mx-auto max-w-7xl grid grid-cols-12">
        {/* Info */}
        <div className="col-span-full flex gap-5 justify-center items-center flex-col">
          <div className="text-2xl font-semibold">We are Rated</div>
          <div className="text-3xl flex gap-2 items-center">
            <Image src={StarIcon} alt="" className="w-10 h-10" />
            <Image src={StarIcon} alt="" className="w-10 h-10" />
            <Image src={StarIcon} alt="" className="w-10 h-10" />
            <Image src={StarIcon} alt="" className="w-10 h-10" />
            <Image src={HalfStarIcon} alt="" className="w-14 h-14" />
          </div>
        </div>

        {/* Cards */}
        <div className="col-span-full w-full grid grid-cols-12 gap-4 mt-12">
          <SocialProofFeaturedCard line1="1000+" line2="Registered Customers" />
          <SocialProofFeaturedCard line1="500+" line2="Premium Properties" />
          <SocialProofFeaturedCard line1="1200+" line2="Rent Properties" />
        </div>

        {/* Message */}
        <div className="col-span-full text-center mt-10 text-gray-1 font-semibold text-lg">
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
}
const SocialProofFeaturedCard: React.FC<SocialProofFeaturedCardProps> = ({
  line1,
  line2,
}) => {
  return (
    <div className="col-span-6 md:col-span-4 bg-white py-12  md:py-24 px-10 rounded-xl flex flex-col gap-3 justify-center items-center">
      <div className="text-2xl text-blue-1 font-bold">{line1}</div>
      <div className="text-orange-1 text-lg text-center">{line2}</div>
    </div>
  );
};

export default SocialProof;
