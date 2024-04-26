import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const POST = async (req) => {
  const data = await req.json();
  if (!data.email || !data.password)
    return NextResponse.json({
      message: "Please input email and password",
      date: new Date().toISOString(),
    });

  const getUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  //check password
  const passwordsMatch = await bcrypt.compare(
    data.password,
    getUser.hashedPassword
  );

  if (!passwordsMatch) {
    return NextResponse.json({
      message: "Wrong password",
      date: new Date().toISOString(),
    });
  }

  if (getUser === null) {
    return NextResponse.json({
      message: "User not found",
      date: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    message: "Logged In. Welcome",
    payload: {
        id : getUser.id,
        image: getUser.image,
        name : getUser.name,
        email: getUser.email,
        createdAt: getUser.createdAt,
        updatedAt : getUser.updatedAt
    },
    date: new Date().toISOString(),
  });
};

// export const POST = async (req)=> {
//     const data = await req.json();
//     const createUser = await prisma.user.create({
//         data:{
//             ...data
//         }
//     })

//     return NextResponse.json({
//         message: "User created Successfully",
//         payload: createUser,
//         date: new Date().toISOString()
//     })
// }
