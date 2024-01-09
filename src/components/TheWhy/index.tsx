import { brandName, whyReasonArray } from "@/assets";
import { StaticImageData } from "next/image";
import React from "react";
import TheWhyCard from "./TheWhyCard.Component";
import { cn } from "@/lib/utils";

interface TheWhyProps {
  //Props
}

const TheWhy: React.FC<TheWhyProps> = () => {
  return (
    <section className="bg-white container mx-auto max-w-7xl">
      <div className="py-24 w-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="text-2xl font-semibold">
            Why to Choose {brandName}
          </div>
          <div className="line-b-bar" />
        </div>

        <div className="bg-orange-1 bg-opacity-10 rounded-2xl mt-12 w-full">
          <div className="grid grid-cols-12 md:justify-normal gap-5 md:gap-10 p-8 ">
            {whyReasonArray?.map(({ id, icon, title, subtitle }) => (
              <TheWhyCard
                key={id}
                id={id}
                icon={icon}
                title={title}
                subtitle={subtitle}
                className={cn(
                  "mx-auto col-span-full sm:col-span-6 md:col-span-4 xl:col-span-3"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWhy;
