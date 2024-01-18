import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import {
  FaChartLine,
  FaClipboardCheck,
  FaClock,
  FaFileAlt,
  FaFileSignature,
  FaGavel,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  ApartmentIcon,
  BrandIcon,
  DealIcon,
  IntellectualPropertyIcon,
} from "../../public/images";

export const brandName = "PEX";
export const phoneNumber = 9832098320;
export const email = "pex@gmail.com";

export interface CardItem {
  id: number;
  specialMessage: string;
  icon: string | StaticImageData;
  message: string;
}
export const cardContant: CardItem[] = [
  {
    id: 1,
    specialMessage: "",
    icon: DealIcon,
    message: "250+ Pre-Leased Properties",
  },
  {
    id: 2,
    specialMessage: "",
    icon: BrandIcon,
    message: "50+ Operational Brands",
  },
  {
    id: 3,
    specialMessage: "",
    icon: IntellectualPropertyIcon,
    message: "15 Year Lease Signed",
  },
  {
    id: 4,
    specialMessage: "",
    icon: ApartmentIcon,
    message: "Premium Retail Spaces",
  },
];

export interface TheWhyReasons {
  id: number;
  icon: IconType;
  title: string;
  subtitle: string;
}

export const whyReasonArray: TheWhyReasons[] = [
  {
    id: 1,
    icon: FaChartLine,
    title: "Investment analysis",
    subtitle: "Detailed analysis to make informed investment decisions.",
  },
  {
    id: 2,
    icon: FaFileAlt,
    title: "Depositories for all the critical documents",
    subtitle: "Secure storage for important property-related documents.",
  },
  {
    id: 3,
    icon: FaClipboardCheck,
    title: "Due diligence reports",
    subtitle: "Thorough examination and validation of property details.",
  },
  {
    id: 4,
    icon: FaFileSignature,
    title: "Paperwork Assistance",
    subtitle: "Guidance and support in handling necessary paperwork.",
  },
  {
    id: 5,
    icon: FaGavel,
    title: "Litigation Support",
    subtitle: "Legal support in case of property-related legal matters.",
  },
  {
    id: 6,
    icon: FaClock,
    title: "Real-time updates",
    subtitle: "Stay informed with up-to-date information on your investment.",
  },
  {
    id: 7,
    icon: FaKey,
    title: "Leasing Support",
    subtitle: "Assistance in leasing your property for optimal returns.",
  },
  {
    id: 8,
    icon: FaSignOutAlt,
    title: "Exit Support",
    subtitle: "Support and guidance when exiting your property investment.",
  },
];

export interface QnaType {
  id: number;
  question: string;
  answer: string;
}

export const QnaArray = [
  {
    id: 1,
    question: "Does my ownership change when I buy through PEX?",
    answer:
      "No, your ownership does not change. Our process actually enhances the documentation and proceedings.",
  },
  {
    id: 2,
    question: "Does PEX charge me anything?",
    answer:
      "No, we don’t take money from our customers for any service we provide. Rather, we charge the builder a certain percentage of the transaction as our commission.",
  },
  {
    id: 3,
    question: "What price do I get if I sell my property through PEX Liquid?",
    answer:
      "PEx Liquid is an automated expertised secondary sale program wherein we target to reach maximum customers possible who would be interested in a secondary purchase with displaying the right highlights & benefits of the property.",
  },
];
