import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  Investment1,
  Investment2,
  Investment3,
  Investment4,
} from "../../../public/investment-images";

const InvestmentJourney: React.FC = () => {
  const generalTabStyle = "bg-white-3 bg-opacity-50 rounded-full px-10 p-2";
  const active = "bg-orange-1 bg-opacity-90 ring";
  return (
    <section className="bg-blue-1 section text-white">
      <div className="flex flex-col auto_gap justify-center items-center">
        <div className="title">Your investment journey</div>
        <div className="line-b-bar" />
      </div>
      <div className="flex justify-center items-center mt-6">
        {/* Tab Section */}
        <div className="gap-10 capitalize flex justify-center items-center text-center">
          <div className={cn(generalTabStyle, active, "text-sm p-2 px-5")}>
            Raj&apos;s story
          </div>
          <div className={cn(generalTabStyle, "text-sm p-2 px-5")}>
            Ankita&apos;s story
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="bg-white w-full container mx-auto max-w-7xl rounded-2xl text-black mt-8 lg:mt-16 md:mt-8 p-8 lg:p-10 overflow-x-auto relative">
        {/* Progress Bar */}
        <div className="absolute bottom-[5rem] md:left-12 lg:left-16 md:bottom-20 lg:bottom-24 w-[90%] mx-auto h-1 bg-gray-500 flex justify-start items-center z-1">
          <div className="h-4 w-4 bg-orange-1 rounded-full " />
        </div>

        <div className="relative flex lg:justify-between items-baseline gap-10 overflow-y-hidden overflow-x-auto journey-container">
          {/* Item 1 */}
          <div className="flex flex-col gap-5 lg:gap-12 min-w-[150px]">
            <div className="p-3">
              <Image src={Investment1} alt="" />
            </div>
            <div className="text-center text-sm text-gray-1">
              Invested 35 Lacs 2019
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-5 lg:gap-12  min-w-[150px] ">
            <div className="p-3">
              <Image src={Investment2} alt="" className="object-contain" />
            </div>
            <div className="text-center text-sm text-gray-1">
              At possession 50 Lacs
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-5 lg:gap-12 min-w-[150px]">
            <div className="">
              <Image src={Investment3} alt="" className="object-contain" />
            </div>
            <div className="text-center text-sm text-gray-1">
              After 3 years Liquidate 60 Lacs
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-5 lg:gap-12  min-w-[150px]">
            <div className="p-3">
              <Image src={Investment4} alt="" />
            </div>
            <div className="text-center text-sm text-gray-1">ROI 23%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentJourney;
