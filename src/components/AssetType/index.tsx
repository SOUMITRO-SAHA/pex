"use client";
import PrimaryButton from "@/common/Button";
import InputBox from "@/common/Input/InputBox.Component";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import {
  Office,
  OfficeLarge1,
  Rent,
  RentalLarge1,
} from "../../../public/images";
import AssetTypeCard from "./AssetTypeCard.Component";
import { EmailOptions, sendQuickMail } from "@/lib/mail_sender";
import { toast } from "react-toastify";

export interface FormDataType {
  name: string;
  phoneNumber: string;
  budget: string;
}

const AssetType: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const initialState = {
    name: "",
    phoneNumber: "+91",
    budget: "",
  };
  const [formData, setFormData] = useState<FormDataType>(initialState);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formData.name && formData.phoneNumber) {
        const mailOption: EmailOptions = {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          budget: formData.budget,
        };

        const { data } = await sendQuickMail(mailOption);

        if (data.success) {
          toast.success(data.message);
          setFormData(initialState);
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white mt-4 md:mt-8 lg:mt-16 py-10">
      <div className="title text-center mb-10">Choose your Asset Type</div>
      {/* Option Type */}
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center gap-5 md:gap-12 items-center">
          <AssetTypeCard
            id={1}
            label="Retail"
            icon={Rent}
            state={selectedTab}
            onClick={() => setSelectedTab(1)}
          />
          <AssetTypeCard
            id={2}
            label="Office"
            icon={Office}
            state={selectedTab}
            onClick={() => setSelectedTab(2)}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl mt-8 lg:mt-12 border p-5 lg:p-16 rounded-2xl bg-blue-1 text-white">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-12 xxl:gap-20">
          {/* Form */}
          <form className="order-2 md:order-none col-span-full grid grid-cols-12 gap-5 md:gap-10 md:col-span-6 overflow-hidden text-sm md:text-base">
            {/* Name */}
            <div className="col-span-full flex flex-col gap-2 ">
              <div>Name</div>
              <InputBox
                type="text"
                name="name"
                placeholder="Type Name"
                state={formData?.name}
                setState={setFormData}
              />
            </div>

            {/* Phone Number */}
            <div className="col-span-full md:col-span-6">
              <div>Phone Number</div>
              <InputBox
                type="text"
                name="phoneNumber"
                placeholder="Type Phone Number"
                state={formData?.phoneNumber}
                setState={setFormData}
              />
            </div>

            {/* Budget */}
            <div className="col-span-full md:col-span-6">
              <div>Budget</div>
              <InputBox
                type="text"
                name="budget"
                placeholder="Type Name"
                state={formData?.budget}
                setState={setFormData}
              />
            </div>

            {/* Button */}
            <div className="col-span-full md:col-span-4">
              <PrimaryButton
                label="Submit"
                className={cn("w-full")}
                onClick={handleSubmit}
                loading={loading}
              />
            </div>
          </form>

          {/* Image */}
          <div className="col-span-full w-full md:col-span-6 overflow-hidden">
            <div className="w-full rounded-2xl shadow flex justify-center items-center object-fill">
              {selectedTab === 1 && (
                <Image
                  src={RentalLarge1}
                  alt="Retail Image"
                  className="object-contain rounded-2xl h-[10rem] md:h-[20rem]"
                />
              )}
              {selectedTab === 2 && (
                <Image
                  src={OfficeLarge1}
                  alt="Office Image"
                  className="object-contain rounded-2xl h-[10rem] md:h-[20rem]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetType;
