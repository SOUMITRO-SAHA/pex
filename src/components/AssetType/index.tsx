"use client";
import PrimaryButton from "@/common/Button";
import InputBox from "@/common/Input/InputBox.Component";
import { EmailOptions, sendQuickMail } from "@/lib/mail_sender";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Office, Rent } from "../../../public/images";
import AssetTypeCard from "./AssetTypeCard.Component";

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
      <div className="title text-center mb-5">Choose your Asset Type</div>
      {/* Option Type */}
      <div className="w-full">
        <div className="flex justify-between lg:justify-center gap-5 md:gap-12 items-center">
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

      <div className="bg-pattern1 container mx-auto max-w-7xl mt-5 lg:mt-12 border p-5 lg:p-16 rounded-2xl bg-blue-1 text-white">
        {/* Form */}
        <form className="order-2 md:order-none col-span-full grid grid-cols-12 gap-5 md:gap-10 md:col-span-6 overflow-hidden text-sm md:text-base">
          {/* Name */}
          <div className="col-span-full lg:col-span-4 flex flex-col">
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
          <div className="col-span-full lg:col-span-4">
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
          <div className="col-span-full lg:col-span-4 flex flex-col gap-1">
            <div>Budget</div>
            <div className="border-gray-500 radio-group text-blue-1">
              <label
                className="rounded-left border-r flex items-center relative "
                onClick={(e) => {
                  setFormData((prev) => ({ ...prev, budget: "30" }));
                }}
              >
                <div className="mx-auto custom-label">
                  <span>&lt;30 Lacs</span>
                </div>
              </label>
              <label
                className="flex items-center"
                onClick={(e) => {
                  setFormData((prev) => ({ ...prev, budget: "30 - 60" }));
                }}
              >
                <div className="mx-auto custom-label">
                  <span>30 - 60 Lacs</span>
                </div>
              </label>
              <label
                className="rounded-right border-l flex items-center"
                onClick={(e) => {
                  setFormData((prev) => ({ ...prev, budget: "60+" }));
                }}
              >
                <div className="mx-auto custom-label">
                  <span>60+ Lacs</span>
                </div>
              </label>
            </div>
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
      </div>
    </section>
  );
};

export default AssetType;
