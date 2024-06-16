const { PrismaClient } = require("@prisma/client");
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (req) => {
  const data = await req.json();
  console.log("useracc",data)
  const session = await getServerSession(authOptions);
  console.log("hey",session)
  const updateData = await prisma.user.update({
    where: {
      id: session.user.payload.id,
    },
    data: {
      name: data.name,
      email: data.email
    },
  });
  return NextResponse.json({
    message: "User updated succeessfully",
    payload: {
      id : updateData.id,
      image: updateData.image,
      name :updateData.name,
      email: updateData.email,
      updatedAt : updateData.updatedAt
    },
    date: new Date().toISOString(),
    status: 200,
  });
};
