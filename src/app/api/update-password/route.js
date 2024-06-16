const { PrismaClient } = require("@prisma/client");
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const PUT = async (req) => {
  const data = await req.json();
  const getUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  const passwordMatch = await bcrypt.compare(
    data.password,
    getUser.hashedPassword
  );

  if (!passwordMatch) {
    NextResponse.json({
      message: "Wrong password",
      date: new Date().toISOString(),
    });
    return null;
  }
  const hashedPassword = await bcrypt.hash(data.password,10)
  const updatePassword = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      hashedPassword,
    },
  });
  return NextResponse.json({
    message: "User password succeessfully",
    payload: updatePassword,
    date : new Date().toISOString()

  })
};
