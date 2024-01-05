import { getOverlayStyle, getPopupStyle } from "@/assets/constant";
import PrimaryButton from "@/common/Button";
import CloseButton from "@/common/Button/CloseButton.Component";
import InputBox from "@/common/Input/InputBox.Component";
import { EmailOptions, sendQuickMail } from "@/lib/mail_sender";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface QuickQueryModalsProps {
  isOpen: boolean;
  onClose: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
type FormData = {
  name: string;
  phoneNumber: string;
};

const QuickQueryModals: React.FC<QuickQueryModalsProps> = ({
  isOpen,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "+91",
  });

  const handlePopupQuerySubmit = async () => {
    setLoading(true);
    try {
      if (formData.name && formData.phoneNumber) {
        const mailOption: EmailOptions = {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
        };
        const { data } = await sendQuickMail(mailOption);

        if (data?.success) {
          toast.success(data?.message);
          onClose();
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn(getOverlayStyle(isOpen))}>
      <div
        className={cn(
          getPopupStyle(isOpen),
          "bg-blue-1 text-white rounded w-[450px]"
        )}
      >
        <CloseButton onClose={onClose} />
        <div className="">
          {/* Message */}
          <h3 className="text-2xl text-orange-1 font-semibold w-full">
            Enquire Now!!
          </h3>
        </div>

        <div className="mt-8 my-6 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
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
            onClick={handlePopupQuerySubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default QuickQueryModals;
