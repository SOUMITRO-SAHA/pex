import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { J1, J2, J3, J4 } from "../../../public/images";

const InvestmentJourney: React.FC = () => {
  const generalTabStyle = "bg-white-3 bg-opacity-50 rounded-full px-10 p-2";
  const active = "bg-orange-1 bg-opacity-90 ring";
  return (
    <section className="bg-blue-1 py-24 text-white pb-28">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-center text-3xl font-semibold capitalize">
          Your investment journey
        </div>
        <div className="line-b-bar" />
      </div>
      <div className="flex justify-center items-center mt-6">
        {/* Tab Section */}
        <div className="gap-10 capitalize flex flex-col mt-6 md:my-3 md:flex-row justify-center items-center text-center">
          <div className={cn(generalTabStyle, active, "p-2 px-10 w-[200px]")}>
            Raj&apos;s story
          </div>
          <div className={cn(generalTabStyle, "p-2 px-10 w-[200px]")}>
            Ankita&apos;s story
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="bg-white w-full container mx-auto max-w-7xl rounded-2xl text-black mt-16 md:mt-8 p-10 overflow-x-auto">
        <div className="relative flex justify-between gap-10 overflow-x-auto">
          {/* Item 1 */}
          <div className="flex flex-col gap-12 min-w-56">
            <Image src={J1} alt="" className=" h-44 bg-blue-500 w-full" />
            <div className="text-center">Invested 35 Lacs 2019</div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-12 min-w-56">
            <Image src={J2} alt="" className=" h-44 bg-blue-500 w-full" />
            <div className="text-center">At possession 50 Lacs</div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-12 min-w-56">
            <Image src={J3} alt="" className=" h-44 bg-blue-500 w-full" />
            <div className="text-center">After 3 years Liquidate 60 Lacs</div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-12 min-w-56">
            <Image src={J4} alt="" className=" h-44 bg-blue-500 w-full" />
            <div className="text-center">ROI 23%</div>
          </div>

          {/* Item 5 */}
          {/* <div className="flex flex-col gap-12 min-w-56">
            <Image src="" alt="" className=" h-44 bg-blue-500 w-full" />
            <div className="text-center">
              <h4>Hear what Raj has to say:</h4>
              <p className="text-gray-600">
                “PEx has made the entire process incredibly easy”
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default InvestmentJourney;
