import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const POST = async (req) => {

  const data = await req.json();
  console.log("datapass",data.password)
  if (!data.email || !data.password){
    NextResponse.json({
      message: "Please input email and password",
      date: new Date().toISOString(),
    });
    return null;
  }
   

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
    NextResponse.json({
      message: "Wrong password",
      date: new Date().toISOString(),
    });
    return null;
  }

  if (getUser === null) {
     NextResponse.json({
      message: "User not found",
      date: new Date().toISOString(),
    });
    return null;
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
