import PrimaryButton from "@/common/Button";
import CrossButton from "@/common/Button/CrossButton.Component";
import InputBox from "@/common/Input/InputBox.Component";
import { sendQuickMail } from "@/lib/mail_sender";
import Image from "next/image";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

interface MobileMenuProps {
  menuItems?: [];
  socials?: [];
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
  phoneNumber: string;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems,
  socials,
  state,
  setState,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "+91",
  });
  const portalContainer = document.getElementById("portal-container");

  const listStyle =
    "hover:border-b-2 hover:border-white leading-5 w-full cursor-pointer";

  if (!portalContainer) {
    return null;
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (formData.name && formData.phoneNumber) {
        const postData = {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
        };
        const { data } = await sendQuickMail(postData);

        if (data.success) {
          toast.success(data.message);
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <section className="absolute top-0 left-0 w-screen h-screen bg-secondary-1 z-10 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-2 right-4">
        <CrossButton onClick={() => setState(!state)} />
      </div>

      {/* Give a Quick Connect Form */}

      <div className="mt-8 my-6 flex flex-col gap-10 text-white w-[75%]">
        <div className="flex justify-center items-center">
          <Image
            src={"/favicon.jpg"}
            alt={"pex-logo-small"}
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-5 w-full">
          {/* Name */}
          <div>
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
          <div>
            <div>Phone Number</div>
            <InputBox
              type="text"
              name="phoneNumber"
              placeholder="Type Phone Number"
              state={formData?.phoneNumber}
              setState={setFormData}
            />
          </div>
        </div>

        {/* Button */}
        <PrimaryButton
          label="Query Now"
          onClick={handleSubmit}
          loading={loading}
        />
      </div>
    </section>,
    portalContainer
  );
};

export default MobileMenu;
