import axios from "axios";

export interface EmailOptions {
  name: string;
  phoneNumber: string;
  budget?: string;
  address?: string;
  email?: string;
  otherUserInfo?: string;
}

export const sendQuickMail = async (options: EmailOptions): Promise<any> => {
  const data = JSON.stringify(options);
  return await axios.post("/api/email", data);
};
