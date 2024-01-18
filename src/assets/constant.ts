import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import {
  CultfitCard1,
  CultfitCard2,
  HaldiramCard1,
  HaldiramCard2,
  KFCCard1,
  KFCCard2,
  RaymondCard1,
  RaymondCard2,
  RelianceDegitalCard1,
  RelianceDegitalCard2,
  RelianceTrendsCard1,
  RelianceTrendsCard2,
  StarbucksCard1,
  StarbucksCard2,
} from "../../public/images";

export const getOverlayStyle = (isOpen = false) => {
  const overlayClasses = cn(
    isOpen
      ? "h-screen w-screen fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-50"
      : "hidden"
  );

  return overlayClasses;
};

export const getPopupStyle = (isOpen = false) => {
  const popupClasses = cn(
    isOpen
      ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md w-[400px]"
      : "hidden"
  );

  return popupClasses;
};

export interface CarouselOptionsType {
  id: number;
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  name: string;
  location: string;
  investment: string;
  rental: string;
}

export const CarouselOptions: CarouselOptionsType[] = [
  {
    id: 1,
    image1: KFCCard1,
    image2: KFCCard2,
    name: "KFC",
    location: "Techzone-4, Noida Extension",
    investment: "3.75 Cr",
    rental: "1,68,000 Lacs",
  },
  {
    id: 2,
    image1: HaldiramCard1,
    image2: HaldiramCard2,
    name: "Haldirams",
    location: "Sector 75, Noida",
    investment: "2.83 Cr",
    rental: "2.10 Lacs",
  },
  {
    id: 3,
    image1: CultfitCard1,
    image2: CultfitCard2,
    name: "Cultfit",
    location: "Techzone-4, Noida Extension",
    investment: "2.57 Cr",
    rental: "1.14 Lacs",
  },
  {
    id: 4,
    image1: StarbucksCard1,
    image2: StarbucksCard2,
    name: "Starbucks",
    location: "Sector 75, Noida",
    investment: "2.86 Cr",
    rental: "1.97 Lacs",
  },
  {
    id: 5,
    image1: RelianceDegitalCard2,
    image2: RelianceDegitalCard1,
    name: "Reliance Digital",
    location: "Sector 133, Noida",
    investment: "3.64 Cr",
    rental: "2.18 Lacs",
  },
  {
    id: 6,
    image1: RelianceTrendsCard1,
    image2: RelianceTrendsCard2,
    name: "Reliance Trends",
    location: "Sector 75, Noida",
    investment: "3.11 Cr",
    rental: "2.10 Lacs",
  },
  {
    id: 7,
    image1: RaymondCard1,
    image2: RaymondCard2,
    name: "Raymond",
    location: "Sector 75, Noida",
    investment: "2.34 Cr",
    rental: "1.48 Lacs",
  },
  // {
  //   id: 8,
  //   image1: "",
  //   image2: "",
  //   name: "Unicorn",
  //   location: "Sector 75, Noida",
  //   investment: "2.78 Cr",
  //   rental: "1.95 Lacs",
  // },
];
