import { NextResponse } from "next/server";
import { MailOptions } from "nodemailer/lib/json-transport";
import { mailOptions, transport } from "../../../../config/nodemailer";

type ResponseData = {
  success: boolean;
  message: string;
  body?: any;
};

// export function GET() {
//   return NextResponse.json({
//     message: "Hello From Email",
//   });
// }
export interface DataFormat extends MailOptions {
  name?: string;
  phoneNumber: string;
  address?: string;
  email?: string;
  budget?: string;
  otherUserInfo?: string;
}

export async function POST(req: Request) {
  try {
    const data: DataFormat = await req.json();

    if (data.email || data.phoneNumber) {
      const res = await transport.sendMail(
        {
          ...mailOptions,
          subject: "User Query",
          text: "This is the query form the User",
          html: `
          <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">
            <h1 style="color: #007BFF; text-align: center;">User Query</h1>
            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${data.phoneNumber}</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin-bottom: 10px;"><strong>Budget:</strong> ${data.budget}</p>
            <p style="margin-bottom: 10px;"><strong>Address:</strong> ${data.address}</p>
          </body>
        
        `,
        },
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Email Send Successfully");
          }
        }
      );

      return NextResponse.json({
        success: true,
        message: "Successfully send the email",
        data: res,
      });
    }
  } catch (error: any) {
    console.error("Error handling user query:", error);
    return NextResponse.json({
      success: false,
      message: error,
    });
  }
}
