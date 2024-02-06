import { TheWhyReasons, brandName, whyReasonArray } from "@/assets";
import { cn } from "@/lib/utils";
import React from "react";
import TheWhyCard from "./TheWhyCard.Component";

interface TheWhyProps {
  //Props
}

const TheWhy: React.FC<TheWhyProps> = () => {
  const renderCard = (item: TheWhyReasons) => {
    const { id, icon, title, subtitle } = item;
    return (
      <TheWhyCard
        key={id}
        id={id}
        icon={icon}
        title={title}
        subtitle={subtitle}
        className={cn("mx-auto col-span-6 md:col-span-4 lg:col-span-3")}
      />
    );
  };
  return (
    <section className="bg-white ">
      <div className="section">
        <div className="flex flex-col justify-center items-center auto_gap container mx-auto max-w-7xl">
          <div className="title">Why to Choose {brandName}</div>
          <div className="line-b-bar" />
        </div>

        <div className="lg:container lg:mx-auto lg:max-w-7xl">
          <div className="bg-orange-1 bg-opacity-10 rounded-2xl mt-8 lg:mt-12 w-full  mx-auto max-w-7xl lg:p-10">
            <div className="grid grid-cols-12 md:justify-normal gap-2 md:gap-10 p-1 py-2">
              {whyReasonArray?.map((item) => renderCard(item))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWhy;
