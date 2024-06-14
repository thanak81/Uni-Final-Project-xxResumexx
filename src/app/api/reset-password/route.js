import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);
const prisma = new PrismaClient();

export const POST = async (req) => {
  const { email } = await req.json();
  console.log(email);

  const checkEmail = prisma.user.findUnique({
    where: {
      email,
    },
  });
  console.log(checkEmail)
  if (!checkEmail) {
    NextResponse.json({
        message: "Email does not exist",
        data: new Date().toISOString(),
      });
      return null;
  } 
  const sendEmail = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'xxResume Reset Passsword',
    html: `<div>Your otps code is ${Math.floor(100000 + Math.random() * 900000)} </div>`
  });

  console.log(sendEmail)

  return NextResponse.json({
    message: "OTP sent to your email",
    payload: {
        email : email,
        code: sendEmail
    },
    Date: new Date().toISOString(),
    status: 200,
  });
};
